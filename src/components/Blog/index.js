
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

import './blog.css';

export default getRouteProps(({ posts }) => (
    <div className="blog">
        <h1 className="blog__title">Here are all posts</h1>
        <ul className="blog__post-container">
            {posts.map(post => (
                <li className="post-preview" key={post.id}>
                    <Link className="post-preview__link" to={`/blog/post/${post.urlTitle}/`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
))
