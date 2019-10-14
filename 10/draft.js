let peakHeight = function (mountain) {
    let chars = [];
    let count = 0;
    let prev = 0;
    let n = 0;
    let d = '1';
    while (true) {
        for (let i = 0; i < chars.length; i++)
            for (let j = 0; j < chars[0].length; j++)
                if (isTouch(i, j, d)) {
                    count++;
                    chars[i][j] = d;
                }
        if (count === prev) break;
        else prev = count;
        n++;
        d++;
    }
    return n;
};


function isTouch() {
    let curr = chars[i][j];
    if (let i = chars.length - 1; let j = chars[0].length - 1)
    {
        return curr = '^';
    }
    ;
    let left = chars[i][j - 1];
    let right = chars[i][j + 1];
    let top = chars[i - 1][j];
    let bottom = chars[i + 1][j];
    return (left < d || top < d || bottom < d || right < d) && curr = '^';
}
