let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];


let started=false
let level=0;

let h2=document.querySelector("h2")

//Start the game 
document.addEventListener("keypress",function(){   //Keypress hone par game start ho jayega 
    if(started==false){ // Ek hi baar game start ho 
        console.log("Game Started!");
        started=true;
        levelUp();
    }
})


//Flash Button 
function gameFlash(btn){
     btn.classList.add("flash");//Flash class add kiya hain btn mein == Matlab Bgcolor white ho jayega 
     setTimeout(function(){//Flash ko 1 sec baad remove kar diya == Waapas se bgcolor laane ke liye hum flash ko hata denge  
        btn.classList.remove("flash");
     },250); 
}
//Jab user button click kar raha hain
function userflash(btn){
     btn.classList.add("userflash");//Flash class add kiya hain btn mein == Matlab Bgcolor white ho jayega 
     setTimeout(function(){//Flash ko 1 sec baad remove kar diya == Waapas se bgcolor laane ke liye hum flash ko hata denge  
        btn.classList.remove("userflash");
     },250); 
}


// Level up
function levelUp(){
    userSeq=[]
   level++;
   h2.innerText=`Level ${level}`;

   let randIdx= Math.floor(Math.random()* 3);// Choose Random Number
   let randColor=btns[randIdx];//Choose Random Color
   let randBtn=document.querySelector(`.${randColor}`)//Choose Random Button 
//    console.log(randIdx)
//    console.log(randColor)
//    console.log(randBtn)
 gameSeq.push(randColor);
 console.log(gameSeq);
   gameFlash(randBtn);//Button flash kar diya 
}

//Matching Sequence
function checkAns(idx)
{
    // console.log("curr level:",level);

    if(gameSeq[idx]===userSeq[idx])
    {
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000) ;
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150)
        reset();
    
    }
}


//Button Event Listeners 
function btnPress(){
   let  btn=this   
    console.log(this);//This shows button which was pressed 
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}



//Koi  bhi button press ho toh pata chal jaye  
let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){//
    btn.addEventListener("click",btnPress);
}

//Reset Game
function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

