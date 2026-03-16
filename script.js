function toggleVideo() {
    const v = document.getElementById('npc-video');
    const overlay = document.querySelector('.feat-video-overlay');
    const btn = document.getElementById('play-btn');
    if (v.paused) {
      v.play();
      overlay.style.opacity = '0';
      btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="4" width="4" height="14" fill="#fff"/><rect x="13" y="4" width="4" height="14" fill="#fff"/></svg>';
    } else {
      v.pause();
      overlay.style.opacity = '1';
      btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><polygon points="7,4 18,11 7,18" fill="#fff"/></svg>';
    }
  }

  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));

  document.getElementById('yr').textContent = `✦ ${new Date().getFullYear()}`;

  const projects = {
    'featured-proj': {
      type: 'AI / Game Dev · Capstone',
      name: 'AI-Powered NPC Behavior Modeling',
      desc: 'Final-year capstone project — a Unity-based 3D game environment featuring adaptive NPCs trained using <strong>reinforcement learning</strong>, replacing traditional scripted behaviors with dynamic, context-aware decision-making. Implemented intelligent agents using Unity ML-Agents with custom observation spaces, action spaces, and reward functions to support navigation, combat engagement, survival tactics, and responsive player interaction.',
      stack: ['Unity', 'C#', 'ML-Agents', 'Reinforcement Learning', 'Python'],
      demo: 'https://youtu.be/ADx1dFbM4iY', source: 'https://github.com/monisalux/NG01Capstone',
      screenshots: []
    },
    'proj-1': {
      type: 'Web App · Live',
      name: 'WeStudy Tutoring Platform',
      desc: 'Born from 8 years of personal tutoring experience with students of all ages, WeStudy is a tutoring platform I co-own alongside a <strong>team of 10</strong>. The site connects students with qualified tutors, featuring tutor profiles, subject listings, and a seamless booking experience — built to make quality academic support accessible to everyone.',
      stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      demo: 'https://monisalux.github.io/', source: 'https://github.com/monisalux',
      screenshots: []
    },
    'proj-2': {
      type: 'AI / Game Dev · Capstone',
      name: 'AI-Powered NPC Behavior Modeling',
      desc: 'Final-year capstone project — a Unity-based 3D game environment featuring adaptive NPCs trained using <strong>reinforcement learning</strong>, replacing traditional scripted behaviors with dynamic, context-aware decision-making. Implemented intelligent agents using Unity ML-Agents with custom observation spaces, action spaces, and reward functions to support navigation, combat engagement, survival tactics, and responsive player interaction. Refined agent behavior through iterative training cycles by tuning reward parameters and policies.',
      stack: ['Unity', 'C#', 'ML-Agents', 'Reinforcement Learning', 'Python'],
      demo: 'https://youtu.be/ADx1dFbM4iY', source: 'https://github.com/monisalux/NG01Capstone',
      screenshots: []
    },
    'proj-4': {
      type: 'Web App',
      name: 'Campus Connect',
      desc: 'A campus social platform connecting students across university life. Features events, announcements, and collaboration tools built to streamline campus interactions. Designed with role-based access for students, faculty, and admins, with a focus on usability and real-time data.',
      stack: ['Java', 'JavaFX', 'SQL', 'Scene Builder', 'NetBeans'],
      demo: null, source: 'https://github.com/monisalux/campusconnect',
      screenshots: [
        { src: null, caption: 'Dashboard view' },
        { src: null, caption: 'Events & announcements' },
      ]
    },
    'proj-5': {
      type: 'Full-Stack App',
      name: 'Moflix Telecom Application',
      desc: 'Led a team of 4 to design and build a telecom application using <strong>Java, JavaFX, Scene Builder, and SQL</strong>. Developed core Java classes for seamless SQL database connectivity and real-time data handling. Engineered a scalable API with 100+ components — including methods, queries, and views — ensuring modularity and maintainability.',
      stack: ['Java', 'JavaFX', 'SQL', 'Scene Builder', 'NetBeans'],
      demo: null, source: 'https://github.com/monisalux/Moflix',
      screenshots: [
        { src: null, caption: 'Application main screen' },
        { src: null, caption: 'Database view' },
      ]
    },
  };

  function buildSS(ss) {
    const inner = ss.src
      ? `<img src="${ss.src}" alt="${ss.caption}" loading="lazy">`
      : `<div class="ss-placeholder"><div class="ss-placeholder-icon">◻</div><span class="ss-placeholder-text">add image src in project data</span></div>`;
    return `<div class="ss-frame">${inner}<div class="ss-caption">${ss.caption}</div></div>`;
  }

  function buildVideo(src) {
    return `<div class="ss-frame" style="aspect-ratio:16/9;">
      <video style="width:100%;height:100%;object-fit:cover;border-radius:12px;" controls>
        <source src="${src}" type="video/mp4">
      </video>
    </div>`;
  }

  function openPanel(id) {
    const p = projects[id]; if (!p) return;
    document.getElementById('panel-type').textContent = p.type;
    document.getElementById('panel-name').textContent = p.name;
    const mediaHTML = p.video ? buildVideo(p.video) : (p.screenshots||[]).map(buildSS).join('');
    const stack = p.stack.map(s => `<span class="panel-tag">${s}</span>`).join('');
    const demo  = p.demo   ? `<a href="${p.demo}"   class="pl pl-primary" target="_blank" rel="noopener">↗ Live Demo</a>` : '';
    const src   = p.source ? `<a href="${p.source}" class="pl pl-ghost"   target="_blank" rel="noopener">⌥ Source Code</a>` : '';
    document.getElementById('panel-body').innerHTML = `
      ${mediaHTML ? `<div class="panel-section-label">${p.video ? 'Demo video' : 'Screenshots'}</div>
      <div class="panel-screenshots">${mediaHTML}</div>
      <div class="panel-divider"></div>` : ''}
      <div class="panel-section-label">About</div>
      <p class="panel-desc">${p.desc}</p>
      <div class="panel-divider"></div>
      <div class="panel-section-label">Stack</div>
      <div class="panel-stack" style="margin-bottom:0">${stack}</div>
      ${(demo||src) ? `<div class="panel-divider"></div><div class="panel-section-label">Links</div><div class="panel-links">${demo}${src}</div>` : ''}
    `;
    document.getElementById('detail-panel').classList.add('open');
    document.getElementById('overlay').classList.add('open');
    document.body.classList.add('panel-open');
    document.getElementById('panel-body').scrollTop = 0;
