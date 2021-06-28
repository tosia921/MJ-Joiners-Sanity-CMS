export default {
    name: 'addimage',
    title: 'AddImage',
    type: 'image',
    description: 'This is your preview Image',
    fields: [
        {
            title: 'Alternative Text',
            name: 'alt',
            type: 'string',
            validation: (rule) => rule.required(),
            description: 'You should put some alternate text for accessibility'
        }
    ],
    options: {
          hotspot: true,
    }
      
}