# Static Hollow website

Plain HTML/CSS/JS — no build step. Open `index.html` or upload the whole folder to a free host.

## Edit a character / lore
Open `data/characters.js` in any text editor (Notepad is fine). Each character is one `{ ... }` block:
- `name`, `fullName`, `species`, `title`, `note` — text shown at the top of their page
- `image` — the main picture; `intro` — optional short intro paragraph
- `lore` — a list of paragraphs: `["Paragraph one.", "Paragraph two."]`
- `gallery` — list of extra image paths
The order of blocks = order on the home page. To add a character, copy a block, give it a new unique `id` (lowercase, dashes, no spaces), and put a comma between blocks. Its page is automatically `character.html?id=that-id`.

## Add a friend
Open `data/friends.js`. Copy one of the two EXAMPLE blocks, change `id`, `name`, `title`, `image`, `bio`, optional `lore` paragraphs and `links` (e.g. `{"label":"Twitch","url":"https://twitch.tv/name"}`). Delete the example blocks when you have real friends. Every friend gets a card on the home and Friends pages plus a page at `friend.html?id=their-id`.

## Images
Put images in `assets/img/characters`, `assets/img/gallery` or `assets/img/friends`. Keep them under ~1600px wide (`.webp` or `.jpg`) so the site stays fast.
Tip: in the text files, keep the quote marks `"` around text, and if your text contains a `"` write it as `\"`.

## Free hosting
- **Netlify Drop**: go to app.netlify.com/drop and drag this folder in.
- **Cloudflare Pages**: Workers & Pages → Create → Pages → Upload assets → drop the folder.
- **GitHub Pages**: make a public repo, upload these files, Settings → Pages → Deploy from branch `main` / root.
