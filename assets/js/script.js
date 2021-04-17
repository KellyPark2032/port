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

/* text animation */
 $(".split").each(function() {
  let text = $(this).text();
  let split = text.split("").join("</span><span aria-hidden='true'>");
  split = "<span aria-hidden='true'>" + split + "</span>";
  $(this).html(split).attr("aria-label", text);
});

setTimeout(() => {
  gsap.to("#section1 .title h2 span", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.05, ease: Sine.easeOut,x:0, y: 0});
  gsap.to("#section1 .title strong span", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.05, ease: Sine.easeOut,x:0, y: 0});
}, 2000);


$(window).scroll(function(){
      let scroll = $(window).scrollTop();
      console.log(scroll)
  
  if ( scroll > $('#section2').offset().top-750){
    gsap.to("#section2 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  }
  if( scroll > $('#section3').offset().top-250){
      gsap.to("#section3 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
    };
  if( scroll > $('#worksCon').offset().top-250){
    gsap.to("#worksCon .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section4').offset().top-250){
    gsap.to("#section4 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section5').offset().top-250){
    gsap.to("#section5 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section6').offset().top-250){
    gsap.to("#section6 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section7').offset().top-250){
    gsap.to("#section7 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#ScriptsCon').offset().top-250){
    gsap.to("#ScriptsCon .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#animateCon').offset().top-250){
    gsap.to("#animateCon .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section8').offset().top-250){
    gsap.to("#section8 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section9').offset().top-380){
    gsap.to("#section9 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section10').offset().top-380){
    gsap.to("#section10 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section11').offset().top-380){
    gsap.to("#section11 .chrc .reveal", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
  };
  if( scroll > $('#section12').offset().top-380){
    gsap.to("#section12 .reveal form", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:0.2, ease: Sine.easeOut,x:0, y: 0});
    gsap.to("#section12 .reveal .info1", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:1.2, ease: Sine.easeOut,x:0, y: 0});
    gsap.to("#section12 .reveal .info2", { duration: 1,  opacity:1, stagger:0.03,  rotate:0, delay:1.2, ease: Sine.easeOut,x:0, y: 0});
  };
});