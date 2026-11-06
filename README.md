# Capital Ship (was Letter Fleet)

A daily word game played like battleship, from smAisle. Original design made with Jeff on Nov 1, 2026 (Eastern).

## How it plays
- 8×8 board, 5 hidden words from the day's theme, across or down, never touching (not even corners).
- **Call a letter** (tap it, then Call): ONE square holding it lights up, in the shortest word that still hides one (ties: the word that starts earlier on the board). Calling it again lights the next. No count is shown; a key turns gray when there are no more of that letter (called and none left, or all of it already showing). Misses turn gray too. A letter not on the board still uses a call. (Jeff's rule: "show the E of the shortest word first and say 2 more E's".)
- **Sink a word:** tap a lit square and type the word through it. Wrong guess costs a call. Lighting every letter of a word also sinks it.
- 14 calls (was 18 before v4). Then a fill-in round (v6).
- Stars: win with 5+ calls left ⭐⭐⭐, 2+ ⭐⭐, otherwise ⭐. Share shows moves in order: 🟨 found, ⬜ miss, 🎯 sunk, ❌ wrong guess.
- New puzzle at midnight Eastern. Archive back to No. 1 (Oct 1, 2026, EPOCH in logic.js).

## Files
- `index.html` is the whole game, built from `source/` with `python3 source/build.py` (src.html + logic.js).
- 54 hand-written family-friendly themes in logic.js (THEMES), each 13-16 words of 3-7 letters. Themes go round in a shuffled order.
- Calls tuned with a test robot (scratch): a player who guesses a word once half its letters show needs about 15 calls (median), so 18 leaves a few to spare.
- `owner.html`: sign in with Jeff's Google account; opens / plays / finishes / win % / avg calls left per day (Eastern), streaks, versions, phone vs computer.

## Usage
After agreeing to the terms, the website copy (smaisle.app or github.io) sends an anonymous check-in to Firebase `aislerun-88e79`, collection `cs_devices` (12-char device id, 16 fields): first, last, days, v, opens, plays, done, wins, best, streak, terms, desk, t, plus maps o (opens/day), p (puzzles started/day), r (result/day: calls left if won, -1 if lost; last 60 days). The Claude-link copy doesn't check in. No rules change needed.

## Rules followed
Version in How to play, menu and stats (v2 · Nov 2). No zoom (viewport max-scale=1, user-scalable=no, touch-action: manipulation). "Archive" naming. Looks: smAisle newspaper (default) / Classic; Theme Auto / Light / Navy. Yellow "‹ smAisle Daily" bar on the website copy only; marks 'lf' done in smaisle_done for the hub.

## Not done yet
- No GitHub repo yet (needs one under SmAisle, e.g. LetterFleet) and not on smaisle.app; ask Jeff before pushing live.
- Name check: "WordSalvo" and "Word Fleet" are taken; "Letter Fleet" found free in a quick search (Nov 1).
- No icon, sound, or vs-computer mode yet.

## v37 (Nov 4)
- One demo for every game (change list #30): Try it with a coach. The old walkthrough and the five intro cards are gone. "Try the demo" is on the cover, in How to Play and in Settings, and it comes up by itself the first time you start a game. Three real moves on a small practice board with the shared demo frame. It never touches the real game and saves nothing.
- Source catch-up: v36 (sound icon) had only been added to index.html, so it is now in source/src.html too and a rebuild keeps it.
- The iPhone app has its own bundled copy and does not have this yet.

## v35 (Nov 3)
- Play again on the results screen. Daily and Archive: the same board starts fresh, in memory only, with "Your score is locked. Keep playing for fun." A replay saves, records and checks in nothing, and a reload drops it. When it ends the saved results and Share card come back. Make your own: Play again opens the empty form, or deals a new board after a Random one. Two players already had Play again. Hidden in the free preview.

## v34 (Nov 3)
- Menu standard (Jeff): the menu now matches Straight Down Spell. Top to bottom: Menu, Back to game, then the two-column grid, Home Screen and ‹ smAisle Daily side by side, Settings, version. The ⭐ Plus row shows only in the preview and opens the Plus offer. The demo stays in How to Play. Home Screen moved here from the Settings links (it was Front page).

## v33 (Nov 3)
- Correction from Jeff: the yellow ‹ smAisle Daily button shows on the cover only, never during play. During play the way back is the ‹ smAisle Daily row in the menu (website and app). The results screen keeps its row.

## v39 (Nov 4)
When the game ends, a yellow ‹ smAisle Daily button sits beside See results on the finished board, so one tap always leaves.

## v32 (Nov 3)
- One way home (navigation standard): the yellow ‹ smAisle Daily button sits top left in the same spot on the cover and in the game, and now also shows in the smAisle Daily app (it posts home to the app). It replaces the white bar. smAisle Home is now a small link on the cover's version line, in place of See our other games. The cover now shows the version.

## v31 (Nov 2)
- Demo rebuilt as a guided walkthrough (Jeff: people were confused). 14 steps, the player taps Next, so nothing flies by. A card at the top explains each step, and a red ring marks what it means: calling, a miss, gray keys, Sonar, Guess now, word boxes, filling in, stars and Hard. Uses the same fixed beach board.

- Theme line matches Jexicon: "Today's theme" ("Theme" for Archive, custom, Two players and the demo) and the name in a yellow label.

## v30 (Nov 2)
- Normal and Hard (change list #18): picked on the cover (cs-mode), same daily board. Hard checks each fill-in letter as it is typed; one wrong letter ends the game, and the last right letter captures the word. Calling is unchanged. Saved games, stats and streaks are separate (cs-d_DATE-h, cs-hist-h); Stats has Normal/Hard tabs; share says Hard. Make your own, Two players and preview are always Normal. Check-in adds hd, hw (Hard finished, all-5 wins).
- Cleaner menu (#20): Back to the game, How to play, Archive, Stats, Make your own, Puzzles I've sent, Two players, ‹ smAisle Daily, Settings. Style, Dark mode, Sound, Front page, Replay the intro, Terms and See our other games moved to Settings.

## v29 (Nov 2)
- v27 plus the v28 `code` check-in field.

## v28 (Nov 2, live)
- Usage check-in adds `code`: this device's saved smAisle invite code (localStorage smaisle_code, else the first of smaisle_codes preferring daily15, abcdeal, gramble, all; else 'unknown'), for the By code table on smaisle.app/stats.html. Built on v25, since v26-v27 are still waiting for Jeff's OK.

## v1 (Nov 2)
- First playable version.

## v2 (Nov 2)
- Restyled to match The Daily 15: cover with stats row, top bar with Calls and Sunk boxes, gray grid that lights up white, word strips like the tray, Daily 15 buttons, 4-card intro on first play (Menu → Replay the intro), How to Play with stars table, results card with countdown to midnight Eastern, Daily 15 stats grid, Archive list with themes.
- Removed the "N more hidden" count (Jeff). Keys turn gray when there are no more of that letter.
- Sunk words turn yellow; MISS / SUNK! stamps like The Daily 15's call-outs.

## v3 (Nov 2)
- Opens in smAisle paper colors even when the phone is in dark mode (Jeff). Navy only when picked in the menu; 'Match phone' follows the phone.

## v4 (Nov 2)
- Twist: 💥 Long shot. Sink a word while half or fewer of its letters are showing and you win a call back (stamp, Calls box flashes, 💥 in the share grid). In How to Play and a 5th intro card.
- Calls cut from 18 to 14. Fair test player (sees only the lit squares, gray keys and theme; scratch fair.js), a year of puzzles at 14 calls: knows every word ~100% wins; knows 9 in 10 ~70%; knows 3 in 4 ~45%. Losses come from not thinking of a word, not from running out of calls.

## v5 (Nov 2)
- RESET_DAYS in src.html: clears a day's saved game once per number, so Jeff could replay No. 32 (Nov 1).

## v6 (Nov 2)
- Fill-in round (Jeff): when calls run out, one try at each word that has a lit letter. A miss loses just that word (red), instead of ending the game. Finish button ends the round. No Long shot call back in the fill-in round. Words with no lit letter can't be tried.

## v7 (Nov 2)
- New structure (Jeff): 15 calls first, no guessing while calling. Then the guessing round: tap a lit square, type its word; one wrong guess ends the game. "Guess now" (with a confirm card) starts guessing early. Lighting every letter of a word still sinks it. Words with no lit letter can't be guessed.
- Long shot and the fill-in round (v4-v6) are gone. Stars by words sunk: 3 = ⭐, 4 = ⭐⭐, 5 = ⭐⭐⭐. Streak = days finished on their day.
- Check-in map r is now words sunk (0-5); wins = sank all 5. Owner page shows All 5 % and Avg sunk.

## v8 (Nov 2)
- Renamed Capital Ship (Jeff). Game code cs: Firestore cs_devices, storage keys cs-*, smAisle Daily hub id 'cs'. Quick search found no other game called Capital Ship (it's a naval term).

## v27 (Nov 2)
- Shared Plus games (standard section 8): a friend without Plus (preview mode) who opens a shared Make your own link plays that puzzle free, with no first-word stop. When it ends, the Founding Member offer shows once: $0.99 a month for the first year or $4.99 for the first year, through Jan 31. Get smAisle Daily Plus posts {cmd:'plus'} in the app (web: smaisle.app/daily/#plus); Not now goes back to the results. Two players is pass-the-phone on one device, so there's nothing to share there.

## v26 (Nov 2)
- Finish screen (standard section 7): Share and a yellow ‹ smAisle Daily button side by side, then a "More smAisle games" row of the other games' icons from https://smaisle.app/daily/games.js (loaded on the finish screen; hidden if it can't load). Icons open each game (same tab on the website, {cmd:'open',url} in the app). The two-player win card also has ‹ smAisle Daily. Make your own left the daily finish card (still in the menu and on custom results) so the card fits a small iPhone without scrolling.
- Share links are hardcoded to https://smaisle.app/CapitalShip/ (daily share and custom puzzle links), never the current page address.

## v25 (Nov 2)
- No sink/sunk/battle words anywhere a player sees (Jeff): words are "captured" (top box "Captured", "All captured!", "First word captured!", share "n/5 captured", stats "Words captured", owner page "Avg captured"). Stamps are Found! / Nope / Captured! / Empty; Sonar finds an empty square (shown ·) instead of water. "Sunk yourself!" → "Tough one!", "Good fight!" → "Nice try!". Code names (st.sunk, cs_shares fields) unchanged.

## v24 (Nov 2)
- Way back to smaisle.app from inside the game, like the other games: the menu now ends with "smAisle · See our other games ›" and a Front page link (back to the cover). The cover's smAisle link works the same way: same tab on the website, the app's home inside smAisle Daily ({cmd:'home'}), a new tab elsewhere. On the website the yellow ‹ smAisle Daily button is still there too.

## v23 (Nov 2)
- How to Play fits one screen with no scrolling (375x667: 400px card): six short lines including stars, plus Watch the demo.
- Demo (cover link "Demo" and How to Play): about 30 seconds of a real game on a fixed beach board (SAND, WAVES, SHELL, TOWEL, SUN): calls, gray keys, a Sonar hit, the word boxes filling, and all 5 words typed in. Skip pill top-left; ends on "That's Capital Ship!" with Play today's puzzle / Watch again. Never saved or counted. Works in smAisle and Navy.

## v22 (Nov 2)
- Capital Ship is a Plus game in smAisle Daily (Jeff, Nov 2), so its own PLUS labels are gone: Make your own, Two players and the Archive are part of the full game.
- Preview mode: `?preview=1`, or inside the app when window.DG_APP.plus isn't true. Plays today's puzzle until the first word is sunk, then a "First word sunk!" card: Get smAisle Daily Plus (app: posts {cmd:'plus'} to webkit.messageHandlers.dg; web: smaisle.app/daily/#plus) and ‹ smAisle Daily (app: {cmd:'home'}; web: smaisle.app/daily/). Archive, Make your own and Two players are hidden in preview. The app can unlock live with dgNative('store',{plus:true}).

## v21 (Nov 2)
- Jeff's all-games rules (navy-dark-standard.md section 6): shared fit + zoom guard (iPhone pinch blocked, double-tap blocked, "Turn your phone upright" cover on a sideways phone) and the shared sound comeback (getAC() on every tap, rebuilt after leaving the app; the old once-only unlock is gone).
- Checked at 375x667 and 430x932: cover, game, menu, Make your own, Two players and hide screens fit with no side-scrolling; 844x390 sideways shows the upright cover.

## v20 (Nov 2)
- Two players, pass the phone (cover and menu): enter two names; each player hides 5 words for the other (optional theme hint, or Pick random words), with a pass-the-phone screen in between. Turns alternate; a turn is one call, the one Sonar ping, or one guess (tap a word box). No call limit, a wrong guess just ends the turn, first to sink all 5 wins. Win card shows both players' words. Saved in cs-two (Continue your game); never counted in stats, streak or usage.

## v19 (Nov 2)
- New app icon (Jeff picked option A): a ship whose hull spells SHIP in yellow tiles, red flag, waves, on smAisle paper. icon/icon-1024/512/180/32.png.

## v18 (Nov 2)
- Intro has a Sonar +1 card (5 cards now). Page description no longer says "battleship".
- Menu follows the shared standard: Back to the game, How to play, Archive, Stats, Make your own, Puzzles I've sent, ‹ smAisle Daily (yellow, website only), Style, Dark mode, Sound, then Replay the intro · Terms and "Capital Ship · v18 · Nov 2 · smAisle".
- Sound (cs-sound, on by default): tick for a hit, thud for a miss, horn for a sink, ping for Sonar, buzz for a wrong guess, chime for all 5. Made with Web Audio, no files.
- Usage check-in adds mk (puzzles made), sent, cp/cd (custom started/finished), rb (random boards), sc (scores sent back); owner.html shows a Make your own table.
- App icon (icon/icon-1024/512/180/32.png): smAisle paper board, SHIP sunk in yellow, a lit A and a red Sonar ping. Favicon and apple-touch-icon are built into the page.
- Win-rate test with Sonar (365 days, careful computer player): 15 calls → all 5 on 94% / 54% / 24% (knows every word / 9 in 10 / 3 in 4); 14 calls → 93/54/24; 13 → 91/52/23.

## v17 (Nov 2)
- Tapping a letter calls it right away (no Call button). The bottom bar is now [Sonar +1] [Guess now].
- Sonar moved to the bottom bar, yellow with a red +1; shows "Sonar used" after.
- If Sonar is unused when the calls run out (or on Guess now), you must use it first: the board is armed and the keys wait (st.needSonar), then the guessing round starts.

## v16 (Nov 2)
- Follows The Daily 15's Extra Edition: each send gets a random id (`&id=` in the link). Friends who finish can type a name and Send my score to Firestore `cs_shares/{id}/results/{device}` (name, n = sunk, score = sunk*100 + calls left, v, t). Rude names show as Someone.
- Menu: Puzzles I've sent (cs-sent, last 40) lists each puzzle with its words and friends' scores, best first; ✕ hides one (cs-hide).
- Make your own also has Play a random new board (random theme, same word rules as the daily). Results card for custom games: Send my score, Share, Pass it to a friend.
- Needs the cs_shares rule (added to usage-tracking/firestore-rules.txt) published in the Firebase console before scores can save.

## v15 (Nov 2)
- Make your own (marked PLUS, like The Daily 15's Extra Edition; free on the website, would be Plus in an app; no real charges). From the cover, menu or results: theme, 5 words (3-7 letters, all different), optional name. Family-friendly word check. Makes a link `?c=CODE` (theme, name, words scrambled with XOR + base64url so the words don't show). Same code = same board (makeCustom() in logic.js).
- Opening a `?c=` link shows "A puzzle from NAME" with Play it / Play today's instead. Custom games use the same rules (15 calls, Sonar), save under cs-d_c-HASH, and don't count in stats, streak, the hub list or usage check-ins. Results button reads "Send NAME your score".
- Share link base: this page's address on the website, otherwise https://smaisle.app/CapitalShip/ (not live yet).

## v14 (Nov 2)
- Reset No. 32 again for Jeff (RESET_DAYS 4).

## v13 (Nov 2)
- Sonar now pings a square: tap Sonar, then any dark square. A letter there lights up (can sink a word); an empty square shows water (≈). One per game, no call used. Logic: sonarCell() replaces sonarWord(); st.sonar = cell, st.water = [cell]. Reset No. 32 again (RESET_DAYS 3).

## v12 (Nov 2)
- Reset Nov 1 (No. 32) again so Jeff can try Sonar (RESET_DAYS 2).

## v11 (Nov 2)
- Sonar hint: once a game, tap Sonar (top bar), then tap a word box (or a lit square of that word). Its first hidden letter lights up, no call used. In the guessing round with a word open, Sonar lights that word's next blank. Can finish (sink) a word. Share log shows 📡. Logic: sonarWord() in logic.js; state field st.sonar.

## v10 (Nov 2)
- Shared smAisle look standard (organized/navy-dark-standard.md): opens in smAisle colors. Menu has Style (smAisle / Classic) and "Dark mode: Off / On / Match phone", Off by default.
- Dark mode uses the standard Navy (#121b2e, brass main button, cream letter tiles) on `<html data-mode="navy">`, saved in the shared key `smaisle-dark` (old `cs-theme` read once). A head script sets it before the page draws. Classic has its own colors, so the Dark mode row is grayed out there.
- When the mode changes live, posts {cmd:'mode', navy} to webkit.messageHandlers.dg (does nothing on the web).

## v9 (Nov 2)
- Guessing round (Jeff): when calls run out (or Guess now), the lit letters drop into the word boxes under the board, in place. Tap a box (or a lit square) and it opens large; type the blanks. Gray keys stay gray and can't be typed (a gray letter can't be in a blank). One wrong guess ends the game. "Stop here" (with a confirm) keeps the words sunk so far. Any word can be guessed, even with no letters showing.
- Fair test player, a year of puzzles, 15 calls (stops when unsure): knows every word: all 5 on 93% of days; knows 9 in 10: 53%; knows 3 in 4: 22%. Avg about 4.4 words.

## v40 (Nov 6)
Hard left the daily game. It's now an option in Make your own: same 15 calls, with spelling checked letter by letter in the guessing round. The choice travels in the share link. Old Hard results stay on the device, unused.
