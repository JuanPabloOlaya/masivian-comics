export default {
  PATH: '@module/comics',
  getters: {
    GET_FILTERED_COMICS: '@getters/getFilteredComics',
  },
  mutations: {
    SET_ACTUAL_COMIC: '@mutations/setActualComic',
    SET_REVIEWEDS_COMICS: '@mutations/setReviewedComics',
    SET_SORT_TYPE: '@mutations/setSortType',
    SET_LATEST_NUM: '@mutations/setLatestNum',
  },
  actions: {
    UPDATE_ACTUAL_COMIC: '@actions/updateActualComic',
    ADD_REVIEWED_COMIC: '@actions/addReviewedComic',
    REMOVE_REVIEWED_COMIC: '@actions/removeReviewedComic',
    UPDATE_SORT_TYPE: '@actions/updateSortType',
    GET_COMIC: '@actions/getComic',
    GET_LATEST_NUM: '@action/getLatestNum',
  },
};
