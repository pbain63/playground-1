const img = document.querySelector("img");

async function getCats() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=JxoghZbdsbGeUxaK82pDSgRxEX40cj8U&s=cats"
    );
    const catData = await response.json();

    img.src = catData.data.images.fixed_width.webp;
    console.log(img.src);
  } catch (error) {
    console.error(error);
  }
}
getCats();
