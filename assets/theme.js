(function(){
  const catalog = [
    {
      category: 'Automotive & Motorcycle',
      handle: 'automotive-motorcycle',
      subcategories: [
        { key: 'car-care', name: 'Car care kits', note: 'Detailing, wash foam, interior' },
        { key: 'riding-gear', name: 'Riding gear', note: 'Helmets, gloves, safety' },
        { key: 'garage', name: 'Garage essentials', note: 'LED lights, organizers' }
      ],
      products: [
        { title: 'Ceramic Shine Wash Kit', price: 38, badge: 'Top pick', subcategory: 'car-care', image: 'https://images.unsplash.com/photo-1542361345-2b2c64fd0c2b?auto=format&fit=crop&w=800&q=80', options: { Size: ['Starter', 'Pro'], Fragrance: ['Citrus', 'Fresh Air'] } },
        { title: 'Night Rider Smart Helmet', price: 129, badge: 'Safety', subcategory: 'riding-gear', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80', options: { Size: ['M', 'L', 'XL'], Color: ['Matte Black', 'White'] } },
        { title: 'Magnetic Garage Light Bar', price: 49, badge: 'Bright', subcategory: 'garage', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af2b06?auto=format&fit=crop&w=800&q=80', options: { Length: ['2ft', '4ft'], Color: ['Cool white', 'Warm white'] } }
      ]
    },
    {
      category: 'Home Improvement',
      handle: 'home-improvement',
      subcategories: [
        { key: 'tools', name: 'Tools & safety', note: 'Smart levels, laser measures' },
        { key: 'lighting', name: 'Lighting', note: 'Under-cabinet, motion sensors' },
        { key: 'smart-home', name: 'Smart home', note: 'Plugs, thermostats' }
      ],
      products: [
        { title: 'Precision Laser Measure', price: 59, badge: 'New', subcategory: 'tools', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80', options: { Range: ['30m', '50m'], Color: ['Slate', 'Sand'] } },
        { title: 'Magnetic Task Light', price: 34, badge: 'Utility', subcategory: 'lighting', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80', options: { Temperature: ['3000k', '4000k'] } },
        { title: 'Wi-Fi Smart Plug 4-Pack', price: 42, badge: 'Bundle', subcategory: 'smart-home', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', options: { Pack: ['2 pack', '4 pack'], Color: ['White'] } }
      ]
    },
    {
      category: 'Electronics',
      handle: 'electronics',
      subcategories: [
        { key: 'mobile', name: 'Mobile & wearables', note: 'Mag-safe, chargers, bands' },
        { key: 'audio', name: 'Audio & video', note: 'Earbuds, projectors' },
        { key: 'workspace', name: 'Workspace', note: 'Stands, lighting, mats' }
      ],
      products: [
        { title: 'Magnetic Wireless Charger Stand', price: 45, badge: 'Bestseller', subcategory: 'mobile', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80', options: { Finish: ['Aluminum', 'Black'], Cable: ['1m', '2m'] } },
        { title: 'Pocket HD Projector', price: 189, badge: 'Portable', subcategory: 'audio', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80', options: { Resolution: ['720p', '1080p'], Color: ['Matte Black'] } },
        { title: 'Soft Edge Desk Mat', price: 32, badge: 'Comfort', subcategory: 'workspace', image: 'https://images.unsplash.com/photo-1527443224154-d26c1232806b?auto=format&fit=crop&w=800&q=80', options: { Size: ['Small', 'Large'], Color: ['Fog', 'Charcoal', 'Sand'] } }
      ]
    },
    {
      category: 'Toys',
      handle: 'toys',
      subcategories: [
        { key: 'stem', name: 'STEM kits', note: 'Robotics, coding games' },
        { key: 'outdoor-play', name: 'Outdoor play', note: 'Kites, launchers' },
        { key: 'collectibles', name: 'Collectibles', note: 'Miniatures, puzzles' }
      ],
      products: [
        { title: 'Solar Rover STEM Kit', price: 29, badge: 'Educational', subcategory: 'stem', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', options: { Difficulty: ['Beginner', 'Intermediate'] } },
        { title: 'Rainbow Kite Set', price: 24, badge: 'Outdoor', subcategory: 'outdoor-play', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', options: { Size: ['Regular', 'XL'], Color: ['Rainbow'] } },
        { title: 'Magnetic Puzzle Cubes', price: 21, badge: 'Relaxing', subcategory: 'collectibles', image: 'https://images.unsplash.com/photo-1616400619175-5beda3a178d4?auto=format&fit=crop&w=800&q=80', options: { Pack: ['Single', 'Twin'] } }
      ]
    },
    {
      category: 'Sports & Outdoors',
      handle: 'sports-outdoors',
      subcategories: [
        { key: 'fitness', name: 'Fitness', note: 'Bands, recovery tools' },
        { key: 'hiking', name: 'Hiking & camping', note: 'Lighting, hydration' },
        { key: 'cycling', name: 'Cycling', note: 'Bags, tools' }
      ],
      products: [
        { title: 'Multi-Loop Resistance Bands', price: 27, badge: 'Home gym', subcategory: 'fitness', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', options: { Strength: ['Light', 'Medium', 'Heavy'], Color: ['Cool grey', 'Navy'] } },
        { title: 'Trail Ready Headlamp', price: 33, badge: 'Bright', subcategory: 'hiking', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', options: { Lumens: ['300', '500'], Strap: ['Black', 'Olive'] } },
        { title: 'Waterproof Frame Bag', price: 54, badge: 'Cycling', subcategory: 'cycling', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80', options: { Capacity: ['1.5L', '3L'], Color: ['Black', 'Sand'] } }
      ]
    },
    {
      category: 'Pets',
      handle: 'pets',
      subcategories: [
        { key: 'dogs', name: 'Dogs', note: 'Harnesses, travel bowls' },
        { key: 'cats', name: 'Cats', note: 'Scratchers, toys' },
        { key: 'care', name: 'Training & care', note: 'Grooming, cleaners' }
      ],
      products: [
        { title: 'No-Pull Reflective Harness', price: 31, badge: 'Comfort fit', subcategory: 'dogs', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80', options: { Size: ['S', 'M', 'L'], Color: ['Cobalt', 'Coral'] } },
        { title: 'Cardboard Tunnel Scratcher', price: 26, badge: 'New', subcategory: 'cats', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80', options: { Finish: ['Kraft', 'Grey'] } },
        { title: 'Portable Pet Rinse Kit', price: 44, badge: 'Travel', subcategory: 'care', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?auto=format&fit=crop&w=800&q=80', options: { Tank: ['2L', '4L'] } }
      ]
    },
    {
      category: 'Home, Garden & Furniture',
      handle: 'home-garden-furniture',
      subcategories: [
        { key: 'decor', name: 'Decor accents', note: 'Vases, trays, mirrors' },
        { key: 'kitchen', name: 'Kitchen & dining', note: 'Boards, storage' },
        { key: 'outdoor', name: 'Outdoor living', note: 'Lanterns, throws' }
      ],
      products: [
        { title: 'Ripple Glass Vase Duo', price: 39, badge: 'Set', subcategory: 'decor', image: 'https://images.unsplash.com/photo-1523419400521-2b0fa3fc3690?auto=format&fit=crop&w=800&q=80', options: { Color: ['Smoke', 'Clear'] } },
        { title: 'Acacia Serving Board', price: 28, badge: 'Host-ready', subcategory: 'kitchen', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80', options: { Size: ['M', 'L'] } },
        { title: 'Soft Weave Outdoor Throw', price: 36, badge: 'Cozy', subcategory: 'outdoor', image: 'https://images.unsplash.com/photo-1523419400521-2b0fa3fc3690?auto=format&fit=crop&w=800&q=80', options: { Color: ['Mist', 'Sand'], Size: ['50x60"'] } }
      ]
    },
    {
      category: 'Jewelry & Watches',
      handle: 'jewelry-watches',
      subcategories: [
        { key: 'minimal', name: 'Minimalist jewelry', note: 'Stacking sets' },
        { key: 'statement', name: 'Statement pieces', note: 'Pearls, bold shapes' },
        { key: 'watches', name: 'Watches', note: 'Dress & casual' }
      ],
      products: [
        { title: 'Layered Pendant Set', price: 52, badge: 'Best seller', subcategory: 'minimal', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80', options: { Finish: ['Gold', 'Silver'] } },
        { title: 'Pearl Drop Earrings', price: 48, badge: 'New', subcategory: 'statement', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', options: { Finish: ['Gold', 'Silver'], Length: ['Short', 'Long'] } },
        { title: 'Minimal Field Watch', price: 95, badge: 'Everyday', subcategory: 'watches', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', options: { Strap: ['Navy nylon', 'Leather'], Size: ['38mm', '42mm'] } }
      ]
    },
    {
      category: 'Bags & Shoes',
      handle: 'bags-shoes',
      subcategories: [
        { key: 'sneakers', name: 'Sneakers', note: 'Daily comfort' },
        { key: 'bags', name: 'Bags', note: 'Crossbody, totes' },
        { key: 'travel', name: 'Travel gear', note: 'Duffels, organizers' }
      ],
      products: [
        { title: 'Everyday Knit Sneakers', price: 68, badge: 'Comfort', subcategory: 'sneakers', image: 'https://images.unsplash.com/photo-1528701800489-20be9e0c5a97?auto=format&fit=crop&w=800&q=80', options: { Size: ['7', '8', '9', '10'], Color: ['Cloud', 'Ink'] } },
        { title: 'Structured Crossbody Bag', price: 62, badge: 'New', subcategory: 'bags', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', options: { Color: ['Stone', 'Black'] } },
        { title: 'Weekender Travel Duffel', price: 88, badge: 'Carry-on', subcategory: 'travel', image: 'https://images.unsplash.com/photo-1542293787938-4d273c2f63e4?auto=format&fit=crop&w=800&q=80', options: { Color: ['Charcoal', 'Sand'], Strap: ['Standard', 'Padded'] } }
      ]
    },
    {
      category: 'Clothing & Apparel',
      handle: 'clothing-apparel',
      subcategories: [
        { key: 'casual', name: 'Casual basics', note: 'Tees, layers' },
        { key: 'active', name: 'Activewear', note: 'Leggings, training tops' },
        { key: 'evening', name: 'Evening & formal', note: 'Dresses, blazers' }
      ],
      products: [
        { title: 'AirSoft Crew Tee', price: 26, badge: 'Everyday', subcategory: 'casual', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', options: { Size: ['S', 'M', 'L', 'XL'], Color: ['White', 'Steel', 'Midnight'] } },
        { title: 'Seamless Training Legging', price: 44, badge: 'Performance', subcategory: 'active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', options: { Size: ['XS', 'S', 'M', 'L'], Color: ['Onyx', 'Dusk'] } },
        { title: 'Tailored Evening Blazer', price: 118, badge: 'Polished', subcategory: 'evening', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', options: { Size: ['S', 'M', 'L'], Color: ['Black Tie', 'Midnight Navy'] } }
      ]
    }
  ];

  function $(selector, root=document){ return root.querySelector(selector); }
  function create(tag, className){ const el = document.createElement(tag); if(className) el.className = className; return el; }

  function buildCategoryStrip(container){
    if(!container) return;
    const list = create('div', 'category-strip__list');
    container.appendChild(list);

    catalog.forEach((entry, index)=>{
      const pill = create('div', 'category-pill');
      const btn = create('button');
      btn.type = 'button';
      btn.textContent = entry.category;
      if(index === 0) pill.classList.add('is-active');
      btn.addEventListener('mouseenter', ()=>{
        document.querySelectorAll('.category-pill').forEach(el=>el.classList.remove('is-active'));
        pill.classList.add('is-active');
        renderProducts(entry.category, entry.subcategories[0].key);
        updateFilterLabel(entry.category, entry.subcategories[0].name);
      });

      const submenu = create('div', 'subcategory-menu');
      entry.subcategories.forEach(sub=>{
        const subBtn = create('button');
        subBtn.type = 'button';
        subBtn.innerHTML = `<span>${sub.name}</span><span class="subcategory-note">${sub.note}</span>`;
        subBtn.addEventListener('click', ()=>{
          renderProducts(entry.category, sub.key);
          updateFilterLabel(entry.category, sub.name);
        });
        submenu.appendChild(subBtn);
      });

      pill.appendChild(btn);
      pill.appendChild(submenu);
      list.appendChild(pill);
    });
  }

  function renderProducts(categoryName, subKey){
    const grid = $('[data-product-grid]');
    if(!grid) return;
    grid.innerHTML = '';

    const entry = catalog.find(item=>item.category === categoryName) || catalog[0];
    const items = (entry?.products || []).filter(p=>!subKey || p.subcategory === subKey);

    if(!items.length){
      const empty = create('div', 'empty-state');
      empty.textContent = 'No items found for this filter yet.';
      grid.appendChild(empty);
      return;
    }

    items.forEach(product=>{
      const card = create('article', 'product-card');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', ()=> openModal(product, entry.category));
      card.addEventListener('keypress', (e)=>{ if(e.key === 'Enter'){ openModal(product, entry.category); }});

      const media = create('div', 'product-card__media');
      const img = create('img', 'product-card__image');
      img.src = product.image;
      img.alt = product.title;
      media.appendChild(img);
      if(product.badge){
        const badge = create('div', 'product-card__badge');
        badge.textContent = product.badge;
        media.appendChild(badge);
      }

      const body = create('div', 'product-card__body');
      const title = create('h3', 'product-card__title');
      title.textContent = product.title;
      const meta = create('p', 'product-card__meta');
      meta.textContent = entry.category;
      const price = create('p', 'product-card__price');
      price.textContent = `$${product.price.toFixed(2)}`;

      body.appendChild(title);
      body.appendChild(meta);
      body.appendChild(price);

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function updateFilterLabel(category, subcategory){
    const label = $('[data-active-filter]');
    if(label){
      label.textContent = `${category} — ${subcategory}`;
    }
  }

  function openModal(product, category){
    const modal = $('[data-product-modal]');
    if(!modal) return;
    modal.classList.add('is-open');
    const img = $('[data-modal-image]', modal);
    const title = $('[data-modal-title]', modal);
    const price = $('[data-modal-price]', modal);
    const categoryLabel = $('[data-modal-category]', modal);
    const optionsWrap = $('[data-modal-options]', modal);
    const summary = $('[data-modal-summary]', modal);
    const checkoutPreview = $('[data-checkout-preview]', modal);
    const checkoutTitle = $('[data-checkout-title]', modal);
    const checkoutPrice = $('[data-checkout-price]', modal);
    const checkoutMeta = $('[data-checkout-meta]', modal);
    const checkoutImage = $('[data-checkout-image]', modal);
    const quantityInput = $('[data-modal-quantity]', modal);

    img.src = product.image;
    img.alt = product.title;
    title.textContent = product.title;
    price.textContent = `$${product.price.toFixed(2)}`;
    categoryLabel.textContent = category;
    summary.textContent = '';
    checkoutPreview.classList.remove('is-visible');
    quantityInput.value = 1;

    optionsWrap.innerHTML = '';
    Object.keys(product.options || {}).forEach((optKey)=>{
      const label = create('label');
      label.textContent = optKey;
      const select = create('select');
      select.setAttribute('data-option-key', optKey);
      (product.options[optKey] || []).forEach((val)=>{
        const option = create('option');
        option.value = val;
        option.textContent = val;
        select.appendChild(option);
      });
      optionsWrap.appendChild(label);
      optionsWrap.appendChild(select);
    });

    const addBtn = $('[data-add-cart]', modal);
    const buyBtn = $('[data-buy-now]', modal);

    addBtn.onclick = ()=>{
      summary.textContent = 'Added to cart — ready to checkout when you are.';
      checkoutPreview.classList.remove('is-visible');
    };

    buyBtn.onclick = ()=>{
      const selections = [];
      optionsWrap.querySelectorAll('select').forEach(sel=>{
        selections.push(`${sel.getAttribute('data-option-key')}: ${sel.value}`);
      });
      const qty = parseInt(quantityInput.value || '1', 10) || 1;
      checkoutTitle.textContent = product.title;
      checkoutPrice.textContent = `$${(product.price * qty).toFixed(2)} total`;
      checkoutMeta.textContent = selections.join(' • ') || 'Default option';
      checkoutImage.src = product.image;
      checkoutPreview.classList.add('is-visible');
      summary.textContent = 'Buy now preview ready — confirm in checkout.';
    };

    const closeBtn = $('[data-modal-close]', modal);
    const backdrop = $('[data-modal-backdrop]', modal);
    function close(){ modal.classList.remove('is-open'); }
    closeBtn.onclick = close;
    backdrop.onclick = close;
    document.addEventListener('keydown', function escClose(evt){
      if(evt.key === 'Escape'){
        close();
        document.removeEventListener('keydown', escClose);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    const categoryStrip = document.querySelector('[data-category-strip]');
    buildCategoryStrip(categoryStrip);
    if(catalog.length){
      renderProducts(catalog[0].category, catalog[0].subcategories[0].key);
      updateFilterLabel(catalog[0].category, catalog[0].subcategories[0].name);
    }
  });
})();
