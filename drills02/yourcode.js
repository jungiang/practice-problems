
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
/*
question: `findMode: Given an array of numbers, find the number that occurs the most often
    for example: [5,2,7,18,2,42,5,2]
      returns 2, since it occurs 3 times.  If 2 numbers occur the same amount, return the last one`,
  testVals: {
    inputs: [
      [[2,4,6,3,4,3,2,4,3,5]],
      [[4,6,3,6,1,8,4,3,3,4,5,6,6,7]],
    ],
    outputs: [
      3, 6
    ]
  },
  functionToTest: 'findMode'
*/

function findMode(array){
    debugger;
    var sortArray = array.sort();
    var modeNumber = null;
    var currentMode = 0;
    var nextMode = 0;
    var compareVar = null;
    for(i = 0; i < sortArray.length; i++){
        if(sortArray[i] === compareVar){
            currentMode++;
            compareVar = sortArray[i];
        }else{
            nextMode++;
            if(nextMode >= currentMode){
                currentMode = nextMode;
                compareVar = sortArray[i];
                var oldModeNumber = sortArray[i-nextMode];
                if(array.lastIndexOf(compareVar) > array.lastIndexOf(oldModeNumber)){
                    modeNumber = sortArray[i];
                }else{
                    modeNumber = sortArray[i-nextMode];
                }
                nextMode = 0;

            }else{
                compareVar = sortArray[i-nextMode];
            }
        }
    }
    return modeNumber;
}
