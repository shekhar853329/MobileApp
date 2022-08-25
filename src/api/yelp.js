import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer zfTSxaNN0HzGh24Usw9ScEECl6OCjxkJZOW7F44QPExpLfjt2DhlNW7PJ3Hfeaw4LCOR6n6SuNZ5Rn7ccilaqIggxbvuVF67F9D5aVujbz18QVkXICDjJPB8YqkFY3Yx",
  },
});
