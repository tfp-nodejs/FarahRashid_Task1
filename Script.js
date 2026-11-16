
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const filterCostum = data.filter(
      (post) => post.title.length < 25
    );

    console.log("Posts titles < 25 characters:", filterCostum);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPost();
