// add 1 button and 2 input elements in innerHTML

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchGiphy");
const numberInput = document.getElementById("numberInput");
const gifImages = document.getElementById("gifImages");
let giphyUrl;

function getGiphy() {
  fetch(giphyUrl)
    .then((response) => response.json())
    .then((gifData) => {
      gifData.data.forEach((gify) => {
        const image = document.createElement("img");
        const br = document.createElement("br");
        image.setAttribute("src", `${gify.images.fixed_width.url}`);
        gifImages.appendChild(image);
        gifImages.appendChild(br);
      });
    });
}

function searchGiphy() {
  gifImages.innerHTML = "";
  // @ts-ignore
  const searchValue = searchInput.value;
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${searchValue}&limit=25`;
  getGiphy();
}

function numberOfGiphys() {
  gifImages.innerHTML = "";
  // @ts-ignore

  const searchValue = searchInput.value;
 // @ts-ignore
  let numberOfGifs = numberInput.value;
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${searchValue}&limit=${numberOfGifs}`;
  getGiphy();
}

searchButton.addEventListener("click", searchGiphy);
numberInput.addEventListener("input", numberOfGiphys);