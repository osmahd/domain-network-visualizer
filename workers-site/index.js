import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Try to return the static asset matching the request
    return await getAssetFromKV(event);
  } catch (err) {
    // If asset not found, attempt SPA fallback to index.html
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/index.html`, req),
      });
    } catch (err2) {
      return new Response("Not found", { status: 404 });
    }
  }
}