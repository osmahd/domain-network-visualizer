# domain-network-visualizer

A Cloudflare Pages + Workers app to visualize domain networks from CSV input.

Features
- Upload a CSV containing columns such as: domain, nbr_dr, nbr_ref_domains, nbr_linked_domains, nbr_traffic, nbr_links_to_target, ...
- Parse the CSV and build a domain graph (nodes = domains).
- Let the user choose any numeric column to use as the "weight" for edges pointing to a target domain (e.g., `nbr_links_to_target`, `nbr_dr`, etc.) on the fly.
- Interactive client-side graph visualization using Cytoscape.js (or another graph lib).
- Optionally process large CSVs via a Cloudflare Worker API.

Quickstart (local / Pages)
1. Clone the repo
2. Fill `wrangler.toml` with your Cloudflare account id if using Workers
3. Open `static/index.html` in a browser (or run a simple local server)
4. Upload a CSV and start exploring the graph
