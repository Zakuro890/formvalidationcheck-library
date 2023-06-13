// フォーム送信時にバリデーションを実行するイベントハンドラを設定
$("#myForm").submit(function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// フォームのバリデーションを実行する関数
function validateForm() {
  var isValid = true;

  $(".form-field").each(function () {
    var $field = $(this);
    var value = $field.val();
    var validationRules = $field.data("validation-rules");
    var errorMessage = $field.data("error-message");
    var errorLabel = $field.data("error-label");

    // バリデーションルールが指定されている場合のみ検証を行う
    if (validationRules) {
      var rules = validationRules.split(",");

      rules.forEach(function (rule) {
        if (rule === "required") {
          if (value === "") {
            isValid = false;
            showError($field, errorMessage);
            return false; // バリデーションを中断
          }
        }

        if (rule === "email") {
          var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          if (!emailRegex.test(value)) {
            isValid = false;
            showError($field, errorMessage);
            return false; // バリデーションを中断
          }
        }

        // その他のバリデーションルールを追加
      });
    }
  });

  return isValid;
}

// エラーメッセージを表示する関数
function showError($field, message) {
  $field.addClass("error");

  var $errorLabel = $field.siblings(".error-label");
  if ($errorLabel.length === 0) {
    $errorLabel = $('<span class="error-label"></span>');
    $field.after($errorLabel);
  }

  $errorLabel.text(message);
}

// エラーメッセージをクリアする関数
function clearError($field) {
  $field.removeClass("error");
  $field.siblings(".error-label").remove();
}
