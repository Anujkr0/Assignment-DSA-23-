function swap(arr, xp , yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function selectionsort(arr,n){
    var i , j , min_idx;

    for(i=0; i<n-1; i++){
        min_idx=i;
        for(j=i +1; j<n; j++)if(arr[j] < arr[min_idx])min_idx =j;
        swap(arr, min_idx , i);

    }
}

function printarray(arr, size){
    var i;
    for(i=0; i<size; i++)console.log(arr[i]+ "");

}
var arr = [82, 25 , 12, 23 , 11 ];
var n=5;
selectionsort(arr,n);
console.log("sorted array");
printarray(arr,n);