import { getAbsoluteURL } from "utils/getAbsoluteURL";

const baseUrl = "https://riageck.vercel.app/";
const origin = getAbsoluteURL();

const siteConfig = {
  author: {
    name: "RIA Boys",
    github: "https://github.com/reunion-island-digitizer",
    twitter: "https://twitter.com/ReunionArt",
    discord: "https://discord.com/invite/8XVQGVqfbb",
    email: "reunion.island.art.digitizer@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: "RIA Geck NFT",
    titleTemplate: "%s - RIA Geck",
    description: "Reunion Island Art Digitizer",
      siteUrl: "https://riageck.vercel.app/",
    twitter: {
      handle: "@ReunionArt",
      site: "@ReunionArt",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
        url: "https://riageck.vercel.app/",
      title: "RIA Geck",
      description:
        "The RIA Geck are 9,740 unique generative NFTs with attributes and a rarity system. Join the RIA Geck by owning a character NFT on the Solana Blockchain.",
      site_name: "RIA Boys",
      images: [
        {
              url: `https://reunion-island-art-digitizer.github.io/saiba-gang-nft/pubic/images/logo.png`,
          width: 1200,
          height: 630,
          alt: "The RIA Boys are 9 740 unique generative NFTs with attributes and a rarity system. Join the RIA Geck by owning a character NFT on the Solana Blockchain.",
        },
      ],
    },
  },
};

export default siteConfig;
