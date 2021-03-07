var firstEnter= prompt("Please choose number from 1 to 5 to show");

while(firstEnter != '1' && firstEnter != '2' && firstEnter != '3' && firstEnter != '4'&& firstEnter != '5'){
    firstEnter= prompt("Please enter Number Between 1-5");
}

// alert("Nice press ok here then type the iteration number");

var iterationNo= prompt("In this field any number you want to show the Number that you already chose");

if( firstEnter=="1"){
    var Item='<img class="mainImg" src="https://t4.ftcdn.net/jpg/03/09/02/71/240_F_309027197_EXxztQT5RfTMMMRCqwQHp1PXEhaYHMjM.jpg" alt="Number One">'
}
else if (firstEnter="2"){
    var Item='<img class="mainImg" src="https://t4.ftcdn.net/jpg/03/09/02/71/240_F_309027194_96P1Uo3rM25gqMgd53ZXmnywVSw4wlgw.jpg" alt="Number Two">'
}
else if (firstEnter="3"){
    var Item='<img class="mainImg" src="https://t4.ftcdn.net/jpg/03/09/02/71/240_F_309027152_XvUOqEQMW8AuaPcgdIXwN2tPv1tzhsL4.jpg" alt="Number Three">'
}
else if (firstEnter="4"){
    var Item='<img class="mainImg" src="https://t4.ftcdn.net/jpg/03/09/02/71/240_F_309027137_n3PfvH0a4hTENcyQSJWkd9TYYTcm5Toi.jpg" alt="Number Four">'
}
else if (firstEnter="5"){
    var Item='<img class="mainImg" src="https://t3.ftcdn.net/jpg/03/09/02/70/240_F_309027088_71DiXcE40DteR7QRmc9fFmiaunPkE6hC.jpg" alt="Number Five">'
}
for(i=0;i<iterationNo;i++){
    document.write(Item);
}