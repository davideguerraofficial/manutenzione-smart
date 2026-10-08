const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  revealItems.forEach(item => { item.classList.add('will-reveal'); observer.observe(item); });
  reducedMotion.addEventListener('change', () => revealItems.forEach(item => item.classList.add('is-visible')));
}

const menu = document.querySelector<HTMLElement>('#main-navigation');
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
if (menu && menuToggle) {
  document.documentElement.classList.add('nav-ready');
  const closeMenu = () => { menuToggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); };
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(isOpen)); menu.classList.toggle('is-open', isOpen);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); } });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
}

const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-plan-tab]'));
const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-plan-panel]'));
if (tabs.length && panels.length) {
  const activate = (name: string) => {
    tabs.forEach(tab => { const selected = tab.dataset.planTab === name; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; });
    panels.forEach(panel => { panel.hidden = panel.dataset.planPanel !== name; });
  };
  document.querySelector('.pricing-switch')?.setAttribute('role', 'tablist');
  tabs.forEach(tab => { tab.setAttribute('role', 'tab'); tab.addEventListener('click', () => activate(tab.dataset.planTab!)); });
  panels.forEach(panel => panel.setAttribute('role', 'tabpanel'));
  activate('packages');
  tabs.forEach((tab, i) => tab.addEventListener('keydown', event => {
    let next = i;
    if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault(); activate(tabs[next].dataset.planTab!); tabs[next].focus();
  }));
  document.querySelectorAll('[data-open-subscriptions]').forEach(link => link.addEventListener('click', () => activate('subscriptions')));
}

const progress = document.querySelector<HTMLElement>('.reading-progress');
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled || !progress) return;
  scheduled = true;
  requestAnimationFrame(() => { const height = document.documentElement.scrollHeight - window.innerHeight; progress.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`; scheduled = false; });
}, { passive: true });
