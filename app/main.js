// wrap all components in an imediately invoked function to keep global namespace clean
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    // we use the bootstrap function from ng.platform.browser instead of ng.core
    // so we can bootstrap this on other non-browser applications some day
    // basically on document load, we run our main App component.
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
