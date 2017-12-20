using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Predictions.Persistence;
// using Predictions.Persistence.Entities;
using Predictions.Domain.Models;

namespace Predictions.Persistence.FetchExtensions
{
    public static class TournamentFetchExtensions
    {
        public static IQueryable<Tournament> WithTours(this IQueryable<Tournament> tournaments)
        {
            return tournaments.Include(t => t.Tours);
        }

        public static IQueryable<Tournament> WithToursAndMatches(this IQueryable<Tournament> tournaments)
        {
            return tournaments.Include(t => t.Tours).ThenInclude(tr => tr.Matches);
        }

        public static IQueryable<Tournament> WithScheduleInfo(this IQueryable<Tournament> tournaments)
        {
            return tournaments
                .Include(t => t.Tours)
                .ThenInclude(tr => tr.Matches).ThenInclude(m => m.HomeTeam)
                .Include(t => t.Tours)
                .ThenInclude(tr => tr.Matches).ThenInclude(m => m.AwayTeam);
        }
    }
}