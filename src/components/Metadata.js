import React from "react";
import Helmet from "react-helmet";

const Metadata = ({
  title,
  url = "https://www.rss.nickmonaco.me",
  description,
  absoluteImageUrl,
  twitterSiteAccount,
  twitterCreatorAccount,
  canonicalLink,
  siteTitle,
  siteDescription,
}) => (
  <Helmet>
    {title && <title>{title}</title>}
    {title && <meta property="og:title" content={title} />}
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:type" content="website" />}
    {url && <meta property="og:url" content={url} />}
    {twitterSiteAccount && (
      <meta name="twitter:site" content={twitterSiteAccount} />
    )}
    {twitterCreatorAccount && (
      <meta name="twitter:creator" content={twitterCreatorAccount} />
    )}
    {canonicalLink && <link rel="canonical" href={canonicalLink} />}

    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content={siteTitle} />
    <meta name="twitter:description" content={siteDescription} />
    <meta property="og:url" content={"https://www.rss.nickmonaco.me"} />

    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:image" content={absoluteImageUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:image:secure_url" content={absoluteImageUrl} />
    <meta property="og:image" content={absoluteImageUrl} />
    <meta name="twitter:card" content={absoluteImageUrl} />
  </Helmet>
);

export default Metadata;
