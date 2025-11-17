(function(){
  const catalog = [
    {
      category: 'Clothing & Apparel',
      handle: 'clothing-apparel',
      collectionHandle: 'clothing-apparel',
      subcategories: [
        { key: 'womens-clothing', name: "Women's Clothing", note: 'Dresses, tops, denim' },
        { key: 'mens-clothing', name: "Men's Clothing", note: 'Polished essentials' },
        { key: 'kids-baby-clothing', name: 'Kids & Baby Clothing', note: 'Soft everyday layers' },
        { key: 'pet-clothing', name: 'Pet Clothing & Accessories', note: 'Pups and cats included' },
        { key: 'swimwear', name: 'Swimwear', note: 'Resort-ready pieces' },
        { key: 'loungewear', name: 'Underwear & Loungewear', note: 'Cozy and breathable' },
        { key: 'shoes', name: 'Shoes (Men, Women, Kids)', note: 'Comfort-first' },
        { key: 'bags', name: 'Bags (Men, Women, Kids)', note: 'Daily carryalls' }
      ],
      products: [
        { title: 'Cotton Wrap Dress', price: 78, badge: 'Women', subcategory: 'womens-clothing', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80', options: { Size: ['XS','S','M','L'], Color: ['Oat','Ink'] } },
        { title: 'Stretch Chino Trouser', price: 64, badge: 'Men', subcategory: 'mens-clothing', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', options: { Size: ['30','32','34','36'], Color: ['Khaki','Navy'] } },
        { title: 'Soft Kids Hoodie', price: 32, badge: 'Kids & Baby', subcategory: 'kids-baby-clothing', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Size: ['2T','4T','6','8'], Color: ['Sky','Blush'] } },
        { title: 'Waterproof Pet Parka', price: 36, badge: 'Pets', subcategory: 'pet-clothing', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', options: { Size: ['S','M','L'], Color: ['Coral','Charcoal'] } },
        { title: 'Seaside Swim Trunks', price: 42, badge: 'Swim', subcategory: 'swimwear', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', options: { Size: ['S','M','L','XL'], Color: ['Navy','Citrus'] } },
        { title: 'CloudKnit Lounge Set', price: 58, badge: 'Lounge', subcategory: 'loungewear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', options: { Size: ['XS','S','M','L'], Color: ['Fog','Stone'] } },
        { title: 'Low-Profile Court Sneakers', price: 72, badge: 'Shoes', subcategory: 'shoes', image: 'https://images.unsplash.com/photo-1528701800489-20be9e0c5a97?auto=format&fit=crop&w=900&q=80', options: { Size: ['6','7','8','9','10'], Color: ['Cloud','Sand'] } },
        { title: 'Structured Everyday Tote', price: 68, badge: 'Bags', subcategory: 'bags', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', options: { Strap: ['Standard','Crossbody'], Color: ['Caramel','Black'] } }
      ]
    },
    {
      category: 'Jewelry & Accessories',
      handle: 'jewelry-accessories',
      collectionHandle: 'jewelry-watches',
      subcategories: [
        { key: 'watches', name: 'Watches', note: 'Dress and casual' },
        { key: 'fine-jewelry', name: 'Fine Jewelry', note: 'Gold, silver, pearls' },
        { key: 'fashion-jewelry', name: 'Fashion Jewelry', note: 'Statement-ready pieces' },
        { key: 'hair-accessories', name: 'Hair Accessories', note: 'Clips, bands, combs' },
        { key: 'sunglasses', name: 'Sunglasses & Small Accessories', note: 'Protective and polished' }
      ],
      products: [
        { title: 'Minimal Field Watch', price: 118, badge: 'Watch', subcategory: 'watches', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80', options: { Strap: ['Leather','Nylon'], Size: ['38mm','41mm'] } },
        { title: 'Pearl Droplet Studs', price: 74, badge: 'Fine', subcategory: 'fine-jewelry', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Gold','Silver'] } },
        { title: 'Layered Chain Necklace', price: 54, badge: 'Fashion', subcategory: 'fashion-jewelry', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Gold','Silver'], Length: ['16"','18"'] } },
        { title: 'Acetate Hair Claw', price: 16, badge: 'Hair', subcategory: 'hair-accessories', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Color: ['Tortoise','Rose'] } },
        { title: 'Polarized Square Sunglasses', price: 58, badge: 'Sun', subcategory: 'sunglasses', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80', options: { Lens: ['Polarized','Non-polarized'] } }
      ]
    },
    {
      category: 'Beauty, Health & Personal Care',
      handle: 'beauty-health-personal-care',
      collectionHandle: 'beauty-health-personal-care',
      subcategories: [
        { key: 'makeup', name: 'Makeup', note: 'Everyday neutrals' },
        { key: 'skin-care', name: 'Skin Care', note: 'Hydrating essentials' },
        { key: 'hair-care', name: 'Hair Care & Wigs', note: 'Treatment and styling' },
        { key: 'nail-art', name: 'Nail Art & Tools', note: 'Kits and prep' },
        { key: 'beauty-tools', name: 'Beauty Tools', note: 'Brushes, rollers' },
        { key: 'health-care', name: 'Health Care Products', note: 'Wellness basics' }
      ],
      products: [
        { title: 'Hydra-Glow Tint', price: 29, badge: 'Makeup', subcategory: 'makeup', image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=900&q=80', options: { Shade: ['Porcelain','Beige','Honey'] } },
        { title: 'Ceramide Moisture Cream', price: 34, badge: 'Skin', subcategory: 'skin-care', image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=900&q=80', options: { Size: ['50ml','80ml'] } },
        { title: 'Nourish Repair Mask', price: 27, badge: 'Hair', subcategory: 'hair-care', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', options: { Size: ['4oz','8oz'] } },
        { title: 'Salon Gel Starter Kit', price: 39, badge: 'Nail', subcategory: 'nail-art', image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Sheer','Opaque'] } },
        { title: 'Rose Quartz Face Roller', price: 22, badge: 'Tools', subcategory: 'beauty-tools', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', options: { Size: ['Standard','Mini'] } },
        { title: 'Daily Electrolyte Mix', price: 18, badge: 'Health', subcategory: 'health-care', image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=900&q=80', options: { Flavor: ['Citrus','Berry'] } }
      ]
    },
    {
      category: 'Home, Garden & Furniture',
      handle: 'home-garden-furniture',
      collectionHandle: 'home-garden-furniture',
      subcategories: [
        { key: 'home-textiles', name: 'Home Textiles', note: 'Throws and bedding' },
        { key: 'storage', name: 'Home Storage & Organization', note: 'Baskets, bins, racks' },
        { key: 'decor', name: 'Home Décor', note: 'Vases, candles, art' },
        { key: 'furniture', name: 'Furniture', note: 'Accent tables, shelves' },
        { key: 'kitchen-dining', name: 'Kitchen & Dining', note: 'Boards, utensils' },
        { key: 'party-supplies', name: 'Party & Festive Supplies', note: 'Tabletop décor' },
        { key: 'arts-crafts', name: 'Arts, Crafts & Sewing', note: 'DIY kits' },
        { key: 'musical', name: 'Musical Instruments (Non-Outdoor)', note: 'Practice-ready' }
      ],
      products: [
        { title: 'Soft Weave Throw', price: 44, badge: 'Textiles', subcategory: 'home-textiles', image: 'https://images.unsplash.com/photo-1523419400521-2b0fa3fc3690?auto=format&fit=crop&w=900&q=80', options: { Size: ['50x60"'], Color: ['Mist','Sand'] } },
        { title: 'Stackable Storage Baskets', price: 36, badge: 'Organization', subcategory: 'storage', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Pack: ['2','4'] } },
        { title: 'Ripple Glass Vase Duo', price: 39, badge: 'Décor', subcategory: 'decor', image: 'https://images.unsplash.com/photo-1523419400521-2b0fa3fc3690?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Smoke','Clear'] } },
        { title: 'Slim Profile Side Table', price: 92, badge: 'Furniture', subcategory: 'furniture', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Oak','Walnut'] } },
        { title: 'Acacia Serving Board', price: 28, badge: 'Kitchen', subcategory: 'kitchen-dining', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', options: { Size: ['M','L'] } },
        { title: 'Festive Table Runner', price: 26, badge: 'Party', subcategory: 'party-supplies', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', options: { Length: ['72"','90"'] } },
        { title: 'Watercolor DIY Kit', price: 24, badge: 'Arts', subcategory: 'arts-crafts', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Pieces: ['12','24'] } },
        { title: 'Compact Digital Piano', price: 189, badge: 'Musical', subcategory: 'musical', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Keys: ['61','88'] } }
      ]
    },
    {
      category: 'Toys, Kids & Babies',
      handle: 'toys-kids-babies',
      collectionHandle: 'toys',
      subcategories: [
        { key: 'toys-hobbies', name: 'Toys & Hobbies', note: 'STEM and puzzles' },
        { key: 'boys-clothing', name: 'Boys Clothing', note: 'Play-friendly fits' },
        { key: 'girls-clothing', name: 'Girls Clothing', note: 'Bright and comfy' },
        { key: 'baby-clothing', name: 'Baby Clothing', note: 'Ultra soft basics' },
        { key: 'baby-gear', name: 'Baby Gear & Mother Essentials', note: 'Carriers, covers' },
        { key: 'kids-shoes-bags', name: 'Kids Shoes & Bags', note: 'Sneakers and packs' }
      ],
      products: [
        { title: 'Solar Rover STEM Kit', price: 29, badge: 'STEM', subcategory: 'toys-hobbies', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80', options: { Difficulty: ['Beginner','Intermediate'] } },
        { title: 'Soft Cotton Henley', price: 24, badge: 'Boys', subcategory: 'boys-clothing', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Size: ['4','5','6','7'] } },
        { title: 'Ruffle Sleeve Dress', price: 28, badge: 'Girls', subcategory: 'girls-clothing', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', options: { Size: ['4','5','6','7'], Color: ['Rose','Lilac'] } },
        { title: 'Organic Cotton Onesie 3-Pack', price: 32, badge: 'Baby', subcategory: 'baby-clothing', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Size: ['0-3m','3-6m','6-9m'] } },
        { title: 'ErgoFit Baby Carrier', price: 74, badge: 'Gear', subcategory: 'baby-gear', image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&w=900&q=80', options: { Position: ['Front','Back'] } },
        { title: 'Mini Explorer Backpack', price: 22, badge: 'Shoes & Bags', subcategory: 'kids-shoes-bags', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Color: ['Cobalt','Lime'] } }
      ]
    },
    {
      category: 'Pet Supplies',
      handle: 'pet-supplies',
      collectionHandle: 'pets',
      subcategories: [
        { key: 'pet-food', name: 'Pet Food & Snacks', note: 'Balanced recipes' },
        { key: 'pet-toys', name: 'Pet Toys', note: 'Chew-proof fun' },
        { key: 'pet-bedding', name: 'Pet Bedding', note: 'Washable comfort' },
        { key: 'pet-furniture', name: 'Pet Furnitures', note: 'Loungers and trees' },
        { key: 'pet-outdoor', name: 'Pet Outdoor Supplies', note: 'Adventure-ready' },
        { key: 'pet-grooming', name: 'Pet Grooming', note: 'Brushes, shampoos' },
        { key: 'pet-feeding', name: 'Pet Drinking & Feeding', note: 'Bowls and fountains' },
        { key: 'bird-supplies', name: 'Bird Supplies', note: 'Perches and feed' },
        { key: 'fish-aquatic', name: 'Fish & Aquatic', note: 'Tanks and décor' }
      ],
      products: [
        { title: 'Grain-Free Salmon Bites', price: 18, badge: 'Food', subcategory: 'pet-food', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', options: { Size: ['8oz','16oz'] } },
        { title: 'Durable Rope Tug', price: 16, badge: 'Toy', subcategory: 'pet-toys', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', options: { Size: ['M','L'] } },
        { title: 'Orthopedic Pet Bed', price: 68, badge: 'Bedding', subcategory: 'pet-bedding', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', options: { Size: ['M','L','XL'], Color: ['Ash','Sand'] } },
        { title: 'Modern Cat Tree', price: 96, badge: 'Furniture', subcategory: 'pet-furniture', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80', options: { Height: ['3ft','5ft'] } },
        { title: 'Trail-Ready Harness', price: 34, badge: 'Outdoor', subcategory: 'pet-outdoor', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', options: { Size: ['S','M','L'], Color: ['Cobalt','Coral'] } },
        { title: 'Two-Sided Grooming Brush', price: 22, badge: 'Grooming', subcategory: 'pet-grooming', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80', options: { Type: ['Short hair','Long hair'] } },
        { title: 'Ceramic Raised Feeder', price: 28, badge: 'Feeding', subcategory: 'pet-feeding', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?auto=format&fit=crop&w=900&q=80', options: { Size: ['Single','Double'] } },
        { title: 'Natural Bird Perch Pack', price: 18, badge: 'Bird', subcategory: 'bird-supplies', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Pack: ['2','4'] } },
        { title: 'Aquarium Starter Kit', price: 62, badge: 'Aquatic', subcategory: 'fish-aquatic', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Size: ['5 gal','10 gal'] } }
      ]
    },
    {
      category: 'Sports & Outdoors',
      handle: 'sports-outdoors',
      collectionHandle: 'sports-outdoors',
      subcategories: [
        { key: 'outdoor-gear', name: 'Outdoor Gear', note: 'Lights, packs, shelters' },
        { key: 'fitness', name: 'Fitness & Bodybuilding', note: 'Bands and recovery' },
        { key: 'camping-hiking', name: 'Camping & Hiking', note: 'Ready for the trail' },
        { key: 'hunting', name: 'Hunting', note: 'Steady essentials' },
        { key: 'fishing', name: 'Fishing', note: 'Tackle and tools' },
        { key: 'cycling', name: 'Cycling', note: 'Bags, lights, tools' },
        { key: 'sports-shoes', name: 'Sports Shoes', note: 'Grip and cushion' },
        { key: 'sportswear', name: 'Sportswear', note: 'Moisture-wicking layers' },
        { key: 'swimming', name: 'Swimming Gear', note: 'Caps, goggles, towels' }
      ],
      products: [
        { title: 'Trail Ready Headlamp', price: 33, badge: 'Outdoor', subcategory: 'outdoor-gear', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Lumens: ['300','500'] } },
        { title: 'Multi-Loop Resistance Bands', price: 27, badge: 'Fitness', subcategory: 'fitness', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80', options: { Strength: ['Light','Medium','Heavy'] } },
        { title: 'Packable Hiking Stove', price: 58, badge: 'Hiking', subcategory: 'camping-hiking', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80', options: { Fuel: ['Iso-butane','Propane'] } },
        { title: 'Steady Grip Binoculars', price: 86, badge: 'Hunting', subcategory: 'hunting', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Magnification: ['8x','10x'] } },
        { title: 'Collapsible Fishing Rod Kit', price: 74, badge: 'Fishing', subcategory: 'fishing', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', options: { Length: ['6ft','7ft'] } },
        { title: 'Waterproof Frame Bag', price: 54, badge: 'Cycling', subcategory: 'cycling', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80', options: { Capacity: ['1.5L','3L'] } },
        { title: 'Cushion Ride Trainers', price: 72, badge: 'Shoes', subcategory: 'sports-shoes', image: 'https://images.unsplash.com/photo-1528701800489-20be9e0c5a97?auto=format&fit=crop&w=900&q=80', options: { Size: ['7','8','9','10'], Color: ['Stone','Ink'] } },
        { title: 'CoolTouch Training Tee', price: 29, badge: 'Sportswear', subcategory: 'sportswear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', options: { Size: ['S','M','L','XL'], Color: ['White','Charcoal'] } },
        { title: 'Quick-Dry Swim Set', price: 41, badge: 'Swim', subcategory: 'swimming', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', options: { Size: ['S','M','L'], Color: ['Aqua','Deep Blue'] } }
      ]
    },
    {
      category: 'Electronics & Gadgets',
      handle: 'electronics-gadgets',
      collectionHandle: 'electronics',
      subcategories: [
        { key: 'smart-electronics', name: 'Smart Electronics', note: 'Wearables, hubs' },
        { key: 'mobile', name: 'Mobile Phones & Parts', note: 'Latest builds' },
        { key: 'phone-accessories', name: 'Phone Accessories', note: 'MagSafe, mounts' },
        { key: 'audio-video', name: 'Audio & Video', note: 'Headphones, projectors' },
        { key: 'video-games', name: 'Video Games', note: 'Controllers and kits' },
        { key: 'camera-photo', name: 'Camera & Photo', note: 'Lighting and lenses' },
        { key: 'portable-electronics', name: 'Portable Electronics', note: 'Power banks, cables' }
      ],
      products: [
        { title: 'Smart Hub Mini', price: 58, badge: 'Smart', subcategory: 'smart-electronics', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Color: ['White','Slate'] } },
        { title: 'Glass Back Phone Shell', price: 29, badge: 'Mobile', subcategory: 'mobile', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80', options: { Size: ['iPhone 14','iPhone 14 Pro','Galaxy S23'] } },
        { title: 'Magnetic Wireless Charger Stand', price: 45, badge: 'Accessory', subcategory: 'phone-accessories', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80', options: { Cable: ['1m','2m'] } },
        { title: 'Pocket HD Projector', price: 189, badge: 'A/V', subcategory: 'audio-video', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Resolution: ['720p','1080p'] } },
        { title: 'Wireless Game Controller', price: 62, badge: 'Gaming', subcategory: 'video-games', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80', options: { Color: ['White','Black'] } },
        { title: 'Studio LED Light Panel', price: 84, badge: 'Camera', subcategory: 'camera-photo', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Size: ['8"','12"'] } },
        { title: 'Aluminum Power Bank', price: 38, badge: 'Portable', subcategory: 'portable-electronics', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80', options: { Capacity: ['10k','20k'] } }
      ]
    },
    {
      category: 'Computers & Office',
      handle: 'computers-office',
      collectionHandle: 'computers-office',
      subcategories: [
        { key: 'laptops-tablets', name: 'Laptops & Tablets', note: 'Portable productivity' },
        { key: 'storage-devices', name: 'Storage Devices', note: 'SSDs and drives' },
        { key: 'computer-accessories', name: 'Computer Accessories', note: 'Stands, hubs' },
        { key: 'networking', name: 'Networking', note: 'Routers and mesh' },
        { key: 'office-supplies', name: 'Office Supplies', note: 'Desk-ready basics' },
        { key: 'printers-scanners', name: 'Printers & Scanners', note: 'Compact efficiency' }
      ],
      products: [
        { title: 'Featherweight Laptop Stand', price: 42, badge: 'Laptops', subcategory: 'laptops-tablets', image: 'https://images.unsplash.com/photo-1527443224154-d26c1232806b?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Silver','Black'] } },
        { title: 'Portable NVMe SSD', price: 79, badge: 'Storage', subcategory: 'storage-devices', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Capacity: ['1TB','2TB'] } },
        { title: 'USB-C Workstation Hub', price: 64, badge: 'Accessories', subcategory: 'computer-accessories', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Ports: ['8-in-1','11-in-1'] } },
        { title: 'Wi-Fi 6 Mesh Router', price: 158, badge: 'Networking', subcategory: 'networking', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Pack: ['1','2'] } },
        { title: 'Minimal Desk Kit', price: 38, badge: 'Office', subcategory: 'office-supplies', image: 'https://images.unsplash.com/photo-1527443224154-d26c1232806b?auto=format&fit=crop&w=900&q=80', options: { Color: ['White','Sage'] } },
        { title: 'Compact All-in-One Printer', price: 132, badge: 'Print', subcategory: 'printers-scanners', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80', options: { Function: ['Print','Print/Scan'] } }
      ]
    },
    {
      category: 'Home Improvement & Tools',
      handle: 'home-improvement-tools',
      collectionHandle: 'home-improvement',
      subcategories: [
        { key: 'indoor-lighting', name: 'Indoor Lighting', note: 'Under-cabinet, task' },
        { key: 'outdoor-lighting', name: 'Outdoor Lighting', note: 'Path and porch' },
        { key: 'led-lighting', name: 'LED Lighting', note: 'Strips and kits' },
        { key: 'home-appliances', name: 'Home Appliances', note: 'Compact helpers' },
        { key: 'tools-hardware', name: 'Tools & Hardware', note: 'Levels, drills' },
        { key: 'garden-tools', name: 'Garden Tools', note: 'Pruners, hoses' }
      ],
      products: [
        { title: 'Magnetic Task Light', price: 34, badge: 'Indoor', subcategory: 'indoor-lighting', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Temperature: ['3000k','4000k'] } },
        { title: 'Solar Path Light Kit', price: 49, badge: 'Outdoor', subcategory: 'outdoor-lighting', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Pack: ['4','8'] } },
        { title: 'Flex LED Strip Set', price: 29, badge: 'LED', subcategory: 'led-lighting', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Length: ['3m','5m'] } },
        { title: 'Compact Air Purifier', price: 82, badge: 'Appliance', subcategory: 'home-appliances', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80', options: { Room: ['Small','Medium'] } },
        { title: 'Precision Laser Measure', price: 59, badge: 'Tools', subcategory: 'tools-hardware', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80', options: { Range: ['30m','50m'] } },
        { title: 'Carbon Steel Pruner', price: 26, badge: 'Garden', subcategory: 'garden-tools', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80', options: { Size: ['6"','8"'] } }
      ]
    },
    {
      category: 'Automotive & Motorcycle',
      handle: 'automotive-motorcycle',
      collectionHandle: 'automotive-motorcycle',
      subcategories: [
        { key: 'motorcycle-parts', name: 'Motorcycle Parts & Accessories', note: 'Ride-ready gear' },
        { key: 'replacement-parts', name: 'Car Replacement Parts', note: 'Reliable spares' },
        { key: 'interior-accessories', name: 'Car Interior Accessories', note: 'Clean and organized' },
        { key: 'exterior-accessories', name: 'Car Exterior Accessories', note: 'Protect and polish' },
        { key: 'car-electronics', name: 'Car Electronics', note: 'Cams and chargers' },
        { key: 'tools-car-care', name: 'Tools & Car Care', note: 'Detailing staples' }
      ],
      products: [
        { title: 'Night Rider Smart Helmet', price: 129, badge: 'Moto', subcategory: 'motorcycle-parts', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80', options: { Size: ['M','L','XL'], Color: ['Matte Black','White'] } },
        { title: 'OEM-Grade Cabin Filter', price: 22, badge: 'Parts', subcategory: 'replacement-parts', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af2b06?auto=format&fit=crop&w=900&q=80', options: { Pack: ['1','2'] } },
        { title: 'Leather Seat Organizer', price: 34, badge: 'Interior', subcategory: 'interior-accessories', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af2b06?auto=format&fit=crop&w=900&q=80', options: { Color: ['Black','Tan'] } },
        { title: 'Magnetic Plate Mount Kit', price: 28, badge: 'Exterior', subcategory: 'exterior-accessories', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af2b06?auto=format&fit=crop&w=900&q=80', options: { Finish: ['Matte','Gloss'] } },
        { title: 'Dual Dash Cam', price: 96, badge: 'Electronics', subcategory: 'car-electronics', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af2b06?auto=format&fit=crop&w=900&q=80', options: { Storage: ['32GB','64GB'] } },
        { title: 'Ceramic Shine Wash Kit', price: 38, badge: 'Car Care', subcategory: 'tools-car-care', image: 'https://images.unsplash.com/photo-1542361345-2b2c64fd0c2b?auto=format&fit=crop&w=900&q=80', options: { Size: ['Starter','Pro'] } }
      ]
    }
  ];

  function $(selector, root=document){ return root.querySelector(selector); }
  function create(tag, className){ const el = document.createElement(tag); if(className) el.className = className; return el; }
  function handleize(text){ return (text || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }

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
        if(entry.subcategories.length){
          renderProducts(entry.category, entry.subcategories[0].key);
          updateFilterLabel(entry.category, entry.subcategories[0].name);
        } else {
          renderProducts(entry.category);
          updateFilterLabel(entry.category, 'All');
        }
      });
      btn.addEventListener('focus', ()=>{
        document.querySelectorAll('.category-pill').forEach(el=>el.classList.remove('is-active'));
        pill.classList.add('is-active');
      });

      const submenu = create('div', 'subcategory-menu');
      entry.subcategories.forEach(sub=>{
        const subLink = create('a');
        subLink.href = `/collections/${entry.collectionHandle || entry.handle}?subcategory=${handleize(sub.key || sub.name)}`;
        subLink.innerHTML = `<span>${sub.name}</span><span class="subcategory-note">${sub.note}</span>`;
        subLink.addEventListener('mouseenter', ()=>{
          renderProducts(entry.category, sub.key);
          updateFilterLabel(entry.category, sub.name);
        });
        subLink.addEventListener('click', (evt)=>{
          if(evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey || evt.button !== 0) return;
          evt.preventDefault();
          renderProducts(entry.category, sub.key);
          updateFilterLabel(entry.category, sub.name);
          const grid = $('[data-product-grid]');
          if(grid){ grid.scrollIntoView({behavior: 'smooth', block: 'start'}); }
          if(window.history && window.history.replaceState){
            window.history.replaceState(null, '', subLink.href);
          }
        });
        submenu.appendChild(subLink);
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
      const first = catalog[0];
      const firstSub = first.subcategories[0];
      renderProducts(first.category, firstSub?.key);
      updateFilterLabel(first.category, firstSub?.name || 'All');
    }
  });
})();
