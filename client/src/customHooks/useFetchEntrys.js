import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default (token, setEntrysData, dispatch) => {
  const sessionToken = sessionStorage.getItem("token");
  const _token = token || sessionToken;

  const fetchPosts = async () => {
    if (_token) {
      const user_data = jwt_decode(_token);
      const headers = { "access-token": _token };

      dispatch({ type: "STORE_DATA", payload: user_data });
      dispatch({ type: "LOADING", payload: true });

      await axios
        .post("/api/posts/all", { user: user_data.id }, { headers })
        .then(res => {
          const filteredData = res.data.map(entry => {
            const keys = Object.keys(entry).filter(
              key => key === "_id" || key === "title" || key === "text"
            );
            const obj = {};
            keys.map(key => (obj[key] = entry[key]));
            return obj;
          });
          setEntrysData(filteredData);
        })
        .then(() => dispatch({ type: "LOADING", payload: false }))
        .catch(err => console.log(err));
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [token]);
};
