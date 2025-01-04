

const procted = (req, res, next) => {
    if (req.session.admin) {
        next();
    } else {
        return res.redirect("/admin/login");
    }
};


const auth = (req,res,next)=>{
    if(req.session.admin){
        return res.redirect("/admin/dashboard");
    }else{
        next();
    }
}


module.exports = {procted,auth}