// Copy the latest flyers from the poster folder into public/images/.
// public/ is the source of truth for the site; dist/ is rebuilt from it.
import { copyFileSync, statSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

const SRC = process.env.FLYER_DIR ??
  join(homedir(), 'Documents/final_cut_edit/ai_tech_week_yoga/new_york_tech_week')
const MAP = {
  'gentle_yoga_ig_v2_oct8.jpg': 'oct8-log-off-and-flow.jpg',
  'gentle_yoga_ig_v2_oct11.jpg': 'oct11-log-off-and-flow.jpg',
}
for (const [from, to] of Object.entries(MAP)) {
  const src = join(SRC, from)
  try { statSync(src) } catch { console.warn(`skip: ${src} not found`); continue }
  copyFileSync(src, join('public/images', to))
  console.log(`synced ${from} -> public/images/${to}`)
}
