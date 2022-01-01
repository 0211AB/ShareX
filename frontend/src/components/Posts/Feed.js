import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';
import MasonryLayout from '../../MasonryLayout';
import Spinner from '../../Spinner';

const Feed = () => {
    const [Posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            setLoading(true);
            const query = searchQuery(categoryId);
            client.fetch(query).then((data) => {
                setPosts(data);
                setLoading(false);
            });
        } else {
            setLoading(true);

            client.fetch(feedQuery).then((data) => {
                setPosts(data);
                setLoading(false);
            });
        }
    }, [categoryId]);

    const ideaName = categoryId || 'new';
    if (loading) {
        return (
            <Spinner message={`We are loading ${ideaName} posts to your feed!`} />
        );
    }

    if (Posts?.length < 1) {
        return <h1 className="font-bold text-center"> No Posts available</h1>
    }

    return (
        <div>
            {Posts && (
                <MasonryLayout posts={Posts} />
            )}
        </div>
    );
};

export default Feed;
