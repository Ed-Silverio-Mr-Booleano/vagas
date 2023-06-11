var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var id =  req.params.id;


    let removed = [];

    data.map(dta =>{
       if (dta.id == id){
          data.splice(data.indexOf(id-1), 1); // id -1, pois o array começa em zero.
          removed.push(dta);
          return;
       }
    });


    res.send({msg: "This users was deleted", removed});

};