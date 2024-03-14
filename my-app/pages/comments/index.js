import React, { useState, useEffect } from 'react';

function CommentList() {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    };

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment: commentText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    };

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    };

    const updateComment = async (commentId)=>{
        const response = await fetch (`/api/comments/${commentId}`,{
            method :'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body :JSON.stringify({id:commentId,text:commentText})
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <>
            <input type='text' value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <button onClick={fetchComments}>Fetch Comments</button>
            <button onClick={submitComment}>Submit Comment</button>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            {comment.text}
                            <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
                            <button onClick={()=>{
                                setId(comment.id)
                                setCommentText(comment.text)
                            }}>Update Component</button>
                            <button onClick={() => updateComment(comment.id)}>Save Update</button>
                        </div>
                    );
                })
            }
        </>
    );
}

export default CommentList;