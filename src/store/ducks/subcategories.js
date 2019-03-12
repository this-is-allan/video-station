import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  requestSubcategories: [],
  successSubcategories: ["subcategories"],
  toggleSubcategory: ["subcategory"],
  toggleVideo: ["video"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  activeSubcategory: "",
  activeVideo: [],
  loading: false,
  data: [],
  error: null
};

const request = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.subcategories,
  activeSubcategory: action.subcategories[0].name
});

const toggle = (state = INITIAL_STATE, action) => ({
  ...state,
  activeSubcategory: action.subcategory
});

const video = (state = INITIAL_STATE, action) => ({
  ...state,
  activeVideo: action.video
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_SUBCATEGORIES]: request,
  [Types.SUCCESS_SUBCATEGORIES]: success,
  [Types.TOGGLE_SUBCATEGORY]: toggle,
  [Types.TOGGLE_VIDEO]: video
});
