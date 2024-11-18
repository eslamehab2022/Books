

export const asyncHandelr = (fn)=>{

    return (req,res,next)=>{

        fn(req,res,next).catch(error=>{

            return next(new Error(error))
        })
    }
}
// handelr global error in application
export const errorGlobal =(err,req,res,next)=>{
    if(err){
        return res.status(err.cause || 500).json({message:err.message})
    }

}