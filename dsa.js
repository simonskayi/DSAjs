//Want to Achieve something like this: SAirmhoinns
const firstName = "Simons"
let lastName = "Arhin"

let i = 0
let j = 0
let string = ""
while(i<firstName.length && j<lastName.length){
    string+= firstName[i]
    i++
    string+=lastName[j]
    j++
};


// Solving Prifix problem

if(i < firstName.length){
   string+=firstName.substring(i)
}
if(j < lastName.length ){
   string+= lastName.substring(j)
}
console.log(string)

let array = ["flow","fly","florence"]
let prefix = ""

for (i=0; i<array[0].length; i++){
    if(array.every((elem) => elem[i]=== array[0][i])){
prefix+=array[0][i]
    }
    else break

    }
console.log(prefix)