﻿// using System;
// using System.Linq;
// using System.Linq.Expressions;
// using Core.Models;

// namespace Persistence.DAL.FetchStrategies.ToursFetchStrategies
// {
//     public class FetchMatchesWithPredictions : IFetchStrategy<Tour>
//     {
//         public Expression<Func<Tour, object>> Apply()
//         {
//             return t => t.Matches.Select(m => m.Predictions);
//         }
//     }
// }