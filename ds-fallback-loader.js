/* Fallback loader: builds the component namespace from raw .jsx sources when _ds_bundle.js is unavailable.
   Requires React + Babel standalone on the page. */
window.loadSGB = async function (files) {
  window.__SGB = window.__SGB || {};
  for (const f of files) {
    const res = await fetch(f);
    if (!res.ok) throw new Error('fetch failed: ' + f);
    let code = (await res.text())
      .replace(/import\s+React[^;]*;/g, '')
      .replace(/import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g, function (m, names) { return 'const {' + names + '} = window.__SGB;'; });
    const exported = [];
    code = code.replace(/export\s+(const|function)\s+([A-Za-z0-9_]+)/g, function (m, kind, name) { exported.push(name); return kind + ' ' + name; });
    code += '\nObject.assign(window.__SGB, {' + exported.join(',') + '});';
    const out = Babel.transform(code, { presets: [['react', { runtime: 'classic' }]] }).code;
    (new Function('React', out))(window.React);
  }
  return window.__SGB;
};
window.CORE_JSX = ['Button', 'Tag', 'CourtBadge', 'Input', 'Card', 'Tabs', 'Switch', 'EpisodeRow'];
/* Try the compiled bundle first (if the compiler has produced one), else fall back to raw sources. */
window.bootSGB = function (root, extraFiles, check) {
  return new Promise(function (resolve, reject) {
    const findNs = function () { for (const k of Object.keys(window)) { try { const v = window[k]; if (v && typeof v === 'object' && check(v)) return v; } catch (e) {} } };
    const fallback = function () {
      const files = window.CORE_JSX.map(function (n) { return root + 'components/core/' + n + '.jsx'; }).concat(extraFiles || []);
      window.loadSGB(files).then(function (ns) { resolve(Object.assign({}, ns)); }).catch(reject);
    };
    const s = document.createElement('script');
    s.src = root + '_ds_bundle.js';
    s.onload = function () { const n = findNs(); n ? resolve(n) : fallback(); };
    s.onerror = fallback;
    document.head.appendChild(s);
  });
};
