using CompareTheGame.dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompareTheGame.web.Models.GameViews
{
    public class VendorGameSettingViewModel
    {
        public VendorGameSettingViewModel()
        {

        }
        public VendorGameSettingViewModel(VendorGameSetting setting)
        {
            VendorGameSettingID = setting.VendorGameSettingsID;
            GamePlatformID = setting.GamePlatformID.Value;
            VendorID = setting.VendorID.Value;
            PageURL = setting.PageURL;
            Automated = setting.Automated.HasValue ? setting.Automated.Value : false;
            ElementType = setting.ElementType;
            ElementValue = setting.ElementValue;
            CreatedBy = setting.CreatedBy;
            CreatedDate = setting.CreatedDate;
            ModifiedBy = setting.ModifiedBy;
            ModifiedDate = setting.ModifiedDate;
        }

        public int VendorGameSettingID { get; set; }
        public int GamePlatformID { get; set; }
        public int VendorID { get; set; }
        public string PageURL { get; set; }
        public bool Automated { get; set; }
        public string ElementType { get; set; }
        public string ElementValue { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
