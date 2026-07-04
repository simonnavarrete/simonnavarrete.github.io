// Theme toggle. The no-flash theme is set inline in <head>; this wires up the button.
(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme');
  if (!themeBtn) return;
  var syncTheme = function () {
    themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
  };
  syncTheme();
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);   // persists across tab-close + hard refresh
    syncTheme();
  });
})();
