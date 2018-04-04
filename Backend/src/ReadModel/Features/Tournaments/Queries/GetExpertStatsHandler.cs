﻿using AutoMapper;
using Domain.Models;
using Domain.PointSystems;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Persistence.FetchExtensions;
using Persistence.QueryExtensions;
using ReadModel.Features.Predictions;
using ReadModel.Features.Stats;
using ReadModel.Features.Stats.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ReadModel.Features.Tournaments.Queries
{
    public class GetExpertStatsHandler: IRequestHandler<GetExpertStats, IEnumerable<ExpertStatsReadDto>>
    {
        private readonly PredictionsContext _context;
        private readonly IMapper _mapper;
        private readonly PredictionService _predictionService;
        private readonly StatService _statService;

        public GetExpertStatsHandler(PredictionsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            _predictionService = new PredictionService();
            _statService = new StatService();
        }

        public async Task<IEnumerable<ExpertStatsReadDto>> Handle(GetExpertStats request,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var tourId = await _context.GetTourIdFromNumberAndTournamentId(request.TourNumber, request.TournamentId);

            var tour = (await _context.Tours.FetchWithMatchesAndPredictionsAndExperts().ByIdAsync(tourId)) as Tour;

            var matches = tour.Matches;
            var threePointSystem = new ThreePointSystem();

            var predictionResultsByExpert = _predictionService.GroupPredictionsResultsByExpert(matches);
            var expertStats = _statService.DenormalizePredictionResultsToDto(predictionResultsByExpert, threePointSystem);

            return expertStats.OrderByDescending(s => s.Sum);
        }
    }
}
