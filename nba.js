let input1 = document.querySelector(".shootorpass");
let input2 = document.querySelector(".happyortired");
let results = document.querySelector(".results");
let button = document.querySelector("button");




button.addEventListener("click", function (){
    
    console.log("button check");
let answer1 = input1.value;
    console.log(answer1);
    let answer2 = input2.value;
    console.log(answer2);




    if (answer1 === "shoot" && answer2 === "happy") {


        console.log("steph");
        results.innerHTML = "You are most likely Stephen Curry!";
      

}

    


   else if (answer1 === "pass" && answer2 === "happy") {


        console.log("stockton");
        results.innerHTML = "You are most likely John Stockton!";
    }
    else if (answer1 === "shoot" && answer2 === "tired") {


        console.log("Dame");
        results.innerHTML = "You are most likely Jason Kidd!";


    }
    else if (answer1 ==="pass" && answer2 === "tired") {


        console.log("CP3");
      results.innerHTML = "You are Most likely Chris paul!";
    }
    });
    

