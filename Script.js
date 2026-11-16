import { filterCostum } from './Utils.js';
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const filterCostumdata = data.filterCostum(data)

    console.log("Posts titles < 25 characters:", filterCostum);

  } catch (error) {
    console.error("AJAX Request Failed:", error);
  }
}

getPost();
