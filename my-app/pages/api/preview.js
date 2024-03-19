export default function handler(req,res){
    res.setPreviewData({user:'Selman'})
    // res.end('Preview mode enabled')
    res.redirect(req.query.redirect)
}