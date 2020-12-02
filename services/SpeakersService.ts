import { runGraphQLQuery } from './ApiService';
import { ListSpeakersQuery } from './API';

export type loadSpeakersListData = {
  items: NonNullable<ListSpeakersQuery['listSpeakers']>['items'];
  nextToken: NonNullable<ListSpeakersQuery['listSpeakers']>['nextToken']
}

export default class SpeakersService {

  static loadSpeakersList = async (limit = 9999, nextToken = null): Promise<loadSpeakersListData> => {
    const queryResult = await runGraphQLQuery({
      query: listSpeakersQuery,
      variables: { limit: limit, nextToken: nextToken },
    })
    console.log(queryResult.listSpeakers.items[1])
    queryResult.listSpeakers.items.sort((a: any, b: any) => {
      if (a.videos.items.length > b.videos.items.length) {
        return -1;
      } else if (a.videos.items.length < b.videos.items.length) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    return {
      items: queryResult.listSpeakers.items,
      nextToken: queryResult.listSpeakers.nextToken
    };
  }
}

export const listSpeakersQuery = `
  query ListSpeakers(
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        videos {
          items {
            id
            video{
              publishedDate
              description
              audioURL
              YoutubeIdent
              id
              episodeTitle
              episodeNumber
              seriesTitle
              Youtube{
                snippet {
                  thumbnails {
                    default {
                      url
                    }
                    medium {
                      url
                    }
                    high {
                      url
                    }
                    standard {
                      url
                    }
                    maxres {
                      url
                    }
                  }
                }
                contentDetails{
                  videoId
                }
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
  `;