import { all, takeEvery, takeLatest, put, call } from "redux-saga/effects";
import {
  Creators as SubcategoriesActions,
  Types
} from "../store/ducks/subcategories";

import Vimeo from "../services/vimeo";

function* fetchSubcategories() {
  try {
    const response = yield call(Vimeo.subcategories.getAll);
    yield put(
      SubcategoriesActions.successSubcategories(response.subcategories)
    );
  } catch (e) {}
}

export default function* root() {
  yield all([
    yield takeLatest(Types.REQUEST_SUBCATEGORIES, fetchSubcategories)
  ]);
}
