//Find the largest and smallest number in an unsorted array of integers
//Return: object — containing value of min and max

const arr = [100,2,8,90,10,400];

const findNum = arr => {

    let min = arr[0];
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i])
        min = arr[i];
        else if(max<arr[i])
        max = arr[i];
    }

return {
    "max":max,
    "min":min
};
}
console.log(findNum(arr));