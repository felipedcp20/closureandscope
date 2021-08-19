function fruits (){
    if (true){
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi"
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}


fruits()

var x = 1;
{
    let x = 2;
    console.log(x)
}
console.log(x)


const name = "Adriana Milena";
const lastname = "Rodriguez Vela";
const completeName = name + lastname;
const nickname = "Adri";

function MiNombre(name, lastname,nickname){
   var resultado = ("Mi nombre es " + completeName + "pero me gusta que me llamen " + nickname)
   return resultado;
}

console.log(MiNombre())