/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  comment?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  noteType?: ModelNoteDataTypeFilterInput | null,
  commentType?: ModelCommentDataTypeFilterInput | null,
  noteId?: ModelStringFilterInput | null,
  textSnippet?: ModelStringFilterInput | null,
  imageUri?: ModelStringFilterInput | null,
  key?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  time?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelNoteDataTypeFilterInput = {
  eq?: NoteDataType | null,
  ne?: NoteDataType | null,
};

export enum NoteDataType {
  questions = "questions",
  notes = "notes",
}


export type ModelCommentDataTypeFilterInput = {
  eq?: CommentDataType | null,
  ne?: CommentDataType | null,
};

export enum CommentDataType {
  biblePassage = "biblePassage",
  image = "image",
  text = "text",
}


export type ModelSpeakerFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  hidden?: ModelBooleanFilterInput | null,
  and?: Array< ModelSpeakerFilterInput | null > | null,
  or?: Array< ModelSpeakerFilterInput | null > | null,
  not?: ModelSpeakerFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateCommentInput = {
  id?: string | null,
  comment: string,
  tags?: Array< string | null > | null,
  noteType: NoteDataType,
  commentType: CommentDataType,
  noteId: string,
  textSnippet?: string | null,
  imageUri?: string | null,
  key: string,
  date: string,
  time: string,
  owner: string,
};

export type UpdateCommentInput = {
  id: string,
  comment?: string | null,
  tags?: Array< string | null > | null,
  noteType?: NoteDataType | null,
  commentType?: CommentDataType | null,
  noteId?: string | null,
  textSnippet?: string | null,
  imageUri?: string | null,
  key?: string | null,
  date?: string | null,
  time?: string | null,
  owner?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type PopularTeachingQueryVariables = {
  videoTypes?: string | null,
  publishedDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PopularTeachingQuery = {
  getVideoByVideoType:  {
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
      viewCount: string | null,
      YoutubeIdent: string,
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
      } | null,
      videoTypes: string | null,
      notesURL: string | null,
      videoURL: string | null,
      audioURL: string | null,
    } | null > | null,
    nextToken: string | null,
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
      episodeTitle: string | null,
      episodeNumber: number | null,
      seriesTitle: string | null,
      series:  {
        __typename: "Series",
        id: string,
        title: string | null,
      } | null,
      speakers:  {
        __typename: "ModelSpeakerVideosConnection",
        items:  Array< {
          __typename: "SpeakerVideos",
          speaker:  {
            __typename: "Speaker",
            id: string,
          } | null,
        } | null > | null,
      } | null,
      publishedDate: string | null,
      description: string | null,
      length: string | null,
      viewCount: string | null,
      YoutubeIdent: string,
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
      } | null,
      videoTypes: string | null,
      notesURL: string | null,
      videoURL: string | null,
      audioURL: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type AllSermonsQueryVariables = {
  videoTypes?: string | null,
  publishedDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AllSermonsQuery = {
  getVideoByVideoType:  {
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
      viewCount: string | null,
      YoutubeIdent: string,
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
      } | null,
      videoTypes: string | null,
      notesURL: string | null,
      videoURL: string | null,
      audioURL: string | null,
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
        notesURL: string | null,
        videoURL: string | null,
        audioURL: string | null,
        YoutubeIdent: string,
        videoTypes: string | null,
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
            channelTitle: string | null,
            localized:  {
              __typename: "YoutubeLocalized",
              title: string | null,
              description: string | null,
            } | null,
          } | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetCommentsByOwnerQueryVariables = {
  owner?: string | null,
  noteId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCommentsByOwnerQuery = {
  getCommentsByOwner:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
      tags: Array< string | null > | null,
      noteType: NoteDataType,
      commentType: CommentDataType,
      noteId: string,
      textSnippet: string | null,
      imageUri: string | null,
      key: string,
      date: string,
      time: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CommentExistsQueryVariables = {
  owner?: string | null,
  noteId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentExistsQuery = {
  getCommentsByOwner:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
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

export type GetTagsByOwnerQueryVariables = {
  owner?: string | null,
  noteId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTagsByOwnerQuery = {
  getCommentsByOwner:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      tags: Array< string | null > | null,
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

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    tags: Array< string | null > | null,
    noteType: NoteDataType,
    commentType: CommentDataType,
    noteId: string,
    textSnippet: string | null,
    imageUri: string | null,
    key: string,
    date: string,
    time: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    tags: Array< string | null > | null,
    noteType: NoteDataType,
    commentType: CommentDataType,
    noteId: string,
    textSnippet: string | null,
    imageUri: string | null,
    key: string,
    date: string,
    time: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    tags: Array< string | null > | null,
    noteType: NoteDataType,
    commentType: CommentDataType,
    noteId: string,
    textSnippet: string | null,
    imageUri: string | null,
    key: string,
    date: string,
    time: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
