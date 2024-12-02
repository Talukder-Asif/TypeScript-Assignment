{
    // 
    function removeDuplicates(arr: number[]): number[] {
        const newArr: number[] = [];
      
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i];
          if (!newArr.includes(item)) {
            newArr.push(item);
          }
        }
      
        return newArr;
      }
      
      const uniqArr = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
      console.log(uniqArr);
      
    // 
}