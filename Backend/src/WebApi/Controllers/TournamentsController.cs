using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ReadModel.Features.Tournaments.Dtos;
using ReadModel.Features.Tournaments.Queries;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class TournamentsController : Controller
    {
        private readonly IMediator _mediator;

        public TournamentsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/tournaments/
        [HttpGet]
        public async Task<IEnumerable<TournamentInfoReadDto>> GetTournaments()
        {
            var getTournaments = new GetTournaments();
            return await _mediator.Send(getTournaments);
        }

        // GET api/tournaments/:id
        [HttpGet("{id}")]
        public async Task<TournamentInfoReadDto> GetTournamentint(int id)
        {
            var getTournament = new GetTournament(id);
            return await _mediator.Send(getTournament);
        }

        // GET api/tournaments/latest/schedule
        [HttpGet("latest/schedule")]
        public async Task<TournamentScheduleDto> GetLatestTournamentSchedule()
        {
            var getSchedule = new GetSchedule();
            return await _mediator.Send(getSchedule);
        }

        // PATCH api/tournaments/
        // [HttpPost("latest/schedule")]
        // public async Task<TournamentScheduleReadDto> UpdateTournament(int tournamentId, 
        //     [FromBody] TournamentInfoWriteDto tournamentInfo)
        // {
        //     var 
        //     var getSchedule = new GetSchedule();
        //     return await _mediator.Send(getSchedule);
        // }
    }
}