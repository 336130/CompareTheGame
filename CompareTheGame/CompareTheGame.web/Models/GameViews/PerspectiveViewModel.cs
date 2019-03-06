using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class PerspectiveViewModel
    {
        public PerspectiveViewModel() {}

        public PerspectiveViewModel(Perspective perspective)
        {
            PerspectiveID = perspective.PerspectiveID;
            Name = perspective.PerspectiveName;
        }

        public int PerspectiveID { get; set; }
        public string Name { get; set; }
    }
}
