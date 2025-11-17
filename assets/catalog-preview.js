const catalogData = [
  { id: 'auto1', title: 'LED Headlight Upgrade', category: 'Automotive & Motorcycle', subcategory: 'Lighting', price: '$79.00', badge: 'Fast shipping', description: 'Plug-and-play LEDs with crisp white output and improved night visibility.', tone: 'primary', options: { Size: ['H4', 'H7', '9005'], Color: ['6000K Cool White', '5000K Neutral'] } },
  { id: 'auto2', title: 'All-Season Seat Covers', category: 'Automotive & Motorcycle', subcategory: 'Protection', price: '$49.00', badge: 'Best value', description: 'Water-resistant covers with breathable mesh panels and easy-clean finish.', tone: 'neutral', options: { Color: ['Charcoal', 'Black/Gray'], Size: ['Standard', 'XL'] } },
  { id: 'auto3', title: 'Magnetic Phone Mount', category: 'Automotive & Motorcycle', subcategory: 'Accessories', price: '$19.00', badge: 'New', description: 'Low-profile dashboard mount with reinforced magnet array and one-hand docking.', tone: 'accent', options: { Finish: ['Matte Black', 'Graphite'] } },
  { id: 'home1', title: 'Smart LED Light Strip', category: 'Home Improvement', subcategory: 'Lighting', price: '$32.00', badge: 'Smart home', description: 'Voice-ready RGB+CCT strip with scheduled scenes and music sync.', tone: 'primary', options: { Length: ['3m', '5m'], Hub: ['Works with Alexa', 'Works with Google'] } },
  { id: 'home2', title: 'WiFi Security Camera', category: 'Home Improvement', subcategory: 'Security', price: '$59.00', badge: 'Top rated', description: '1080p indoor cam with motion alerts, night vision, and encrypted cloud.', tone: 'accent', options: { Storage: ['Cloud', 'MicroSD'], Pack: ['Single', '2-Pack'] } },
  { id: 'home3', title: 'Compact Tool Set', category: 'Home Improvement', subcategory: 'Tools', price: '$44.00', badge: 'Kit', description: 'Everyday drill, driver bits, and precision tools organized for quick fixes.', tone: 'neutral', options: { Voltage: ['12V', '20V'] } },
  { id: 'elec1', title: 'Wireless Earbuds', category: 'Electronics', subcategory: 'Audio', price: '$89.00', badge: 'Bestseller', description: 'Hybrid ANC, pocketable case, and 32-hour battery for daily listening.', tone: 'primary', options: { Color: ['Pearl', 'Carbon'], Tips: ['Standard', 'Foam Comfort'] } },
  { id: 'elec2', title: 'Fitness Smartwatch', category: 'Electronics', subcategory: 'Wearables', price: '$119.00', badge: 'New', description: 'AMOLED display, GPS tracking, and stress monitoring with 7-day battery.', tone: 'accent', options: { Size: ['41mm', '45mm'], Strap: ['Silicone', 'Woven'] } },
  { id: 'elec3', title: 'USB-C Docking Hub', category: 'Electronics', subcategory: 'Workspace', price: '$69.00', badge: 'Pro', description: 'Dual HDMI, 100W pass-through charging, and studio-grade audio ports.', tone: 'neutral', options: { Color: ['Slate', 'Silver'] } },
  { id: 'toy1', title: 'STEM Robotics Kit', category: 'Toys', subcategory: 'STEM', price: '$74.00', badge: 'STEM', description: 'Snap-together robot projects with guided code challenges.', tone: 'primary', options: { Level: ['Beginner', 'Intermediate'] } },
  { id: 'toy2', title: 'Premium Kites', category: 'Toys', subcategory: 'Outdoor Play', price: '$29.00', badge: 'Outdoor', description: 'Ripstop nylon kites with carbon spars and quick-pull launch handle.', tone: 'accent', options: { Style: ['Delta', 'Diamond'] } },
  { id: 'toy3', title: 'Collector Figure Set', category: 'Toys', subcategory: 'Collectibles', price: '$39.00', badge: 'Limited', description: 'Limited-run display figures with interchangeable accessories.', tone: 'neutral', options: { Edition: ['Nightfall', 'Aurora'] } },
  { id: 'sport1', title: 'Adjustable Dumbbells', category: 'Sports & Outdoors', subcategory: 'Fitness', price: '$149.00', badge: 'Ships free', description: 'Space-saving pair with dial-select weights and knurled handles.', tone: 'primary', options: { Weight: ['25 lb', '52.5 lb'] } },
  { id: 'sport2', title: 'Ultralight Tent', category: 'Sports & Outdoors', subcategory: 'Camping', price: '$189.00', badge: 'Trail ready', description: '2-person tent with aluminum poles, quick pitch fly, and taped seams.', tone: 'accent', options: { Season: ['3-Season', '4-Season'], Footprint: ['Included', 'Add-on'] } },
  { id: 'sport3', title: 'Commuter Bike Helmet', category: 'Sports & Outdoors', subcategory: 'Cycling', price: '$78.00', badge: 'Safety', description: 'MIPS-ready shell with magnetic buckle and reflective accents.', tone: 'neutral', options: { Size: ['S', 'M', 'L'], Color: ['Matte Navy', 'Stone'] } },
  { id: 'pet1', title: 'Orthopedic Pet Bed', category: 'Pets', subcategory: 'Comfort', price: '$54.00', badge: 'Cozy', description: 'Memory foam support with washable cover and anti-slip base.', tone: 'primary', options: { Size: ['S', 'M', 'L'], Color: ['Sand', 'Charcoal'] } },
  { id: 'pet2', title: 'Travel Carrier Backpack', category: 'Pets', subcategory: 'Travel', price: '$62.00', badge: 'Travel', description: 'Ventilated carrier with safety tether and airline-friendly profile.', tone: 'accent', options: { Size: ['Small', 'Medium'], Color: ['Olive', 'Black'] } },
  { id: 'homeg1', title: 'Textured Throw Blanket', category: 'Home, Garden & Furniture', subcategory: 'Decor', price: '$48.00', badge: 'New', description: 'Soft cotton blend throw with subtle herringbone texture.', tone: 'neutral', options: { Color: ['Ivory', 'Sage'] } },
  { id: 'homeg2', title: 'Stackable Storage Bins', category: 'Home, Garden & Furniture', subcategory: 'Storage', price: '$36.00', badge: 'Organize', description: 'Clear bins with bamboo lids for streamlined pantries and closets.', tone: 'primary', options: { Pack: ['2-pack', '4-pack'] } },
  { id: 'homeg3', title: 'Outdoor Bistro Set', category: 'Home, Garden & Furniture', subcategory: 'Outdoor', price: '$219.00', badge: 'Garden', description: 'Weather-resistant table and chairs with quick-fold design.', tone: 'accent', options: { Finish: ['Teak', 'Charcoal'] } },
  { id: 'jew1', title: 'Minimalist Watch', category: 'Jewelry & Watches', subcategory: 'Watches', price: '$129.00', badge: 'Classic', description: 'Slim profile watch with sapphire crystal and quick-release strap.', tone: 'neutral', options: { Strap: ['Leather', 'Mesh'], Size: ['38mm', '42mm'] } },
  { id: 'jew2', title: 'Layered Necklace Set', category: 'Jewelry & Watches', subcategory: 'Necklaces', price: '$58.00', badge: 'Giftable', description: 'Gold-tone layered chains with adjustable lengths for perfect stacking.', tone: 'primary', options: { Finish: ['Gold', 'Silver'] } },
  { id: 'jew3', title: 'Stackable Ring Trio', category: 'Jewelry & Watches', subcategory: 'Rings', price: '$42.00', badge: 'New', description: 'Three-piece ring set with mixed finishes for everyday styling.', tone: 'accent', options: { Size: ['6', '7', '8'] } },
  { id: 'bag1', title: 'Weekender Duffel', category: 'Bags & Shoes', subcategory: 'Travel Bags', price: '$94.00', badge: 'Carry-on', description: 'Water-resistant duffel with trolley sleeve and padded shoe pocket.', tone: 'primary', options: { Color: ['Ink', 'Stone'], Strap: ['Standard', 'Padded'] } },
  { id: 'bag2', title: 'Minimal Leather Sneakers', category: 'Bags & Shoes', subcategory: 'Sneakers', price: '$119.00', badge: 'New', description: 'Full-grain leather sneakers with ortholite insole and neutral palette.', tone: 'neutral', options: { Size: ['7', '8', '9', '10', '11'], Color: ['White', 'Taupe'] } },
  { id: 'bag3', title: 'Structured Tote', category: 'Bags & Shoes', subcategory: 'Work', price: '$88.00', badge: 'Workday', description: 'Structured tote with padded laptop sleeve and hidden zip pocket.', tone: 'accent', options: { Color: ['Black', 'Camel'] } },
  { id: 'app1', title: 'Performance Tee', category: 'Clothing & Apparel', subcategory: 'Activewear', price: '$34.00', badge: 'Breathable', description: 'Moisture-wicking tee with flat seams and UV protection.', tone: 'primary', options: { Size: ['S', 'M', 'L', 'XL'], Color: ['White', 'Navy'] } },
  { id: 'app2', title: 'Everyday Chinos', category: 'Clothing & Apparel', subcategory: 'Essentials', price: '$59.00', badge: 'Essential', description: 'Stretch chinos with tailored fit and wrinkle-resistant finish.', tone: 'neutral', options: { Size: ['30', '32', '34', '36'], Length: ['Short', 'Regular', 'Long'] } },
  { id: 'app3', title: 'Lightweight Puffer', category: 'Clothing & Apparel', subcategory: 'Outerwear', price: '$98.00', badge: 'Seasonal', description: 'Packable puffer with recycled fill and water-repellent shell.', tone: 'accent', options: { Size: ['S', 'M', 'L', 'XL'], Color: ['Ash', 'Forest'] } },
];

const categoryMap = {
  'Automotive & Motorcycle': ['Lighting', 'Protection', 'Accessories'],
  'Home Improvement': ['Lighting', 'Security', 'Tools'],
  Electronics: ['Audio', 'Wearables', 'Workspace'],
  Toys: ['STEM', 'Outdoor Play', 'Collectibles'],
  'Sports & Outdoors': ['Fitness', 'Camping', 'Cycling'],
  Pets: ['Comfort', 'Grooming', 'Travel'],
  'Home, Garden & Furniture': ['Decor', 'Storage', 'Outdoor'],
  'Jewelry & Watches': ['Watches', 'Necklaces', 'Rings'],
  'Bags & Shoes': ['Travel Bags', 'Sneakers', 'Work'],
  'Clothing & Apparel': ['Activewear', 'Essentials', 'Outerwear'],
};

function toneClass(tone){
  if(tone === 'accent') return 'product-card__media--alt';
  if(tone === 'neutral') return 'product-card__media--neutral';
  return '';
}

function createChip(label, active, dataset = {}){
  const chip = document.createElement('button');
  chip.className = 'filter-chip' + (active ? ' is-active' : '');
  chip.textContent = label;
  Object.entries(dataset).forEach(([key,value])=> chip.dataset[key] = value);
  return chip;
}

function renderChips(currentCategory, currentSubcategory){
  const catWrap = document.getElementById('category-chips');
  const subWrap = document.getElementById('subcategory-chips');
  catWrap.innerHTML = '';
  subWrap.innerHTML = '';

  Object.keys(categoryMap).forEach(cat => {
    const chip = createChip(cat, cat === currentCategory, { category: cat });
    catWrap.appendChild(chip);
  });

  if(currentCategory){
    const subs = categoryMap[currentCategory] || [];
    subs.forEach(sub => {
      const chip = createChip(sub, sub === currentSubcategory, { category: currentCategory, subcategory: sub });
      subWrap.appendChild(chip);
    });
  }
}

function renderGrid(currentCategory, currentSubcategory){
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = '';
  const filtered = catalogData.filter(item => {
    if(currentCategory && item.category !== currentCategory) return false;
    if(currentSubcategory && item.subcategory !== currentSubcategory) return false;
    return true;
  });

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card__media ${toneClass(item.tone)}"></div>
      <div class="product-card__content">
        <div class="product-card__meta">
          <p class="product-card__title">${item.title}</p>
          <span class="product-card__price">${item.price}</span>
        </div>
        <div class="product-card__tags">
          <span class="badge">${item.badge}</span>
          <span class="pill">${item.category}</span>
          <span class="pill">${item.subcategory}</span>
        </div>
        <p class="product-card__desc">${item.description}</p>
        <div class="product-card__actions">
          <button class="btn secondary" data-action="add" data-id="${item.id}">Add to cart</button>
          <button class="btn primary" data-action="buy" data-id="${item.id}">Buy now</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openQuickBuy(item){
  const modal = document.getElementById('quick-buy');
  document.getElementById('quick-buy-category').textContent = `${item.category} • ${item.subcategory}`;
  document.getElementById('quick-buy-title').textContent = item.title;
  document.getElementById('quick-buy-price').textContent = item.price;
  document.getElementById('quick-buy-desc').textContent = item.description;
  document.getElementById('quick-buy-media').className = 'modal__media ' + toneClass(item.tone);
  document.getElementById('quick-buy-quantity').value = 1;

  const optionFields = document.getElementById('option-fields');
  optionFields.innerHTML = '';
  if(item.options){
    Object.entries(item.options).forEach(([label, values]) => {
      const wrapper = document.createElement('label');
      wrapper.textContent = label;
      const select = document.createElement('select');
      values.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = v;
        select.appendChild(opt);
      });
      wrapper.appendChild(select);
      optionFields.appendChild(wrapper);
    });
  }

  modal.classList.add('is-open');
}

function bindEvents(){
  let currentCategory = 'Automotive & Motorcycle';
  let currentSubcategory = '';

  const modal = document.getElementById('quick-buy');

  function update(){
    renderChips(currentCategory, currentSubcategory);
    renderGrid(currentCategory, currentSubcategory);
  }

  update();

  document.addEventListener('click', (e) => {
    const cat = e.target.closest('[data-category]');
    const sub = e.target.closest('[data-subcategory]');
    if(cat && e.target.classList.contains('top-nav__link')){
      e.preventDefault();
      currentCategory = cat.dataset.category;
      currentSubcategory = '';
      update();
      document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
    }
    if(sub && sub.dataset.subcategory){
      e.preventDefault();
      currentCategory = sub.dataset.category;
      currentSubcategory = sub.dataset.subcategory;
      update();
      document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
    }
    if(e.target.classList.contains('filter-chip')){
      e.preventDefault();
      const chipCat = e.target.dataset.category;
      const chipSub = e.target.dataset.subcategory || '';
      currentCategory = chipCat || currentCategory;
      currentSubcategory = chipSub;
      update();
    }
    if(e.target.dataset.action === 'buy'){
      const product = catalogData.find(p => p.id === e.target.dataset.id);
      if(product){
        openQuickBuy(product);
      }
    }
    if(e.target.dataset.action === 'add'){
      const cartPanel = document.querySelector('.quick-cart p');
      cartPanel.textContent = 'Added to cart — stays on-page for a seamless experience.';
    }
    if(e.target.hasAttribute('data-close')){
      modal.classList.remove('is-open');
    }
    if(e.target.classList.contains('modal-backdrop')){
      modal.classList.remove('is-open');
    }
  });
}

document.addEventListener('DOMContentLoaded', bindEvents);
