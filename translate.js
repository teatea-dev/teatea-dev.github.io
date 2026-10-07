// Google翻訳の初期化とURLパラメータによる自動言語切り替え
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ja',
    autoDisplay: false
  }, 'google_translate_element');

  // URLの ?lang=パラメータを取得
  const urlParams = new URLSearchParams(window.location.search);
  const targetLang = urlParams.get('lang');

  // ja 以外、かつ指定がある場合に自動切り替え
  if (targetLang && targetLang !== 'ja') {
    setTimeout(function() {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
      }
    }, 500);
  }
}
