export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
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
            title: 'Profile Image',
            name: 'pImage',
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
        },
        {
            name: 'phoneNo',
            title: 'PhoneNo',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'addressOnGoogleMap',
            title: 'AddressOnGoogleMap',
            type: 'url'
        },
        {
            title: 'linkedinLink',
            name: 'linkedinLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'GithubLink',
            name: 'githubLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'TwitterLink',
            name: 'twitterLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'FacebookLink',
            name: 'facebookLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'InstagramLink',
            name: 'instagramLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        // The schema for the Ogre document type

        {
            title: 'Skills',
            name: 'skills',
            type: 'document',
            fields: [
                {
                    title: 'Skill1',
                    name: 'skill1',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Rating',
                            name: 'rating',
                            type: 'number'
                        }
                    ],
                },
                {    
                    title: 'Skill2',
                    name: 'skill2',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Rating',
                            name: 'rating',
                            type: 'number'
                        }
                    ]
                },
                {

                
                    title: 'Skill3',
                    name: 'skill3',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Rating',
                            name: 'rating',
                            type: 'number'
                        }
                    ]
                },
                {

                
                    title: 'Skill4',
                    name: 'skill4',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Rating',
                            name: 'rating',
                            type: 'number'
                        }
                    ]
                },
                {
                                    
                    title: 'Skill5',
                    name: 'skill5',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Rating',
                            name: 'rating',
                            type: 'number'
                        }
                    ]
                }
                
            ]
        },
        
        {
            title: 'ServicesIOffer',
            name: 'servicesIOffer',
            type: 'document',
            fields: [
                {
                    title: 'Service1',
                    name: 'service1',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'About',
                            name: 'about',
                            type: 'string'
                        }
                    ],
                },
                {    
                    title: 'Service2',
                    name: 'service2',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'About',
                            name: 'about',
                            type: 'string'
                        }
                    ]
                },
                {

                
                    title: 'Service3',
                    name: 'service3',
                    type: 'document',
                    fields:[
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'About',
                            name: 'about',
                            type: 'string'
                        }
                    ]
                } 
            ]
        },




    ]
}