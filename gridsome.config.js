// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome',
    plugins: [
        {
            use: '@gridsome/source-strapi',
            options: {
                apiURL: 'http://localhost:1337',
                queryLimit: 1000, // Defaults to 100
                contentTypes: ['post', 'tag'],
                singleTypes: ['general'],
            },
        },
    ],
    templates: {
        StrapiPost: [
            {
                path: '/post/:id',
                component: './src/templates/Post.vue',
            },
        ],
        StrapiTag: [
            {
                path: '/tag/:id',
                component: './src/templates/Tag.vue',
            },
        ],
    },
}
