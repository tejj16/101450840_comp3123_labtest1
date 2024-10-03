// method for resolving
const ResolvedPromise = () => {
  return new Promise((onSuccess, onFailure) => {
    setTimeout(() => { // setting a timeout of 500ms before resolving
      onSuccess({'message': 'successfully delayed.'}); // resolved message
    }, 500);
  });
}

// method for rejecting
const RejectedPromise = () => {
  return new Promise((onSuccess, onFailure) => {
    setTimeout(() => {
      onFailure({'error': 'exception delayed.'});
    }, 500);
  });
}

// for handling the result
ResolvedPromise()
  .then(outcome => console.log(outcome))
  .catch(error => console.log(error));

RejectedPromise()
  .then(outcome => console.log(outcome))
  .catch(error => console.log(error));