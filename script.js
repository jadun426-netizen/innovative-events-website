const services = [
  {
    name: 'Wedding Management',
    desc: 'Thoughtful planning and coordination for your special day.',
    color: '#f4b7b9',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/eqMdLbfEsbK8pg5G8'
  },
  {
    name: 'Event Management',
    desc: 'Professional planning for celebrations and special events.',
    color: '#ddf5f1',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/PRwe6oYc2EeBAA1C8'
  },
  {
    name: 'Theme Decors',
    desc: 'Creative themes and beautiful decorations for every occasion.',
    color: '#c8b39e',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/SVvFWZ4zXQstg7NJ7'
  },
  {
    name: 'Birthday & Anniversary Celebrations',
    desc: 'Celebrate life’s special milestones with memorable setups.',
    color: '#ffe47a',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/rNospWFkerwp1XsN9'
  },
  {
    name: 'Wedding & Event Photography',
    desc: 'Capture the moments you will treasure for years to come.',
    color: '#e5f0c6',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/ndfjaKg53GWi79zD8'
  },
  {
    name: 'Catering Services',
    desc: 'Food and hospitality services for your guests and celebrations.',
    color: '#ffc98d',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/G6PtH4MyBC1AoiPP9'
  },
  {
    name: 'Wedding & Event Venues',
    desc: 'Venue options and coordination for your special gathering.',
    color: '#f7f1d9',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/zqGJDtb1H7ceJVe18'
  },
  {
    name: 'Bridal & Groom Makeover',
    desc: 'Get ready for your big day with bridal and groom styling.',
    color: '#b7c9ea',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/HSuWVJxuFz2mCX24A'
  },
  {
    name: 'Sound & DJ Services',
    desc: 'Music and sound to bring energy to your celebration.',
    color: '#f4b7b9',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/KUZ717KRD7pHzN9W8'
  },
  {
    name: 'Party & Function Halls',
    desc: 'Spaces for parties, family functions and special occasions.',
    color: '#ddf5f1',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/KLvsNxV2o8u2mWYDA'
  },
  {
    name: 'Dolls & Plate Decor',
    desc: 'Beautiful doll displays and decorative plate arrangements for ceremonies.',
    color: '#ffe7bd',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
    album: 'https://photos.app.goo.gl/EYtfK6dbPKMQrnzd9'
  }
];

// Display services
const serviceList = document.getElementById('serviceList');

serviceList.innerHTML = services.map((s, i) => `
  <article class="service-row ${i % 2 ? 'reverse' : ''}" style="--card:${s.color}">
    <div class="service-text">
      <span class="service-number">${String(i + 1).padStart(2, '0')} / SERVICE</span>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="${s.album}" target="_blank" rel="noopener">
        View Album <b>›</b>
      </a>
    </div>

    <a class="service-photo"
       href="${s.album}"
       target="_blank"
       rel="noopener"
       aria-label="View ${s.name} album">
      <img
        src="${s.image}"
        alt="${s.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85'">
    </a>
  </article>
`).join('');

// Display gallery
document.getElementById('galleryTiles').innerHTML =
  services.slice(0, 6).map(s => `
    <a href="${s.album}" target="_blank" rel="noopener" class="gallery-tile">
      <img
        src="${s.image}"
        alt="${s.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85'">
      <span>
        ${s.name}
        <b>View Album ↗</b>
      </span>
    </a>
  `).join('');

// Add services to enquiry form
document.getElementById('serviceSelect').insertAdjacentHTML(
  'beforeend',
  services.map(s => `<option>${s.name}</option>`).join('')
);

// Mobile navigation
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// WhatsApp enquiry form
document.getElementById('enquiryForm').addEventListener('submit', e => {
  e.preventDefault();

  const d = new FormData(e.currentTarget);

  const msg = [
    'Hello Innovative Events & Wedding Planners,',
    'I would like to enquire about an event.',
    'Name: ' + d.get('name'),
    'Mobile: ' + d.get('phone'),
    'Email: ' + (d.get('email') || 'Not provided'),
    'Event date: ' + (d.get('date') || 'Not specified'),
    'Service: ' + d.get('service'),
    'Message: ' + (d.get('message') || 'Not provided')
  ].join('\n');

  window.open(
    'https://wa.me/919632784690?text=' + encodeURIComponent(msg),
    '_blank',
    'noopener'
  );
});

// Current year in footer
document.getElementById('year').textContent =
  new Date().getFullYear();
