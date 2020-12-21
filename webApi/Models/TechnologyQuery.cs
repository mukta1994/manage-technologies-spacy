using System.Data;
using System.Threading.Tasks;
using MySqlConnector;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;

namespace WebApi.Models
{
    public class TechnologyQuery
    {
        public AppDb Db { get; }

        public TechnologyQuery(AppDb db)
        {
            Db = db;
        }


        // private void BindId(MySqlCommand cmd)
        // {
        //     cmd.Parameters.Add(new MySqlParameter
        //     {
        //         ParameterName = "@id",
        //         DbType = DbType.Int32,
        //         Value = Id,
        //     });
        // }

        // private void BindParams(MySqlCommand cmd)
        // {
        //     cmd.Parameters.Add(new MySqlParameter
        //     {
        //         ParameterName = "@name",
        //         DbType = DbType.String,
        //         Value = Name,
        //     });
        //     cmd.Parameters.Add(new MySqlParameter
        //     {
        //         ParameterName = "@description",
        //         DbType = DbType.String,
        //         Value = Description,
        //     });
        // }
     
        public async Task<Technology> FindOneAsync(int id)
        {
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"SELECT `Id`, `Name`, `Description` FROM `Technologies` WHERE `Id` = @id";
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@id",
                DbType = DbType.Int32,
                Value = id,
            });
            var result = await ReadAllAsync(await cmd.ExecuteReaderAsync());
            return result.Count > 0 ? result[0] : null;
        }

        public async Task<List<Technology>> LatestPostsAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
           // cmd.CommandText = @"SELECT `Id`, `Name`, `Description` FROM `Technologies` ORDER BY `Id` DESC LIMIT 10;";
            //return await ReadAllAsync(await cmd.ExecuteReaderAsync());
             cmd.CommandText = "get_technologies";
            cmd.CommandType = CommandType.StoredProcedure;
        return await ReadAllAsync(await cmd.ExecuteReaderAsync());

        }

         public async Task<List<Technology>> getSearchResults(string text)
        {
            
            using var cmd = Db.Connection.CreateCommand();
           // cmd.CommandText = @"SELECT `Id`, `Name`, `Description` FROM `Technologies` ORDER BY `Id` DESC LIMIT 10;";
            //return await ReadAllAsync(await cmd.ExecuteReaderAsync());
           //string text1= text.ToString().Replace("' '", "+");
            // string mystring = "+" + text.Replace(" ", " +") + "*";
             //string mystring = text.Replace(" ", "* ") + "*";


            cmd.CommandText = "search";

             cmd.Parameters.AddWithValue("@search", @text);
            //cmd.Parameters("@search").Direction = ParameterDirection.Input;

            cmd.CommandType = CommandType.StoredProcedure;
        return await ReadAllAsync(await cmd.ExecuteReaderAsync());

        }

        public async Task DeleteAllAsync()
        {
            using var txn = await Db.Connection.BeginTransactionAsync();
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"DELETE FROM `Technologies`";
            await cmd.ExecuteNonQueryAsync();
            await txn.CommitAsync();
        }

        private async Task<List<Technology>> ReadAllAsync(DbDataReader reader)
        {
            var posts = new List<Technology>();
            using (reader)
            {
                while (await reader.ReadAsync())
                {
                    var post = new Technology(Db)
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Description = reader.GetString(2),
                    };
                    posts.Add(post);
                }
            }
            return posts;
        }
    }
}