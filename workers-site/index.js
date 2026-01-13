export default {
  async fetch(request, env) {
    // Minimal placeholder so wrangler deploy runs successfully.
    return new Response("Workers site placeholder - static assets will be uploaded", {
      headers: { "Content-Type": "text/plain" }
    });
  }
}