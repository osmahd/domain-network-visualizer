// workers-site/index.js
export default {
  async fetch(request, env) {
    // This placeholder exists to satisfy wrangler's entry-point requirement.
    // For a full Workers Sites setup you'd use the asset handler generated
    // by wrangler during publish or implement an assets handler here.
    return new Response("Worker entry placeholder for domain-network-visualizer", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};