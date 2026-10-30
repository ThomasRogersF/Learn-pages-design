# Changelog

## 2026-10-30
- `templates/learn-main/LearnMain.dc.html` — NEW. The /learn/ main page: hero with search + level test / conjugator buttons, quick answer, 7-pillar grid, start by level (A1–B2), free tools, word of the day, browse by format, meet the teachers (hides under 3), how it works, FAQ, CTA. Tweak: 4 / 2 teachers.
- `templates/learn-shared/LearnShared.dc.html` — NEW. Component sheet with all 13 shared components in every state, plus a desktop/mobile width switch.
- `templates/learn-conjugator/LearnConjugator.dc.html` — REDONE as variant A, the verb page. All tense tables are on the page at once, as real tables, with jump chips. Highlights irregular forms, tags vos/vosotros by region, adds notes, examples and fill-the-gap practice. Tweak: ser (10 tenses) / hablar (6).
- `templates/learn-conjugator-tool/LearnConjugatorTool.dc.html` — NEW. Variant B, the `/practice/conjugator/` tool: search that sends the user to the verb page, 16 quick-pick verb links, how to use it, FAQ.
- `templates/learn-grammar-checker/LearnGrammarChecker.dc.html` — NEW. Includes all states (Tweak `demoState`), correction cards, summary bar and the top-10 mistakes list. Results are a front-end mock; a real checker needs a server-side function.
- `templates/learn-keyboard/LearnKeyboard.dc.html` — NEW. Compose box, character grid with Shift, copy, 6 real shortcut tables and accent-pair audio.
- `templates/learn-listicle/LearnListicle.dc.html` — v2. Register meter 1–5 and register filters, literal-meaning line, groups, deep dive, flip cards built on <details>. Tweak: 30 items in 3 groups / 10 in 1.
- `templates/learn-reference/LearnReference.dc.html` — v2. Groups shown as cards or tables, rules, tricks and origin strip, phrases, recall. Tweak: short (7 items) / long (50 items in 5 groups).
- `templates/learn-word-entry/LearnWordEntry.dc.html` — NEW. Word/phrase variant of the slang entry: ways to say it, replies, regional variants, sound-like-a-local check, related words. Tweak: full / min.
- `templates/learn-hub/LearnHub.dc.html` — v2. Lists every page by category. Tweak: 37 pages in 6 categories / 8 pages in 3 / index variant (/drills/ by pillar).
- `templates/learn-teacher-profile/LearnTeacherProfile.dc.html` — v2. Fully data-driven; reviews, lessons and more-teachers each hide when they have no data. Tweak: full / sparse new teacher.
- `templates/learn-teachers-hub/LearnTeachersHub.dc.html` — v2. Filters are generated from the teacher data; empty-filter state. Tweak: 12 / 2 teachers.

Notes for the build agent:
- These templates share one source for the header, footer, resources band, byline, quick answer, teacher tip, related topics, next step, FAQ and CTA. Matching names always mean the same component.
- Answers, card backs and feedback are in the DOM: hidden with the `hidden` attribute, or placed inside `<details>`.
- Tables that repeat per row are built in the logic class, because `<sc-for>` can't go inside `<tbody>`.
