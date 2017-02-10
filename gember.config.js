const path = require('path');
const base = path.resolve('./');
const config = {};

/**
 * General information
 * @type {{name: string, description: string, key: string}}
 */
config.info = {
    name: "Discogs",
    description: "React POC with rollup and ES6",
    key: "discogs"
};

/**
 * Declare directory object
 * @type {{root, gember: string, data: string, gfx: string, scripts: string, svg: string, sources: string, templates: string}}
 */
config.dir = {
    root: base,
    gember: `${base}/gember`,
    dest: `${base}/build`,
    data: `${base}/sources/data`,
    gfx: `${base}/sources/gfx`,
    node: `${base}/node_modules`,
    scripts: `${base}/sources/scripts`,
    styles: `${base}/sources/styles`,
    svg: `${base}/sources/svg`,
    sources: `${base}/sources`,
    templates: `${base}/sources/templates`,
    build: {
        gfx: 'build/resources/gfx',
        images: 'build/resources/images',
        resources: 'build/resources',
        scripts: 'build/resources/scripts',
        styles: 'build/resources/styles'
    }
};

/**
 * Declare path object
 * @type {{src: string, dest: string, node_modules: string, gfx: string, resources: string, scripts: string, styles: string, sources: string}}
 */
config.path = {
    src: 'sources',
    dest: 'build',
    node_modules: 'node_modules',
    gfx: '/resources/gfx',
    resources: '/resources',
    scripts: 'resources/scripts',
    styles: 'resources/styles',
    sources: '../sources'
};

/**
 * Declare template object
 * @used ./gember/templates.js
 * @type {{data: [*]}}
 */
config.templates = {
    data: {
        news: `${config.dir.data}/news.json`,
        navigation: `${config.dir.data}/navigation.json`,
        categories: `${config.dir.data}/categories.json`,
        follow_1vd: `${config.dir.data}/1vd-follow.json`,
        socialdata: `${config.dir.data}/social.json`
    }
};

config.scripts = {
    bundles: {
        lib: `${config.dir.node}/jquery/dist/jquery.min.js \
              ${config.dir.node}/lodash/lodash.min.js \
              ${config.dir.node}/svg4everybody/dist/svg4everybody.js \
              ${config.dir.scripts}/lib/**`
    }
};

config.server = {
    ext_key: 'eenvandaag_resources'
};


//,
// modules: `${config.dir.scripts}/modules/**`,
// footer: `${config.dir.scripts}/project.js`,
// angular_lib: `${config.dir.scripts}/angular_overzicht/lib/angular.min.js \
//               ${config.dir.scripts}/angular_overzicht/lib/elastic.min.js \
//               ${config.dir.scripts}/angular_overzicht/lib/elasticsearch.angular.min.js \
//               ${config.dir.scripts}/angular_overzicht/lib/angular-locale_nl-nl.custom.js \
//               ${config.dir.scripts}/angular_overzicht/lib/angular-translate.min.js`,
// angular_es: `${config.dir.scripts}/angular_overzicht/*.js \
//              ${config.dir.scripts}/angular_overzicht/controllers/*.js \
//              ${config.dir.scripts}/angular_overzicht/directives/*.js \
//              ${config.dir.scripts}/angular_overzicht/filters/*.js \
//              ${config.dir.scripts}/angular_overzicht/services/*.js`,
// angular_social: `${config.dir.scripts}/social_wall/*.js \
//                  ${config.dir.scripts}/social_wall/controllers/*.js \
//                  ${config.dir.scripts}/social_wall/directives/*.js \
//                  ${config.dir.scripts}/social_wall/filters/*.js \
//                  ${config.dir.scripts}/social_wall/services/*.js`

module.exports = config;
