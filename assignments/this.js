/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If none of the other rules apply then "this" will be moved to window object. This is typically a bad thing.
* 2. Implicit Binding - this is the most common rule. Left of the dot at call time. When the function is invoked "this" means whatever is left of the dot. 
* 3. Explicit Binding - uses something like call, apply (pass in array of arguments). These immediately pass in the function, but with call you add them 1 by 1 and with apply you apply an array. Bind returns a brand new function that you can return later.
* 4. New Binding - Use a new keyword to bind "this" to an object that is newly created.
*
* write out a code example of each explanation above
*/

// Principle 1 =======> Window Binding means that if none of the other principles apply then "this" will be moved to global window object. This is typically a bad thing. We should be more specific to save space.

function winBinding(foo) {
    console.log(this);
    return foo;
}

winBinding("Not a good idea");

// code example for Window Binding

// Principle 2 =======> Implicit Binding is by far the most common. It is fairly easy to find out what "this" is because it will be whatever is to the left of the dot when the function is called.

const myName = {
    name: "Ryan",
    introduction: "My name is, ",
    combine: function(intro) {
        console.log(`Hello, ${this.introduction}${this.name}`);
    }
};

myName.combine();


// code example for Implicit Binding

// Principle 3 =======> New Binding uses a "new" keyword to bind "this" to an object that is newly created by a constructor.

myName.call()

// create a constructor (capital letter) function that takes in an object literal first. 

function Person(param) {
    this.age = param.age;
    this.gender = param.gender;
    this.eyeColor = param.eyeColor;
}

//create new object with access to this by setting = to "new" constructor.

const rob = new Person({
    age: 40,
    gender: "M",
    eyeColor: "Blue"
})

console.log(rob)

// code example for New Binding

// Principle 4

const person = {
    fullName: function() {
        console.log(this.firstName + this.lastName);
    }
}

const me = {
    firstName: "Ryan",
    lastName: "Freeman"
}

person.fullName.call(me);


// code example for Explicit Binding =======> uses call, apply (pass in array of arguments), or bind. These immediately pass in the function, but with call you add them 1 by 1 and with apply you apply an array. Bind returns a brand new function that you can return later.