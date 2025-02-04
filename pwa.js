const apiKey = "TTOW7061pfoyDlYc6MtIC1fH0I6aNLgq5HwSpXBr"; // Replace with your actual API key
const url = `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=us&limit=10`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data; // TheNewsAPI returns articles inside a "data" array
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export { fetchNews };