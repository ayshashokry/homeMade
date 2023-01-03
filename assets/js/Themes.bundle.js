$(".cogicon").click(function () {
  $(".themesOptions").fadeToggle(500);
});

var colorList = $(".themesOptions ul li");
colorList.eq(0).css("backgroundColor", "#682300");
colorList.eq(1).css("backgroundColor", "#44b576f2");

colorList.click(function () {
  var color = $(this).css("backgroundColor");
  $(".defaultColorBlue-Button").css({
    "background-color": color,
    color: "#fff",
    borderColor: color,
  });
  $(".defaultColorBrown-Button").css({
    "background-color": color,
    color: "#fff",
    borderColor: color,
  });
  $("#progressbar li.active p").css({ color: color });
  $("#progressbar li.active:before").css({
    color: "#fff",
    backgroundColor: color,
  });
  $(".separator>.line").css({ backgroundColor: color });
  $(".defaultBorderBlue-Button").css({
    color: color,
    borderColor: color,
  });
  $(".defaultColorOily").css("color", color);
  $(".defaultColorBlue").css("color", "#686868");
  $(".defaultColorBlue").css("color", "#686868");
  $(".logoutBtn").css({ "background-color": color, color: "white" });
  $("h1").css({ color: color });
  $("h2").css({ color: color });
  $("h3").css({ color: color });
  $("h4").css({ color: color });
  $("h5").css({ color: color });
  $(".defaultColorBrown").css({ color: color });
  $(".seeAllBtn").css({ color: color });
  $(".navi-icon i").css({ color: color });
  $(".navi-text").css({ color: color });
  $(".header-mobile .burger-icon span").css({ backgroundColor: color });
  $(".sectionFilterIcon").css({ color: color });
  $(".ki-minus").css({ color: "white" });

  $(".ki-plus").css({ color: "white" });
  $(
    ".header .header-menu .menu-nav > .menu-item.menu-item-active > .menu-link"
  ).css({ borderColor: color });
  $(".navbarToggle").css({ color: color });
  $(
    ".header .header-menu .menu-nav > .menu-item.menu-item-active > .menu-link .menu-text"
  ).css({ color: color });
  $(".btn-light-primary").css({ backgroundColor: color, color: "white" });
  $("#progressbar li.active:before").css({ backgroundColor: color });
  $(".themesOptions-container>.cogicon").css({ color: color });
  $(".btn-cart").css({ backgroundColor: "white", borderColor: color });

  $(".header-menu-mobile .menu-item-submenu .menu-text").css({
    color: color,
  });
  $(".header-menu-mobile .menu-item-submenu .menu-arrow").css({
    color: color,
  });
});
