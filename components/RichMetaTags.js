import React from 'react';
import Head from 'next/head'

const RichMetaTags = ({title, desc, imgUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:description" content={desc} />
      <meta property="og:image:secure_url" content={imgUrl} />

      <meta property="og:url" content="https://toodistracted.com" />
      <meta property="og:site_name" content="toodistracted.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="logo" />
      <meta name="twitter:url" content="https://toodistracted.com" />
      <meta name="twitter:image" content={`https://toodistracted.com/${imgUrl}`} />
    </Head>
  )
}
export default RichMetaTags