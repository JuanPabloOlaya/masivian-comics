/* eslint-disable no-unused-vars */
import ComicApi from '@/api/ComicApi';
import types from './types';

export default {
  [types.actions.GET_COMIC]({ commit, state, dispatch }, payload) {
    const { reviewedsComics } = state;
    const comic = reviewedsComics[payload];

    dispatch(types.actions.UPDATE_IS_LOADING, true);
    if (!comic) {
      ComicApi.getComic(payload)
        .then((response) => {
          const { data } = response;

          data.rate = 0;

          commit(types.mutations.SET_ACTUAL_COMIC, data);

          dispatch(types.actions.ADD_REVIEWED_COMIC, data);
        })
        .catch((error) => console.error(error))
        .finally(() => dispatch(types.actions.UPDATE_IS_LOADING, false));
    } else {
      commit(types.mutations.SET_ACTUAL_COMIC, comic);
      dispatch(types.actions.UPDATE_IS_LOADING, false);
    }
  },
  [types.actions.ADD_REVIEWED_COMIC]({ commit, state }, payload) {
    const { reviewedsComics } = state;
    const reviewedsComicsClone = { ...reviewedsComics };
    reviewedsComicsClone[payload.num] = payload;

    commit(types.mutations.SET_REVIEWEDS_COMICS, reviewedsComicsClone);
  },
  [types.actions.REMOVE_REVIEWED_COMIC]({ commit, state }, payload) {
    const { reviewedsComics } = state;
    const reviewedsComicsClone = { ...reviewedsComics };
    delete reviewedsComicsClone[payload];

    commit(types.mutations.SET_REVIEWEDS_COMICS, reviewedsComicsClone);
  },
  [types.actions.GET_LATEST_NUM]({ commit }, payload) {
    ComicApi.getLatestComic().then((response) => {
      const { data } = response;
      commit(types.mutations.SET_LATEST_NUM, data.num);
    }).catch((error) => console.log(error));
  },
  [types.actions.UPDATE_ACTUAL_COMIC]({ commit, dispatch }, payload) {
    commit(types.mutations.SET_ACTUAL_COMIC, payload);
    dispatch(types.actions.ADD_REVIEWED_COMIC, payload);
  },
  [types.actions.UPDATE_IS_LOADING]({ commit }, payload) {
    commit(types.mutations.SET_IS_LOADING, payload);
  },
  [types.actions.UPDATE_KEY_WORD]({ commit }, payload) {
    commit(types.mutations.SET_KEY_WORD, payload);
  },
  [types.actions.UPDATE_SORT_TYPE]({ commit, state }, payload) {
    const { sortMode } = state;
    const newSortMode = sortMode === 1 ? 0 : 1;

    commit(types.mutations.SET_SORT_TYPE, newSortMode);
  },
};
