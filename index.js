function receivesAFunction(callback) {
    console.log (callback());
  }
  receivesAFunction(function () { return "Hello!"});

function returnsANamedFunction(){
    return function namedFunction(){
    console.log("A named function");
  }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("An annonymous function");
      }
}