let duration = 1000;
 let blocksContainer = document.querySelector(".memory-game-blocks")
 let blocks = Array.from(blocksContainer.children) // array (20 divs)
 let orderRange = Array.from(Array(blocks.length).keys())  // Array.from(Array(20).keys())
let endgame = document.querySelector(".end-game");

document.querySelector(".control-buttons span").onclick = function () {
  // Prompt Window To Ask For Name
  let yourName = prompt("Whats Your Name?")

  // If Name Is Empty
  if (yourName == null || yourName == "") {
    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = "Unknown"

    // Name Is Not Empty
  } else {
    // Set Name To Your Name
    document.querySelector(".name span").innerHTML = yourName
  }

  // Remove Splash Screen
  document.querySelector(".control-buttons").remove()

 
  abda(blocks)
}

 shuffle(orderRange)
 // let orderRange = [...Array(blocks.length).keys()]; arry(0==>19)



 function shuffle (array){
    let curr = array.length,
        temp,
        random;
        while(curr>0){
            random= Math.floor(Math.random()*curr)
            curr--;
            temp = array[curr]
            array[curr]=array[random]
            array[random] = temp
        }
        return array
 }

 blocks.forEach((block,index) => {
     block.style.order=orderRange[index]
     block.addEventListener('click',function(){
        flipBlock(block)
     })
    
 });

 function flipBlock (slecteDiv){
    slecteDiv.classList.add('is-flipped')

    let allflipeDiv = blocks.filter(flipped => flipped.classList.contains('is-flipped'))
    if (allflipeDiv.length === 2){
        stopClicking();

         checkMatchedBlocks(allflipeDiv[0], allflipeDiv[1]);

    }
 }
 function stopClicking(){
    blocksContainer.classList.add('no-clicking')
    setTimeout(()=>{

        blocksContainer.classList.remove('no-clicking')
    },1000)
 }

 function checkMatchedBlocks(firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match'); 

    document.getElementById('success').play();

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    
   if (parseInt(triesElement.innerHTML) >= 5){
     endGame()
     return
   }
     setTimeout(() => {
       firstBlock.classList.remove("is-flipped")
       secondBlock.classList.remove("is-flipped")
     }, duration)

  

    document.getElementById('fail').play();

  }

}
function endGame() {
   setTimeout(() => {
     endgame.classList.add("show")
   }, 1000)

  
  // You might want to reset the game or perform other actions.
}



function abda(array) {
    array.forEach((block) => {
      
            // Add 'is-flipped' class
            block.classList.add('is-flipped');

            // After 2 seconds, remove the 'is-flipped' class
            setTimeout(() => {
                block.classList.remove('is-flipped');
            }, 1000);

        
    });
}



/*
function abda(array) {
    array.forEach((block) => {
        setTimeout(() => {
            // Add 'is-flipped' class
            block.classList.add('is-flipped');

            // After 2 seconds, remove the 'is-flipped' class
            setTimeout(() => {
                block.classList.remove('is-flipped');
            }, 1000);

        }, 0 ); // Adjust the delay for each block
    });
} */
