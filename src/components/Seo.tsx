import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/logo.jpeg";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const defaultTitle = site.siteMetadata?.title;
  const defaultDescription = site.siteMetadata?.description;
  const siteUrl = site.siteMetadata?.siteUrl;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${logo}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <html lang="id" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content="Ayat Emas, JKI Puri Marina, Semarang, Kristen, Gereja, Tahun Baru, Natal, Ayat Alkitab, Renungan"
      />
      <meta name="author" content="JKI Puri Marina" />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="canonical" href={seo.url} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": seo.title,
          "url": seo.url,
          "description": seo.description,
          "publisher": {
            "@type": "Organization",
            "name": "JKI Puri Marina Semarang",
            "logo": {
              "@type": "ImageObject",
              "url": seo.image,
            },
          },
        })}
      </script>

      {children}
    </>
  );
};
