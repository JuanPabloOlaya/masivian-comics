/* eslint-disable no-unused-vars */
import ComicApi from '@/api/ComicApi';
import types from './types';

export default {
  [types.actions.GET_COMIC]({ commit, state, dispatch }, payload) {
    ComicApi.getComic(payload)
      .then((response) => {
        const { data } = response;

        let { actualComic } = state;
        actualComic = { ...actualComic, ...data };

        commit(types.mutations.SET_ACTUAL_COMIC, actualComic);

        dispatch(types.actions.ADD_REVIEWED_COMIC, actualComic);
      })
      .catch((error) => console.error(error));
  },
  [types.actions.ADD_REVIEWED_COMIC]({ commit, state }, payload) {
    const { reviewedsComics } = state;
    reviewedsComics[payload.num] = payload;

    commit(types.mutations.SET_REVIEWEDS_COMICS, reviewedsComics);
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
};
