var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    let id =  req.params.id;
    let myData = [];

    

    data.map(dta =>{
       if (dta.id == id){
          myData.push(dta);
          return;
       }
    });

    myData.length > 0 ? res.send(myData[0]) : res.status(204).send();


};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};