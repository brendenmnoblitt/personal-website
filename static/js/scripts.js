/* modern interactive scripts for the updated hero */
document.addEventListener("DOMContentLoaded", () => {
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

  // Name hover toggle removed: keep the initial name layer intact; no swap on hover.

  // Skill badge subtle animation
  document.querySelectorAll('.badge-skill').forEach((b, idx) => {
    b.style.animation = `floaty 3s ${idx * 120}ms ease-in-out infinite`;
  });

  // particle background init
  initParticles();
  // timeline keyboard navigation
  initTimelineNavigation();
  // smooth in-page anchor navigation
  initSmoothAnchors();
});

function initParticles(){
  const canvas = document.getElementById('particle-canvas');
  // reduce motion for users who prefer it
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

function initTimelineNavigation(){
  const timeline = document.querySelector('.timeline-steps');
  if(!timeline) return;
  const buttons = Array.from(timeline.querySelectorAll('.timeline-btn'));
  if(!buttons.length) return;

  buttons.forEach((btn, idx) => {
    // ensure keyboard focus
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
    // allow click or Enter/Space to toggle a brief visual pulse
    btn.addEventListener('click', () => {
      btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.03)' }, { transform: 'scale(1)' }], { duration: 220 });
    });
  });
}

// highlight and optionally scroll the current role into view
function markCurrentRole(){
  const current = document.querySelector('.timeline-btn.current');
  if(!current) return;
  current.setAttribute('aria-current', 'true');
  // add a temporary pulse class to draw attention
  current.classList.add('pulse');
  // smooth scroll to center the current item on load (small delay for layout)
  setTimeout(() => {
    current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }, 350);
}

// run after initial navigation setup
document.addEventListener('DOMContentLoaded', markCurrentRole);

// Smooth anchor scrolling for internal links and nav links
function initSmoothAnchors(){
  // only enhance if browser supports smooth scroll
  const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
  if(!supportsSmooth) return;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    // ignore empty hash anchors
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if(target){
        // use scrollIntoView with smooth behavior; scroll-padding-top handles offset
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update focus for accessibility
        target.setAttribute('tabindex','-1');
        target.focus({ preventScroll: true });
        // remove temporary tabindex
        setTimeout(() => target.removeAttribute('tabindex'), 1200);
      }
    }, { passive: true });
  });
}

/* Dark mode toggle (keeps previous behavior) */
// Dark mode removed — the site uses a consistent dark theme.