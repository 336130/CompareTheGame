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
                return dbContext.Games
                    .Include(g => g.GameGenres.Select(gg => gg.Genre))
                    .Include(g => g.GameModes.Select(gm => gm.Mode))
                    .Include(g => g.GamePerspectives.Select(gp => gp.Perspective))
                    .Include(g => g.GamePlatforms.Select(gp => gp.Platform))
                    .Include(g => g.GameScreenshots.Select(gs => gs.Screenshot))
                    .Include(g=> g.GameThemes.Select(gt => gt.Theme))
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameHistories.Select(vfh => vfh.Vendor)))
                    .Where(g => g.CoverImageURL != null).ToList();
            }
        }

        public Game GetGame(string game)
        {
            int gameID = int.Parse(game);

            using (var dbContext = new CompareTheGameEntities())
            {
                return dbContext.Games
                    .Include(g => g.GameGenres.Select(gg => gg.Genre))
                    .Include(g => g.GameModes.Select(gm => gm.Mode))
                    .Include(g => g.GamePerspectives.Select(gp => gp.Perspective))
                    .Include(g => g.GamePlatforms.Select(gp => gp.Platform))
                    .Include(g => g.GameScreenshots.Select(gs => gs.Screenshot))
                    .Include(g => g.GameThemes.Select(gt => gt.Theme))
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameHistories.Select(vfh => vfh.Vendor)))
                    .Where(g => g.CoverImageURL != null && g.GameID == gameID).FirstOrDefault();
            }
        }
    }
}
