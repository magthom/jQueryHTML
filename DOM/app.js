document.addEventListener("DOMContentLoaded", function(){
    //#1
    let btn = document.createElement('button');
    let btnText = document.createTextNode('CLICK THIS');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    //#2
    let input = document.getElementById('name');
    let button2 = document.getElementById('butt');

    btn.addEventListener('click', function (){
        alert('HI');
    });

    //#3

let div = document.getElementById('div');

div.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "purple";
});

div.addEventListener("mouseleave", function( event ) {
    event.target.style.backgroundColor = "initial";
});

//#4

let p = document.createElement('p');
let pText = document.createTextNode('Hello this is a paragraph can you read it or not');
p.appendChild(pText);
document.body.appendChild(p);

p.addEventListener('click', function(){
    p.style.color = getRandomColor();
});

//#5
let btn3 = document.createElement('button');
let div2 = document.createElement('div');

btn3.addEventListener('click', function (){
    let span = document.createElement("span");
    span.innerText = "Maggie";
    div2.appendChild(span);
});

//#6
let btn6 = document.getElementById("butt");
let num6ul = document.querySelector("ul");
let friendsArr = ["Salem", "Junie", "Ghost", "Pants", "Marvin"];
let friendIndex = 0;
btn6.addEventListener("click", function (){
    if (friendsArr[friendIndex]) {
        let newLi = document.createElement("li");
        newLi.innerText = friendsArr[friendIndex];
        num6ul.appendChild(newLi);
        friendIndex++;
    } else {
        alert("no more friends.");
    }
    });




    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() *16)];
        }
        return color;
    }

});      
        
