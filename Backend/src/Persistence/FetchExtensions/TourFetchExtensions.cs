﻿using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Persistence.QueryExtensions;

namespace Persistence.FetchExtensions
{
    public static class TourFetchExtensions
    {

        public static IQueryable<Tour> Fetch(this IQueryable<Tour> tours, FetchMode fetchMode)
        {
            return tours.ApplyFetchMode(fetchMode);
        }

        public static IQueryable<Tour> FetchWithBasePredictionsInfo(this IQueryable<Tour> tours, FetchMode fetchMode)
        {
            return tours
                .Include(t => t.Matches)
                    .ThenInclude(m => m.Predictions)
                        .ThenInclude(p => p.Expert)
                .ApplyFetchMode(fetchMode);
        }

        public static IQueryable<Tour> FetchWithFullPredictionsInfo(this IQueryable<Tour> tours, FetchMode fetchMode)
        {
            return tours
                .Include(t => t.Matches)
                    .ThenInclude(m => m.HomeTeam)
                .Include(t => t.Matches)
                    .ThenInclude(m => m.AwayTeam)
                .Include(t => t.Matches)
                    .ThenInclude(m => m.Predictions)
                        .ThenInclude(p => p.Expert)
                .ApplyFetchMode(fetchMode);
        }

    }
}
