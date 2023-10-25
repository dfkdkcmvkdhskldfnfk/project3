$(document).ready(function(){
    $(".slider").bxSlider({
    mode: 'horizontal', //vertical은 수직으로, horizontal은 수평으로
   moveSlides: 1, //슬라이드 이동시 개수
   infiniteLoop: true, //반복
   slideWidth: 1920, //슬라이드 너비
   slideHeight: 600, //슬라이드 높이
   speed: 800, //슬라이드 전환 속도
   auto: true, //자동실행여부 
   pager: true, //동그라미 버튼 노출 여부 
   autoHover: true, //호버시 애니메이션정지여부
    });
});

$(document).ready(function() {
    $(".md_img").bxSlider({
       mode: 'horizontal', //vertical은 수직으로, horizontal은 수평으로
       moveSlides: 1, //슬라이드 이동시 개수
       infiniteLoop: true, //반복
       slideWidth: 250, //슬라이드 너비
       slideHeight: 150, //슬라이드 높이
       minSlides: 4, //슬라이드 최소 노출개수
       maxSlides:4, //슬라이드 최대 노출 개수
       controls:true, //이전, 다음 버튼 노출
       speed: 500, //슬라이드 전환 속도
       auto: true, //자동실행여부 
       pager: false, //동그라미 버튼 노출 여부 
       autoHover: false, //호버시 애니메이션정지여부
    })
    })