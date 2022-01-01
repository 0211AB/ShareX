import React from 'react';
import Masonry from 'react-masonry-css';
import Post from './components/Posts/Post'

const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
};

const MasonryLayout = ({ posts }) => (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
        {posts?.map((post) => <Post key={post._id} post={post} className="w-max" />)}
    </Masonry>
);

export default MasonryLayout;