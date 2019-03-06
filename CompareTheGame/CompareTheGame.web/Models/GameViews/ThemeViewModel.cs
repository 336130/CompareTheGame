using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class ThemeViewModel
    {
        public ThemeViewModel() {}

        public ThemeViewModel(Theme theme)
        {
            ThemeID = theme.ThemeID;
            Name = theme.ThemeName;
        }

        public int ThemeID { get; set; }
        public string Name { get; set; }
    }
}
