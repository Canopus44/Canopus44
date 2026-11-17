(function () {
  const root = document.documentElement;
  const buttons = {
    es: document.getElementById('lang-es'),
    en: document.getElementById('lang-en'),
  };

  if (!buttons.es || !buttons.en) return;

  const nav = document.querySelector('.site-nav');
  const langGroup = document.querySelector('.lang');

  function setLang(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    for (const code in buttons) buttons[code]?.setAttribute('aria-pressed', String(code === lang));
    nav?.setAttribute('aria-label', lang === 'es' ? 'Principal' : 'Main');
    langGroup?.setAttribute('aria-label', lang === 'es' ? 'Idioma' : 'Language');
  }

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (_) {}

  setLang(saved === 'en' || saved === 'es'
    ? saved
    : (navigator.language || '').startsWith('en') ? 'en' : 'es');

  for (const [code, button] of Object.entries(buttons)) {
    button.addEventListener('click', () => {
      setLang(code);
      try { localStorage.setItem('lang', code); } catch (_) {}
    });
  }
})();
