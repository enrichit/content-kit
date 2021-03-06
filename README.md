# Content Kit

> A modular content managment editor.

[![CircleCI](https://circleci.com/gh/enrichit/content-kit/tree/master.svg?style=svg)](https://circleci.com/gh/enrichit/content-kit/tree/master)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
Continuation of content-kit-experiments as a Vue app using single file components.

## Todo

- [x] Reduce redundency in imports between `content-kit` and `ck-list-input`/`ck-list-render`. Should only have to register dependencies once.~~
- [x] Add unit tests for existing components.
- [ ] More styling on input componments.
- [ ] Better controls on `ck-list-input`.
- [ ] Sort out story book for content components.
- [ ] Add more content components.
- [ ] More visually appealing demo.
- [ ] Internationalisation.
