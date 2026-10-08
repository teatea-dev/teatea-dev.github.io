// Google tag (gtag.js) 動的読み込み用スクリプト
(function() {
  // 1. gtag.js を非同期で読み込む
  var script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-7T7E8S9E5K';
  document.head.appendChild(script1);

  // 2. 初期化スクリプトを実行する
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7T7E8S9E5K');
})();
