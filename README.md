# Static Hollow — member directory

A plain HTML/CSS/JS site (no build step). Every member of the Static Hollow — your characters and your friends' characters — lives in ONE file: `data/characters.js`.

Live: https://kitsuranines.github.io/static-hollow/

## Add a character (plain words)
1. Put their pictures in `assets/img/characters/` (main art) and `assets/img/gallery/` (reference images). Keep them under ~1600px wide; `.webp`, `.jpg` or `.png` all work.
2. Open `data/characters.js` in any text editor.
3. Copy the template below, paste it just before the final `];`, and put a comma after the `}` of the character above it.
4. Fill it in and save. They appear on the home page (and in search) automatically, with their own page at `character.html?id=their-id`.

```js
{
  "id": "new-friend",                 // unique, lowercase, dashes, no spaces
  "name": "New Friend",               // name on the card
  "fullName": "NEW FRIEND",           // big name on their page (optional)
  "title": "The Something",           // e.g. The Construct
  "species": "Crow Spirit",           // optional
  "owner": "@friendhandle",           // who plays/owns them (optional)
  "note": "",                         // optional rules line, e.g. NO NSFW
  "image": "assets/img/characters/new-friend.webp",
  "intro": "One or two sentence intro.",
  "lore": ["First lore paragraph.", "Second lore paragraph."],
  "references": ["assets/img/gallery/new-friend-1.webp"],
  "links": [{"label": "Twitch", "url": "https://twitch.tv/friendhandle"}]
}
```
(The `// comments` are just explanations — they're allowed in this file, but you can delete them.)

## Edit lore or text
Find the character's block in `data/characters.js` and change the text between the quotes. If your text itself contains a `"`, write it as `\"`. Each paragraph of lore is its own quoted item in the `lore` list. Empty reference slots show placeholders until you add images.

The order of blocks = the order on the home page.

## Publishing changes
The site is hosted free on GitHub Pages from the `kitsuranines/static-hollow` repo. Easiest: on github.com open the repo → open a file → pencil icon to edit → Commit; or "Add file → Upload files" for images. The live site updates in about a minute.
Alternatives: drag the folder into app.netlify.com/drop, or Cloudflare Pages → Upload assets.
