function monthToInt(curMonth, expMonth){
    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    return [months.indexOf(curMonth), months.indexOf(expMonth)];
}

function dateComparator(curSplit, expSplit){
    // Step 2: compare dates

    if(curSplit[2] < expSplit[2]){
        return true;
    }else if(curSplit[2] > expSplit[2]){
        return false;
    }else{ // equal year
        if(curSplit[0] < expSplit[0]){
            return true;
        }else if(curSplit[0] > expSplit[0]){
            return false;
        }else{ // equal month
            if(curSplit[1] <= expSplit[1]){
                return true;
            }else{
                return false;
            }
        }
    }
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode){
        return false;
    }

    // Step 1: parse dates
    let curSplit, expSplit;

    // what is the sprintf equivalent for javascript?
    // Don't think multiple .split() and parseInt are elegant...

    curSplit = currentDate.split(" ");
    expSplit = expirationDate.split(" ");

    curSplit[2] = parseInt(curSplit[2]); 
    expSplit[2] = parseInt(expSplit[2]);

    curSplit[1] = parseInt(curSplit[1].slice(0, -1)); 
    expSplit[1] = parseInt(expSplit[1].slice(0, -1));

    curSplit[0] = monthToInt(curSplit[0]);
    expSplit[0] = monthToInt(expSplit[0]);

    return dateComparator(curSplit, expSplit);
}


console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));