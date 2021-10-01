import { getAbsoluteURL } from "utils/getAbsoluteURL";

const baseUrl = "https://github.com/AndrewHeinke/saiba-gang-nft";
const origin = getAbsoluteURL();

const siteConfig = {
  author: {
    name: "Saiba Gang",
    github: "https://github.com/AndrewHeinke",
    twitter: "https://twitter.com/andrewheinke",
    linkedin: "https://www.linkedin.com/in/andrewheinke/",
    email: "andrew.j.heinke@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: "Saiba Gang NFT",
    titleTemplate: "%s - Saiba Gang",
    description: "The Saiba Gang NFT Project",
    siteUrl: "https://saibagang.com",
    twitter: {
      handle: "@SaibaGang",
      site: "@SaibaGang",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://saibagang.com",
      title: "Saiba Gang",
      description: "The Saiba Gang NFT Project",
      site_name: "Saiba Gang NFT",
      images: [
        {
          url: `https://www.saibagang.com/images/saiba-gang-og.png`,
          width: 1240,
          height: 480,
          alt: "Saiba Gang NFT",
        },
      ],
    },
  },
};

export default siteConfig;
