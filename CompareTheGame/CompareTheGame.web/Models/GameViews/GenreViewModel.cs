using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class GenreViewModel
    {
        public GenreViewModel() {}

        public GenreViewModel(Genre genre)
        {
            GenreID = genre.GenreID;
            Name = genre.GenreName;
        }

        public int GenreID { get; set; }
        public string Name { get; set; }
    }
}
