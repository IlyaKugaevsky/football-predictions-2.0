using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Predictions.Persistence.Entities {
    public class Tour {
        public Tour () { }

        public Tour (int tournamentId, int tourNumber) {
            TournamentId = tournamentId;
            TourNumber = tourNumber;
            IsClosed = false;
        }

        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        [Key]
        [Column ("TourId")]
        public int TourId { get; set; }

        public Tournament Tournament { get; set; }
        public int TournamentId { get; set; }

        public int TourNumber { get; set; }

        public bool IsClosed { get; set; }

        [DisplayFormat (ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]
        [Column (TypeName = "DateTime2")]
        public DateTime StartDate { get; set; }

        [DisplayFormat (ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]
        [Column (TypeName = "DateTime2")]
        public DateTime EndDate { get; set; }

        public virtual List<Match> Matches { get; set; }
    }
}