const initialState = {
  matches: [],
  error: false,
  loading: true,
};

export default function matchReducer(state = initialState, action) {
  if (action.type === "SET_MATCHES") {
    return { ...state, matches: action.payload };
  }

  if (action.type === "SET_ERROR") {
    return { ...state, error: action.payload };
  }

  if (action.type === "SET_LOADING") {
    return { ...state, loading: action.payload };
  }

  return state;
}
