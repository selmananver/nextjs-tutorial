import {comments} from '../../../data/comments'

export default function handler(req,res){
    const  {commentid} =req.query
    if(req.method ==='GET'){
    const comment = comments.find((comment)=>comment.id ===parseInt(commentid))
    res.status(200).json(comment)
    }
    if(req.method =='DELETE'){
        const comment =comments.find((comment)=>comment.id ===parseInt(commentid))
        const index =comments.find((comment)=>comment.id === parseInt(commentid))
        comments.splice(index,1)
        res.status(200).json(comment)
    }
    else if (req.method ==='PUT'){
        const id = req.body.id
        const text = req.body.text
        const commentdata={
            text:text,
            id:id
        }
        const index =comments.findIndex((comment)=>comment.id ===id)
        if(index!==-1){
            comments.splice(index,1,commentdata)
            const commentupdate= comments.map((comment)=>comment.id ===id)
            res.status(200).json(commentupdate)

        }
        else{
            res.status(404).json({error:'No data found'})
        }
    }
}
