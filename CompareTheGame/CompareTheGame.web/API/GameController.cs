using CompareTheGame.dal;
using CompareTheGame.web.Models;
using CompareTheGame.web.Models.GameViews;
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
        public HomePageGameData GetAllGames()
        {
            var games = new DatabaseAccessManager().GetAllGames().Select(g => new GameViewModel(g));

            var responseObj = new HomePageGameData(games.ToList());

            return responseObj;
        }

        [HttpGet]
        public GameViewModel GetGame([FromUri] string gameID)
        {
            return new GameViewModel(new DatabaseAccessManager().GetGame(gameID));
        }

        [HttpGet]
        public SearchOptionsViewModel GetSearchOptions()
        {
            return new SearchOptionsViewModel(new DatabaseAccessManager().GetSearchOptions());
        }

        [HttpGet]
        public List<GameViewModel> SearchForGame([FromUri]string gameName)
        {
            return new DatabaseAccessManager().SearchForGame(gameName).Select(g => new GameViewModel(g)).ToList();
        }
    }
}
