using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Predictions.Persistence.Entities {
    public class OldTour {
        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int OldTourId { get; set; }

        //public Tournament Tournament { get; set; }
        //public int TournamentId { get; set; }

        public int OldTourNumber { get; set; }

        public bool IsClosed { get; set; }

        [DisplayFormat (ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]
        [Column (TypeName = "DateTime2")]
        public DateTime StartDate { get; set; }

        [DisplayFormat (ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]
        [Column (TypeName = "DateTime2")]
        public DateTime EndDate { get; set; }

        //public virtual List<Match> Matches { get; set; }}
    }
}