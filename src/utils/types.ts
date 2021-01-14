import { GetVideoByVideoTypeQuery } from '../graphql/API';

export type VideoData = NonNullable<
  NonNullable<GetVideoByVideoTypeQuery['getVideoByVideoType']>['items']
>[0];
