import { createClient } from 'contentful';
import moment from 'moment';

function initClient() {
    const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN} = process.env;
    return createClient({
        space: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_DELIVERY_TOKEN
    });
}

export async function getPosts() {
    const client = initClient();
    const postCollectionID = 'blogPost';

    const {items: posts} = await client.getEntries({
        'content_type': postCollectionID,
        'order': 'sys.createdAt'
    });

    return posts;
}

export function formatPosts(posts) {
    return posts.map(post => {
        const {sys: {createdAt}, fields: {title, text}} = post;
        return {
            urlTitle: title.replace(/\s+/g,'-').toLowerCase(),
            createdAt: moment(createdAt).format('MMMM Do YYYY'),
            title,
            text,
            pictures: formatPictures(post)
        };
    });
}

function formatPictures(post) {
    if (post.fields.pictures) {
        return post.fields.pictures.map(pic => {
            const {fields: {title, description, file: {url}}} = pic;
            return {
                title,
                description,
                url: `https:${url}`
            };
        });

    }
    return null;
}
