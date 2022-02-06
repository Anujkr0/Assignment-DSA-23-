function bubblesort(arr ,n){
    var i,j,temp;
    var swapped;
    for(i=0; i<n-1;i++){
        swapped=false;
        for(j=0; j<n-1;j++){
            if(arr[j] > arr[j+1]){
                temp= arr[j];
                arr[j] = arr[j+1];
                arr[j +1] =temp;
                swapped = true;
            }
        }

        if(swapped==false)break;
    }
}
function printarray(arr, size){
    var i;
    for(i=0; i< size; i++)console.log(arr[i] + "");


}
var arr = [82 , 45 , 22 , 10 , 30 , 17 , 90]
var n = arr.length;
bubblesort(arr,n);
console.log("sorted array");
printarray(arr, n);