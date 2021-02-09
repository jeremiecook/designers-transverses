// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Designers transverses',
    plugins: [
        {
          use: '@gridsome/source-airtable',
          options: {
            apiKey: 'keybQLCgbSWWJqps8',
            base: 'appTCC7VS12lEj0oV',
            tables: [
                {
                    name: 'Planning', // required
                    typeName: 'Event', // required
                    select: {},
                    links: [{
                        fieldName: "Type",
                        typeName: "EventType",
                        linkToFirst: true
                    }]
                },
                {
                    name: 'Évènements', // required
                    typeName: 'EventType', // required
                    select: {},
                    links: []
                }
            ],
          },
        },
    ],

    templates: {
        Event: "/events/:id"
    }

}

