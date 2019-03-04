//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CompareTheGame.dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Platform
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Platform()
        {
            this.GamePlatforms = new HashSet<GamePlatform>();
            this.VendorGameHistories = new HashSet<VendorGameHistory>();
            this.VendorGameSettings = new HashSet<VendorGameSetting>();
        }
    
        public int PlatformID { get; set; }
        public int IGDBID { get; set; }
        public string Abbreviation { get; set; }
        public string PlatformName { get; set; }
        public System.DateTime FirstSeen { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GamePlatform> GamePlatforms { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VendorGameHistory> VendorGameHistories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VendorGameSetting> VendorGameSettings { get; set; }
    }
}
