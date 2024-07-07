
window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
      let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
      
      var getCardName = t.card("name").get("name")
      return [
        {
            text: getCardName,
            color: "pink"
        },
        /* DYNAMIC FUNCTION TO TEST NEXT 
        {
        dynamic: function () {
            // we could also return a Promise that resolves to
            // this as well if we needed to do something async first
            return {
              text: "Dynamic " + (Math.random() * 100).toFixed(0).toString(),
              icon: "./images/icon.svg",
              color: "green",
              refresh: 10, // in seconds
            };
          }
        } */
      ]
      
    },
  });
  
  