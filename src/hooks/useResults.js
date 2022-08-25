import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  debugger;
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {      
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });      
      setResults(response.data.businesses);
      setErrorMessage(null);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
