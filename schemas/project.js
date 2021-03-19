export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'soetitle',
      title: 'SEOTitle',
      description: 'Describe your title for Search Engine Optimazation...',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      description: 'Choose your project Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'featured',
      title: 'Featured',
      description: 'Would You like this project to be featured on a main page?',
      type: 'boolean',
    },
    {
      name: 'featuredimage',
      title: 'FeaturedImage',
      type: 'addimage',
      description: 'This is your preview Image',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ]
}
