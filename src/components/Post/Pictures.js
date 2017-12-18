import React from 'react';

export default ({ pictures }) => (
    pictures.map((pic, index) => <img key={index} src={pic.url} alt={pic.title}/>
));