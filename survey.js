const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is your name? Nicknames are also acceptable :): ",
  (answer) => {
    let a = `\nHey this is: ${answer}`;
    rl.question("What's an activity you like doing? ", (answer) => {
      a += `\nI like: ${answer}`;
      rl.question("What do you listen to while doing that?", (answer) => {
        a += `\nI listen to: ${answer}`;
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)",
          (answer) => {
            a += `\nMy favorite meal is: ${answer}`;
            rl.question(
              "What's your favourite thing to eat for that meal?",
              (answer) => {
                a += `\nAnd I love to eat: ${answer}`;
                rl.question(
                  "Which sport is your absolute favourite?",
                  (answer) => {
                    a += `\nMy favorite sport is: ${answer}`;
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!",
                      (answer) => {
                        a += `\nMy superpower is: ${answer}\n`;

                        console.log(a);
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);


