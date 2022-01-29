//Find the missing number in a given integer array of 1 to 100
//Return: integer — the missing number in the array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18];

const missingNum = (arr) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1 !=arr[i+1])
        return arr[i]+1;
    }
    return false;
}

console.log(missingNum(arr))