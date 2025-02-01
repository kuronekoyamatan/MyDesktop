"use strict"

// ローディング画面の処理
window.addEventListener('DOMContentLoaded', function () {
  const loadingElement = document.getElementById('loading');

  // ローディング画面を非表示にする関数
  function hideLoading() {
    loadingElement.style.transition = 'opacity .6s ease, visibility .6s ease';
    loadingElement.style.opacity = 0;
    loadingElement.style.visibility = 'hidden';
  }

  // ページが初回訪問かどうかをローカルストレージで確認
  if (!localStorage.getItem('firstVisit')) {
    // 初回訪問の場合、ローカルストレージにフラグをセット
    localStorage.setItem('firstVisit', 'true');

    // ローディング画面を表示し、4秒後に非表示にする
    setTimeout(function () {
      hideLoading();
    }, 4000);
  } else {
    // 初回訪問ではない場合、ローディング画面を非表示にする
    loadingElement.style.display = 'none';
  }
});