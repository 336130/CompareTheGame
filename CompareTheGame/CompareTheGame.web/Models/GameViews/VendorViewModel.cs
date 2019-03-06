using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class VendorViewModel
    {
        public VendorViewModel()
        {
               
        }
        public VendorViewModel(Vendor vendor)
        {
            VendorID = vendor.VendorID;
            Abbreviation = vendor.Abbreviation;
            Name = vendor.VendorName;
            URL = vendor.HomePageURL;
            LogoURL = vendor.LogoURL;
            XCodePrice = vendor.XcodePrice;
            XCodeSalePrice = vendor.XcodeSalePrice;
            Font = vendor.Font;
        }

        public int VendorID { get; set; }
        public string Abbreviation { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        public string LogoURL { get; set; }
        public string XCodeSalePrice { get; set; }
        public string XCodePrice { get; set; }
        public string Font { get; set; }
    }
}
