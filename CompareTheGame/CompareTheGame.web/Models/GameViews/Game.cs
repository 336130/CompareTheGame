using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class Game
    {
        public int GameID { get; set; }
        public string GameName { get; set; }
        public string URL { get; set; }
        public string CoverImageURL { get; set; }
        public string StoryLine { get; set; }
        public string Summary { get; set; }
        public DateTime FirstReleaseDate { get; set; }
        public List<Perspective> Perspectives { get; set; }
        public List<Genre> Genres { get; set; }
        public List<Theme> Themes { get; set; }
        public List<ScreenShot> ScreenShots { get; set; }
        public List<Mode> Modes { get; set; }
        public List<Platform> Platforms { get;set;}

    }
}
