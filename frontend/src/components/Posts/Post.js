import React from 'react'
import { urlFor } from '../../client'

const Post = ({ post: { postedBy, image, _id, destination } }) => {
    return (
        <div>
            <img className='rounded-lg w-full' src={urlFor(image).width(250).url()}></img>
        </div>
    )
}

export default Post
