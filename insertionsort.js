function insertionsort(arr, n){
    let i ,key ,j;
    for(i=1; i<n; i++){
        key = arr[i];
        j = i -1;


        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j= j-1;
        }
        arr[j+1]=key;
    }
}

function printarray(arr,n){
    let i;
    for(i=0; i<n; i++)console.log(arr[i] + "");

}
let arr = [15 , 10 , 18 , 8 , 2];
let n = arr.length;

insertionsort(arr, n);
printarray(arr,n);