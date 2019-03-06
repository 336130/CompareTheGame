using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class ModeViewModel
    {
        public ModeViewModel()  {}

        public ModeViewModel(Mode mode)
        {
            ModeID = mode.ModeID;
            Name = mode.ModeName;
        }

        public int ModeID { get; set; }
        public string Name { get; set; }
    }
}
