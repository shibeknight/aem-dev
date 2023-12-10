import { createOptimizedPicture } from "../../scripts/aem.js";

export default function decorate(block) {
  
  const button = block.querySelector('.button-container > a');
  const textDiv = block.querySelector('.banner.block > div > div:first-child')
  const imgDiv = block.querySelector('.banner.block > div > div:nth-child(2)')
  console.log('img div ', imgDiv)
  console.log('button ', button)
  if(imgDiv.innerHTML === '') {
    console.log('div has no image')
    textDiv.style.backgroundColor = 'rgba(64, 64, 65, 1)'

  }
  button.classList = ' new-button'
  
  console.log("block is here ", block);
}
