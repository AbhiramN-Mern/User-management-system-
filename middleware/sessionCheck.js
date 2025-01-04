const auth = (req,res,next)=>{
    if(req.session.user){
        return res.redirect("/user/home");
    }else{
        next();
    }
}

const procted = (req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        return res.redirect("/user/login")
    }
}


module.exports = {auth,procted}