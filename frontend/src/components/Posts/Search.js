import React, { useEffect, useState } from 'react';

import MasonryLayout from '../../MasonryLayout';
import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';
import Spinner from '../../Spinner';

const Search = ({ searchTerm }) => {
    const [posts, setposts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchTerm !== '') {
            setLoading(true);
            const query = searchQuery(searchTerm.toLowerCase());
            client.fetch(query).then((data) => {
                setposts(data);
                setLoading(false);
            });
        } else {
            client.fetch(feedQuery).then((data) => {
                setposts(data);
                setLoading(false);
            });
        }
    }, [searchTerm]);

    return (
        <div>

            {loading && <Spinner message="Searching Posts" />}
            {posts?.length !== 0 && <MasonryLayout posts={posts} />}
            {posts?.length === 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl ">No Posts Found!</div>
            )}
        </div>
    );
};

export default Search;