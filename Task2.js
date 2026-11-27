async function fetchPosts() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!result.ok) {
      throw new Error("HTTP Error: " + result.status);
    }

    const postsData = await result.json();

    const shortTitles = postsData.filter(function(post) {
      return post.title.length < 25;
    });

    console.log("Posts with titles shorter than 25 characters:", shortTitles);

  } catch (err) {
    console.error("Request Failed:", err);
  }
}

fetchPosts();
