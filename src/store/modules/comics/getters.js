import types from './types';

export default {
  [types.getters.GET_FILTERED_COMICS](state) {
    const { reviewedsComics, keyWord, sortMode } = state;
    let arrReviewedsComics = Object.values(reviewedsComics);

    if (keyWord !== '') {
      arrReviewedsComics = arrReviewedsComics.filter((comic) => comic.safe_title.includes(keyWord));
    }

    return arrReviewedsComics.sort((a, b) => (sortMode === 1 ? b.rate - a.rate : a.rate - b.rate));
  },
};
