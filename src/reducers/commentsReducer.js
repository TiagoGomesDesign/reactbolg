import { REQUEST_ALL_COMMENTS } from "../actions/actionTypes";

const comments = (state = [], action) => {
  switch (action.type) {
    case REQUEST_ALL_COMMENTS:
      return state.concat(action.comments)
    default:
      return state
  }
}

export default comments

