// Builds one self-contained HTML file per Learn page template into standalone/.
// Usage: node build-standalone.js
//
// Each page inlines the shared dc runtime (templates/learn-grammar/support.js) and
// embeds every image under assets/ that exists locally as a data URI. Images that
// are not on disk yet keep a relative "../assets/..." path, so the page still works
// when standalone/ sits next to assets/. Re-run after adding images to embed them.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const outDir = path.join(root, 'standalone');
const runtime = fs.readFileSync(path.join(root, 'templates/learn-grammar/support.js'), 'utf8');

const pages = [
  ['01 Grammar Lesson', 'learn-grammar/LearnGrammar'],
  ['02 Listening Practice', 'learn-listening/LearnListening'],
  ['03 Quiz Level Test', 'learn-quiz/LearnQuiz'],
  ['04 Slang Entry', 'learn-slang/LearnSlang'],
  ['05 Vocabulary Reference', 'learn-reference/LearnReference'],
  ['06 Word of the Day', 'learn-word-of-the-day/LearnWordOfTheDay'],
  ['07 Learner Question', 'learn-question/LearnQuestion'],
  ['08 Real-life Scenario', 'learn-scenario/LearnScenario'],
  ['09 Short Story', 'learn-story/LearnStory'],
  ['10 Culture Guide', 'learn-culture/LearnCulture'],
  ['11 Listicle', 'learn-listicle/LearnListicle'],
  ['12 Slang Dictionary Hub', 'learn-slang-hub/LearnSlangHub'],
  ['13 Topic Hub', 'learn-hub/LearnHub'],
  ['14 Verb Conjugator', 'learn-conjugator/LearnConjugator'],
  ['15 Calculator', 'learn-calculator/LearnCalculator'],
  ['16 Comparison', 'learn-comparison/LearnComparison'],
  ['17 Teacher Profile', 'learn-teacher-profile/LearnTeacherProfile'],
  ['18 Teachers Hub', 'learn-teachers-hub/LearnTeachersHub'],
  ['19 Download Lead Capture', 'learn-download/LearnDownload'],
  ['20 Service Landing Page', 'learn-service-lp/LearnServiceLP'],
  ['21 Shared Components', 'learn-shared/LearnShared'],
  ['22 Conjugator Tool', 'learn-conjugator-tool/LearnConjugatorTool'],
  ['23 Grammar Checker', 'learn-grammar-checker/LearnGrammarChecker'],
  ['24 Spanish Keyboard', 'learn-keyboard/LearnKeyboard'],
  ['25 Word Phrase Entry', 'learn-word-entry/LearnWordEntry'],
  ['26 Learn Main Page', 'learn-main/LearnMain'],
];

const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
// ASSET_ROOT points at a folder holding optimized copies of assets/ (same paths); the
// type is sniffed so a WebP saved under a .png name gets the right MIME type.
const assetRoot = process.env.ASSET_ROOT || root;
const dataUris = new Map();
function dataUri(rel) {
  if (!dataUris.has(rel)) {
    const file = path.join(assetRoot, rel);
    let type = mime[path.extname(rel).toLowerCase()];
    let buf = null;
    if (type && fs.existsSync(file)) {
      buf = fs.readFileSync(file);
      if (buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WEBP') type = 'image/webp';
    }
    dataUris.set(rel, buf ? `data:${type};base64,${buf.toString('base64')}` : null);
  }
  return dataUris.get(rel);
}

fs.mkdirSync(outDir, { recursive: true });
const missing = new Set();
for (const [name, src] of pages) {
  let html = fs.readFileSync(path.join(root, 'templates', src + '.dc.html'), 'utf8');
  const title = (html.match(/@template name="Learn Page — ([^"]+)"/) || [])[1] || name;

  html = html.replace('<script src="./support.js"></script>',
    `<title>${title} · SpanishVIP</title>\n<script>\n${runtime}\n</script>`);

  // Paths built in script ('../../assets/learn/teachers/' + img): expand the bare filename
  // literals into full paths so the pass below can embed them, then drop the prefix.
  for (const [concat, dir] of html.matchAll(/'\.\.\/\.\.\/(assets\/[^']+\/)' \+ /g)) {
    html = html.replace(/'([\w-]+\.(?:png|jpe?g|svg|webp))'/gi, `'../../${dir}$1'`);
    html = html.split(concat).join('');
  }
  // Full literal asset paths (src attributes and string constants) get embedded when available.
  html = html.replace(/\.\.\/\.\.\/(assets\/[^"'\s)]+\.(?:png|jpe?g|svg|webp))/gi, (m, rel) => {
    const uri = dataUri(rel);
    if (uri) return uri;
    missing.add(rel);
    return '../' + rel;
  });
  // Paths built in script (e.g. '../../assets/learn/teachers/' + img) stay relative.
  html = html.split('../../assets/').join('../assets/');

  fs.writeFileSync(path.join(outDir, name + '.html'), html);
  console.log('built', name + '.html', Math.round(html.length / 1024) + ' KB');
}
if (missing.size) console.log(`\n${missing.size} images not on disk (left as ../assets/ links):\n  ` + [...missing].sort().join('\n  '));
