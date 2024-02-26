let numbers = [1,2,4,5,6,8,11,15,18]
let target = 14

let leftPointer = 0
let rightPointer= numbers.length - 1

function pointer(numbers , target){

    while(leftPointer <= rightPointer){

    let sum = numbers[leftPointer] + numbers[rightPointer]
    if(sum === target){
        return [leftPointer,rightPointer]
    }
    else if(sum < target){
        leftPointer++
    }
    else {
        rightPointer--
    }
}
}

console.log(pointer(numbers,target))