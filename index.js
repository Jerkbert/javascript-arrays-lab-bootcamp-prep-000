var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
 name=[];
  return kittens.concat(name);
}

function prependKitten(name){
  newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  kittens = kittens.slice(-2);
  return kittens;
}

function removeFirstKitten(){
  kittens = kittens.slice(1);
  return kittens;
}
