document.addEventListener("DOMContentLoaded", function(){
    let btn = document.createElement('button');
    let btnText = document.createTextNode('CLICK THIS');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let input = document.getElementById('name')
    let button2 = document.getElementById('butt');

    btn.addEventListener('click', function (){
        alert('HI');
    });

    button2.addEventListener('click', function (){
        //let h1 = document.createElement('h1');
        //let h1Text = document.textContent = 'SUP?!';
        //document.body.appendChild(h1);
        //alert (h1Text);
        
        alert(input.value);
    });
});