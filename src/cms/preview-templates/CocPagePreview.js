import React from 'react'
import PropTypes from 'prop-types'
import CocPageTemplate from '../../components/CocPageTemplate'

const CocPagePreview = ({ entry, widgetFor }) => (
  <CocPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
);

CocPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CocPagePreview
