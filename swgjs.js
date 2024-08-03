let compscr = 0;
let userscr = 0;

let figures = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let cs = document.querySelector("#comp_scr");
let us = document.querySelector("#user_scr");
// const elementToStyle = document.getElementById("tostyle");
console.log(msg.innerText);

const comp_choicef = () => {
    let options = ["snake","water","gun"];
    let cind = Math.floor(Math.random()*3);
    return options[cind];
}

const playGame = (user_choice) => {
    let comp_choice = comp_choicef();
    console.log(comp_choice);
    console.log(user_choice);
    if(user_choice === comp_choice){
        msg.innerText = "Its a draw..";
        msg.style.backgroundColor = "grey";
    }
    else{
        if(user_choice==="snake"){
            if(comp_choice==="water"){
                userscr++;
                msg.innerText = "You've got this.. Snake sucked water";
                msg.style.backgroundColor = "green";

            }
            if(comp_choice==="gun"){
                compscr++;
                msg.innerText = "Shit!!.. Snake just got killed";
                msg.style.backgroundColor = "red";

            }
        }
        if(user_choice==="water"){
            if(comp_choice==="snake"){
                compscr++;
                msg.innerText = "Shit!!.. The snake sucked water";
                msg.style.backgroundColor = "red";

            }
            if(comp_choice==="gun"){
                userscr++;
                msg.innerText = "Yeah!!..The gun drowned in water";
                msg.style.backgroundColor = "green";

            }
        }
        if(user_choice==="gun"){
                if(comp_choice==="water"){
                    compscr++;
                    msg.innerText = "Shit!!.. The gun drowned in water";
                    msg.style.backgroundColor = "red";
    
                }
                if(comp_choice==="snake"){
                    userscr++;
                    msg.innerText = "Yess.. The snake was shot";
                    msg.style.backgroundColor = "green";
    
                }
            
        }
    }
    cs.innerText = compscr;
    us.innerText = userscr;
    if(compscr == 20){
        alert("Computer won!!.. Don't worry better luck next time");
        compscr=0;
        userscr=0;
        cs.innerText = compscr;
        us.innerText = userscr;
        msg.innerText = "Give Your Choice";
        msg.style.backgroundColor = "black";
    
    }
    else if(userscr == 20){
        alert("Congratulations you won!!.. Wanna play again");
        compscr=0;
        userscr=0;
        cs.innerText = compscr;
        us.innerText = userscr;
        msg.innerText = "Give Your Choice";
        msg.style.backgroundColor = "black";

    }

}

// fig.addEventListener("click",user_choice);

figures.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
        // console.log(userchoice);
    })
});

