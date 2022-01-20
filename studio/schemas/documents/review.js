import { IoMdBeer } from 'react-icons/io'

export default {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  icon: IoMdBeer,
  fields: [
    {
      title: 'Pub Name',
      name: 'pubName',
      type: 'string',
      description: 'Name of the watering hole.'
    },
    {
      title: 'Town',
      name: 'town',
      type: 'string',
      description: 'Village/town the pub is located in.'
    },
    {
      title: 'County',
      name: 'county',
      type: 'string',
      options: {
        list: [
          'Antrim',
          'Armagh',
          'Carlow',
          'Cavan',
          'Clare',
          'Cork',
          'Derry',
          'Donegal',
          'Down',
          'Dublin',
          'Fermanagh',
          'Galway',
          'Kerry',
          'Kildare',
          'Kilkenny',
          'Laois',
          'Leitrim',
          'Limerick',
          'Longford',
          'Louth',
          'Mayo',
          'Meath',
          'Monaghan',
          'Offaly',
          'Roscommon',
          'Sligo',
          'Tipperary',
          'Tyrone',
          'Waterford',
          'Westmeath',
          'Wexford',
          'Wicklow'
        ]
      }
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      description: 'Link to pub\'s website/online presence.'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image'
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      description: 'The famous ratings attributed by The Guinness Guru.'
    },
  ],
  preview: {
    select: {
      title: 'pubName',
      rating: 'rating',
      county: 'county',
      media: 'logo'
    },
    prepare(selection) {
      const { title, rating, county, media } = selection
      return {
        title: title,
        subtitle: `${county} — ${rating}`,
        media: media
      }
    }
  }

}