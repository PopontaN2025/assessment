'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');
//document.body.append('1 足す 2 は ');
//document.body.append(1 + 2);
//document.body.append(' です');
assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    console.log('ボタンが押されました');
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // 診断結果表示エリアの作成
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    let result2 = result.replaceAll('###userName###', userName)
    paragraph.innerText = result2;
    resultDivision.appendChild(paragraph);

      // TODO ツイートエリアの作成
    tweetDivision.innerText = '';

  }
);

const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  let sumOfCharCode = 0;
  // 全文字のコード番号を取得してそれを足し合わせる
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
 console.log('診断結果の文章のCheck Completed');
 console.log(userName);
 let residue = 0;
 residue = sumOfCharCode % answers.length;
console.log(residue);

  //console.log('同じ名前なら、同じ結果を出力することのテスト');

 // console.log('太郎');
  //console.assert(
  //  assessment('太郎') === assessment('太郎'),
   // '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  //);

  //console.log('同じ名前なら、同じ結果を出力することのテスト終了');
return(answers[residue]);
};
