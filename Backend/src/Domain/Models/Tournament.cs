using System;
using System.Collections.Generic;
// using Predictions.Persistence.Entities;
using Predictions.Domain.Models;


namespace Predictions.Domain.Models
{
    public class Tournament
    {
        public int TournamentId { get; set; }

        public string Title { get; set; }

        // [DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]

        // [Column(TypeName = "DateTime2")]
        public DateTime StartDate { get; set; }

        // [DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:dd.MM.yyyy HH:mm}")]

        // [Column(TypeName = "DateTime2")]
        public DateTime EndDate { get; set; }

        //public virtual List<Tour> Tours { get; set; }

        public virtual List<Tour> NewTours { get; set; }
    }
}