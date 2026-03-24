/* modern interactive scripts */
document.addEventListener("DOMContentLoaded", () => {
  // Page load fade-in
  requestAnimationFrame(() => document.body.classList.add('loaded'));

  // Glitch / type arrival animation for brand name
  const brand = document.querySelector('.brand-name');
  if (brand) {
    const text = brand.textContent.trim();
    brand.textContent = '';
    let i = 0;
    const typer = setInterval(() => {
      brand.textContent += text[i++];
      if (i >= text.length) clearInterval(typer);
    }, 110);
  }

  // Skill badge subtle animation
  document.querySelectorAll('.badge-skill').forEach((b, idx) => {
    b.style.animation = `floaty 3s ${idx * 120}ms ease-in-out infinite`;
  });

  // Init all features
  initParticles();
  initMouseGlow();
  initScrollReveal();
  initCountUp();
  initMagneticButtons();
  initSkillRings();
  initThemeToggle();
  initTimelineNavigation();
  initSmoothAnchors();
});

/* ===== Particle background ===== */
function initParticles(){
  const canvas = document.getElementById('particle-canvas');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext('2d');

  function resize(){
    canvas.width = canvas.clientWidth || window.innerWidth;
    canvas.height = canvas.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  for(let i=0;i<60;i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: 1 + Math.random()*3,
      vx: (Math.random()-0.5)*0.3,
      vy: (Math.random()-0.5)*0.3,
      hue: Math.random()*360
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x = canvas.width; if(p.x>canvas.width) p.x=0;
      if(p.y<0) p.y = canvas.height; if(p.y>canvas.height) p.y=0;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue},70%,70%,0.08)`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ===== Mouse-follow glow in hero ===== */
function initMouseGlow(){
  const hero = document.querySelector('.hero');
  const glow = document.querySelector('.hero-glow');
  if (!hero || !glow) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top = (e.clientY - rect.top) + 'px';
  });
  hero.addEventListener('mouseleave', () => {
    glow.style.left = '50%';
    glow.style.top = '50%';
  });
}

/* ===== Scroll-triggered reveal animations ===== */
function initScrollReveal(){
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ===== Count-up animation for impact metrics ===== */
function initCountUp(){
  const metrics = document.querySelectorAll('[data-countup]');
  if (!metrics.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.countup);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(el => observer.observe(el));
}


/* ===== Magnetic buttons ===== */
function initMagneticButtons(){
  const buttons = document.querySelectorAll('.btn-magnetic');
  if (!buttons.length) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* ===== Skill rings animate on scroll ===== */
function initSkillRings(){
  const rings = document.querySelectorAll('.skill-ring');
  if (!rings.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  rings.forEach(ring => observer.observe(ring));
}

/* ===== Dark/Light theme toggle ===== */
function initThemeToggle(){
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('i');

  // Check saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    if (icon) { icon.className = 'fa-solid fa-sun'; }
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (icon) {
      icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  });
}

/* ===== Timeline keyboard navigation ===== */
function initTimelineNavigation(){
  const timeline = document.querySelector('.timeline-steps');
  if(!timeline) return;
  const buttons = Array.from(timeline.querySelectorAll('.timeline-btn'));
  if(!buttons.length) return;

  buttons.forEach((btn, idx) => {
    btn.setAttribute('tabindex','0');
    btn.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight'){
        e.preventDefault();
        const next = buttons[(idx+1) % buttons.length];
        next.focus();
        next.scrollIntoView({behavior:'smooth', inline:'center'});
      } else if(e.key === 'ArrowLeft'){
        e.preventDefault();
        const prev = buttons[(idx-1 + buttons.length) % buttons.length];
        prev.focus();
        prev.scrollIntoView({behavior:'smooth', inline:'center'});
      }
    });
    btn.addEventListener('click', () => {
      btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.03)' }, { transform: 'scale(1)' }], { duration: 220 });
    });
  });
}

// highlight and scroll the current role into view
function markCurrentRole(){
  const current = document.querySelector('.timeline-btn.current');
  if(!current) return;
  current.setAttribute('aria-current', 'true');
  current.classList.add('pulse');
  setTimeout(() => {
    current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }, 350);
}
document.addEventListener('DOMContentLoaded', markCurrentRole);

/* ===== Smooth anchor scrolling ===== */
function initSmoothAnchors(){
  const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
  if(!supportsSmooth) return;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex','-1');
        target.focus({ preventScroll: true });
        setTimeout(() => target.removeAttribute('tabindex'), 1200);
      }
    }, { passive: true });
  });
}
