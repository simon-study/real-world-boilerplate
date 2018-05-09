/*
 *
 * ArticleListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  articles: []
});

const articleListContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case 'FETCH_ARTICLES_SUCCESS': 
      // console.log(action.payload.articles)
      return state;
      
        // articles.concat(action.payload.articles)
      
      
      console.log(state)
    default:
      return state;
  }
}

export default articleListContainerReducer;
