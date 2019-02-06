$(function() {

  checkboxes.click(function() {
    // The checkboxes in our app serve the purpose of filters.
    // Here on every click we add or remove filtering criteria from a filters object.

    // Then we call this function which writes the filtering criteria in the url hash.
    createQueryHash(filters);
  });

  $.getJSON("jets.json", function(data) {
    // Get data about our jets from jets.json.

    // Call a function that will turn that data into HTML.
    generateAllJetsHTML(data);

    // Manually trigger a hashchange to start the app.
    $(window).trigger('hashchange');
  });

  $(window).on('hashchange', function() {
    // On every hash change the render function is called with the new hash.
    // This is how the navigation of our app happens.
    render(decodeURI(window.location.hash));
  });

  function render(url) {
    // This function decides what type of page to show
    // depending on the current url hash value.
  }

  function generateAllJetsHTML(data) {
    // Uses Handlebars to create a list of jets using the provided data.
    // This function is called only once on page load.
  }

  function renderJetsPage(data) {
    // Hides and shows jets in the All Jets Page depending on the data it receives.
  }

  function renderSingleJetPage(index, data) {
    // Shows the Single Jet Page with appropriate data.
  }

  function renderFilterResults(filters, jets) {
    // Crates an object with filtered jets and passes it to renderJetsPage.
    renderJetsPage(results);
  }

  function renderErrorPage() {
    // Shows the error page.
  }

  function createQueryHash(filters) {
    // Get the filters object, turn it into a string and write it into the hash.
  }

});

function render(url) {

  // Get the keyword from the url.
  var temp = url.split('/')[0];

  // Hide whatever page is currently shown.
  $('.main-content .page').removeClass('visible');

  var map = {

    // The Homepage.
    '': function() {

      // Clear the filters object, uncheck all checkboxes, show all the jets
      filters = {};
      checkboxes.prop('checked', false);

      renderJetsPage(jets);
    },

    // Single Jets page.
    '#jet': function() {

      // Get the index of which jet we want to show and call the appropriate function.
      var index = url.split('#jet/')[1].trim();

      renderSingleJetPage(index, jets);
    },

    // Page with filtered jets
    '#filter': function() {

      // Grab the string after the '#filter/' keyword. Call the filtering function.
      url = url.split('#filter/')[1].trim();

      // Try and parse the filters object from the query string.
      try {
        filters = JSON.parse(url);
      }
      // If it isn't a valid json, go back to homepage ( the rest of the code won't be executed ).
      catch (err) {
        window.location.hash = '#';
      }

      renderFilterResults(filters, jets);
    }

  };

  // Execute the needed function depending on the url keyword (stored in temp).
  if (map[temp]) {
    map[temp]();
  }
  // If the keyword isn't listed in the above - render the error page.
  else {
    renderErrorPage();
  }

}
