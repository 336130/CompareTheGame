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
    
    public partial class GamePlatform
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GamePlatform()
        {
            this.VendorGameHistories = new HashSet<VendorGameHistory>();
            this.VendorGameSettings = new HashSet<VendorGameSetting>();
        }
    
        public int GamePlatformID { get; set; }
        public Nullable<int> GameID { get; set; }
        public Nullable<int> PlatformID { get; set; }
        public Nullable<System.DateTime> ReleaseDate { get; set; }
        public System.DateTime CreatedDate { get; set; }
    
        public virtual Game Game { get; set; }
        public virtual Platform Platform { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VendorGameHistory> VendorGameHistories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VendorGameSetting> VendorGameSettings { get; set; }
    }
}
