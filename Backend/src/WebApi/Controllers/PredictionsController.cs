using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using MediatR;
using ReadModel.Features.Predictions.Queries;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class PredictionsController : Controller
    {
        private readonly IMediator _mediator;

        public PredictionsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/predictions/
        [HttpGet]
        public async Task<IActionResult> GetAllPredictions()
        {
            var getPredictions = new GetPredictions();
            var predictions = await _mediator.Send(getPredictions);

            return Ok(predictions);
        }
    }
}