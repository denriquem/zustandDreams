import axios from "axios";

export const getQuotes = async () => {
  const options = {
    method: "GET",
    url: "https://famous-quotes4.p.rapidapi.com/random",
    params: { category: "imagination", count: "20" },
    headers: {
      "X-RapidAPI-Key": "c70b672410msh4c10651c3c3fcb3p15b0a1jsna9ed39756583",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};
