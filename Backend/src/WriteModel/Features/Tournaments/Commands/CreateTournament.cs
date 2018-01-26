using System;
using MediatR;
using WriteModel.Features.Tournaments.Dtos;

namespace WriteModel.Features.Tournaments.Commands
{
    public class CreateTournament : IRequest<bool>
    {
        public CreateTournament (string title, DateTime startDate, DateTime endDate)
        {
            Title = title;
            StartDate = startDate;
            EndDate = endDate;
        }

        public string Title { get; private set; }
        public DateTime StartDate { get; private set; }
        public DateTime EndDate { get; private set; }
    }
}