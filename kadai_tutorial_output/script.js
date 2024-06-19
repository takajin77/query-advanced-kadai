
$(function () {
  // もっと見るボタン装飾
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      marginLeft: 20,
      opacity: 0.5,
    }, 100);
  });
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      marginLeft: 0,
      opacity:1.0,
    },100);
  });
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // エラーチェック
  $('#submit').on('click', function (event) {
    // formタグによる送信拒否
    event.preventDefault();
    // 入力チェックをした結果をresultに格納
    let result = inputCheck();
    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    // エラーが無かったらフォームを送信
    if (error == false) {
      // フォーム送信は実際に行わず、送信成功メッセージのみ
      alert('送信しました。');
    }
    else {
      // エラーメッセージ
      alert(message);
    }
  });

  // フォーカスが外れた時(blur)にフォームの入力をチェックする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#hurigana').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tell').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  $('#agree').click(function () {
    inputCheck();
  });
  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーチェック結果
    let result;
    // エラーメッセージのテキスト
    let message = '';
    // エラーが中れば、false、エラーがあればtrueを返す
    let error = false;

    // お名前のチェック
    if ($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', 'red');
      error = true;
      message += '名前を入力してください。\n';
    }
    else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }
    // フリガナチェック
    if ($('#hurigana').val () == '') {
      $('#hurigana').css('background-color', 'red');
      error = true;
      message += 'フリガナを入力してください\n';
    }
    else {
      // エラーなし
      $('#hurigana').css('background-color','#fafafa')
    }
    // お問い合わせ内容
    if ($('#message').val() == '') {
      $('#message').css('background-color', 'red');
      error = true;
      message+='問い合わせ内容を入力してください\n';
    }
    else {
      // エラーなし
      $('#message').css('background-color','#fafafa')
    }
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
      // エラーあり
      $('#email').css('background-color', 'red');
      error = true;
      message+='アドレスが未記入。もしくは「@」、「.」が含まれていません。\n';
    }
    else {
      // エラーなし
      $('#email').css('background-color','#fafafa')
    }
    // 電話番号のチェック
    if ($('#tell').val() != '' && $('#tell').val().indexOf('-') == -1) {
      // エラーあり
      $('#tell').css('background-color', 'red');
      error = true;
      message+='電話番号に「-」が記入されていません。\n';
    }
    else {
      // エラーなし
      $('#tell').css('background-color','#fafafa')
    }

    if ($('.agree').prop('checked') == false) {
      // エラー有
      error = true;
      message+='チェックボックスにチェックしてください。\n';
    }
      // エラーの有無で送信ボタンを切り替える
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    }
    else {
      // エラーなし
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }
    result = {
      error: error,
      message: message
    }
    return result;
  }
});
