import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Derzam Home',
  author = 'Atari Technologies',
  meta,
  title = 'Derzam',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
