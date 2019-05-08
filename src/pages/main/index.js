import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    addSoma: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })).isRequired,
  };

  state = {
    repositoryInput: '',
    number: 0,
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    this.props.addFavorite();
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Github</a>
            </li>
          ))}
        </ul>

        <br />

        <h3>{this.props.number}</h3>
        <input
          type="number"
          value={this.state.number}
          onChange={e => this.setState({ number: e.target.value })}
        />
        <button onClick={() => this.props.somar(this.state.number)}>Somar</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  number: state.favorites.number,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
