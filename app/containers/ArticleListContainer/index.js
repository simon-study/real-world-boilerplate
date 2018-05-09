/**
 *
 * ArticleListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArticleListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchArticles } from './actions'

export class ArticleListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    console.log('componentWillMount')
    this.props.fetchArticles()
  }

  render() {
    return (
      // <div>
      //   <Helmet>
      //     <title>ArticleListContainer</title>
      //     <meta name="description" content="Description of ArticleListContainer" />
      //   </Helmet>
      //   <FormattedMessage {...messages.header} />
      // </div>
      <div>
        Article Container
      </div>
    );
  }
}

ArticleListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articlelistcontainer: makeSelectArticleListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
    },
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'articleListContainer', reducer });
const withSaga = injectSaga({ key: 'articleListContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticleListContainer);
