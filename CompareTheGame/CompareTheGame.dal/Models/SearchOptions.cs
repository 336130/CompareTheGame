using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.dal.Models
{
    public class SearchOptions
    {
        public List<Theme> Themes { get; set; }
        public List<Genre> Genres { get; set; }
        public List<Perspective> Perspectives { get; set; }
        public List<Platform> Platforms { get; set; }
        public List<Mode> Modes { get; set; }
    }
}
