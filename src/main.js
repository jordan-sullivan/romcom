// class Cover {
//   constructor(coverImgSrc, title, descriptor1, descriptor2) {
//     this.id = Date.now();
//     this.cover = coverImgSrc;
//     this.title = title;
//     this.tagline1 = descriptor1;
//     this.tagline2 = descriptor2;
//   }
// }

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var currentCover = new Cover();
console.log(currentCover);

// Add your event listeners here 👇
window.onload = makeRandomBook();
//addEventListener(click, Cover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverImage.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

// We've provided a few variables below
// var savedCovers = [
// new Cover(
// "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
// "Sunsets and Sorrows",
// "sunsets",
// "sorrows"
//),
//];

//  return makeRandomBook() +  {
//console.log(curentCover);
