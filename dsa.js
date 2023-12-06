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


if(i < firstName.length){
   string+=firstName.substring(i)
}
if(j < lastName.length ){
   string+= lastName.substring(j)
}
console.log(string)


// Solving Prefix problem
let array = ["flow","fly","florence"]
let prefix = ""

for (i=0; i<array[0].length; i++){
    if(array.every((elem) => elem[i]=== array[0][i])){
     prefix+=array[0][i]
    }
    else break

    }
console.log(prefix)


//product of array
function product(array){
    let result = array[0]
    for(let i= 1; i<array.length; i++){
        result = result * array[i]
    }
    return result
}
let arr=[1,2,3,4,5,6];
console.log(product(arr));


// Finding the missing number
const key = [0,1,3,2,4]
function findMissingNumber(aray){
    var sum = 0
    for(let i=0;i<aray.length;i++){
        sum+=aray[i]
    }
return  aray.length*(aray.length+1)/2 - sum
};

console.log(findMissingNumber(key))
console.log(key.length)

let beans = [1,2,3,4,5,6,7,8,9,10]
let target = 3


function binary(beans,target){

let middle = beans.length/2

if(target <= beans[middle]){
for(let i= 0; i < middle; i++){
    if ( beans[i] === target){
        return true
    }
}
}

else{
    for(let j = middle; j < beans.length; j++ ){
        if(beans[j]===target){
            return true
        } 
    }
}
return false
}

console.log(binary(beans,target))
