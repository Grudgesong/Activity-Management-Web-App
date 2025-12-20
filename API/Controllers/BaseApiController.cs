using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BaseApiController : ControllerBase
  {
    private IMediator? _mediator;

    //Activities controller has access to protected properties so that file can access IMediator from here.
    protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
    ?? throw new InvalidOperationException("Imediator service is unavailable");
      protected ActionResult HandleResult<T>(Result<T> result)
    {
      if (!result.IsSuccess && result.Code == 404) return NotFound();

      if (result.IsSuccess && result.Value != null) return Ok(result.Value);

      return BadRequest(result.Error);
    }
  }


  }
