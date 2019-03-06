using CompareTheGame.web.Models.GameViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models
{
    public class HomePageGameData
    {
        public HomePageGameData()
        {
            RecentlyReleased = new List<GameViewModel>();
            SoonToBeReleased = new List<GameViewModel>();
        }

        public HomePageGameData(List<GameViewModel> allGames) : this()
        {
            RecentlyReleased.AddRange(allGames
                                    .OrderByDescending(g => g.FirstReleaseDate)
                                    .Where(g => g.FirstReleaseDate <= DateTime.Now)
                                    .Take(14));

            SoonToBeReleased.AddRange(allGames
                                     .OrderBy(g => g.FirstReleaseDate)
                                     .Where(g => g.FirstReleaseDate > DateTime.Now)
                                     .Take(14));
        }

        public List<GameViewModel> RecentlyReleased { get; set; }
        public List<GameViewModel> SoonToBeReleased { get; set; }
    }
}
