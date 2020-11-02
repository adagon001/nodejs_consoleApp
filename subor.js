const fs = require('fs');
module.exports = {  //vsetky funkcie pracujuce so suborom
zapis: (dat) =>{
    for (const c of dat.cislo) {
        if((c>'9'||c<'0')&&c!='+'){
            console.log("cislo moze obsahovat len 0-9 alebo +");
            return ;
        }
    }
    fs.readFile('cisla.json', function (err, data) {
        var json = JSON.parse(data);
        for(var i = 0; i < json.length; i++){
            if(json[i].meno==dat.meno){
                console.log("meno nie je unikatne");
                return ;
            }}
        json.push(dat);    
        fs.writeFile("cisla.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log(dat);
          console.log('cislo bolo pridane do zoznamu!');
        });
    })
},
zobraz: () =>{
    fs.readFile('cisla.json', function (err, data) {
        var json = JSON.parse(data);
        console.log('\n',);
        console.table(json);
    })
},
najstpodlacisla: (cislo) =>{
    fs.readFile('cisla.json', function (err, data) {
        var json = JSON.parse(data);  
        var nasiel=0;
        for(var i = 0; i < json.length; i++){
            if(json[i].cislo==cislo){
                console.log( json[i]);
                nasiel=1;
            }
        }
        if (nasiel==0){console.log('cislo neexistuje');}
    })
},
najstpodlamena: (meno) =>{
    fs.readFile('cisla.json', function (err, data) {
        var json = JSON.parse(data);  
        for(var i = 0; i < json.length; i++){
            if(json[i].meno==meno){
                console.log( json[i]);
                return ;
            }
        }
        console.log('meno neexistuje');
    })
},
zmazcislo: (cislo) =>{
    fs.readFile('cisla.json', function (err, data) {
        var json = JSON.parse(data);
        for(var i = 0; i < json.length; i++){
            if(json[i].cislo==cislo){
                json.splice(i,1);
            }
        } 
        fs.writeFile("cisla.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('kontakty s cislom '+cislo+' boli vymazane');
        });
    })
},
}
