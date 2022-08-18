// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
/*moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
    console.log("Element has been moved");
  });*/

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

  function boxMove(x,targetPosition) {  
    return {
        x: targetPosition.x - (x.getBoundingClientRect()).left,
        y: targetPosition.y - (x.getBoundingClientRect()).top
    }
}

const redBoxTarget = boxMove(redBox, { x: 20, y: 300 });
const blueBoxTarget = boxMove(blueBox, { x: 400, y: 300 });
const greenBoxTarget = boxMove(greenBox, { x: 400, y: 20 });
const originalPosition = {x:0,y:0};


  function translateOneByOne(){
    moveElement(redBox, redBoxTarget)
      .then(()=>{
          console.log("Red element has been moved");
          moveElement(blueBox,blueBoxTarget)
          .then(()=>{
              console.log("Blue element has been moved");
              moveElement(greenBox,greenBoxTarget)
              .then (()=> {
                console.log("Green element has been moved");
                translateAllBack()
                // @ts-ignore
                .then(()=>{
                    translateAllAtOnce()
                }).catch((error)=> console.log("TranslateAllAtOnce function got Error"))
              }) .catch((error)=> console.log("Green element went wrong position"))
          }) .catch((error) => console.log ("Blue element went wrong position"))
      }).catch((error) => console.log("Red element went wrong position"));
  }
translateOneByOne();

 async function translateAllBack(){
  await moveElement(redBox,originalPosition);
  await moveElement(blueBox,originalPosition);
  await moveElement(greenBox,originalPosition);
console.log('All elements has been moved back');

}

function translateAllAtOnce(){
    Promise.all([moveElement(redBox,redBoxTarget),
                moveElement(blueBox,blueBoxTarget),
                moveElement(greenBox,greenBoxTarget)])
    .then((values)=> {
        console.log('All elements has been moved at once');

    });
}
