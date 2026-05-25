// Sehha — shared chrome (sidebar + topbar) and global interactions
(function () {
  // ─── Nav definition ──────────────────────────────────────────────────────
  const PAGES = [
    { key: 'dashboard',   label: 'Tableau de bord',      href: 'Tableau de bord.html', section: 'workspace', icon: 'dashboard' },
    { key: 'appointments',label: 'Rendez-vous',           href: 'Rendez-vous.html',     section: 'workspace', icon: 'calendar', badge: '14' },
    { key: 'patients',    label: 'Patients',              href: 'Patient.html',         section: 'workspace', icon: 'users' },
    { key: 'vaccination', label: 'Vaccination',           href: 'Vaccination.html',     section: 'programs',  icon: 'shield', alert: true },
    { key: 'pf',          label: 'Planning familial',     href: 'Planning familial.html', section: 'programs', icon: 'family' },
    { key: 'cpn',         label: 'CPN / CPoN',           href: 'CPN-CPoN.html',        section: 'programs',  icon: 'heart' },
    { key: 'nutrition',   label: 'Nutrition',             href: 'Programme.html?p=nutrition', section: 'programs', icon: 'apple' },
    { key: 'ist',         label: 'IST / SIDA',           href: 'Programme.html?p=ist', section: 'programs',  icon: 'globe' },
    { key: 'cme',         label: 'CME <5 ans',           href: 'Programme.html?p=cme', section: 'programs',  icon: 'kid' },
    { key: 'more',        label: 'Voir les 10 programmes',href: '#',                   section: 'programs',  icon: 'target', muted: true },
    { key: 'fiche',       label: 'Fiche mensuelle',       href: 'Fiche mensuelle.html', section: 'reporting', icon: 'doc', badgeAmber: 'À soumettre' },
    { key: 'stats',       label: 'Statistiques',          href: '#',                   section: 'reporting', icon: 'chart' },
    { key: 'history',     label: 'Historique',            href: '#',                   section: 'reporting', icon: 'clock' },
  ];

  const ICONS = {
    dashboard: '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
    calendar:  '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    users:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    shield:    '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"/><path d="m9 12 2 2 4-4"/></svg>',
    family:    '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>',
    heart:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
    apple:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18M5 7v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/></svg>',
    globe:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    kid:       '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5 22v-3a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3"/></svg>',
    target:    '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>',
    doc:       '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>',
    chart:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>',
    clock:     '<svg viewBox="0 0 24 24" class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    menu:      '<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  };

  // ─── Sidebar inner content (shared by desktop + mobile drawer) ────────────
  function buildSidebarInner(active) {
    const ws = PAGES.filter(p => p.section === 'workspace').map(p => navItem(p, active)).join('');
    const pr = PAGES.filter(p => p.section === 'programs').map(p => navItem(p, active)).join('');
    const rp = PAGES.filter(p => p.section === 'reporting').map(p => navItem(p, active)).join('');
    return `
      <div class="h-[60px] lg:h-[68px] px-5 flex items-center gap-2.5 border-b border-ink-200 shrink-0">
        <div class="w-9 h-9 rounded-xl bg-mint-600 grid place-items-center shadow-sm">
          <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13.5A8 8 0 1 1 11 4.06"/><path d="M16 3v6"/><path d="M13 6h6"/></svg>
        </div>
        <div class="leading-tight">
          <div class="text-[17px] font-bold tracking-tight text-ink-900">Sehha</div>
          <div class="text-[10px] uppercase tracking-[0.14em] text-ink-500 font-medium">CSU · Khémisset</div>
        </div>
      </div>
      <nav class="px-3 py-4 flex-1 overflow-y-auto">
        <div class="text-[10px] uppercase tracking-[0.14em] text-ink-400 font-semibold px-3 mb-2">Espace de travail</div>
        <ul class="space-y-0.5 text-[13.5px]">${ws}</ul>
        <div class="text-[10px] uppercase tracking-[0.14em] text-ink-400 font-semibold px-3 mt-5 mb-2">Programmes</div>
        <ul class="space-y-0.5 text-[13.5px]">${pr}</ul>
        <div class="text-[10px] uppercase tracking-[0.14em] text-ink-400 font-semibold px-3 mt-5 mb-2">Reporting</div>
        <ul class="space-y-0.5 text-[13.5px]">${rp}</ul>
      </nav>
      <div class="px-3 pb-4 shrink-0">
        <div class="rounded-xl2 bg-mint-700 text-white p-4 relative overflow-hidden">
          <div class="absolute -right-6 -top-6 w-20 h-20 rounded-full border-2 border-white/15"></div>
          <div class="absolute -right-3 -top-3 w-14 h-14 rounded-full border-2 border-white/10"></div>
          <div class="text-[11px] uppercase tracking-[0.12em] font-semibold text-mint-200 mb-1">Ressources MS</div>
          <div class="text-[14.5px] font-bold leading-snug mb-1">Guide PNI 2025</div>
          <div class="text-[11.5px] text-mint-100/90 leading-snug mb-3">Calendrier vaccinal et fiches techniques du Ministère de la Santé.</div>
          <a href="#" data-toast="Téléchargement du guide PNI 2025…" class="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-white text-mint-800 px-2.5 py-1.5 rounded-lg hover:bg-mint-50">
            Télécharger
            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
          </a>
        </div>
      </div>`;
  }

  function navItem(p, active) {
    const isActive = p.key === active;
    const cls = isActive
      ? 'flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-mint-100 text-mint-800 font-semibold'
      : `flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg ${p.muted ? 'text-ink-500' : 'text-ink-700'} hover:bg-ink-50`;
    let right = '';
    if (p.badge)       right = `<span class="text-[11px] font-semibold ${isActive ? 'text-mint-800 bg-white/60' : 'text-mint-700 bg-mint-100'} px-1.5 py-0.5 rounded-md num shrink-0">${p.badge}</span>`;
    else if (p.badgeAmber) right = `<span class="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-md shrink-0">${p.badgeAmber}</span>`;
    else if (p.alert)  right = '<span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>';
    return `<li><a href="${p.href}" class="${cls}"><span class="flex items-center gap-3 min-w-0"><span class="shrink-0">${ICONS[p.icon] || ''}</span><span class="truncate">${p.label}</span></span>${right}</a></li>`;
  }

  // ─── Sidebar markup (desktop — CSS hides on < lg) ─────────────────────────
  function sidebarHTML(active) {
    return `
    <aside id="sehha-sidebar" class="w-[248px] shrink-0 bg-white border-r border-ink-200 flex-col sticky top-0 h-screen overflow-y-auto">
      ${buildSidebarInner(active)}
    </aside>`;
  }

  // ─── Topbar ───────────────────────────────────────────────────────────────
  function topbarHTML(opts) {
    const crumbs = opts.breadcrumb || ['CSU Moussa Bnou Nouceir', 'Tableau de bord'];
    const last   = crumbs[crumbs.length - 1];
    const trail  = crumbs.slice(0, -1);
    const trailHTML = trail.map(c =>
      `<span class="text-ink-500 hidden sm:inline">${c}</span>` +
      `<svg viewBox="0 0 24 24" class="w-3.5 h-3.5 text-ink-300 hidden sm:block shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`
    ).join('');
    return `
    <header class="h-[60px] lg:h-[68px] bg-white border-b border-ink-200 px-4 lg:px-7 flex items-center gap-3 lg:gap-6 sticky top-0 z-30 shrink-0">
      <button id="mob-menu-btn" class="lg:hidden w-9 h-9 rounded-lg border border-ink-200 grid place-items-center text-ink-700 hover:bg-ink-50 shrink-0" aria-label="Menu">
        ${ICONS.menu}
      </button>
      <div class="flex items-center gap-2 text-[13px] min-w-0">
        ${trailHTML}
        <span class="text-ink-900 font-semibold truncate">${last}</span>
      </div>
      <div class="hidden sm:block flex-1 max-w-[380px] ml-2">
        <label class="flex items-center gap-2 h-9 lg:h-10 px-3 rounded-xl bg-ink-50 border border-transparent focus-within:border-mint-400 focus-within:bg-white cursor-text">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-ink-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input class="bg-transparent outline-none text-[13px] text-ink-800 placeholder:text-ink-500 flex-1 min-w-0" placeholder="Rechercher…" />
          <span class="text-[10.5px] mono text-ink-500 border border-ink-300 rounded px-1.5 py-0.5 hidden lg:inline shrink-0">⌘ K</span>
        </label>
      </div>
      <div class="flex items-center gap-1.5 lg:gap-2.5 ml-auto">
        <button data-lang-toggle class="hidden sm:flex h-9 lg:h-10 px-2.5 lg:px-3 rounded-xl border border-ink-200 text-[12px] font-semibold items-center gap-1.5 hover:bg-ink-50">
          <span class="text-mint-700" data-lang-fr>FR</span><span class="text-ink-300">/</span><span class="text-ink-400" data-lang-ar>AR</span>
        </button>
        <button data-toast="Calendrier — 25 mai 2026" class="hidden md:flex h-9 lg:h-10 px-2.5 lg:px-3 rounded-xl border border-ink-200 text-[12px] font-semibold text-ink-700 items-center gap-2 hover:bg-ink-50">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-ink-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          <span class="hidden lg:inline">25/05/2026</span>
        </button>
        <button data-toast="Aucune nouvelle notification" class="w-9 h-9 lg:w-10 lg:h-10 rounded-xl border border-ink-200 grid place-items-center relative hover:bg-ink-50">
          <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] text-ink-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>
        <div class="flex items-center gap-2 pl-2 lg:pl-2.5 ml-0.5 border-l border-ink-200 h-9 lg:h-10">
          <div class="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-mint-200 grid place-items-center text-mint-800 font-bold text-[12px] lg:text-[13px] shrink-0">FE</div>
          <div class="leading-tight pr-1 hidden md:block">
            <div class="text-[13px] font-semibold text-ink-900">Fatima El Idrissi</div>
            <div class="text-[11px] text-ink-500">Infirmière chef</div>
          </div>
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 text-ink-400 hidden md:block" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </header>`;
  }

  // ─── Mobile drawer ────────────────────────────────────────────────────────
  let _mobileDrawerActive = null;
  function ensureMobileDrawer(active) {
    if (document.getElementById('mob-sidebar-overlay') && _mobileDrawerActive === active) return;
    _mobileDrawerActive = active;
    let overlay = document.getElementById('mob-sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mob-sidebar-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', e => { if (e.target === overlay || e.target.classList.contains('mob-backdrop')) closeMobileDrawer(); });
    }
    overlay.innerHTML = `
      <div class="mob-backdrop"></div>
      <aside class="w-[248px] shrink-0 bg-white border-r border-ink-200 flex flex-col h-full">
        ${buildSidebarInner(active)}
      </aside>`;
  }
  function openMobileDrawer() {
    const o = document.getElementById('mob-sidebar-overlay');
    if (o) { o.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }
  function closeMobileDrawer() {
    const o = document.getElementById('mob-sidebar-overlay');
    if (o) { o.classList.remove('open'); document.body.style.overflow = ''; }
  }

  // ─── Toast ────────────────────────────────────────────────────────────────
  function ensureToastHost() {
    let h = document.getElementById('toast-host');
    if (!h) { h = document.createElement('div'); h.id = 'toast-host'; document.body.appendChild(h); }
    return h;
  }
  function toast(msg, ok = true) {
    const h = ensureToastHost();
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = (ok ? '<span class="ok">✓</span>' : '') + msg;
    h.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .2s'; setTimeout(() => el.remove(), 200); }, 2400);
  }
  window.toast = toast;

  // ─── Global interactions ──────────────────────────────────────────────────
  function wireGlobal() {
    // data-toast
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-toast]');
      if (t) { e.preventDefault(); toast(t.dataset.toast); }
    });

    // data-modal open / close
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-modal]');
      if (t) { e.preventDefault(); const m = document.getElementById(t.dataset.modal); if (m) m.classList.remove('hidden'); }
    });
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-close-modal]');
      if (t) { e.preventDefault(); const m = document.getElementById(t.dataset.closeModal); if (m) m.classList.add('hidden'); }
    });

    // Lang toggle
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-lang-toggle]');
      if (!t) return;
      e.preventDefault();
      const fr = t.querySelector('[data-lang-fr]'), ar = t.querySelector('[data-lang-ar]');
      if (!fr || !ar) return;
      const frActive = fr.classList.contains('text-mint-700');
      if (frActive) { fr.classList.replace('text-mint-700','text-ink-400'); ar.classList.replace('text-ink-400','text-mint-700'); toast('Interface en arabe — affichage cosmétique'); }
      else          { fr.classList.replace('text-ink-400','text-mint-700'); ar.classList.replace('text-mint-700','text-ink-400'); toast('Interface en français'); }
    });

    // Tab groups
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const triggers = group.querySelectorAll('[data-tab]');
      const panels   = group.querySelectorAll('[data-tab-panel]');
      if (![...triggers].some(t => t.classList.contains('is-active'))) { triggers[0]?.classList.add('is-active'); panels[0]?.classList.add('is-active'); }
      triggers.forEach(tr => tr.addEventListener('click', () => {
        const key = tr.dataset.tab;
        triggers.forEach(x => x.classList.toggle('is-active', x.dataset.tab === key));
        panels.forEach(p  => p.classList.toggle('is-active', p.dataset.tabPanel === key));
      }));
    });

    // Segmented controls
    document.querySelectorAll('[data-seg-group]').forEach(group => {
      const btns = group.querySelectorAll('.seg-btn');
      if (![...btns].some(b => b.classList.contains('is-active'))) btns[0]?.classList.add('is-active');
      btns.forEach(b => b.addEventListener('click', () => { btns.forEach(x => x.classList.remove('is-active')); b.classList.add('is-active'); }));
    });

    // Mini calendar day selection
    document.querySelectorAll('[data-cal]').forEach(cal => {
      cal.addEventListener('click', e => {
        const d = e.target.closest('.cal-day');
        if (!d || d.classList.contains('is-other')) return;
        cal.querySelectorAll('.cal-day.is-selected').forEach(x => x.classList.remove('is-selected'));
        if (!d.classList.contains('is-today')) d.classList.add('is-selected');
        cal.dispatchEvent(new CustomEvent('cal:select', { detail: { day: d.dataset.day }, bubbles: true }));
      });
    });

    // Checkbox toggles
    document.querySelectorAll('[data-check]').forEach(c => {
      c.addEventListener('click', () => {
        c.dataset.checked = c.dataset.checked === 'true' ? 'false' : 'true';
        const on = c.dataset.checked === 'true';
        const box = c.querySelector('[data-check-box]');
        if (box) {
          box.classList.toggle('bg-mint-600', on); box.classList.toggle('border-mint-600', on);
          box.classList.toggle('bg-white', !on);   box.classList.toggle('border-ink-300', !on);
          const tick = box.querySelector('svg'); if (tick) tick.style.opacity = on ? '1' : '0';
        }
      });
    });

    // Hamburger
    document.addEventListener('click', e => {
      if (e.target.closest('#mob-menu-btn')) openMobileDrawer();
    });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileDrawer(); });

    // Cmd-K
    window.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); document.querySelector('header input')?.focus(); }
    });
  }

  // ─── Mount ────────────────────────────────────────────────────────────────
  window.Chrome = {
    mount(opts = {}) {
      const active = opts.active || '';

      // Desktop sidebar
      const slot = document.getElementById('chrome');
      if (slot) slot.innerHTML = sidebarHTML(active);

      // Topbar
      const main = document.getElementById('main');
      if (main && opts.breadcrumb) {
        const tb = document.createElement('div');
        tb.innerHTML = topbarHTML(opts);
        main.prepend(tb.firstElementChild);
      }

      // Pre-build mobile drawer (invisible until hamburger click)
      ensureMobileDrawer(active);

      wireGlobal();
    }
  };

  // Auto-wire for Tableau de bord (has own chrome)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireGlobal);
  else wireGlobal();
})();
