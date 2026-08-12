// MDファイルを分割して見出しごとの文字数を出力。使い方
// node header_split_count.js sample.md
// 
// sample.md はマークダウンファイル名
// 出力例は以下
// ------------------------------
// 40     # Scala で解く部分和問題
// 361    ## 目次
// 727    ## 【講義】全探索
// 385    ## 【講義】部分和問題

const fs = require('fs');
const markdownFile = process.argv[2];
const markdownText = fs.readFileSync(markdownFile, 'utf-8');
const sections = markdownText.split(/^(#+|<h[1-6][^>]*>)/m);

// 国際化APIを使って文字数(絵文字)を日本語の文字数でカウントする
function countGrapheme(string) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    return [...segmenter.segment(string)].length;
}

for (let i = 1; i < sections.length; i += 2) {
    const heading = sections[i] + ' ' + sections[i + 1].split('\n')[0].trim();
    const content = sections[i + 1].split('\n').slice(1).join('').trim();
    const charCount = countGrapheme(content);
    console.log(`${charCount.toString().padEnd(6)} ${heading}`);
}