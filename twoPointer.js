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
};

function bubbleSort(arr){
   let swap
    do {  
        swap = false;
    
         for(let i=0; i < arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
               arr[i] = arr[i+1]
               arr[i+1]= temp
                swap = true
            }
            console.log(arr)
        }
    }
    while (swap){
        return arr
    }
   
}

console.log(pointer(numbers,target))
console.log(bubbleSort([9,4,5,3,6,10,1,2,7,6]))