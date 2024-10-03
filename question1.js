// for converting the strings into lowercase
const convertToLowerCase = (mixedarray) => {
  return new Promise((succeed, fail) => {
    if (!Array.isArray(mixedarray)) {  // for checking if input is array
      fail("Input is not an array");  // it will fail if its not array
    }
    
    // it will remove all arrays and will only have strings and then convert it to lowercase
    const processedCollection = mixedarray.filter(element => typeof element === 'string')
                                          .map(text => text.toLowerCase());
    
    if (processedCollection.length > 0) {
      succeed(processedCollection);
    } else {
      fail("No valid strings found in the array"); // it will fail if its not string
    }
  });
}

// Test the function
const diverseCollection = ['PIZZA', 10, true, 25, false, 'Wings'];
convertToLowerCase(diverseCollection)
  .then(output => console.log(output)) //it will log the message if its done
  .catch(errorMessage => console.log(errorMessage));//error  msg