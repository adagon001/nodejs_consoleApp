
const inquirer  = require('./inquirer');
const subor  = require('./subor');

const run = async () => { //hlavna funkcia
  const credentials = await inquirer.menu(); //caka na dopyt
  if(credentials['program']=='Pridať číslo'){  //podla dopytu sa volaju funkcie
    const cislo = await inquirer.pridat();
    subor.zapis(cislo);
    console.log(cislo);
  }
  if(credentials['program']=='Zobraziť zoznam'){
    subor.zobraz();
  }
  if(credentials['program']=='Nájsť meno užívateľa podľa čísla'){
    const cislo = await inquirer.najstpodlacisla();
    subor.najstpodlacisla(cislo.cislo);
  }
  if(credentials['program']=='Nájsť číslo podľa mena'){
    const cislo = await inquirer.najstpodlamena();
    subor.najstpodlamena(cislo.meno);


  }
  if(credentials['program']=='Zmazať číslo'){
    const cislo = await inquirer.najstpodlacisla();
    subor.zmazcislo(cislo.cislo);
  }
  if(credentials['program']=='Ukončiť program'){
    console.clear();
    return;
  }
  await inquirer.input();
  console.clear();
  run();
  
};

console.clear();
run();

      