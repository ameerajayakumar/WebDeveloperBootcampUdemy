//Find a duplicate number in an array of integers
//Return: integer — the duplicate number

const arr = [1,2,3,0,1,4,5];

const findDuplicate = (arr) =>{
    const newArr = [];

    for(let i=0;i<arr.length;i++){
        if(newArr[arr[i]])
        return arr[i];
        else
        newArr[arr[i]]= arr[i];
    }
    return false;
}

console.log(findDuplicate(arr));

//using set also you can implement this.
//const nums = new Set();
//nums.add(1);
//nums.has(1); // true