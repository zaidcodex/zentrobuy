import { Helmet } from "react-helmet";
import React from "react";

const MetaDecorator = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
   
    <meta
      property="og:url"
      content={"https://nukhba.shop/"}
    />
    {/* <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} /> */}
  </Helmet>
);


export default MetaDecorator