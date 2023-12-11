import { createOptimizedPicture } from "../../scripts/aem.js";

const svgCode = `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="&#240;&#159;&#166;&#134; icon &#34;format quote&#34;">
        <path id="Vector" d="M48.0001 18.6667L40.0001 18.6667L34.6668 29.3334L34.6668 45.3334L50.6668 45.3334L50.6668 29.3334L42.6668 29.3334L48.0001 18.6667ZM26.6668 18.6667L18.6668 18.6667L13.3335 29.3334L13.3335 45.3334L29.3335 45.3334L29.3335 29.3334L21.3335 29.3334L26.6668 18.6667Z" fill="white"/>
      </g>
    </svg>
  `;

export default function decorate(block) {
  const button = block.querySelector(".button-container > a");
  const textDiv = block.querySelector(".banner.block > div > div:first-child");
  const imgDiv = block.querySelector(".banner.block > div > div:nth-child(2)");
  //handle no image
  if (imgDiv.innerHTML === "") {
    console.log("div has no image");
    textDiv.style.backgroundColor = "rgba(64, 64, 65, 1)";
  }
  //handle quote
  if (textDiv.firstElementChild.innerHTML.toLowerCase() === "quote") {
    textDiv.classList.add("quote-block");
    block.parentElement.classList.add("quote-wrapper");
    textDiv.firstElementChild.innerHTML = svgCode;
  }
  //handle image
  if (imgDiv.innerHTML !== "") {
    const pictureEl = imgDiv.firstElementChild;
    const imgEl = pictureEl.lastElementChild;
    pictureEl.replaceWith(createOptimizedPicture(imgEl.src, imgEl.alt, false, [{ media: "(min-width: 1440px)", width: "2000" }]));
  }
  if (button) {
    button.classList = "new-button";
  }
}
