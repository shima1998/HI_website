function getYear(){//西暦を取得する関数
    var now = new Date();//今日の日付を取得
    var year = now.getFullYear();//西暦を抽出

    return year;
}