/*
Instructions:
(1) Rewrite get with the Fetch API: https://davidwalsh.name/fetch
(2) Finish the getJSON method. getJSON should take a URL and return the parsed JSON response.
  (a) getJSON needs to return a Promise!
(3) Test by console.logging the response and by passing the query string from getJSON to addSearchHeader.
(4) Handle errors by passing "unknown" to addSearchHeader.
 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */
/* jshint esversion: 6 */

(function(document) {
  let home = null;

  /**
   * Helper function to show the search query.
<<<<<<< HEAD
   * @param {String} response - The unparsed JSON response from get.
   * @returns {undefined}
||||||| merged common ancestors
   * @param {String} response - The unparsed JSON response from get.
=======
   * @param {String} query - The search query.
>>>>>>> 7dcd8b751f6b4719245df2dac4db1d91c780db2a
   */
<<<<<<< HEAD
  function addSearchHeader(response) {
    try {
      response = JSON.parse(response).query;  // You'll be moving this line out of here in the next quiz!
    } catch (e) {
      // It's 'unknown', so leave it alone
    }
    home.innerHTML = `<h2 class="page-title">query: ${response}</h2>`;
||||||| merged common ancestors
  function addSearchHeader(response) {
    try {
      response = JSON.parse(response).query;  // you'll be moving this line out of here in the next quiz!
    } catch (e) {
      // it's 'unknown', so leave it alone
    }
    home.innerHTML = '<h2 class="page-title">query: ' + response + '</h2>';
=======
  function addSearchHeader(query) {
    home.innerHTML = '<h2 class="page-title">query: ' + query + '</h2>';
>>>>>>> 7dcd8b751f6b4719245df2dac4db1d91c780db2a
  }

  /**
   * XHR wrapped in a Promise using Fetch.
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  function get(url) {
<<<<<<< HEAD
    return new Promise(function (resolve, reject) {
      const req = new XMLHttpRequest();

      req.open('GET', url);

      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = function() {
        reject(Error('Network Error'));
      };

      req.send();
    });
||||||| merged common ancestors
    /*
    This code needs to get wrapped in a Promise!
     */
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status === 200) {
        // It worked!
        // You'll want to resolve with the data from req.response
      } else {
        // It failed :(
        // Be nice and reject with req.statusText
      }
    };
    req.onerror = function() {
      // It failed :(
      // Pass a 'Network Error' to reject
    };
    req.send();
=======
    /*
    Use the Fetch API to GET a URL.
    Return the fetch.

    Your code goes here!
     */
  }

  /**
   * Performs an XHR for a JSON and returns a parsed JSON response.
   * @param  {String} url - The JSON URL to fetch.
   * @return {Promise}    - A promise that passes the parsed JSON response.
   */
  function getJSON(url) {
    /*
    Return a Promise that gets a URL and parses the JSON response. Use your get method!

    Your code goes here!
     */
>>>>>>> 7dcd8b751f6b4719245df2dac4db1d91c780db2a
  }

  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');
<<<<<<< HEAD

    get('../data/earth-like-results.json')
      .then(function(response) {
        addSearchHeader(response);
      })
      .catch(function(error) {
        addSearchHeader('unknown');
        // eslint-disable-next-line no-console
        console.log(error);
      });
||||||| merged common ancestors
    /*
    Uncomment the next line you're ready to start chaining and testing!
    You'll need to add a .then and a .catch. Pass the response to addSearchHeader on resolve or
    pass 'unknown' to addSearchHeader if it rejects.
     */
    // get('../data/earth-like-results.json')
=======
    /*
    Uncomment the next line when you're ready to test!
    Don't forget to chain with a .then and a .catch!

    Your code goes here too!
     */
    // getJSON('../data/earth-like-results.json')
>>>>>>> 7dcd8b751f6b4719245df2dac4db1d91c780db2a
  });
}(document));
