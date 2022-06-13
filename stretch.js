//Task 3 - Stretch Goals

//challenge-1
function createBase(n){
    return function(v){
        console.log(v+n);
    }
}

var addSix = createBase(6);
addSix(10); 
addSix(21);

//challenge-2
//Functional and object oriented programming
//In functional programming, data cannot be stored in objects, and it can only be transformed by 
//creating functions. In object-oriented programming, data is stored in objects.

//pros and cons
// Objects and methods are very readable and understandable but  functional programming can lack 
// readability at times. Sometimes functions can become very verbose and become difficult to follow 
// comparatively to the object-oriented style.

// Utilizing pure functions, leads to reliable functions with no side effects that accomplish and 
// return exactly what you expect them to but The unfortunate result of so many objects and methods 
// existing within the same state and being accessed in an entirely undetermined order can lead the 
// pre-discussed concept of “race conditions”.