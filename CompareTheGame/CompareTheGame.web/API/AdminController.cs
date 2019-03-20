using CompareTheGame.dal;
using CompareTheGame.web.Models.GameViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace CompareTheGame.web.API
{
    public class AdminController : ApiController 
    {
        [HttpGet]
        public List<VendorViewModel> GetVendors()
        {
            return new DatabaseAccessManager().GetVendors().Select(v => new VendorViewModel(v,v.VendorGameSettings.ToList())).ToList();
        }

        [HttpGet]
        public List<GameViewModel> GetAllGames()
        {
            return new DatabaseAccessManager().GetAllGames().Select(g => new GameViewModel(g)).ToList();
        }
    }
}
