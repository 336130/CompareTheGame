using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CompareTheGame.dal
{
    public class DatabaseAccessManager
    {
        public List<Game> GetAllGames()
        {
            using (var dbContext = new CompareTheGameEntities())
            {
                return dbContext.Games.Include(g => g.GameGenres).Where(g => g.CoverImageURL != null).ToList();
            }
        }
    }
}
