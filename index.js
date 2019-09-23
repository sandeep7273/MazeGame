var rowCount = 1;
var colCount = 1;
var colPass = colCount;
var rowPass = rowCount;
var randomNumber = Math.floor((Math.random()*9)+2);
var schoolAddress = randomNumber +"d"+ randomNumber;
$(document).ready(function(){
$("#tr"+schoolAddress).html('<img src="school.jpg">');
console.log(schoolAddress);


$(document).keyup( function(event){
    var keyPrressed = event.key;
    if(keyPrressed=="ArrowRight"){
        if(colCount<10){
        colCount= colCount+1;
        colPass = colCount-1;
        }
        var presentAddress = rowCount +"d"+ colPass;
        var nextAddress =rowCount  +"d"+ colCount;
         console.log(nextAddress);
        $("#tr"+ nextAddress).html('<img src="logo.jpeg">');
        $("#tr"+ presentAddress).html('');
    }

    if(keyPrressed=="ArrowDown"){
        if(rowCount<10){
            rowCount= rowCount+1;
            rowPass= rowCount -1;
        }
        var presentAddress = rowPass +"d"+ colCount;
        var nextAddress =rowCount  +"d"+ colCount;
         console.log(nextAddress);
        $("#tr"+ nextAddress).html('<img src="logo.jpeg">');
        $("#tr"+ presentAddress).html('');
    }

    if(keyPrressed=="ArrowUp"){
        if(rowCount>1){
        rowCount= rowCount-1;
        rowPass = rowCount+1;
        }
        var presentAddress = rowPass +"d"+ colCount;
        var nextAddress =rowCount  +"d"+ colCount;
         console.log(nextAddress);
        $("#tr"+ nextAddress).html('<img src="logo.jpeg">');
        $("#tr"+ presentAddress).html('');
    }

    if(keyPrressed=="ArrowLeft"){
        if(colCount>1){
            colCount= colCount-1;
            colPass = colCount+1;
            }
        var presentAddress = rowCount +"d"+ colPass;
        var nextAddress =rowCount  +"d"+ colCount;
         console.log(nextAddress);
        $("#tr"+ nextAddress).html('<img src="logo.jpeg">');
        $("#tr"+ presentAddress).html('');
    }

    });
});