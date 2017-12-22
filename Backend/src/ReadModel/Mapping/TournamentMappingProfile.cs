using AutoMapper;
using Predictions.Domain.Models;
using Predictions.ReadModel.Features.Tournaments.Dtos;

namespace Predictions.ReadModel.Mapping
{
    public class TournamentMappingProfile : Profile
    {
        public TournamentMappingProfile()
        {
            ShouldMapField = fieldInfo => true;
            ShouldMapProperty = propertyInfo => true;

            CreateMap<Tournament, TournamentInfoReadDto>();
        }
    }
}