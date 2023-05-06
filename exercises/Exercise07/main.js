/* console.log ('this works');

function  sayHello () {
    console.log("Hi");
}

sayHello ()
*/

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

console.log(noun)
console.log(verb)
console.log(adjective)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`

console.log(sentence)
document.write(sentence)

console.log(nouns[Math.floor(Math.random()*nouns.length)])