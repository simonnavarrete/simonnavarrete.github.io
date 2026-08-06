// The initial theme is set in <head> to avoid a flash; this component handles interaction.
(function () {
  var root = document.documentElement;

  class ThemeToggle extends HTMLElement {
    connectedCallback() {
      if (this.firstElementChild) return;

      this.innerHTML = '<button type="button" class="toggle" aria-label="Toggle dark mode" aria-pressed="false">' +
        '<span class="toggle-track" aria-hidden="true"><span class="toggle-knob"></span></span>' +
        '</button>';

      var themeBtn = this.querySelector('.toggle');
      var syncTheme = function () {
        themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
      };

      syncTheme();
      themeBtn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        syncTheme();
      });
    }
  }

  if (!customElements.get('theme-toggle')) {
    customElements.define('theme-toggle', ThemeToggle);
  }
})();
