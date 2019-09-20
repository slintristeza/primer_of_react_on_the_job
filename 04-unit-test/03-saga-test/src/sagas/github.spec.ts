import {expectSaga} from 'redux-saga-test-plan';
import {AxiosError} from 'axios';
import camelcaseKeys from 'camelcase-keys';

import reducer, {initialState} from '../reducer';
import {watchGetMembers, watchSearchRepositories} from './github';
import * as actions from '../actions/github';
import userData from '../services/github/__mocks__/users.json';
import repoData from '../services/github/__mocks__/repositories.json';

describe("GitHub API sagas' saga", () => {
  describe("Get members' saga", () => {
    const handler = jest.fn();
    const companyName = 'facebook';
    const params = { companyName };
    const users = camelcaseKeys(userData, { deep: true });

    it('should succeeded', async () => {
      handler.mockReturnValue(users);

      return expectSaga(watchGetMembers, handler)
        .withReducer(reducer as any)
        .put(actions.getMembers.succeed(params, { users }))
        .dispatch(actions.getMembers.start(params))
        .hasFinalState({ ...initialState, users })
        .silentRun(1);
    });
    
  })
})