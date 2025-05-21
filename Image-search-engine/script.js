const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMorwBtn = document.getElementById("showMore");


const AccessKey = "8r5rl4HcZCOtGEX76b-IH5TiAET8pTyX4xhHbqbvYbM";

let keyword = "";
let page = 1;

const showImage = (results) => {
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  const load=document.getElementsByClassName('.loader')[0];
  console.log(  
    searchResult.remove(load));

  showMorwBtn.style.display = "block";
};

const searchImage = async () => {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;
  const loader=document.createElement('h2');
  loader.classList.add('loader')
  loader.innerText='Loading...'
  searchResult.appendChild(loader);
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  if(results){
    showImage(results);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMorwBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
