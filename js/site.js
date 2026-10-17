// Close the collapsed navbar after picking a section on mobile.
(function () {
  document.querySelectorAll('#navbar-content .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.jQuery) { window.jQuery('#navbar-content').collapse('hide'); }
    });
  });
})();
