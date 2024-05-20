//npm install inquirer

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure?',
    },
    {
      type: 'list',
      name: 'color',
      message: 'Select a color:',
      choices: ['Red', 'Blue', 'Green'],
    },
    {
      type: 'rawlist',
      name: 'fruit',
      message: 'Select a fruit:',
      choices: ['Apple', 'Banana', 'Orange'],
    },
    {
      type: 'expand',
      name: 'letter',
      message: 'Select a letter:',
      choices: [
        { key: 'a', name: 'A', value: 'A' },
        { key: 'b', name: 'B', value: 'B' },
        { key: 'c', name: 'C', value: 'C' },
      ],
    },
    {
      type: 'checkbox',
      name: 'toppings',
      message: 'Select toppings:',
      choices: ['Cheese', 'Pepperoni', 'Mushrooms'],
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter your password:',
    },
    {
      type: 'editor',
      name: 'bio',
      message: 'Write a short bio:',
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Error: Prompt couldn\'t be rendered in the current environment.');
      const name = process.env.NAME || 'Default Name';
      console.log(`Name: ${name}`);
    } else {
      console.error('Error:', error);
    }
  });
