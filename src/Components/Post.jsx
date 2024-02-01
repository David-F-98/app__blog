import React from 'react';
import post from '../Data/post';
import { useParams, Navigate } from 'react-router-dom';
const Post = () => {
    const {id} = useParams();
    return ( 
        <>
            {post[id-1] ? 
                <div>
                    <h1>{post[id-1].titulo}</h1>
                    <p>{post[id-1].texto}</p>
                </div>
            :
            //Redireccionando
                <Navigate replace to={'/'}/>
            }
        </>
     );
}
 
export default Post;