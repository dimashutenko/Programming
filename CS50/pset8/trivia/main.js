let buttons_arr = document.querySelectorAll(".q1");

let messages_arr = document.querySelectorAll(".message");

function reset(){
    for (button of buttons_arr){
        button.style.backgroundColor = "#d9edff";
    }
    for (message of messages_arr){
        message.style.display = "none";
    }
}

let button1 = document.querySelector('#q1_a1');
button1.addEventListener("click", function(){
    reset();
    button1.style.backgroundColor = "red";
    document.querySelector('#q1_m1').style.display = "block";
}, false)

let button2 = document.querySelector('#q1_a2');
button2.addEventListener("click", function(){
    reset();
    button2.style.backgroundColor = "green";
    document.querySelector('#q1_m2').style.display = "block";
}, false)

let button3 = document.querySelector('#q1_a3');
button3.addEventListener("click", function(){
    reset();
    button3.style.backgroundColor = "red";
    document.querySelector('#q1_m3').style.display = "block";
}, false)

let button_q2 = document.querySelector('#q2_btn');

button_q2.addEventListener("click", function(){
    console.log(document.querySelector('#q2_a1').innerHTML);
    if (document.querySelector('#q2_a1').value.toLowerCase() == 'ukraine'){
        document.querySelector('#q2_a1').style.backgroundColor = "green";
        document.querySelector('#q2_m1').innerHTML = "Correct!";
    } else{
        document.querySelector('#q2_a1').style.backgroundColor = "red";
        document.querySelector('#q2_m1').innerHTML = "Incorrect";
    }

}, false)