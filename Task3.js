
const { filterItems } = require("./utils.js");

async function fetchAllPosts() {
  try {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!result.ok) {
      throw new Error(`HTTP Error: ${result.status}`);
    }

    const postsList = await result.json();

    const matchingPosts = filterItems(
      postsList,
      (item) => item.title.length < 25
    );

    console.log(
      "Posts with titles shorter than 25 characters:",
      matchingPosts
    );

  } catch (err) {
    console.error("Request Failed:", err);
  }
}

fetchAllPosts();
