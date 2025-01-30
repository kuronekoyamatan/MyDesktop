'use strict';

// ↓モーダル↓
document.addEventListener('DOMContentLoaded', () => {
  // モーダルを開くボタンを取得
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modalCloses = document.querySelectorAll('.modal-close');

  // 各ボタンにクリックイベントを追加
  modalTriggers.forEach((button) => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal'); // data-modal属性からIDを取得
      const modal = document.getElementById(modalId); // IDで対応するモーダルを取得
      modal.classList.add('active'); // モーダルを表示
    });
  });

  // モーダルを閉じるボタンにイベントを追加
  modalCloses.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      const modal = closeButton.closest('.modal-container');
      modal.classList.remove('active'); // モーダルを閉じる
    });
  });
});
// ↑モーダル↑

// ↓スライド↓
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  // メインの画像要素を取得
  const mainImage = document.getElementById('main-image');
  // アクティブなサムネイルのインデックスを保持する変数
  let activeIndex = 0;
  // ギャラリーの表示を更新するための関数
  function updateGallery(index) {
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.classList.toggle('active', i === index);
    });
    // メインの画像の src 属性を選択されたサムネイルの src 属性に設定
    mainImage.src = thumbnails[index].src;
  }
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      activeIndex = index;
      updateGallery(activeIndex);
    });
  });

  // 初期表示時にギャラリーを更新
  updateGallery(activeIndex);
});
// ↑スライド↑

  // ↓時計と日付の更新↓
  function updateClock() {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const time = now.toLocaleString('ja-JP', options);
    document.getElementById('clock').textContent = time;
  }
  // 日付の更新
  function updateDate() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const date = now.toLocaleString('ja-JP', options);
    document.getElementById('date').textContent = date;
  }
  // 毎秒時計と日付を更新
  setInterval(() => {
    updateClock();
    updateDate();
  }, 1000);
  // 最初の時計と日付の表示
  updateClock();
  updateDate();
  // ↑時計と日付の更新↑

  // ↓クリック音↓
  const clickSound = document.getElementById('click-sound');
  // クリックするたびに音を鳴らしたい要素を選択
  const clickableElements = document.querySelectorAll(
    'a, .modal-close, .modal-open, .h-open, .h-close, .modal-trigger, .tab-2'
  ); // 'a' とクラス名を追加

  // ↓ヘッダー部分↓
  clickableElements.forEach((element) => {
    element.addEventListener('click', function () {
      clickSound.currentTime = 0; // クリック音が途中で停止するのを防ぐ
      clickSound.play(); // クリック音を再生
    });
  });

  // ↓ヘッダー部分↓
  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('#close');
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  // 初期設定は開いてる状態
  overlay.classList.add('show');
  open.classList.add('hide');

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  // ↑ヘッダー部分↑

 // ↓背景変更↓
function bk(img) {
  document.querySelector('.parent').style.backgroundImage =
    'url(' + img + ')';

  // 選ばれた背景画像のURLをローカルストレージに保存
  localStorage.setItem('backgroundImage', img);
}

// ページ読み込み時に、保存されている背景を設定
window.onload = function () {
  var savedBackground = localStorage.getItem('backgroundImage');

  // 保存された背景があるかどうかを確認
  if (savedBackground) {
    // 保存された背景を適用
    document.querySelector('.parent').style.backgroundImage =
      'url(' + savedBackground + ')';
  } else {
    // デフォルトの背景（初期状態）を適用
    document.querySelector('.parent').style.backgroundImage =
      'url(./img/pc5.jpg)';
  }

  // 背景画像を変更するイベントリスナーを追加
  const links = document.querySelectorAll('nav a');
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // デフォルトのリンク動作を無効化
      const img = link.getAttribute('data-img'); // 画像URLを取得
      bk(img); // bk関数で背景変更
    });
  });
};