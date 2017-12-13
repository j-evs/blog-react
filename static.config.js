import React from 'react';

require('dotenv').config();
import { getPosts } from "./src/utils/contentManager";
import { formatPosts } from "./src/utils/contentManager";


export default {
    getSiteProps: () => ({
        title: 'React Static',
    }),
    getRoutes: async () => {
        const posts = await getPosts();
        const formattedPosts = formatPosts(posts);
        console.log('form', formattedPosts);
        return [
            {
                path: '/',
                component: 'src/components/Home',
            },
            {
                path: '/about',
                component: 'src/containers/About',
            },
            {
                path: '/blog',
                component: 'src/containers/Blog',
                getProps: () => ({
                    posts: formattedPosts,
                }),
                children: formattedPosts.map(post => ({
                    path: `/post/${post.urlTitle}`,
                    component: 'src/containers/Post',
                    getProps: () => ({
                        post,
                    }),
                })),
            },
            {
                is404: true,
                component: 'src/containers/404',
            },
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}
