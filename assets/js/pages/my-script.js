function getPageList(totalPages, page, maxLength) {
  if (maxLength < 5) throw "maxLength must be at least 5";

  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
  if (totalPages <= maxLength) {
    // no breaks in list
    return range(1, totalPages);
  }
  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    // no break on left of page
    return range(1, maxLength - sideWidth - 1)
      .concat([0])
      .concat(range(totalPages - sideWidth + 1, totalPages));
  }
  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    // no break on right of page
    return range(1, sideWidth)
      .concat([0])
      .concat(
        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
      );
  }
  // Breaks on both sides
  return range(1, sideWidth)
    .concat([0])
    .concat(range(page - leftWidth, page + rightWidth))
    .concat([0])
    .concat(range(totalPages - sideWidth + 1, totalPages));
}

/* Pagiation*/
$(function () {
  // Number of items and limits the number of items per page
  var numberOfItems = $("#sectionPagination .paginationContent").length;
  var limitPerPage = 2;
  // Total pages rounded upwards
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  // Number of buttons at the top, not counting prev/next,
  // but including the dotted buttons.
  // Must be at least 5:
  var paginationSize = 7;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;
    currentPage = whichPage;
    $("#sectionPagination .paginationContent")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();
    // Replace the navigation items (not prev/next):
    $(".pagination li").slice(1, -1).remove();
    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass(
          "page-item " +
            (item ? "current-page " : "") +
            (item === currentPage ? "active " : "")
        )
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({
              href: "javascript:void(0)",
            })
            .text(item || "...")
        )
        .insertBefore("#next-page");
    });
    return true;
  }

  // Include the prev/next buttons:
  $(".pagination").append(
    $("<li>")
      .addClass("page-item")
      .attr({ id: "previous-page" })
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({
            href: "javascript:void(0)",
          })
          .text("<")
      ),
    $("<li>")
      .addClass("page-item")
      .attr({ id: "next-page" })
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({
            href: "javascript:void(0)",
          })
          .text(">")
      )
  );
  // Show the page links
  $("#sectionPagination").show();
  showPage(1);

  // Use event delegation, as these items are recreated later
  $(document).on(
    "click",
    ".pagination li.current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );
  $("#next-page").on("click", function () {
    return showPage(currentPage + 1);
  });

  $("#previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
  //   $(".pagination").on("click", function () {
  //     $("html,body").animate({ scrollTop: 0 }, 0);
  //   });
});

/*Country Select */
$(document).ready(function () {
  $("#gds-cr-one").on("change", function () {
    $("#display").html(
      $(this).children("option").filter(":selected").text() +
        " < " +
        $("#countrySelection").children("option").filter(":selected").text() +
        "لقد قمت باختيار "
    );
  });
});

/*Hide Password*/
$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("fa-eye-slash");
      $("#show_hide_password i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("fa-eye-slash");
      $("#show_hide_password i").addClass("fa-eye");
    }
  });
});

$(document).ready(function () {
  $("#show_hide_password1 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password1 input").attr("type") == "text") {
      $("#show_hide_password1 input").attr("type", "password");
      $("#show_hide_password1 i").addClass("fa-eye-slash ");
      $("#show_hide_password1 i").removeClass("fa-eye");
    } else if ($("#show_hide_password1 input").attr("type") == "password") {
      $("#show_hide_password1 input").attr("type", "text");
      $("#show_hide_password1 i").removeClass(
        "fa-eye-slash "
      );
      $("#show_hide_password1 i").addClass("fa-eye");
    }
  });
});
$(document).ready(function () {
  $("#show_hide_password2 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password2 input").attr("type") == "text") {
      $("#show_hide_password2 input").attr("type", "password");
      $("#show_hide_password2 i").addClass("fa-eye-slash ");
      $("#show_hide_password2 i").removeClass("fa-eye");
    } else if ($("#show_hide_password2 input").attr("type") == "password") {
      $("#show_hide_password2 input").attr("type", "text");
      $("#show_hide_password2 i").removeClass(
        "fa-eye-slash "
      );
      $("#show_hide_password2 i").addClass("fa-eye");
    }
  });
});
$(document).ready(function () {
  $("#show_hide_password3 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password3 input").attr("type") == "text") {
      $("#show_hide_password3 input").attr("type", "password");
      $("#show_hide_password3 i").addClass("fa-eye-slash ");
      $("#show_hide_password3 i").removeClass("fa-eye");
    } else if ($("#show_hide_password3 input").attr("type") == "password") {
      $("#show_hide_password3 input").attr("type", "text");
      $("#show_hide_password3 i").removeClass(
        "fa-eye-slash "
      );
      $("#show_hide_password3 i").addClass("fa-eye");
    }
  });
});
$(document).ready(function () {
  $("#show_hide_password4 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password4 input").attr("type") == "text") {
      $("#show_hide_password4 input").attr("type", "password");
      $("#show_hide_password4 i").addClass("fa-eye-slash ");
      $("#show_hide_password4 i").removeClass("fa-eye");
    } else if ($("#show_hide_password4 input").attr("type") == "password") {
      $("#show_hide_password4 input").attr("type", "text");
      $("#show_hide_password4 i").removeClass(
        "fa-eye-slash "
      );
      $("#show_hide_password4 i").addClass("fa-eye");
    }
  });
});
$(document).ready(function () {
  $("#show_hide_password5 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password5 input").attr("type") == "text") {
      $("#show_hide_password5 input").attr("type", "password");
      $("#show_hide_password5 i").addClass("fa-eye-slash  ");
      $("#show_hide_password5 i").removeClass("fa-eye");
    } else if ($("#show_hide_password5 input").attr("type") == "password") {
      $("#show_hide_password5 input").attr("type", "text");
      $("#show_hide_password5 i").removeClass(
        "fa-eye-slash  "
      );
      $("#show_hide_password5 i").addClass("fa-eye");
    }
  });
});

/*Phone Number Code*/
$("#phone").intlTelInput({
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js",
  allowDropdown: true,
});
function onlyNumberKey(evt) {
  // Only ASCII charactar in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

/*Upload Image Avatar*/
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

/*Wizard (Service Provider) */
