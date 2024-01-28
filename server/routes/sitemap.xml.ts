import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.public.siteUrl,
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "daily",
    });
  }
  // add other pages like /about, /contact etc
  sitemap.write({
    url: "/",
    changefreq: "daily",
  });
  sitemap.end();

  return streamToPromise(sitemap);
});
