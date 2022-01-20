export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Meta Title',
      name: 'meta_title',
      type: 'string',
      description: 'Basic <meta> title for the site.'
    },
    {
      title: 'Meta Description',
      name: 'meta_description',
      type: 'string',
      description: 'Accompanying <meta> description.'
    },
  ],
}