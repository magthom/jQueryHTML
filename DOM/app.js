document.addEventListener("DOMContentLoaded", function(){
    let btn = document.createElement('button');
    let btnText = document.createTextNode('CLICK THIS');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let input = document.getElementById('name');
    let button2 = document.getElementById('butt');

    btn.addEventListener('click', function (){
        alert('HI');
    });

    let div = document.getElementById('div');

div.addEventListener("mouseenter", function( event ) {   
  event.target.style.backgroundColor = "purple";
});

div.addEventListener("mouseleave", function( event ) {
    event.target.style.backgroundColor = "white";
});

let p = document.createElement('p');
let pText = document.createTextNode('Hello this is a paragraph can you read it or not');
p.appendChild(pText);
document.body.appendChild(p);

var colors = [
    "rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 225, 0)"
];

p.addEventListener('click', function(){
    for (i=0; i<colors.length; i++) {p.style.color = colors[i]}
});
     
    button2.addEventListener('click', function (){
        //let h1 = document.createElement('h1');
        //let h1Text = document.textContent = 'SUP?!';
        //document.body.appendChild(h1);
        //alert (h1Text);
        
        alert(input.value);
    });
});