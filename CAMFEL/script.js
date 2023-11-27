var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
  var header = $("header");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
