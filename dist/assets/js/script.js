"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ------------------------------------
  // # ハンバーガーメニュー
  // ------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".header").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".header").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // ------------------------------------
  // # swiper
  // ------------------------------------
  var swiper = new Swiper('.js-mv-swiper', {
    // Optional parameters
    loop: true,
    speed: 1500,
    //スライドの速度
    effect: 'fade',
    autoplay: {
      delay: 3000
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiper2 = new Swiper('.js-staff-swiper', {
    loop: true,
    // ループ有効
    slidesPerView: 1.85,
    // 一度に表示する枚数
    speed: 5000,
    // ループの時間
    allowTouchMove: false,
    // スワイプ無効
    autoplay: {
      delay: 0 // 途切れなくループ
    },

    spaceBetween: 10,
    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        slidesPerView: 3
      },
      // スライドの表示枚数：1025px以上の場合
      1025: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  // ------------------------------------
  // # トップへ戻るボタン
  // ------------------------------------
  var topBtn = $(".to-top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300, "linear");
    return false;
  });
});