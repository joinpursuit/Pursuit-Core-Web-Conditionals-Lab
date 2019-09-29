Exercise 1

let high = 5
let low = 2

high === low ? console.log("equals") : console.log("not equals");


Exercise 2

let num = 20
let num2 = 48

num <= num2 ? console.log("10 is the greater number") : console.log("5 is the lower numnber");

Exercise 3


let string = "hello world"

if (string !=  "hello world"){
    console.log("hello world");
} else if (string == "hello world"){
    console.log("Привет");
}else if (string !== "hello world"){
    console.log("hola");
} else{
    console.log("done");
}

Exercise 4

    const language = "australia";

    switch (language) {
      case "english":
            console.log("hello world");
            break;
      case "spanish":
            console.log("Hola Mundo");
            break;
      case "russian":
        console.log("Привет, мир");
        break;
        case "australia":
                console.log("plɹoʍ ollǝɥ");
                break;       
      default:
        console.log("language not supported");
    }

Exercise 5

let numGrade = 50

if (100<= numGrade >=90 ){
    console.log("A")
} else if(89<= numGrade >=80){
    console.log("B")
}else if(79<= numGrade >=70){
    console.log("C")
} else if(69<= numGrade >=65){
    console.log("D")
} else console.log("F")

Exercise 6

let animalName = ("dog", "cat", "duck", "bird")
let numberOfAnimals = 7

if (numberOfAnimals > 1){
    console.log(animalName + "s")
} console.log(animalName)

let animalName = ["dog", "cat", "duck", "bird"]
animalName[0]= "5 dogs"
animalName[1]= "2 cats"
animalName[2]= "4 ducks"
animalName[3]= "6 birds"

let numberOfAnimals = 0

if (numberOfAnimals > 1){
    console.log(numberOfAnimals  + " " + animalName + "s")
} 
console.log(animalName)


Exercise 7

let  num = 3;
if(num % 4 == 0){
  console.log("even");
}else{
  console.log("odd");
}

Exercise 8

let num = 3

 num % 2 == 0 ?  console.log( "even") : console.log("odd");


let  num = 0;

Exercise 9

if ( num * -1 > 0){
    console.log("negative")
} else if( num * -1 < 0){
    console.log("positive")
}else{
    console.log("equal to 0")
}



