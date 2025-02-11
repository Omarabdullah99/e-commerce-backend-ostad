
const testRouteFunction= async(req, res)=>{
    res.status(200).json({message:"hello test router"})
}


module.exports={testRouteFunction}