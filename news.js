import {fetchNews} from "./pwa.js";
document.addEventListener("DOMContentLoaded", async () =>{
    const newsContainer = document.getElementById("news-container");
    const articles = await fetchNews();

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No news Available.</p>";
        return;
    }
    newsContainer.innerHTML = articles
        .map(
            (article) => `
            <div class="news-article">
                <h3>${article.title}</h3>
                <p>${article.description || "no description available."}</p>
                <a href="${article.url}" target="_blank">read more</a>
            </div>
            `
        )
        .join("");
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.error("Service Worker Registration Failed:", error));
  }