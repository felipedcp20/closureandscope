function helloworld (){
    const hello = "Hello World"
    console.log(hello)
}
helloworld()

console.log(hello)

var hello= " i am global"

function local (){
    var hello  = "i am local";
    return console.log(hello);
}
console.log(hello)
local()
