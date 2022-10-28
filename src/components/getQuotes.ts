import axios from "axios";

export const getQuotes = async () => {
  const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "10" },
    headers: {
      "X-RapidAPI-Key": "c70b672410msh4c10651c3c3fcb3p15b0a1jsna9ed39756583",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};
