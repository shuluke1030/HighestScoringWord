function high(x){
    let aToZ = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
    let newX = x.split(" ");
    for(let i = 0; i < newX.length; i++){
        let newXSplit = newX[i].split("");
        let arrayWord = newXSplit[i];
        let wordScore = 0
        for(let j = 0; j < aToZ.length; j++){
            let index = aToZ.indexOf(arrayWord) + 1
            if(index > 0){
                wordScore = wordScore + index;
            }
           
        }
         return wordScore;
    }
}
console.log(high('man i need a taxi up to ubud'));

