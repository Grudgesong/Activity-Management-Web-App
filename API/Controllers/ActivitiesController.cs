using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController: BaseApiController
{
  [HttpGet]
  public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken ct)
  {
    return await Mediator.Send(new GetActivityList.Query(), ct);
    // Mediator comes from the baseapi controller
    // goes to Application/Activities/Queries/GetActivityList
    // ct is cancellation Token being used
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Activity>> GetActivityDetail(string id)
  {
    return await Mediator.Send(new GetActivityDetails.Query{Id = id});
  }

  [HttpPost]
  public async Task<ActionResult<string>> CreateActivity(Activity activity)
  {
    return await Mediator.Send(new CreateActivity.Command{Activity = activity});
  }

  [HttpPut]
  public async Task<ActionResult<Activity>> EditActivity(Activity activity)
  {
    await Mediator.Send(new EditActivity.Command{Activity = activity});
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> DeleteActivity(string Id)
  {
    await Mediator.Send(new DeleteActivity.Command{Id = Id});
    return Ok();
  }
}
