import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

import Pictures from './Pictures';

import './post.css';

export default getRouteProps(({ post }) => (
    <article className="post">
        <Link to="/blog/">{'<'} Back</Link>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        {post.pictures && <Pictures pictures={post.pictures} />}
    </article>
));
