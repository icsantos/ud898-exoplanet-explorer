/* eslint-disable no-console */
/*
Instructions:
(1) Use Promise.all to refactor the .map code by passing Promise.all an array of Promises.
  (a) Each Promise will be executed in parallel.
  (b) The return values will be returned in the same order as the Promises were created.
Hint: you'll probably still need to use .map.
 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */

(function(document) {
  let home = null;

  /**
   * Helper function to show the search query.
   * @param {String} query - The search query.
   * @return {undefined}
   */
  function addSearchHeader(query) {
    home.innerHTML = `<h2 class="page-title">query: ${query}</h2>`;
  }

  /**
   * Helper function to create a planet thumbnail.
   * @param  {Object} data - The raw data describing the planet.
   * @return {undefined}
   */
  function createPlanetThumb(data) {
    const pT = document.createElement('planet-thumb');

    for (const dx in data) {
      if ({}.hasOwnProperty.call(data, dx)) {
        pT[dx] = data[dx];
      }
    }
    home.appendChild(pT);
  }

  /**
   * XHR wrapped in a promise
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  function get(url) {
    return fetch(url);
  }

  /**
   * Performs an XHR for a JSON and returns a parsed JSON response.
   * @param  {String} url - The JSON URL to fetch.
   * @return {Promise}    - A promise that passes the parsed JSON response.
   */
  function getJSON(url) {
    return get(url).then(function(response) {
      return response.json();
    });
  }

  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');

    getJSON('../data/earth-like-results.json')
    .then((response) => {
      addSearchHeader(response.query);

      return Promise.all(response.results.map(getJSON));
    })
    .then((urls) => {
      urls.forEach((url) => {
        createPlanetThumb(url);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  });
}(document));
