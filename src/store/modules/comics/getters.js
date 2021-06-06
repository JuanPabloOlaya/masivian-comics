import types from './types';

export default {
  [types.getters.GET_FILTERED_COMICS](state) {
    const { reviewedsComics } = state;

    return Object.values(reviewedsComics);
  },
};
