/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelAnnouncementFilterInput = {
  id?: ModelIDFilterInput | null,
  publishedDate?: ModelStringFilterInput | null,
  expirationDate?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  parish?: ModelStringFilterInput | null,
  crossRegional?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  callToAction?: ModelStringFilterInput | null,
  callToActionTitle?: ModelStringFilterInput | null,
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  not?: ModelAnnouncementFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSeriesFilterInput = {
  id?: ModelIDFilterInput | null,
  seriesType?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  thumbnailDescription?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  startDate?: ModelStringFilterInput | null,
  endDate?: ModelStringFilterInput | null,
  and?: Array< ModelSeriesFilterInput | null > | null,
  or?: Array< ModelSeriesFilterInput | null > | null,
  not?: ModelSeriesFilterInput | null,
};

export type ModelCustomPlaylistFilterInput = {
  id?: ModelIDFilterInput | null,
  seriesType?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  thumbnailDescription?: ModelStringFilterInput | null,
  and?: Array< ModelCustomPlaylistFilterInput | null > | null,
  or?: Array< ModelCustomPlaylistFilterInput | null > | null,
  not?: ModelCustomPlaylistFilterInput | null,
};

export enum online_event_formatTypes {
  messenger_room = "messenger_room",
  third_party = "third_party",
  fb_live = "fb_live",
  other = "other",
  none = "none",
}


export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelInstagramFilterInput = {
  id?: ModelIDFilterInput | null,
  locationId?: ModelStringFilterInput | null,
  altText?: ModelStringFilterInput | null,
  timestamp?: ModelIntFilterInput | null,
  and?: Array< ModelInstagramFilterInput | null > | null,
  or?: Array< ModelInstagramFilterInput | null > | null,
  not?: ModelInstagramFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelLivestreamFilterInput = {
  id?: ModelIDFilterInput | null,
  date?: ModelStringFilterInput | null,
  startTime?: ModelStringFilterInput | null,
  videoStartTime?: ModelStringFilterInput | null,
  endTime?: ModelStringFilterInput | null,
  prerollYoutubeId?: ModelStringFilterInput | null,
  liveYoutubeId?: ModelStringFilterInput | null,
  showChat?: ModelBooleanFilterInput | null,
  showKids?: ModelBooleanFilterInput | null,
  eventTitle?: ModelStringFilterInput | null,
  externalEventUrl?: ModelStringFilterInput | null,
  titles?: ModelStringFilterInput | null,
  homepageLink?: ModelStringFilterInput | null,
  and?: Array< ModelLivestreamFilterInput | null > | null,
  or?: Array< ModelLivestreamFilterInput | null > | null,
  not?: ModelLivestreamFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export enum NoteDataType {
  questions = "questions",
  notes = "notes",
}


export type ModelVideoFilterInput = {
  id?: ModelIDFilterInput | null,
  createdBy?: ModelStringFilterInput | null,
  createdDate?: ModelStringFilterInput | null,
  episodeTitle?: ModelStringFilterInput | null,
  originalEpisodeTitle?: ModelStringFilterInput | null,
  episodeNumber?: ModelIntFilterInput | null,
  seriesTitle?: ModelStringFilterInput | null,
  customPlaylistIDs?: ModelStringFilterInput | null,
  publishedDate?: ModelStringFilterInput | null,
  recordedDate?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  viewCount?: ModelStringFilterInput | null,
  closedCaptioning?: ModelStringFilterInput | null,
  referencedMedia?: ModelStringFilterInput | null,
  campaigns?: ModelStringFilterInput | null,
  bibleVerses?: ModelStringFilterInput | null,
  topics?: ModelStringFilterInput | null,
  qandeh?: ModelStringFilterInput | null,
  length?: ModelStringFilterInput | null,
  YoutubeIdent?: ModelStringFilterInput | null,
  videoTypes?: ModelStringFilterInput | null,
  notesURL?: ModelStringFilterInput | null,
  videoURL?: ModelStringFilterInput | null,
  audioURL?: ModelStringFilterInput | null,
  thumbnailDescription?: ModelStringFilterInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelSpeakerFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  hidden?: ModelBooleanFilterInput | null,
  and?: Array< ModelSpeakerFilterInput | null > | null,
  or?: Array< ModelSpeakerFilterInput | null > | null,
  not?: ModelSpeakerFilterInput | null,
};

export type ListAnnouncementsQueryVariables = {
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      id: string,
      publishedDate: string,
      expirationDate: string,
      image: string | null,
      parish: string | null,
      crossRegional: string | null,
      title: string,
      description: string,
      callToAction: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSeriesBySeriesTypeQueryVariables = {
  seriesType?: string | null,
  startDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetSeriesBySeriesTypeQuery = {
  getSeriesBySeriesType:  {
    __typename: "ModelSeriesConnection",
    items:  Array< {
      __typename: "Series",
      id: string,
      seriesType: string | null,
      title: string | null,
      description: string | null,
      image: string | null,
      startDate: string | null,
      endDate: string | null,
      videos:  {
        __typename: "ModelVideoConnection",
        items:  Array< {
          __typename: "Video",
          id: string,
          episodeTitle: string | null,
          episodeNumber: number | null,
          seriesTitle: string | null,
          series:  {
            __typename: "Series",
            id: string,
          } | null,
          publishedDate: string | null,
          description: string | null,
          length: string | null,
          YoutubeIdent: string,
          videoTypes: string | null,
          notesURL: string | null,
          videoURL: string | null,
          audioURL: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSeriesQueryVariables = {
  id: string,
};

export type GetSeriesQuery = {
  getSeries:  {
    __typename: "Series",
    id: string,
    seriesType: string | null,
    title: string | null,
    description: string | null,
    image: string | null,
    startDate: string | null,
    endDate: string | null,
    videos:  {
      __typename: "ModelVideoConnection",
      items:  Array< {
        __typename: "Video",
        id: string,
        episodeTitle: string | null,
        episodeNumber: number | null,
        seriesTitle: string | null,
        series:  {
          __typename: "Series",
          id: string,
        } | null,
        publishedDate: string | null,
        description: string | null,
        length: string | null,
        YoutubeIdent: string,
        videoTypes: string | null,
        notesURL: string | null,
        videoURL: string | null,
        audioURL: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCustomPlaylistsQueryVariables = {
  filter?: ModelCustomPlaylistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomPlaylistsQuery = {
  listCustomPlaylists:  {
    __typename: "ModelCustomPlaylistConnection",
    items:  Array< {
      __typename: "CustomPlaylist",
      id: string,
      seriesType: string | null,
      title: string | null,
      description: string | null,
      thumbnailDescription: string | null,
      createdAt: string,
      updatedAt: string,
      videos:  {
        __typename: "ModelCustomPlaylistVideoConnection",
        items:  Array< {
          __typename: "CustomPlaylistVideo",
          id: string,
          videoID: string,
          customPlaylistID: string,
          customPlaylist:  {
            __typename: "CustomPlaylist",
            id: string,
            seriesType: string | null,
            title: string | null,
            thumbnailDescription: string | null,
            videos:  {
              __typename: "ModelCustomPlaylistVideoConnection",
              items:  Array< {
                __typename: "CustomPlaylistVideo",
                id: string,
                videoID: string,
                customPlaylistID: string,
              } | null > | null,
              nextToken: string | null,
            } | null,
          } | null,
          video:  {
            __typename: "Video",
            id: string,
            createdBy: string | null,
            createdDate: string | null,
            episodeTitle: string | null,
            originalEpisodeTitle: string | null,
            episodeNumber: number | null,
            seriesTitle: string | null,
            customPlaylistIDs: Array< string | null > | null,
            publishedDate: string | null,
            recordedDate: string | null,
            description: string | null,
            viewCount: string | null,
            length: string | null,
            YoutubeIdent: string,
            videoTypes: string | null,
            notesURL: string | null,
            videoURL: string | null,
            audioURL: string | null,
            thumbnailDescription: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCustomPlaylistQueryVariables = {
  id: string,
};

export type GetCustomPlaylistQuery = {
  getCustomPlaylist:  {
    __typename: "CustomPlaylist",
    id: string,
    seriesType: string | null,
    title: string | null,
    description: string | null,
    videos:  {
      __typename: "ModelCustomPlaylistVideoConnection",
      items:  Array< {
        __typename: "CustomPlaylistVideo",
        id: string,
        video:  {
          __typename: "Video",
          id: string,
          episodeTitle: string | null,
          originalEpisodeTitle: string | null,
          episodeNumber: number | null,
          seriesTitle: string | null,
          publishedDate: string | null,
          description: string | null,
          Youtube:  {
            __typename: "YoutubePlaylistItemsItem2",
            snippet:  {
              __typename: "YoutubeSnippet",
              thumbnails:  {
                __typename: "YoutubeThumbnails",
                high:  {
                  __typename: "YoutubeThumbnail",
                  url: string | null,
                } | null,
                standard:  {
                  __typename: "YoutubeThumbnail",
                  url: string | null,
                } | null,
                maxres:  {
                  __typename: "YoutubeThumbnail",
                  url: string | null,
                } | null,
              } | null,
            } | null,
          } | null,
          videoURL: string | null,
          audioURL: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetFbEventsQueryVariables = {
  pageId?: string | null,
};

export type GetFbEventsQuery = {
  getFBEvents:  {
    __typename: "FBData",
    data:  Array< {
      __typename: "FBEvent",
      description: string | null,
      end_time: string | null,
      name: string | null,
      is_online: boolean | null,
      cover:  {
        __typename: "FBCover",
        id: string | null,
        offset_x: number | null,
        offset_y: number | null,
        source: string | null,
      } | null,
      online_event_format: online_event_formatTypes | null,
      online_event_third_party_url: string | null,
      place:  {
        __typename: "FBPlace",
        name: string | null,
        location:  {
          __typename: "FBLocation",
          city: string | null,
          country: string | null,
          latitude: number | null,
          longitude: number | null,
          state: string | null,
          street: string | null,
          zip: string | null,
        } | null,
        id: string | null,
      } | null,
      start_time: string | null,
      id: string | null,
      event_times:  Array< {
        __typename: "FBTime",
        start_time: string | null,
        end_time: string | null,
        id: string | null,
        ticket_uri: string | null,
      } | null > | null,
    } | null > | null,
    paging:  {
      __typename: "FBPaging",
      cursors:  {
        __typename: "FBCursors",
        before: string | null,
        after: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetInstagramByLocationQueryVariables = {
  locationId?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInstagramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetInstagramByLocationQuery = {
  getInstagramByLocation:  {
    __typename: "ModelInstagramConnection",
    items:  Array< {
      __typename: "Instagram",
      id: string,
      locationId: string | null,
      thumbnails:  Array< {
        __typename: "InstagramThumbnail",
        src: string | null,
        config_width: number | null,
        config_height: number | null,
      } | null > | null,
      altText: string | null,
      timestamp: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListLivestreamsQueryVariables = {
  filter?: ModelLivestreamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLivestreamsQuery = {
  listLivestreams:  {
    __typename: "ModelLivestreamConnection",
    items:  Array< {
      __typename: "Livestream",
      id: string,
      date: string | null,
      startTime: string | null,
      videoStartTime: string | null,
      endTime: string | null,
      prerollYoutubeId: string | null,
      liveYoutubeId: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CheckIfNotesExistQueryVariables = {
  id: string,
};

export type CheckIfNotesExistQuery = {
  getNotes:  {
    __typename: "Notes",
    id: string,
  } | null,
};

export type GetNotesNoContentQueryVariables = {
  id: string,
};

export type GetNotesNoContentQuery = {
  getNotes:  {
    __typename: "Notes",
    id: string,
    title: string | null,
    episodeDescription: string | null,
    episodeNumber: number | null,
    seriesId: string,
    pdf: string | null,
    topics: Array< string | null > | null,
    tags: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNotesQueryVariables = {
  id: string,
};

export type GetNotesQuery = {
  getNotes:  {
    __typename: "Notes",
    id: string,
    title: string | null,
    content: string | null,
    questions: string | null,
    jsonContent: string | null,
    jsonQuestions: string | null,
    episodeDescription: string | null,
    episodeNumber: number | null,
    seriesId: string,
    pdf: string | null,
    topics: Array< string | null > | null,
    tags: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    verses:  {
      __typename: "ModelVerseConnection",
      items:  Array< {
        __typename: "Verse",
        id: string,
        key: string,
        offset: number,
        length: number,
        dataType: NoteDataType,
        content: string,
        youVersionUri: string,
        noteId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetVideoByVideoTypeQueryVariables = {
  videoTypes?: string | null,
  publishedDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetVideoByVideoTypeQuery = {
  getVideoByVideoType:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      createdBy: string | null,
      createdDate: string | null,
      episodeTitle: string | null,
      originalEpisodeTitle: string | null,
      episodeNumber: number | null,
      seriesTitle: string | null,
      publishedDate: string | null,
      recordedDate: string | null,
      description: string | null,
      closedCaptioning: Array< string | null > | null,
      referencedMedia: Array< string | null > | null,
      campaigns: Array< string | null > | null,
      bibleVerses: Array< string | null > | null,
      topics: Array< string | null > | null,
      qandeh: Array< string | null > | null,
      length: string | null,
      YoutubeIdent: string,
      Youtube:  {
        __typename: "YoutubePlaylistItemsItem2",
        id: string | null,
        kind: string | null,
        etag: string | null,
        snippet:  {
          __typename: "YoutubeSnippet",
          publishedAt: string | null,
          channelId: string | null,
          title: string | null,
          description: string | null,
          thumbnails:  {
            __typename: "YoutubeThumbnails",
            default:  {
              __typename: "YoutubeThumbnail",
              url: string | null,
              width: number | null,
              height: number | null,
            } | null,
            medium:  {
              __typename: "YoutubeThumbnail",
              url: string | null,
              width: number | null,
              height: number | null,
            } | null,
            high:  {
              __typename: "YoutubeThumbnail",
              url: string | null,
              width: number | null,
              height: number | null,
            } | null,
            standard:  {
              __typename: "YoutubeThumbnail",
              url: string | null,
              width: number | null,
              height: number | null,
            } | null,
            maxres:  {
              __typename: "YoutubeThumbnail",
              url: string | null,
              width: number | null,
              height: number | null,
            } | null,
          } | null,
          channelTitle: string | null,
          localized:  {
            __typename: "YoutubeLocalized",
            title: string | null,
            description: string | null,
          } | null,
        } | null,
        contentDetails:  {
          __typename: "YoutubePlaylistItemDetails",
          videoId: string | null,
          videoPublishedAt: string | null,
          duration: string | null,
          dimension: string | null,
          definition: string | null,
          caption: string | null,
          licensedContent: boolean | null,
          projection: string | null,
        } | null,
        status:  {
          __typename: "YoutubeStatus",
          uploadStatus: string | null,
          privacyStatus: string | null,
          license: string | null,
          embeddable: boolean | null,
          publicStatsViewable: boolean | null,
        } | null,
      } | null,
      videoTypes: string | null,
      notesURL: string | null,
      videoURL: string | null,
      audioURL: string | null,
      speakers:  {
        __typename: "ModelSpeakerVideosConnection",
        items:  Array< {
          __typename: "SpeakerVideos",
          id: string,
          speaker:  {
            __typename: "Speaker",
            id: string,
            name: string | null,
            image: string | null,
            videos:  {
              __typename: "ModelSpeakerVideosConnection",
              items:  Array< {
                __typename: "SpeakerVideos",
                id: string,
              } | null > | null,
              nextToken: string | null,
            } | null,
          } | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      series:  {
        __typename: "Series",
        id: string,
        seriesType: string | null,
        title: string | null,
        description: string | null,
        image: string | null,
        startDate: string | null,
        endDate: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListSpeakersNoVideosQueryVariables = {
  filter?: ModelSpeakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeakersNoVideosQuery = {
  listSpeakers:  {
    __typename: "ModelSpeakerConnection",
    items:  Array< {
      __typename: "Speaker",
      id: string,
      name: string | null,
      hidden: boolean | null,
      image: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListSpeakersQueryVariables = {
  filter?: ModelSpeakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeakersQuery = {
  listSpeakers:  {
    __typename: "ModelSpeakerConnection",
    items:  Array< {
      __typename: "Speaker",
      id: string,
      name: string | null,
      hidden: boolean | null,
      image: string | null,
      videos:  {
        __typename: "ModelSpeakerVideosConnection",
        items:  Array< {
          __typename: "SpeakerVideos",
          id: string,
          video:  {
            __typename: "Video",
            publishedDate: string | null,
            description: string | null,
            audioURL: string | null,
            YoutubeIdent: string,
            id: string,
            episodeTitle: string | null,
            episodeNumber: number | null,
            seriesTitle: string | null,
            Youtube:  {
              __typename: "YoutubePlaylistItemsItem2",
              snippet:  {
                __typename: "YoutubeSnippet",
                thumbnails:  {
                  __typename: "YoutubeThumbnails",
                  default:  {
                    __typename: "YoutubeThumbnail",
                    url: string | null,
                  } | null,
                  medium:  {
                    __typename: "YoutubeThumbnail",
                    url: string | null,
                  } | null,
                  high:  {
                    __typename: "YoutubeThumbnail",
                    url: string | null,
                  } | null,
                  standard:  {
                    __typename: "YoutubeThumbnail",
                    url: string | null,
                  } | null,
                  maxres:  {
                    __typename: "YoutubeThumbnail",
                    url: string | null,
                  } | null,
                } | null,
              } | null,
              contentDetails:  {
                __typename: "YoutubePlaylistItemDetails",
                videoId: string | null,
              } | null,
            } | null,
          } | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
