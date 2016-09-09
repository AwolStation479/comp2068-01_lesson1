/**
 * Asynchronous(Non-blocking) file read
 */

var fs = require('fs');

// asynchronous uses the readFile method, takes three parameters as follows:
var food = fs.readFile('food.txt','utf8',
    function(err, food){
    console.log('FOOD');
       if(err){
           console.log(err);
       }
       else {
           console.log(food);
       }
    });



var drinks = fs.readFile('drinks.txt','utf8',
    function(err, drinks){
        console.log('\nDRINKS');
        if(err){
            console.log(err);
        }
        else {
            console.log(drinks);
        }
    });

