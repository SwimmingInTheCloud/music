import originJsonp from 'jsonp'

function JSONP (url,opt){
  return new Promise((resolve,reject)=>{
    originJsonp(url,opt,(err,res)=>{
      if(err){reject(err) }
      resolve(res)
    })
  })
}
export default JSONP
