import { createSelector } from 'reselect';

/**
 * Direct selector to the articleListContainer state domain
 */
const selectArticleListContainerDomain = (state) => state.get('articleListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ArticleListContainer
 */

const makeSelectArticleListContainer = () => createSelector(
  selectArticleListContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectArticleListContainer;
export {
  selectArticleListContainerDomain,
};
