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
    
    public partial class Mode
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Mode()
        {
            this.GameModes = new HashSet<GameMode>();
        }
    
        public int ModeID { get; set; }
        public int IGDBID { get; set; }
        public string ModeName { get; set; }
        public System.DateTime FirstSeen { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GameMode> GameModes { get; set; }
    }
}