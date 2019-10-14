function availableMoves(position) {
    let hor = [];
    let ver = [];
    let moveArr = [];
    let letterTile = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let numTile = ['1', '2', '3', '4', '5', '6', '7', '8'];

    if ((!position) || (position.length !== 2 ) || (letterTile.indexOf(position[0]) === -1 ) || (numTile.indexOf(position[1]) === -1)){
        return [];
    }

    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }

    for (let i = 0; i < 8; i++){
        if(position !== (position[0] + numTile[i])){
            hor.push(position[0] + numTile[i]);
        }
        if (position !== (letterTile[i] + position[1])){
            ver.push(letterTile[i] + position[1]);
        }

    }

    let letterArr = [];
    let letterPosition = letterTile.indexOf(position[0]);
    let numPosition = numTile.indexOf(position[1]);

    for (let n = numPosition, m = letterPosition; n < 8 && m < 8 ; n++, m++) {
        letterArr.push(letterTile[m] + numTile[n]);
    }
    for (let n = numPosition, m = letterPosition; n >= 0 && m >= 0; n--, m--) {
        letterArr.push(letterTile[m] + numTile[n]);
    }

    for (let n = numPosition, m = letterPosition; n < 8 && m < 8 ; n++, m--) {
        letterArr.push(letterTile[m] + numTile[n]);
    }
    for (let n = numPosition, m = letterPosition; n >= 0 && m >= 0; n--, m++) {
        letterArr.push(letterTile[m] + numTile[n]);
    }

    moveArr = letterArr.concat(hor, ver);
    moveArr = unique(moveArr).sort();
    let indx= moveArr.indexOf(position);
    moveArr.splice(indx, 1);

    for (let i=0; i < moveArr.length; i++) {
        if (moveArr[i].length > 2)
            moveArr.splice(i);
    }
    return moveArr;
}
console.log(availableMoves(' '));








    