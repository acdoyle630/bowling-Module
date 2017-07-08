/*jshint esversion:6*/

  let ball = 1;
  let frame = 1;
  let strike = false;
  let spare = false;
  let score = 0;
  let frameOver = false;
  let currentFrame = [];

function bowling (roll){
  if(frame > 0 && frame <10){

    if(ball === 2 && strike === false && spare === false){
      score += roll;
      ball = 1;
      currentFrame.push(roll);
      frame ++;
      frameOver = true;
      if(currentFrame[0] + currentFrame[1] === 10 ){
        spare = true;
        currentFrame = [];
      }
      else {
        currentFrame = [];
      }
    }
    if(ball === 2 && strike === true){
      score += roll *2;
      ball = 1;
      currentFrame.push(roll);
      frame ++;
      frameOver = true;
      strike = false;
      if(currentFrame[0] + currentFrame[1] === 10){
        spare = true;
        currentFrame = [];
      }
      else {
        currentFrame = [];
      }
    }
    if(ball === 1 && spare === false && strike === false && frameOver === false){
      score += roll;
      ball ++;
      currentFrame.push(roll);
      if(roll === 10){
        strike = true;
        currentFrame = [];
      }
    }
    if(ball === 1 && spare === true && frameOver === false){
      score += roll * 2;
      ball ++;
      currentFrame.push(roll);
      spare = false;
      if(roll === 10){
        strike = true;
        currentFrame = [];
      }
    }
    if(ball === 1 && strike === true && frameOver === false){
      score += roll * 2;
      ball ++;
      currentFrame.push(roll);
      if(roll === 10){
        strike = true;
        currentFrame = [];
      }
    }
    frameOver = false;
  }
  return `score ${score}, ball ${ball}, frame ${frame}, strike ${strike}, spare ${spare}, currentFrame ${currentFrame}`;
}

console.log(bowling(1));
console.log(bowling(9));
console.log(bowling(7));
console.log(bowling(1));
console.log(bowling(10));
console.log(bowling(2));
console.log(bowling(2));
console.log(bowling(8));
console.log(bowling(2));
console.log(bowling(2));


