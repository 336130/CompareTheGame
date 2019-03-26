using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using CompareTheGame.dal.Models;
using System.Data.Entity.Migrations;
using System.Web;

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
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameHistories.Select(vgh => vgh.Vendor)))
                    .Where(g => g.CoverImageURL != null && !g.GameName.StartsWith("???"))
                    .OrderBy(g => g.GameName)
                    .ToList();
            }
        }

        public List<Game> GetAllGames(bool forAdmin)
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
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameHistories.Select(vgh => vgh.Vendor)))
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameSettings.Select(vgs => vgs.Vendor)))
                    .Include(g => g.GamePlatforms.Select(gp => gp.VendorGameSettings.Select(vgs => vgs.GamePlatform.Platform)))
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
                return dbContext.Vendors
                    .Include(v => v.VendorGameSettings.Select(vgs => vgs.GamePlatform.Platform))
                    .OrderBy(v => v.VendorName).ToList();
            }
        }

        public int SaveVendor(Vendor vendor)
        {
            using (var dbContext = new CompareTheGameEntities())
            {
                var user = HttpContext.Current.User.Identity.Name;
                if (vendor.VendorID == 0)
                {
                    vendor.CreatedBy = user;
                    vendor.CreatedDate = DateTime.Now;
                }
                vendor.ModifiedBy = user;
                vendor.ModifiedDate = DateTime.Now;

                dbContext.Vendors.AddOrUpdate(vendor);

                return dbContext.SaveChanges();
            }
        }

        public int DeleteVendors(Vendor vendor)
        {
            using (var dbContext = new CompareTheGameEntities())
            {
                var foundVendor = dbContext.Vendors.First(v => v.VendorID == vendor.VendorID);
                dbContext.Vendors.Remove(foundVendor);
                return dbContext.SaveChanges();
            }
        }
    }
}
