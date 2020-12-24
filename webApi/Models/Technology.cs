using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using MySqlConnector;

namespace WebApi.Models
{
    public class Technology
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        internal AppDb Db { get; set; }

        public Technology()
        {
        }

        internal Technology(AppDb db)
        {
            Db = db;
        }

        public async Task InsertAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
            Id=0;
            executeStoredProcedure(cmd,"INSERT");
            await cmd.ExecuteNonQueryAsync();
        }

        public async Task UpdateAsync()
        {
             using var cmd = Db.Connection.CreateCommand();
            executeStoredProcedure(cmd,"UPDATE");
            await cmd.ExecuteNonQueryAsync();
        }

        public async Task DeleteAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
            Name=null;
            Description=null;
            executeStoredProcedure(cmd,"DELETE");
            await cmd.ExecuteNonQueryAsync();
        }

        public void BindId(MySqlCommand cmd)
        {
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@tId",
                DbType = DbType.Int32,
                Value = Id,
            });
        }

        public void BindParams(MySqlCommand cmd)
        {
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@tName",
                DbType = DbType.String,
                Value = Name,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@tDescription",
                DbType = DbType.String,
                Value = Description,
            });
        }

        //common method which which takes commands to executes stored procedure
        public void executeStoredProcedure(MySqlCommand cmd,string action){
              cmd.CommandText = "Technology_Create_Update_delete_sp";
             BindParams(cmd);
             BindId(cmd);
             cmd.Parameters.AddWithValue("@tAction", @action);
            cmd.CommandType = CommandType.StoredProcedure;
        }
    }

    public class Pages
    {
        public int total_pages { get; set; }       
        public List<Technology> technologies { get; set; }
    }
}


