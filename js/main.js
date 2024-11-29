$(function (){
  // Splitting.js로 텍스트를 애니메이션 효과 주기
  Splitting();


  $('#con1').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    $('.p1').css({
      top: -79 - (posY / 40),
      right: -156 - (posX / 70),
    });
    $('.p2').css({
      top: -79 + (posY / 30),
      right: -156 + (posX / 40),
    });

  });
});