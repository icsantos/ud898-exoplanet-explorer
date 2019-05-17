/* eslint-disable no-console */
/*
Challenge:

Use what you've learned about Promises to request thumbnails in parallel but create them in the
proper order even if all the requests haven't finished.
 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */
/* jshint esversion: 6 */

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
    return get(url).then((response) => response.json());
  }

  window.addEventListener('WebComponentsReady', function () {
    home = document.querySelector('section[data-route="home"]');

    getJSON('../data/earth-like-results.json')
      .then((response) => {
        addSearchHeader(response.query);

        return response.results.map(getJSON)
          .reduce((sequence, urlPromise) => {
            return sequence
              .then(() => urlPromise)
              .then((url) => {
                createPlanetThumb(url);
              });
          }, Promise.resolve());
      })
      .catch((err) => {
        console.log(err);
      });
  });
}(document));
