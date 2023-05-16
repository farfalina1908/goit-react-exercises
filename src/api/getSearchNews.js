const BASE_URL = "https://newsapi.org/v2/everything"
const API_KEY = "0cfb3eb6e57c4a1d8ae951f26da2e138"

export const getSearchNews = (text) => {
   return fetch(`${BASE_URL}?q=${text}`, {
      headers: {
         "X-Api-Key": API_KEY,
      },
   })
      .then((res) => res.json())
      // .then(console.log)
}


