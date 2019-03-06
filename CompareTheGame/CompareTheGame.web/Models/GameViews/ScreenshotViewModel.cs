using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class ScreenshotViewModel
    {
        public ScreenshotViewModel() {}

        public ScreenshotViewModel(Screenshot screenshot)
        {
            ScreenshotID = screenshot.ScreenshotID;
            URL = screenshot.ScreenshotURL;
        }

        public int ScreenshotID { get; set; }
        public string URL { get; set; }
    }
}
