
import { fromJS } from 'immutable';
import articleListContainerReducer from '../reducer';

describe('articleListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(articleListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
