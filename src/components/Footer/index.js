import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ count }) => (
  <Fragment>
    <p>
      Você tem <span>{count} </span>
      favoritos.
    </p>
  </Fragment>
);

Footer.propTypes = {
  count: propTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
