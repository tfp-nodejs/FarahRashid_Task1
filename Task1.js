
async function fetchSinglePost() {
  try {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!result.ok) {
      throw new Error(`HTTP Error: ${result.status}`);
    }

    const post = await result.json();

    const matchingPosts = post.title.length < 25 ? [post] : [];

    console.log(
      "Posts with titles shorter than 25 characters:",
      matchingPosts
    );

  } catch (err) {
    console.error("Request Failed:", err);
  }
}

fetchSinglePost();
