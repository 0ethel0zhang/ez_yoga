# EZ Yoga

One-page site for Ethel's classes at Tribeca View: AI Week NY sessions,
the Open & Release workshop, and weekly classes. Plain HTML/CSS built with Vite.

```sh
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # static site in dist/
npm run preview   # serve the built dist/
```

Deploy: connect the repo to Netlify or Vercel (both read the included
`netlify.toml` / `vercel.json`: build `npm run build`, publish `dist`), or
drag the `dist/` folder onto Netlify Drop.

Edit content in `index.html`. Images live in `public/images/` — never edit
`dist/`, it's regenerated on every build. The two AI Week flyers are synced
automatically from `final_cut_edit/ai_tech_week_yoga/new_york_tech_week/`
(`gentle_yoga_ig_v2_oct8.jpg`, `gentle_yoga_ig_v2_oct11.jpg`) before every
`npm run dev` / `npm run build`; run `npm run sync-images` to sync by hand.
