
function sumArray(array){
	var sumArray = 0;
    for(arrayPosition = 0; arrayPosition < array.length; arrayPosition++){
      sumArray+=array[arrayPosition];
    }
    return sumArray;
}

function fitWithinVal(inputs, testVal){  
  var answerArray = [];
  var arraySum = 0;
  for(i = 0; i < inputs.length; i++){
    arraySum += inputs[i];
    if(arraySum < testVal){
      answerArray.push(inputs[i]);
    }else{
      arraySum -= inputs[i];
    }
  }
  return answerArray;
}

function getAllNamesShorterThan(inputs, testVal){
  var answerArray = [];
  for(i = 0; i < inputs.length; i++){
    var nameSize = inputs[i].length;
    if(nameSize < testVal){
      answerArray.push(inputs[i]);
    }
  }
  return answerArray;
}

function makeLabel(inputs){
  var address = inputs['home address'];
  var shippingLabel = `${inputs.greeting} ${inputs.givenName} ${inputs.familyName}
${address.streetNumber} ${address.streetName}
${address.city}, ${address.state} ${address.zip}`;

  return shippingLabel;
}
