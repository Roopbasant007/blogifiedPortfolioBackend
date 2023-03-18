export default {
    name: 'author',
    type: 'document',
      title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'about',
        type: 'string',
        title: 'About'
      },
      {     // To add blog image you will post 
        title: 'Blog Image',
        name: 'blogImg',
        type: 'image',
        options: {
            hotspot: true // <-- Defaults to false
        },
        fields: [
            {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                    isHighlighted: true // <-- make this field easily accessible
                }
            },
            {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            }
        ]
    }
    ]
  }