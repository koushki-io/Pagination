export const validate = (data)=>{
    const erorrs={};


  
    if(!data.username){
        erorrs.username='Email required'

    }else if(data.username.length <=3){
        erorrs.username="Enter at least 4 letters"
        
    }else{
        delete erorrs.username
    }

    if(!data.password){
        erorrs.password="password is required"
    }else if(data.password.length < 6){
        erorrs.password=" password need to be 6 character more"

    }
    else{
        delete erorrs.password
    }
    

return erorrs


}