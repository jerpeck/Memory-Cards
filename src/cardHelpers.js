 function createGrid(arr){
    const numRows = Math.sqrt(arr.length);
    const grid = [];
    let idx = 0;
    for(let x = 0; x < numRows; x++){
        const row = []
        for(let y = 0; y < numRows; y++){
            row.push(arr[idx])
            idx++
         }
         grid.push(row)
     }
     return grid;
 }

 function shuffle(arr){
    const deck = arr;
    for(let i = deck.length - 1; i >= 0; i--){
        const idx = Math.floor(Math.random() * deck.length);
        const val = deck[i];
        deck[i] = deck[idx];
        deck[idx] = val;
    }
    return deck;
 }

 function addKeyVals(arr, ...args){
    for(let i = 0; i < arr.length; i++){
        for(let x = 0; x < args.length; x++){
            arr[i][args[x][0]] = args[x][1]
        }
    }
    return arr;
 }

 export {createGrid, shuffle, addKeyVals};
