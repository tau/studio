// tau-credit.js — badge reutilizable "Desarrollado por Tau Studio"
// Uso en cualquier sitio de cliente:
//   <script src="https://tau.studio/credit/tau-credit.js" defer></script>
// Posicionamiento opcional:
//   <div data-tau-credit></div>  (el badge se inserta ahí)
// Si no hay contenedor, se añade al final del <footer> (o al body).
(function () {
  'use strict';

  var HOST = 'https://tau.studio';
  var LABEL = 'Desarrollado por Tau Studio';
  var HREF = HOST + '/';

  function injectStyles() {
    if (document.getElementById('tau-credit-style')) return;
    var style = document.createElement('style');
    style.id = 'tau-credit-style';
    style.textContent =
      '.tau-credit{display:inline-flex;align-items:center;gap:.45rem;' +
      'font:500 .8125rem/1.2 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
      'color:inherit;text-decoration:none;opacity:.65;transition:opacity .2s ease;}' +
      '.tau-credit:hover,.tau-credit:focus{opacity:1;}' +
      '.tau-credit:focus-visible{outline:2px solid currentColor;outline-offset:2px;border-radius:4px;}' +
      '.tau-credit img{display:block;width:18px;height:18px;object-fit:contain;}';
    (document.head || document.documentElement).appendChild(style);
  }

  function createBadge() {
    var link = document.createElement('a');
    link.className = 'tau-credit';
    link.href = HREF;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', LABEL);

    var img = document.createElement('img');
    img.src = HOST + '/tau.svg';
    img.alt = 'Tau Studio';
    img.width = 18;
    img.height = 18;
    img.loading = 'lazy';
    img.decoding = 'async';
    link.appendChild(img);

    var span = document.createElement('span');
    span.textContent = LABEL;
    link.appendChild(span);

    return link;
  }

  function mount() {
    injectStyles();

    var explicit = document.querySelector('[data-tau-credit]');
    if (explicit && !explicit.querySelector('.tau-credit')) {
      explicit.appendChild(createBadge());
      return;
    }

    var footer = document.querySelector('footer');
    if (footer && !footer.querySelector('.tau-credit')) {
      footer.appendChild(createBadge());
      return;
    }

    if (!document.querySelector('.tau-credit')) {
      document.body.appendChild(createBadge());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
})();
