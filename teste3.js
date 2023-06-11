var data =  require("./fakeData");
const fs = require("fs");

module.exports = function(req, res) {
  
    var id =  req.params.id;


    let removed = [];
    let i = 0;

    data.map(dta =>{
       if (dta.id == id){
          data.splice(i, 1); 
          removed.push(dta);
          return;
       }
       i++;
    });

    fs.writeFile("users.json", JSON.stringify(data), err => {
        if (err) throw err;
        res.send({msg: "This users was deleted", removed});
    });


    

};