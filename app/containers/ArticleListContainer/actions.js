/*
 *
 * ArticleListContainer actions
 *
 */

import {
  DEFAULT_ACTION, API_REQUEST_ARTICLES
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchArticles() {
  return {
    type: API_REQUEST_ARTICLES
  }
}
