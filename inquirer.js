const inquirer = require('inquirer');

module.exports = {  //pomocou tohto modulu bezia vstupy v konzole
  input:()=>{
    const input={
      name: 'output',
      type: 'input',
      message: ''
    }
    return inquirer.prompt(input);
  },
  menu: () => {
    const questions = [
      {
        type: 'list',
        name: 'program',
        message: 'Vyber',
        choices: ['Nájsť meno užívateľa podľa čísla',
         'Nájsť číslo podľa mena','Pridať číslo',
        'Zmazať číslo','Zobraziť zoznam','Ukončiť program']
      }
    ];
    return inquirer.prompt(questions);
  },
  pridat: () => {
    const questions = [
        {
            name: 'meno',
            type: 'input',
            message: 'vloz meno:',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'zadaj meno';
              }
            }
          },
          {
            name: 'cislo',
            type: 'input',
            message: 'vloz cislo:',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'zadaj cislo';
              }
            }
          }
    ];
    return inquirer.prompt(questions);
  },
  najstpodlacisla: () => {
    const questions = [
          {
            name: 'cislo',
            type: 'input',
            message: 'vloz cislo:',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'zadaj meno';
              }
            }
          }
    ];
    return inquirer.prompt(questions);
  },
  najstpodlamena: () => {
    const questions = [
          {
            name: 'meno',
            type: 'input',
            message: 'vloz meno:',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'zadaj cislo';
              }
            }
          }
    ];
    return inquirer.prompt(questions);
  },
  
};