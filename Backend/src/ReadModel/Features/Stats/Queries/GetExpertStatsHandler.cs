﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Models;
using Domain.Services;
using Domain.PointSystems;
using MediatR;
using Persistence;
using Persistence.FetchExtensions;
using Persistence.QueryExtensions;
using ReadModel.Features.Experts.Dtos;
using ReadModel.Features.Stats.Queries;
using ReadModel.Features.Stats.Dtos;

namespace ReadModel.Features.Stats.Queries
{
    public class GetExpertStatsHandler : IRequestHandler<GetExpertStats, IEnumerable<ExpertStatsReadDto>>
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
            var tour = (await _context.Tours.FetchWithMatchesAndPredictionsAndExperts().ByIdAsync(request.TourId)) as Tour;
            var matches = tour.Matches;
            var threePointSystem = new ThreePointSystem();

            var predictionResultsByExpert = _predictionService.GroupPredictionsResultsByExpert(matches);
            var expertStats = _statService.DenormalizePredictionResultsToDto(predictionResultsByExpert, threePointSystem);

            return expertStats.OrderBy(s => s.Sum);
        }
    }
}
