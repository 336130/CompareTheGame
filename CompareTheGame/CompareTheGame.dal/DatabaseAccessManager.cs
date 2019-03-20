using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using CompareTheGame.dal.Models;

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
                    .Include(g => g.GameThemes.Select(gt => gt.Theme))
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameHistories.Select(vfh => vfh.Vendor)))
                    .Where(g => g.CoverImageURL != null && !g.GameName.StartsWith("???"))
                    .OrderBy(g => g.GameName)
                    .ToList();
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

        public SearchOptions GetSearchOptions()
        {
            using (var dbContext = new CompareTheGameEntities())
            {
                SearchOptions searchOptions = new SearchOptions();
                searchOptions.Genres = dbContext.Genres.OrderBy(g => g.GenreName).ToList();
                searchOptions.Modes = dbContext.Modes.OrderBy(m => m.ModeName).ToList();
                searchOptions.Platforms = dbContext.Platforms.OrderBy(p => p.PlatformName).ToList();
                searchOptions.Perspectives = dbContext.Perspectives.OrderBy(p => p.PerspectiveName).ToList();
                searchOptions.Themes = dbContext.Themes.OrderBy(t => t.ThemeName).ToList();
                return searchOptions;
            }
        }

        public List<Game> SearchForGame(string gameName)
        {
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
                    .Where(g => g.CoverImageURL != null && g.GameName.Contains(gameName) && !g.GameName.StartsWith("???"))
                    .OrderBy(g => g.GameName)
                    .ToList();
            }
        }
        
        public List<Vendor> GetVendors()
        {
            using (var dbContext = new CompareTheGameEntities())
            {
                return dbContext.Vendors.Include(v => v.VendorGameSettings).OrderBy(v => v.VendorName).ToList();
            }
        }
    }
}
