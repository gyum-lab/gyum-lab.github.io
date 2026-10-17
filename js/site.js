// Publication filter (All / First Author) and mobile menu auto-close.
(function () {
  var buttons = document.querySelectorAll('.pub-filter-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var firstOnly = btn.dataset.filter === 'first';
      buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
      document.querySelectorAll('.ul-papers li').forEach(function (li) {
        li.classList.toggle('pub-hidden', firstOnly && !li.classList.contains('first-author'));
      });
      // hide a whole group (e.g. Journal Articles) when nothing in it is left
      document.querySelectorAll('.pub-group').forEach(function (g) {
        var visible = g.querySelectorAll('.ul-papers li:not(.pub-hidden)').length;
        g.classList.toggle('pub-hidden', visible === 0);
      });
    });
  });

  // close the collapsed navbar after picking a section on mobile
  document.querySelectorAll('#navbar-content .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.jQuery) { window.jQuery('#navbar-content').collapse('hide'); }
    });
  });
})();
