// Placeholder Cloudflare Worker (TypeScript). Compile or convert to JS if not using TS.
// This route could accept a CSV upload and respond with JSON nodes/edges.
export interface Env {}

export default {
  async fetch(request: Request, env: Env) {
    return new Response(JSON.stringify({ ok: true, message: "Worker placeholder" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}