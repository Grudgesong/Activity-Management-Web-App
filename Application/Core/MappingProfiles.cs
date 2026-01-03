using System;
using Application.Activities.DTOs;
using Application.Profiles.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
  public MappingProfiles()
  {
    CreateMap<Activity, Activity>();
    CreateMap<CreateActivityDto, Activity>();
    CreateMap<EditActivityDto, Activity>();
    CreateMap<Activity, ActivityDto>()
    .ForMember(des => des.HostDisplayName, opt => opt.MapFrom(source => source.Attendees.FirstOrDefault(x => x.IsHost)!.User.DisplayName))
    .ForMember(des => des.HostId, opt => opt.MapFrom(source => source.Attendees.FirstOrDefault(x => x.IsHost)!.User.Id));

    CreateMap<ActivityAttendee, UserProfile>()
    .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.User.DisplayName))
    .ForMember(d => d.Bio, o => o.MapFrom(s => s.User.Bio))
    .ForMember(d => d.ImageUrl, o => o.MapFrom(s => s.User.ImageUrl))
    .ForMember(d => d.Id, o => o.MapFrom(s => s.User.Id));
  }
}
