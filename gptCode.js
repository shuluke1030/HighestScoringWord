function highestScoringWord(str) {
    // 將字串轉換為單詞陣列
    const words = str.split(' ');
  
    // 創建一個空物件，用於存儲每個單詞的得分
    const scores = {};
  
    // 遍歷單詞陣列，對每個單詞進行得分計算，並將結果存儲在物件中
    words.forEach((word, index) => {
      let score = 0;
      for (let i = 0; i < word.length; i++) {
        score += word.charCodeAt(i) - 96; // a 的 charCode 為 97
      }
      scores[index] = score;
    });
  
    // 遍歷物件，找到得分最高的單詞
    let maxScore = 0;
    let maxIndex = 0;
    for (const [index, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        maxIndex = index;
      }
    }
  
    // 返回得分最高的單詞
    return words[maxIndex];
  }
  
  // 測試
  console.log(highestScoringWord('abad man taxi up ubud')); // 預期輸出: "taxi"
  