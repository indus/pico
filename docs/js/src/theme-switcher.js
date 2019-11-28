/*!
 * Theme Switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019 - Licensed under MIT
 */

(function() {

  /**
   * Config
   */

  var switcher = {
    button: {
      element:    'BUTTON',
      class:      'secondary switcher',
      on:         '<i>Turn on dark mode</i>',
      off:        '<i>Turn off dark mode</i>'
    },
    target:       'body', // Button append in target
    selector:     'button.switcher', // Button selector in Dom
    currentTheme: systemColorScheme()
  };



  /**
   * Init
   */

  themeSwitcher();



  /**
   * Get System Color Scheme
   *
   * @return {string}
   */

  function systemColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    else {
      return 'light';
    }
  }



  /**
   * Display Theme Switcher
   */

  function themeSwitcher() {

    // Insert Switcher
    var button = document.createElement(switcher.button.element);
    button.className = switcher.button.class;
    document.querySelector(switcher.target).appendChild(button);

    // Set Current Theme
    setTheme(switcher.currentTheme);

    // Click Listener on Switcher
    document.querySelector(switcher.selector).addEventListener('click', function() {

      // Switch Theme
      if (switcher.currentTheme == 'light') {
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, false);

  }



  /**
   * Set Theme
   *
   * @param {string} set
   */

  function setTheme(set) {

    // Text toggle
    if (set == 'light') {
      var label = switcher.button.on;
    }
    else {
      var label = switcher.button.off;
    }

    // Apply theme
    document.querySelector('html').setAttribute('data-theme', set);
    document.querySelector(switcher.selector).innerHTML = label;
    document.querySelector(switcher.selector).setAttribute('aria-label', stripTags(label));
    switcher.currentTheme = set;
  }



  /**
   * Strip tags
   *
   * @param {string} html
   * @return {string}
   */

  function stripTags(html) {
    return html.replace(/<[^>]*>?/gm, '');
  }

})();
