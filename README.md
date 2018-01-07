# Static site generated blog

Hosted version can be found here: https://upbeat-pike-9be205.netlify.com/

This blog is built with:
* [react-static](https://github.com/nozzle/react-static) 
* [contentful](https://www.contentful.com/)
* [particles.js](https://github.com/VincentGarreau/particles.js/)


## Setup

1. Install dependencies: `npm install`

2. Create `.env` file with contents:
```
CONTENTFUL_SPACE_ID=YOUR_CONTENTFUL_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN=YOUR_CONTENTFUL_DELIVERY_TOKEN
```

3. Local development: `npm start`

4. Build project: `npm build`

5. Serve built version if needed: `npm serve`
