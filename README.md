# formvalidationcheck-library
### 初めてライブラリの作成に挑戦しました！
### JQueryでの実装になります。

このライブラリは、ウェブフォームの入力値を検証し、エラーメッセージを表示するためのJavaScriptライブラリです。

### 特徴
- シンプルなセットアップと使用方法
- カスタマイズ可能なバリデーションルール
- リアルタイムバリデーションのサポート
- エラーメッセージの表示とスタイリングのカスタマイズ

### 使用方法
#### 1 JQueryとライブラリの読み込み<br>
まず、HTMLファイルの"head"セクション内でJQueryとフォームバリデーションライブラリのスクリプトを読み込みます。
```html:html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="form-validation.js"></script>
```
#### 2 バリデーションルールの設定<br>
フォームの各フィールドにバリデーションルールとエラーメッセージを指定します。各フィールドに"data-validation-rules"属性と"data-error-message"属性を追加します。
  ``` html:index.html
  <form id="myForm">
  <label for="name">名前</label>
  <input type="text" id="name" name="name" data-validation-rules="required" data-error-message="名前を入力してください">

  <label for="email">メールアドレス</label>
  <input type="text" id="email" name="email" data-validation-rules="required,email" data-error-message="有効なメールアドレスを入力してください">

  <label for="password">パスワード</label>
  <input type="password" id="password" name="password" data-validation-rules="required,minlength:8" data-error-message="8文字以上のパスワードを入力してください">

  <button type="submit">送信</button>
</form>
```
  上記の例では、"required"ルールはフィールドが必須であることを示し、"email"ルールはメールアドレスの形式であることを要求します。
##### 3 バリデーションの実行<br>
フォームの送信時にバリデーションを実行するためのJQueryコードを追加します。
  ```js:JavaScript
$(document).ready(function() {
  $('#myForm').submit(function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});
```
  validateForm()関数は、各フィールドの入力値をバリデーションルールに基づいて検証し、エラーメッセージを表示します。バリデーションが成功した場合はtrueを返し、失敗した場合はfalseを返します。
#### 4 エラーメッセージのスタイリング<br>
エラーメッセージのスタイリングをカスタマイズする場合は、CSSを追加します。
  ```
  <style>
  .error {
    border: 1px solid red;
  }

  .error-label {
    color: red;
  }
</style>
```
  上記の例では、エラーが発生したフィールドに赤い枠線が表示され、エラーメッセージのテキストカラーが赤に設定されます。
これでライブラリが使用可能になります。フォームの送信時にバリデーションが実行され、エラーメッセージが表示されます。
- 追加のバリデーションルール<br>
 このライブラリには様々な追加のバリデーションルールを実装することができます。form-validation.jsファイル内のvalidateForm()関数を参考にして、必要なバリデーションルールを追加してください。
- エラーメッセージのカスタマイズ<br>
各フィールドのdata-error-message属性に指定したエラーメッセージをカスタマイズすることができます。必要に応じてエラーメッセージを変更してください。
- スタイルのカスタマイズ<br>
エラーメッセージのスタイルをカスタマイズすることで、デザインに合わせたエラーメッセージの表示が可能です。CSSスタイルを調整して、要件に合ったスタイルを適用してください。
 ### サポート
ご質問やフィードバックがありましたら、お気軽にお問い合わせください。
