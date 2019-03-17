using CompareTheGame.dal.Models;
using CompareTheGame.web.Models.GameViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models
{
    public class SearchOptionsViewModel
    {
        public SearchOptionsViewModel()
        {

        }
        public SearchOptionsViewModel(SearchOptions searchOptions)
        {
            Themes = searchOptions.Themes.Select(t => new ThemeViewModel(t)).ToList();
            Modes = searchOptions.Modes.Select(m => new ModeViewModel(m)).ToList();
            Platforms = searchOptions.Platforms.Select(pl => new PlatformViewModel(pl)).ToList();
            Perspectives = searchOptions.Perspectives.Select(pe => new PerspectiveViewModel(pe)).ToList();
            Genres = searchOptions.Genres.Select(g => new GenreViewModel(g)).ToList();
        }

        public List<ThemeViewModel> Themes { get; set; }
        public List<ModeViewModel> Modes { get; set; }
        public List<PlatformViewModel> Platforms { get; set; }
        public List<PerspectiveViewModel> Perspectives { get; set; }
        public List<GenreViewModel> Genres { get; set; }
    }
}
