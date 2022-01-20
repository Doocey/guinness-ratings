// Sanity client file 

import sanityClient from '@sanity/client'

export default sanityClient({
  apiVersion: '2021-08-31',
  projectId: 'wmhjnd3u',
  dataset: 'production',
  useCdn: false
})