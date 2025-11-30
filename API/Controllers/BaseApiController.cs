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
  }
}
