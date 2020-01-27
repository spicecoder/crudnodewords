var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
{
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
      default: 'Alligators, of course!',
    }

  ])
  .then(answers => {
    // Use user feedback for... whatever!!
   console.info('Answer:', answers.faveReptile);
  })
