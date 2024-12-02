{
    // 
    function countWordOccurrences (sentance: string, word : string): number{
        const wordsArr: string[] = sentance.split(' ');
        // console.log(wordsArr)
        let count: number = 0;
        for(let i = 0; i < wordsArr.length; i++){
            if(wordsArr[i] === word){
                count++;
            }
        }
        return count;
    }
    
    const count: number = countWordOccurrences("I love typescript", "typescript");
    console.log(count)
    // 
}