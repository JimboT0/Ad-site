


const popular = {
    name: 'popular',
    title: 'Popular',
    type: 'document',

    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'

        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }  
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'

        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],

        },
    ],
};

export default popular;


// const page = {

//     name: 'page',

//     title: 'Pages',

//     type: 'document',

//     fields: [
//         {

//             name: 'title',

//             title: 'Title',

//             type: 'string'

//         },
//         {
//             name: 'slug',

//             title: 'Slug',

//             type: 'slug',

//             options:{
                
//                 source: 'title',

//                 maxLength: 96,

//             },

//         },
//         {

//             name: 'content',

//             title: 'Content',

//             type: 'array',

//             of:[{type:'block'}]

//         },

//     ],

// };

// export default page;