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
            ElementType = vendor.ElementType;
            ElementValue = vendor.ElementValue; ;
            Font = vendor.Font;
        }
        public VendorViewModel(Vendor vendor, List<VendorGameSetting> settings): this(vendor)
        {
            Settings = settings.Select(vs => new VendorGameSettingViewModel(vs)).ToList();
        }

        public int VendorID { get; set; }
        public string Abbreviation { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        public string LogoURL { get; set; }
        public string ElementType { get; set; }
        public string ElementValue { get; set; }
        public string Font { get; set; }
        public List<VendorGameSettingViewModel> Settings { get; set; }
    }
}
