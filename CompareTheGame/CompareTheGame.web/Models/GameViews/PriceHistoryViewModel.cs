using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class PriceHistoryViewModel
    {
        public PriceHistoryViewModel() {}

        public PriceHistoryViewModel(VendorGameHistory history)
        {
            Platform = new PlatformViewModel(history.GamePlatform.Platform,history.GamePlatform.ReleaseDate.Value);
            Vendor = new VendorViewModel(history.Vendor);
            Price = history.Price;
            SalePrice = history.SalePrice;
            CreatedDate = history.CreatedDate;
        }

        public PlatformViewModel Platform { get; set; }
        public VendorViewModel Vendor { get; set; }
        public string Price { get; set; }
        public string SalePrice { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
