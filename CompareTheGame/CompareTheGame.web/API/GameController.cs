using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace CompareTheGame.web.API
{
    public class GameController : ApiController
    {
        [HttpGet]
        public string GetGame()
        {
            return "game name";
        }
    }
}
