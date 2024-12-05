$(function () {
  // Splitting.js로 텍스트를 애니메이션 효과 주기
  Splitting();

  const cursor = document.querySelector('.custom_cursor');
  document.addEventListener('mousemove',(e)=>{
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  })


  $('#con1').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    $('.p1').css({
      top: -79 - (posY / 30),
      right: -156 - (posX / 10),
    });
    $('.p2').css({
      top: -79 + (posY / 20),
      right: -156 + (posX / 20),
    });
  });

  $('#con2 .left li').hover(function () {
    let i = $(this).index();
    $('#con2 .img_box img').removeClass('on').eq(i).addClass('on');
  }, function () {
    $('#con2 .img_box img').removeClass('on')
  })

  $('#con4').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    $('.p3').css({
      bottom: -300 - (posY / 100),
      right: -120 - (posX / 10),
    });
    
  });
});