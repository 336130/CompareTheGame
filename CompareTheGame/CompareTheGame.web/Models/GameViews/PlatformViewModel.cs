using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class PlatformViewModel
    {
        public PlatformViewModel(){}

        public PlatformViewModel(Platform platform, DateTime releaseDate)
        {

            PlatformID = platform.PlatformID;
            Abbreviation = platform.Abbreviation;
            Name = platform.PlatformName;
            ReleaseDate = releaseDate;
        }
        public int PlatformID { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
