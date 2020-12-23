using System.Data;
using System.Threading.Tasks;
using MySqlConnector;
using System.Collections.Generic;
using System.Data.Common;
using System;

namespace WebApi.Models
{
    public class TechnologyQuery
    {
        public AppDb Db { get; }

        public TechnologyQuery(AppDb db)
        {
            Db = db;
        }
     
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

         public async Task<List<Technology>> getSearchResults(string text)
        { 
            using var cmd = Db.Connection.CreateCommand();

            cmd.CommandText = "search_sp";

             cmd.Parameters.AddWithValue("@search", @text);

            cmd.CommandType = CommandType.StoredProcedure;
        return await ReadAllAsync(await cmd.ExecuteReaderAsync());
        }

        public async Task <List<Pages>> GetTechnologiesAsync(int page_num, int rec_per_page)
        {
            List<Technology>  techtechnologiesList = new List<Technology>();
            List<Pages> pageList = new List<Pages>();
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = "get_technologies_sp";
            cmd.Parameters.AddWithValue("@page_Number", @page_num);
            cmd.Parameters.AddWithValue("@rec_per_page", @rec_per_page);
            cmd.Parameters.Add("@total_pages", MySqlDbType.Int32);
            cmd.Parameters["@total_pages"].Direction = ParameterDirection.Output;
            cmd.CommandType = CommandType.StoredProcedure;
            techtechnologiesList = await ReadAllAsync(await cmd.ExecuteReaderAsync());
            int recordCount = Convert.ToInt32(cmd.Parameters["total_pages"].Value);
            pageList.Add(new Pages { technologies = techtechnologiesList, total_pages = recordCount });
            return pageList;

        }

        private async Task<List<Technology>> ReadAllAsync(DbDataReader reader)
        {
            var technologies = new List<Technology>();
            using (reader)
            {
                while (await reader.ReadAsync())
                {
                    var technologyList = new Technology(Db)
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Description = reader.GetString(2),
                    };
                    technologies.Add(technologyList);
                }
            }
            return technologies;
        }
    }
}