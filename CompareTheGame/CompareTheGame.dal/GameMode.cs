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
    
    public partial class GameMode
    {
        public int GameModeID { get; set; }
        public Nullable<int> GameID { get; set; }
        public Nullable<int> ModeID { get; set; }
        public System.DateTime CreatedDate { get; set; }
    
        public virtual Game Game { get; set; }
        public virtual Mode Mode { get; set; }
    }
}
