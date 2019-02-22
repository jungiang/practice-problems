
function countOccurences(array, testVal){
    var output = 0;
    for(var i = 0; i < array.length; i++){
        if(testVal === array[i]){
            output++;
        }
    }
    return output;
}

function wordLengths(array){
    var output = [];
    for(i = 0; i < array.length; i++){
        output.push(array[i].length);
    }
    return output;
}

function getMinMaxMean(array){
    var output = {
        min: array[0],
        max: array[0],
        mean: 0,
    };
    for(i = 0; i < array.length; i++){
        if(array[i] < output.min){
            output.min = array[i];
        }else if(array[i] > output.max){
            output.max = array[i];
        }
        output.mean+=array[i];
    }
    output.mean/=array.length;
    return output;
}

function findMode(array){
    var modeNumber = null;
    var currentMode = null;
    var newModeNumber = null;
    var newMode = null;
    for(var i = 0; i < array.length; i++){
        newModeNumber = array[i];
        for(var j = 0; j < array.length; j++){
            if(array[j] === newModeNumber){
                newMode++;
            }
        }
        if(newMode >= currentMode){
            modeNumber = newModeNumber;
            currentMode = newMode;
            newMode = 0;
        }    
    }
    return modeNumber;
}
