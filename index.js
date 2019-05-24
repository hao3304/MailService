const elasticsearch = require("elasticsearch");

const hosts = ["202.121.179.42"];

const esClient = new elasticsearch.Client({
  hosts: hosts.map(host => host + ":9200"),
  log: "error"
});

// esClient.clearScroll();

function init() {
  esClient
    .search({
      index: "mail-*",
      body: {
        query: {
          bool: {
            should: [
              {
                match: {
                  loghost: "202.120.0.7"
                }
              },
              {
                match: {
                  loghost: "202.120.0.8"
                }
              }
            ]
          }
        },
        sort: {
          "@timestamp": {
            order: "desc"
          }
        }
      },
      scroll: "200m",
      size: 100
    })
    .then(
      function(re) {
        debugger;
        doScroll(re._scroll_id);
      },
      function(err) {
        console.trace(err.message);
      }
    );
}

function doScroll(scroll_id) {
  esClient.scroll(
    {
      scroll_id: scroll_id
    },
    function(e) {
      debugger;
    },
    function(err) {}
  );
}

init();
