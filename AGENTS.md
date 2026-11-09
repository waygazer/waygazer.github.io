# Architecture

- `clubTchief/waygazer.github.io` is a one-way GitHub export, not a two-way Git sync; the existing repository cannot be linked as Lovable Git sync, so do not imply later Lovable edits appear there automatically.
- GitHub Pages auto-detects `VITE_BASE_PATH` (`/` for an `<owner>.github.io` repo, `/<repo>/` otherwise) while the primary domain builds with `/`; this lets the same React app work at both addresses.
- Keep Razorpay credentials in backend secrets only; GitHub Actions receives only the public browser backend URL and publishable key.
