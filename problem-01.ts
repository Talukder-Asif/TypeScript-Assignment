{
    // 
    function sumArray(arr:number[]) : number {
        let sum = 0, i;
        for(i = 0; i <arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }

    const sum = sumArray([1, 2, 3, 4, 5]);

    console.log(sum);
    // 
}