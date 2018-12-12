import { all, takeLatest } from 'redux-saga/effects';
import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

export default function* rootSata() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
