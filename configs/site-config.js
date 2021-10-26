import { getAbsoluteURL } from "utils/getAbsoluteURL";

const baseUrl = "https://reunion-island-art-digitizer.github.io/saiba-gang-nft/";
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
    title: "RIA Boys NFT",
    titleTemplate: "%s - RIA Boys",
    description: "Reunion Island Art Digitizer",
      siteUrl: "https://reunion-island-art-digitizer.github.io/saiba-gang-nft/",
    twitter: {
      handle: "@ReunionArt",
      site: "@ReunionArt",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
        url: "https://reunion-island-art-digitizer.github.io/saiba-gang-nft/",
      title: "RIA Boys",
      description:
        "The RIA Geck are 9,740 unique generative NFTs with attributes and a rarity system. Join the RIA Boys by owning a character NFT on the Solana Blockchain.",
      site_name: "RIA Boys",
      images: [
        {
              url: `https://reunion-island-art-digitizer.github.io/saiba-gang-nft/pubic/images/logo.png`,
          width: 1200,
          height: 630,
          alt: "The RIA Boys are 9 740 unique generative NFTs with attributes and a rarity system. Join the RIA Boys by owning a character NFT on the Solana Blockchain.",
        },
      ],
    },
  },
};

export default siteConfig;
