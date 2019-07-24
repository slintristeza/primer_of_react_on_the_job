import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { GithubAction } from './actions/github';
import * as ActionType from './actions/githubConstants';
import * as Model from './services/github/models';

export interface GithubState {
  users: Model.User[];
  repositories: Model.Repository[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: GithubState = {
  users: [],
  repositories: [],
  isLoading: false,
};

const githubReducer: Reducer<GithubState, GithubAction> = (
  state: GithubState = initialState,
  action: GithubAction,
): GithubState => {
  switch (action.type) {
    // Get Members
    case ActionType.GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true,
      };
    case ActionType.GET_MEMBERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false,
      };
    case ActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    // Search Repositories
    case ActionType.SEARCH_REPOSITORIES_START:
      return {
        ...state,
        repositories: [],
        isLoading: true,
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCEED:
      return {
        ...state,
        repositories: action.payload.result.repositories,
        isLoading: false,
      };
    case ActionType.SEARCH_REPOSITORIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      const _: never = action;

      return state;
    }
  }
};

export default githubReducer;
