// ページの読み込みが完了したらイベントリスナーを登録
document.addEventListener('DOMContentLoaded', () => {
    // ボタン要素を取得してクリックイベントを設定
    const triggerButton = document.getElementById('triggerAll');
    triggerButton.addEventListener('click', () => {
        runExamples(); // すべての例を実行
    });
});

// すべての例を実行する関数
function runExamples() {
    // 1. appendChild の例  Web画面表示用コンテナ作成１
    const container = document.getElementById('container'); // コンテナを取得
    const newElement = document.createElement('p'); // 新しい段落要素を作成
    const textNode = document.createTextNode('appendChild の例: 新しい要素が追加されました。'); // テキストノードを作成
    newElement.appendChild(textNode); // 段落要素にテキストを追加
    container.appendChild(newElement); // コンテナに新しい段落を追加
    console.log('appendChild: 要素が追加されました。');

    // 2. 配列の例
    const fruits = ["りんご", "バナナ", "オレンジ"]; // 配列を定義
    console.log('Arrays: ', fruits.join(', ')); // 配列の内容をコンソールに表示

    // 3. Date の例
    const now = new Date(); // 現在の日付と時刻を取得
    console.log('Date: ', now.toString()); // 日付をコンソールに表示

    // 4. document.createElement の例　Web画面表示用コンテナ作成２
    const newDiv = document.createElement('div'); // 新しいdiv要素を作成
    newDiv.innerHTML = '新しい div が作成されました。'; // divに内容を追加
    container.appendChild(newDiv); // コンテナに新しいdivを追加
    console.log('document.createElement: divが作成されました。');

    // 5. document.createTextNode の例　Web画面表示用コンテナ作成３
    const text = document.createTextNode('document.createTextNode の例です。'); // テキストノードを作成
    container.appendChild(text); // コンテナにテキストノードを追加
    console.log('document.createTextNode: テキストノードが作成されました。');

    // 6. document.getElementById の例
    const triggerElement = document.getElementById('triggerAll'); // ボタン要素を取得
    console.log('document.getElementById: ', triggerElement); // 要素をコンソールに表示

    // 7. document.getElementsByTagName の例
    const paragraphs = document.getElementsByTagName('p'); // すべての段落要素を取得
    console.log('document.getElementsByTagName: 段落要素の数:', paragraphs.length); // 段落要素の数をコンソールに表示

    // 8. document.write の例
    // document.write('document.write の例: このテキストはドキュメントに直接書き込まれます。');
    console.log('document.write: 実行するとドキュメントにテキストが直接書き込まれます。'); // 実行すると既存のページがリセットされるため、コメントアウトしています

    // 9. element.getAttribute の例
    const buttonAttr = triggerElement.getAttribute('id'); // ボタンのid属性を取得
    console.log('element.getAttribute: ', buttonAttr); // id属性をコンソールに表示

    // 10. element.innerHTML の例
    const innerHTMLExample = container.innerHTML; // コンテナのHTML内容を取得
    console.log('element.innerHTML: ', innerHTMLExample); // HTML内容をコンソールに表示

    // 11. element.removeAttribute の例
    triggerElement.removeAttribute('id'); // ボタンからid属性を削除
    console.log('element.removeAttribute: id属性が削除されました。');

    // 12. element.setAttribute の例
    triggerElement.setAttribute('id', 'triggerAll'); // id属性を再設定
    console.log('element.setAttribute: id属性が再設定されました。');

    // 13. element.style の例
    container.style.backgroundColor = 'lightblue'; // コンテナの背景色を変更
    console.log('element.style: 背景色が変更されました。');

    // 14. Error Objects の例
    try {
        throw new Error('カスタムエラーメッセージ'); // エラーを投げる
    } catch (error) {
        console.log('Error Objects: ', error.message); // エラーメッセージをコンソールに表示
    }

    // 15. History Objects の例
    console.log('History Objects: ', window.history.length); // 履歴の長さをコンソールに表示

    // 16. insertBefore の例　Web画面表示用コンテナ作成４
    const beforeElement = document.createElement('p'); // 新しい段落を作成
    beforeElement.innerText = 'insertBefore の例: この要素は前に挿入されました。'; // 段落にテキストを追加
    container.insertBefore(beforeElement, container.firstChild); // コンテナの最初の子要素の前に挿入
    console.log('insertBefore: 要素が最初の要素の前に挿入されました。');

    // 17. Location Objects の例
    console.log('Location Objects: ', window.location.href); // 現在のURLをコンソールに表示

    // 18. Navigator Objects の例
    console.log('Navigator Objects: ', navigator.userAgent); // ユーザーエージェント情報をコンソールに表示

    // 19. onload の例
    window.onload = function() {
        console.log('onload: ページがロードされました。'); // ページが読み込まれた際に実行される
    };

    // 20. replaceChild の例
    const replaceElement = document.createElement('p'); // 新しい段落要素を作成
    replaceElement.innerText = 'replaceChild の例: 要素が置き換えられました。'; // 段落にテキストを追加
    container.replaceChild(replaceElement, container.firstChild); // コンテナの最初の要素を置き換え
    console.log('replaceChild: 最初の要素が置き換えられました。');

    // 21. Screen Objects の例
    console.log('Screen Objects: ', window.screen.width, 'x', window.screen.height); // 画面の幅と高さをコンソールに表示

    // 22. Window Objects の例
    console.log('Window Objects: このウィンドウの高さは', window.innerHeight, 'です。'); // ウィンドウの高さを表示

    // 23. window.open の例
    const newWindow = window.open('https://www.youtube.com/', '_blank'); // 新しいウィンドウを開く
    if (newWindow) newWindow.close(); // ウィンドウをすぐに閉じる
    console.log('window.open: 新しいウィンドウが開かれました。');

    // 24. window.scrollTo の例
    window.scrollTo(0, 0); // ページの先頭にスクロール
    console.log('window.scrollTo: ページの先頭にスクロールしました。');

    // 25. Wrapper Objects の例
    const num = new Number(123); // 数値のラッパーオブジェクトを作成
    console.log('Wrapper Objects: ', num.toString()); // 数値を文字列に変換して表示
}


/*

--------------------------------処理フローの整理----------------------------------------

ページの読み込み完了

DOMContentLoaded イベントが発生すると、ページのDOMが完全に構築されます。
イベントリスナーが登録され、ボタン（ID: triggerAll）がクリックされると、runExamples()関数が実行される。
runExamples関数の実行
この関数内で様々なJavaScriptのメソッドとオブジェクトが使用されます。以下に各処理を説明します。

appendChildの例

新しい段落要素<p>を作成し、その中にテキストノードを追加する。
これをcontainerというIDを持つ要素に追加し、「appendChild の例: 新しい要素が追加されました。」と表示される。
配列の例

配列fruitsに3つの果物を定義し、その内容をコンソールに表示する。
Dateの例

現在の日付と時刻を取得し、コンソールに表示する。
document.createElementの例

新しい<div>要素を作成し、テキストを追加してcontainerに追加する。
document.createTextNodeの例

新しいテキストノードを作成し、それをcontainerに追加する。
document.getElementByIdの例

ボタン要素を取得し、その情報をコンソールに表示する。
document.getElementsByTagNameの例

ページ内のすべての段落要素を取得し、その数をコンソールに表示する。
document.writeの例

コメントとして実行するとドキュメントに直接書き込まれることを説明する。
element.getAttributeの例

ボタン要素のID属性を取得し、コンソールに表示する。
element.innerHTMLの例

containerのHTML内容を取得し、コンソールに表示する。
element.removeAttributeの例

ボタンからID属性を削除し、その結果をコンソールに表示する。
element.setAttributeの例

ボタンに再びID属性を設定し、その結果をコンソールに表示する。
element.styleの例

containerの背景色を変更し、その変更をコンソールに表示する。
Error Objectsの例

カスタムエラーを投げて、そのメッセージをコンソールに表示する。
History Objectsの例

ブラウザの履歴の長さをコンソールに表示する。
insertBeforeの例

新しい段落を作成し、containerの最初の子要素の前に挿入する。
Location Objectsの例

現在のURLをコンソールに表示する。
Navigator Objectsの例

ユーザーエージェント情報をコンソールに表示する。
onloadの例

ページがロードされた際に実行される処理を定義し、その結果をコンソールに表示する。
replaceChildの例

新しい段落を作成し、containerの最初の要素を置き換える。
Screen Objectsの例

画面の幅と高さをコンソールに表示する。
Window Objectsの例

現在のウィンドウの高さをコンソールに表示する。
window.openの例

新しいウィンドウを開き、すぐに閉じる処理を行い、その結果をコンソールに表示する。
window.scrollToの例

ページを先頭にスクロールする。
Wrapper Objectsの例

数値のラッパーオブジェクトを作成し、その文字列表現をコンソールに表示する。
画面への表示内容
各例の実行に伴って、HTMLのcontainer内には段落やdiv要素が追加されます。最終的に、containerには以下のような内容が表示されます：

appendChild の例: 新しい要素が追加されました。
新しい div が作成されました。
insertBefore の例: この要素は前に挿入されました。
replaceChild の例: 要素が置き換えられました。
など、各操作に対応するテキストが画面に表示されます。
また、コンソールには各処理の結果やメッセージがログとして表示され、デバッグや確認が容易になります。

このように、ユーザーがボタンをクリックすると、様々なJavaScriptのメソッドやオブジェクトを利用した処理が実行され、画面に動的なコンテンツが表示される仕組みです。

*/
