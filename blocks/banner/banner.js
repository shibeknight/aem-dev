import { createOptimizedPicture } from "../../scripts/aem.js";

export default function decorate(block) {
  const items = [...block.firstElementChild.children];
  console.log('items in block ', items)
  const bannerImgDiv = document.querySelector('.banner picture');
  console.log('banner img ', bannerImgDiv)
  //   const cols = [...block.firstElementChild.children];
  //   block.classList.add(`columns-${cols.length}-cols`);

  //   // setup image columns
  //   [...block.children].forEach((row) => {
  //     [...row.children].forEach((col) => {
  //       const pic = col.querySelector("picture");
  //       if (pic) {
  //         const picWrapper = pic.closest("div");
  //         if (picWrapper && picWrapper.children.length === 1) {
  //           // picture is only content in column
  //           picWrapper.classList.add("columns-img-col");
  //         }
  //       }
  //     });
  //   });
  console.log("block is here ", block);
}
