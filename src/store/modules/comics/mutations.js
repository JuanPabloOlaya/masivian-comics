import types from './types';

export default {
  [types.mutations.SET_ACTUAL_COMIC](state, payload) {
    state.actualComic = payload;
  },
  [types.mutations.SET_REVIEWEDS_COMICS](state, payload) {
    state.reviewedsComics = payload;
  },
  [types.mutations.SET_LATEST_NUM](state, payload) {
    state.latestNum = payload;
  },
  [types.mutations.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
};
