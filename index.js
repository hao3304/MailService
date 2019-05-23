const elasticsearch = require("elasticsearch");

const esClient = new elasticsearch.Client({
  hosts: ["202.121.179.42:9200"],
  log: "trace"
});

esClient.scroll(
  {
    scroll: "200m"
  },
  function(e) {
    debugger;
  },
  function(err) {
    debugger;
  }
);

// esClient
//   .search({
//     index: "mail-*",
//     body: {
//       query: {
//         match: {
//           loghost: "202.120.0.7"
//         }
//       }
//     },
//     scroll: "200m",
//     size: 100
//   })
//   .then(
//     function(re) {
//       debugger;
//     },
//     function(err) {
//       console.trace(err.message);
//     }
//   );
