import { cmsData } from "./cmsData";

// mock CMS：后面你接 Contentful / Strapi / Sanity，只需要改这里
export async function getCMS() {
  return cmsData;
}