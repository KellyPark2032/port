/* overlay menu */
$(".navBtn").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  $("#side-nav").toggleClass("on");
  if ($("#side-nav").hasClass("on")) {
    $("#side-nav ul").animate({ left: "18px" }, 400);
    $(".navBtn").text("CLOSE");
  } else {
    $("#side-nav ul").animate({ left: "-270" }, 400);
    $(".navBtn").text("MENU");
  }
});
var nav = $("#side-nav ul li");
var cont = $("#contents > .sideContent");

nav.click(function(e){
    e.preventDefault();
    e.stopPropagation();

    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll >= cont.eq(0).offset().top-10){
      nav.removeClass("active");
      nav.eq(0).addClass("active");
  }
  if(wScroll >= cont.eq(1).offset().top-10){
      nav.removeClass("active");
      nav.eq(1).addClass("active");
  }
  if(wScroll >= cont.eq(2).offset().top-10){
      nav.removeClass("active");
      nav.eq(2).addClass("active");
  }
  if(wScroll >= cont.eq(3).offset().top-10){
      nav.removeClass("active");
      nav.eq(3).addClass("active");
  }
  if(wScroll >= cont.eq(4).offset().top-10){
      nav.removeClass("active");
      nav.eq(4).addClass("active");
  }
  if(wScroll >= cont.eq(5).offset().top-10){
      nav.removeClass("active");
      nav.eq(5).addClass("active");
  }
  if(wScroll >= cont.eq(6).offset().top-10){
    nav.removeClass("active");
    nav.eq(6).addClass("active");
}
});

/* return-to-top */
function backToTop() {
  // scroll button show/hide
  window.addEventListener("scroll", () => {
    if (document.querySelector("html").scrollTop > 100) {
      document.getElementById("return-to-top").style.display = "block";
    } else {
      document.getElementById("return-to-top").style.display = "none";
    }
  });
  // back to top
  document.getElementById("return-to-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
backToTop();

// script1 clickbtn 
$(document).on("click", ".script1 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script1 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script1 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script1 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script1 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script1 .nacc").height(listItemHeight + "px");
  }
});

// script2 clickbtn 
$(document).on("click", ".script2 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script2 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script2 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script2 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script2 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script2 .nacc").height(listItemHeight + "px");
  }
});

// script3 clickbtn 
$(document).on("click", ".script3 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script3 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script3 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script3 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script3 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script3 .nacc").height(listItemHeight + "px");
  }
});
