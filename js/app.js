console.log('app.js running');

window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log('card badges initialization is done!');
        return t.card('all')
        .then((cards) => {
            console.log(cards);
            return [
                {
                    text: getCardName,
                    color: "pink"
                }];
        });
    },
  });
  
  