import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import {
  GetNotesQuery,
  GetNotesNoContentQuery,
  CheckIfNotesExistQuery,
} from './graphql/API';
import {
  checkIfNotesExistQuery,
  getNotes,
  getNotesNoContent,
} from './graphql/queries';

export default class NotesService {
  static loadNotes = async (
    date: string
  ): Promise<GetNotesQuery['getNotes']> => {
    const notes = (await API.graphql(
      graphqlOperation(getNotes, { id: date })
    )) as GraphQLResult<GetNotesQuery>;
    return notes.data?.getNotes ?? null;
  };

  static loadNotesNoContent = async (
    date: string
  ): Promise<GetNotesNoContentQuery['getNotes']> => {
    const notes = (await API.graphql(
      graphqlOperation(getNotesNoContent, { id: date })
    )) as GraphQLResult<GetNotesQuery>;
    return notes.data?.getNotes ?? null;
  };

  static checkIfNotesExist = async (date: string): Promise<boolean> => {
    const notes = (await API.graphql(
      graphqlOperation(checkIfNotesExistQuery, { id: date })
    )) as GraphQLResult<CheckIfNotesExistQuery>;
    return Boolean(notes.data?.getNotes?.id);
  };
}
