var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var id =  req.params.id;
    

    data.map(dta =>{
       dta.id == id ? res.send(dta) : res.status(200).send({msg: "User does not exist!!"});
    });

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};