import { createOptimizedPicture } from "../../scripts/aem.js";

export default function decorate(block) {
  
  const button = block.querySelector('.button-container > a');
  const textDiv = block.querySelector('.banner.block > div > div:first-child')
  const imgDiv = block.querySelector('.banner.block > div > div:nth-child(2)')
  console.log('text div ', textDiv)
  console.log('img div ', imgDiv)
  console.log('button ', button)
  //handle no image
  if(imgDiv.innerHTML === '') {
    console.log('div has no image')
    textDiv.style.backgroundColor = 'rgba(64, 64, 65, 1)'
  }
  //handle quote
  
  if(textDiv.firstElementChild.innerHTML.toLowerCase() === 'quote'){
    textDiv.firstElementChild.innerHTML = '<span>&#8220;</span>'
  }
  button.classList = ' new-button'
  
  console.log("block is here ", block);
}
