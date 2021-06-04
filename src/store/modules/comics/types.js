export default {
  PATH: '@module/comics',
  getters: {
    GET_FILTERED_COMICS: '@getters/getFilteredComics',
  },
  mutations: {
    SET_ACTUAL_COMIC: '@mutations/setActualComic',
    ADD_REVIEWED_COMIC: '@mutations/addReviewedComic',
    REMOVE_REVIEWED_COMIC: '@mutations/removeReviewedComic',
    SET_SORT_TYPE: '@mutations/setSortType',
  },
  actions: {
    UPDATE_ACTUAL_COMIC: '@actions/updateActualComic',
    ADD_REVIEWED_COMIC: '@actions/addReviewedComic',
    REMOVE_REVIEWED_COMIC: '@actions/removeReviewedComic',
    UPDATE_SORT_TYPE: '@actions/updateSortType',
    GET_COMIC: '@actions/getComic',
  },
};
