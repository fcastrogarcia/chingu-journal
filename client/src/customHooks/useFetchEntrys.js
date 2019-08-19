import { useEffect } from "react";
import axios from "axios";

export default (token, setEntrysData) => {
  const localToken = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user_id");

  const fetchPosts = async () => {
    if (token || localToken) {
      const headers = { "access-token": token || localToken };
      await axios.post("/api/posts/all", { user }, { headers }).then(res => {
        const filteredData = res.data.map(entry => {
          const keys = Object.keys(entry).filter(
            key => key === "_id" || key === "title" || key === "text"
          );
          const obj = {};
          keys.map(key => (obj[key] = entry[key]));
          return obj;
        });
        setEntrysData(filteredData);
      });
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [token]);
};
