$(function () {
  const cursor = document.querySelector('.custom_cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  })

  $('#title').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    $('.p1').css({
      top: -89 - (posY / 10),
      right: -164 - (posX / 10),
    });

  });


  $('ul.con_all li').click(function () {
    let src = $(this).parent().find('.on img').attr('src')
    let alt = $(this).parent().find('.on img').attr('alt')
    $('.modal').fadeIn();
    $('.modal img').attr('src', src);
    $('.modal span').text(alt);
  });
  $('.modal button').click(function () {
    $('.modal').fadeOut();
  });

  AOS.init();
});