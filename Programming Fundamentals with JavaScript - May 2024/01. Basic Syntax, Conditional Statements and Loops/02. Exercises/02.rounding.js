function rounding(numberToRound, precision) {

    if (precision > 15) {
        precision = 15;
    }

   let roundedNumber = Number.parseFloat(numberToRound.toFixed(precision));
   
   console.log(roundedNumber); 

}

rounding(3.1415926535897932384626433832795,18);

rounding(10.5,3)