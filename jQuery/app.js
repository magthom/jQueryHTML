$(document).ready(function(){
    //#1
    let btn = $("<button type='button'>Display Alert!</button>");
    btn.click(function (){
        alert("this is in Jquery");
    });
    $("body").append(btn);

    //#2
    let num2Btn = $("num2Btn");
    let num2TextArea = $("textarea");
    num2Btn.click(function (){
        alert(num2TextArea.val());
    });

    //#3
    let num3Div = $("#num3Div");
    num3Div.hover(function (){
        num3Div.css("background-color", "red");
    }, function () {
        num3Div.css("background-color", "initial");
    });

    //#4
    let num4Para = $("p");
    num4Para.click(function (){
        num4Para.css("color", "red");
    });

    //#5
    let num5Btn = $("#num5Btn");
    let num5Div = $("#num5Div");
    num5Btn.click(function (){
        num5Div.append($("<span>Maggie</span>"));
    });

    //$6
    let num6Btn = $("#num6Btn");
    let num6ul = $("ul");
    let friendsArr = ["Salem", "Junie", "Ghost", "Pants", "Marvin"];
    let friendIndex = 0;
    num6Btn.click(function (){
        if(friendsArr[friendIndex]) {
            let newLi = $(`<li>${friendsArr[friendIndex]}</li>`);
            num6ul.append(newLi);
            friendIndex++;
        } else {
            alert("no more friends");
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}