const categories = {
  Dog: [
    {
      name: 'Dog Food & Treats',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMgyRoX0M9Se04eSDuvu0rvCy-czVTWootA&s',
      subcategory: [
        'Dog Treats',
        'Puppy Food',
        'Dry Dog Food',
        'Wet Dog Food'
      ]
    },
    {
      name: 'Collars, Leashes & Harnesses',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8OkXOvLJV_eKyZsvxRJq5m1aD0pp79QMLA&s',
      subcategory: [
        'Dog Collars',
        'Dog ID Tags',
        'Dog Harnesses',
        'Dog Leashes',
        'Dog Muzzles'
      ]
    },
    {
      name: 'Dog Toys',
      img: 'https://m.media-amazon.com/images/I/81AT+nV0BpL._AC_SL1500_.jpg',
      subcategory: [
        'Dog Fetch Toys',
        'Dog Interactive Toys',
        'Dog Plush Toys',
        'Dog Rope & Tug Toys',
        'Dog Chew Toys'
      ]
    },
    {
      name: 'Bowls & Feeders',
      img: 'https://m.media-amazon.com/images/I/71EeQMpFkHL._AC_UF1000,1000_QL80_.jpg',
      subcategory: [
        'Dog Feeders',
        'Dog Bowls',
        'Bottles & Waterers'
      ]
    },
    {
      name: 'Carriers & Travel Accessories',
      img: 'https://m.media-amazon.com/images/I/81WCoVqCCWL.jpg',
      subcategory: [
        'Dog Strollers',
        'Dog Carriers, Bags & Crates',
        'Car Travel Accessories'
      ]
    },
    {
      name: 'Clothing and Accessories',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9-3e54TQUNwBALgFiHlpJH7qi-pHE-uogg&s',
      subcategory: [
        'Dog Life Jackets & Swim Suits',
        'Dog Coats & Jackets',
        'Dog Dresses',
        'Shirts & Tops',
        'Dog Boots & Shoes',
        'Ties'
      ]
    },
    {
      name: 'Kennels, Gates, Crates',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOfTIDZLW1l8TmFKIYiRooyI8ELVnOhxbnQ&s',
      subcategory: [
        'Dog Gates',
        'Dog Pens',
        'Dog Crates & Kennels'
      ]
    },
    {
      name: 'Beds & Furniture',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVXOvZhf4XRTJe_ybKkc90JXbjpNj84T3ww&s',
      subcategory: [
        'Dog Beds'
      ]
    },
    {
      name: 'Dog Grooming & Cleaning Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW600Twdpw9EIdywWjZlbQAbVnYOKpLZ7XZg&s',
      subcategory: [
        'Hair Clippers & Grooming Kits',
        'Dog Eye Wipes and Tear Stain Wipes',
        'Ear Care & Cleaning',
        'Dog Brushes & Combs',
        'Dog Shampoos & Conditioners',
        'Perfumes, Colognes & Deodorizing Sprays',
        'Dog Paw & Nail Care',
        'Dog Hair Removal & Lint Rollers'
      ]
    },
    {
      name: 'Dog Potty & Waste',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXgehb1J_6KO6lVjreMXjV5eqlgpEMW4Aew&s',
      subcategory: [
        'Poop Bags & Scoopers',
        'Dog Potty Pee Pads & Diapers',
        'Potty Training'
      ]
    },
    {
      name: 'Dog Training & Behaviour',
      img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6abdcc802019b76acc80b81f7efe615e.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
      subcategory: [
        'Dog GPS Trackers',
        'Dog Repellents & Deterrents',
        'Professional Dog Training Supplies',
        'Bark Control & Remote Training',
        'Dog Potty Training Aids'
      ]
    },
    {
      name: 'Dog Healthcare Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TRumjFuIbxyG1vUVmhPRlXH7iTD4CzaSbA&s',
      subcategory: [
        'Dog Skin & Coat Care',
        'Dog Bone and Joint Care',
        'Ear & Eye Care',
        'Anxiety & Calming',
        'Dog First Aid & Recovery Supplies',
        'Dog Dewormers',
        'Dog Vitamins & Supplements',
        'Dog Dental Care',
        'Dog Flea and Tick'
      ]
    }
  ],
  Cat: [
    {
      name: 'Cat Food & Treats',
      img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
      subcategory: [
        'Dry Cat Food',
        'Wet Cat Food',
        'Kitten Food',
        'Cat Treats'
      ]
    },
    {
      name: 'Cat Toys',
      img: 'https://images.unsplash.com/photo-1583337130417-c6166cf4d5da',
      subcategory: ['N/A']
    },
    {
      name: 'Litter and Accessories',
      img: 'https://images.unsplash.com/photo-1588727990409-308ef5bfa9a3',
      subcategory: [
        'Litter Box Deodorizers',
        'Cat Litter',
        'Litter Boxes',
        'Litter Mats',
        'Litter Box Accessories'
      ]
    },
    {
      name: 'Cat Collars, Leashes, Tags',
      img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      subcategory: [
        'Cat Collars',
        'Cat Harnesses',
        'Cat ID Tags'
      ]
    },
    {
      name: 'Cat Bowls and Feeders',
      img: 'https://images.unsplash.com/photo-1592194996308-7cc2180b2e19',
      subcategory: [
        'Cat Feeders',
        'Cat Bowls',
        'Cat Water Fountains & Waterers'
      ]
    },
    {
      name: 'Cat Grooming',
      img: 'https://images.unsplash.com/photo-1585799297287-1e27a2b6cd31',
      subcategory: [
        'Cat Eye Care',
        'Cat Nail Clippers',
        'Trimmers & Grinders',
        'Cat Hair Clippers & Trimmers',
        'Deodorants, Perfumes & Sprays',
        'Cat Brushes & Combs',
        'Cat Shampoos & Conditioners'
      ]
    },
    {
      name: 'Clothes & Apparel',
      img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
      subcategory: [
        'Cat Costumes',
        'Shirts',
        'Ties'
      ]
    },
    {
      name: 'Trees, Scratchers & Houses',
      img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
      subcategory: [
        'Cat Scratching Posts',
        'Cat Scratchers',
        'Cat Trees & Condos'
      ]
    },
    {
      name: 'Carriers and Travel',
      img: 'https://images.unsplash.com/photo-1602288637785-b5b502b2f92f',
      subcategory: [
        'Cat Strollers'
      ]
    },
    {
      name: 'Cat Crates, Pens & Gates',
      img: 'https://images.unsplash.com/photo-1588727990409-308ef5bfa9a3',
      subcategory: ['N/A']
    },
    {
      name: 'Training & Cleaning',
      img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      subcategory: [
        'Cat GPS Trackers',
        'Repellents & Training Aids',
        'Cat Hair Removal & Lint Rollers'
      ]
    },
    {
      name: 'Cat Healthcare Supplies',
      img: 'https://images.unsplash.com/photo-1588727990409-308ef5bfa9a3',
      subcategory: [
        'Anxiety & Calming Care',
        'Cat First Aid & Recovery Supplies',
        'Cat Vitamins & Supplements',
        'Ear & Eye Care',
        'Dental Care',
        'Cat Dewormers',
        'Flea & Tick'
      ]
    }
  ],
  FishAndAquaticPets: [
    {
      name: 'Fish Feeders',
      img: 'https://example.com/fish_feeders.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Fish Tank Pumps & Filters',
      img: 'https://example.com/fish_tank_pumps.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Fish Tanks & Aquariums',
      img: 'https://example.com/fish_tanks.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Lighting & Heating',
      img: 'https://example.com/lighting_heating.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Aquarium Maintenance & Water Care',
      img: 'https://example.com/maintenance_water_care.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Aquarium Decorations',
      img: 'https://example.com/aquarium_decorations.jpg',
      subcategory: ['N/A']
    }
  ],
  Birds: [
    {
      name: 'Bird Food & Treats',
      img: 'https://example.com/bird_food.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Bird Cages & Stands',
      img: 'https://example.com/bird_cages.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Bird Feeders & Waterers',
      img: 'https://example.com/bird_feeders.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Bird Perches & Toys',
      img: 'https://example.com/bird_perches.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Bird Pharmacy & Healthcare',
      img: 'https://example.com/bird_pharmacy.jpg',
      subcategory: ['N/A']
    }
  ],
  Horse: [
    {
      name: 'Giftables',
      img: 'https://example.com/giftables.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Horse Grooming Supplies',
      img: 'https://example.com/horse_grooming.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Horse Tack & Saddlery',
      img: 'https://example.com/horse_tack.jpg',
      subcategory: ['N/A']
    }
  ],
  SmallAnimals: [
    {
      name: 'Guinea-pig-shop',
      img: 'https://example.com/guinea_pig_shop.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Hamster Shop',
      img: 'https://example.com/hamster_shop.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Rabbit-shop',
      img: 'https://example.com/rabbit_shop.jpg',
      subcategory: ['N/A']
    }
  ],
  PetParentsShop: [
    {
      name: 'Signs, Stickers & Decals',
      img: 'https://example.com/signs_stickers_decals.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Birthday Shop',
      img: 'https://example.com/birthday_shop.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Gifts for Pet Parents',
      img: 'https://example.com/gifts_for_pet_parents.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Pet Memorials & Keepsakes',
      img: 'https://example.com/pet_memorials.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Clothing & Accessories for Pet Parents',
      img: 'https://example.com/clothing_accessories.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Fur Removers and Cleaners',
      img: 'https://example.com/fur_removers.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Jewelry',
      img: 'https://example.com/jewelry.jpg',
      subcategory: ['N/A']
    }
  ]
};

export default categories;
