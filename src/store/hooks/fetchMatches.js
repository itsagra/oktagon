import axios from "../../axios";
import { setMatch, setError, setLoading } from "../actions";

export default function fetchMatches() {
  return (dispatch) => {
    console.log("masuk");
    axios
      .get("/football/match/matchfixtures", { params: { date: "20211015" } })
      .then(({ data }) => {
        dispatch(setMatch(data.data));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
