const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;

function getTarget(arr, target){
    let first = 0;
    let last = arr.length-1;
    let result = []
    while(first < last){
        if(arr[first]+arr[last] === target){
             result.push([first,last]);
             first++;
             last--;
        }else if(arr[first]+arr[last] > target){
            last--;
        }else if(arr[first]+arr[last] < target){
            first++;
        }   
    }
    return result;
}
console.log(getTarget(arr,target))
