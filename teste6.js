var data =  require("./fakeData");

module.exports =  function(req, res, next) {
  
    var id =  req.params.id;
    
    data.map(dta =>{
        if (dta.id == id){
           
           if( dta.roles){
              if( dta.roles.find(e => e == 'update') == 'update' ){
                console.log("Usuaŕio pode actualizar!"); 
                return next();
              }
              if( dta.roles.find(e => e == 'delete') == 'delete' ){
                console.log("Usuaŕio pode deletar!"); 
                return next();
              }
        
           }else{
              //res.status(401).send({msg: "You are not authorized"});
              console.log("Usuaŕio não pode deletar nem actualizar!");
              return next();
           } 

        }
     });




};