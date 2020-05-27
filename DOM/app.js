document.addEventListener("DOMContentLoaded", function(){
    let btn = document.createElement('button');
    let btnText = document.createTextNode('CLICK THIS');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener('click', function (){
        let h1 = document.createElement('h1');
        let h1Text = document.textContent = 'SUP?!';
        document.body.appendChild(h1);
        alert (h1Text);
    });
});