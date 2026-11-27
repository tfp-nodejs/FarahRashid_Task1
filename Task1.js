// كنت حاطة التعديلات ع  نفس الملف بعدها اكتشفت انك ما بتشوف التاسكات اول بأول :)

async function fetchPost() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!result.ok) {
      throw new Error("Something went wrong: " + result.status);
    }

    const postData = await result.json();

    const shortTitles = Array.isArray(postData)
      ? postData.filter(item => item.title.length < 25)
      : [];

    console.log(
      "Posts with titles shorter than 25 characters:",
      shortTitles
    );

  } catch (err) {
    console.error("Request Failed:", err);
  }
}

fetchPost();
