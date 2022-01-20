import client from "../client"
import Head from "next/head"

import Leaderboard from "../components/Leaderboard"

export default function Home({ reviews, seo }) {

  return (
    <>
      <Head>
        <title>{seo.meta_title}</title>
        <meta property="og:title" content={seo.meta_title} key="title" />
        <meta name="description" content={seo.meta_description} />

      </Head>
      <section className="lg:grid grid-cols-2 gap-8 min-h-screen px-5 py-5 sm:py-10">
        {/* First Column: Overall Leaderboard */}
        <Leaderboard props={reviews} />

        {/* Second Column: County Leaderboard, coming soon.. */}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const reviews = await client.fetch(`
    *[_type == "review"]{ 
      _id, 
      pubName, 
      rating, 
      town,
      county, 
      "logo": logo.asset->url, 
      website
    } | order(rating desc)
  `)

  const seo = await client.fetch(`
    *[_id == "site-settings"][0]{
      meta_title,
      meta_description
    }`
  )

  return {
    props: {
      reviews,
      seo
    }
  }
}
