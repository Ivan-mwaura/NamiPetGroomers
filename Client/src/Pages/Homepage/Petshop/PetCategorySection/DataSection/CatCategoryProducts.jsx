const CatCategoryProducts = [
  {
      "name": "Whiskas Kitten Food with Chicken",
      "img": "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxfHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1500 KSh - 6000 KSh",
      "category": "Cat Food & Treats",
      "subcategory": "Kitten Food",
      "rating": 4.7
  },
  {
      "name": "Royal Canin Adult Cat Food",
      "img": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyfHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "5000 KSh",
      "category": "Cat Food & Treats",
      "subcategory": "Dry Cat Food",
      "rating": 4.8
  },
  {
      "name": "Purina Fancy Feast Wet Cat Food",
      "img": "https://images.unsplash.com/photo-1591946614720-90a587da4a36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzfHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1800 KSh - 7200 KSh",
      "category": "Cat Food & Treats",
      "subcategory": "Wet Cat Food",
      "rating": 4.6
  },
  {
      "name": "Meow Mix Original Choice Dry Cat Food",
      "img": "https://images.unsplash.com/photo-1530041539828-114de669390e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "3000 KSh - 9000 KSh",
      "category": "Cat Food & Treats",
      "subcategory": "Dry Cat Food",
      "rating": 4.5
  },
  {
      "name": "Temptations Cat Treats",
      "img": "https://images.unsplash.com/photo-1505628346881-b72b27e84530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "800 KSh",
      "category": "Cat Food & Treats",
      "subcategory": "Cat Treats",
      "rating": 4.7
  },
  {
      "name": "Interactive Feather Cat Toy",
      "img": "https://images.unsplash.com/photo-1581888227599-779811939961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1200 KSh",
      "category": "Cat Toys",
      "subcategory": "N/A",
      "rating": 4.8
  },
  {
      "name": "Catnip Toy for Cats",
      "img": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Cat Toys",
      "subcategory": "N/A",
      "rating": 4.5
  },
  {
      "name": "Arm & Hammer Cat Litter Deodorizer",
      "img": "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "700 KSh",
      "category": "Litter and Accessories",
      "subcategory": "Litter Box Deodorizers",
      "rating": 4.7
  },
  {
      "name": "Tidy Cats Clumping Cat Litter",
      "img": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw5fHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1500 KSh",
      "category": "Litter and Accessories",
      "subcategory": "Cat Litter",
      "rating": 4.8
  },
  {
      "name": "Petmate Basic Hooded Cat Litter Pan",
      "img": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "2000 KSh",
      "category": "Litter and Accessories",
      "subcategory": "Litter Boxes",
      "rating": 4.6
  },
  {
      "name": "Cat Litter Mat",
      "img": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1000 KSh",
      "category": "Litter and Accessories",
      "subcategory": "Litter Mats",
      "rating": 4.5
  },
  {
      "name": "Litter Scoop with Holder",
      "img": "https://images.unsplash.com/photo-1553736026-ff14d158d222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Litter and Accessories",
      "subcategory": "Litter Box Accessories",
      "rating": 4.6
  },
  {
      "name": "Blueberry Pet Cat Collar",
      "img": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxM3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "300 KSh",
      "category": "Cat Collars, Leashes, Tags",
      "subcategory": "Cat Collars",
      "rating": 4.7
  },
  {
      "name": "Rabbitgoo Cat Harness and Leash",
      "img": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "700 KSh",
      "category": "Cat Collars, Leashes, Tags",
      "subcategory": "Cat Harnesses",
      "rating": 4.8
  },
  {
      "name": "Customized Cat ID Tag",
      "img": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Cat Collars, Leashes, Tags",
      "subcategory": "Cat ID Tags",
      "rating": 4.9
  },
  {
      "name": "Catit Senses 2.0 Food Tree",
      "img": "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "3000 KSh",
      "category": "Cat Bowls and Feeders",
      "subcategory": "Cat Feeders",
      "rating": 4.8
  },
  {
      "name": "Stainless Steel Cat Bowl",
      "img": "https://images.unsplash.com/photo-1525983360072-2ebda055ba40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxN3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "800 KSh",
      "category": "Cat Bowls and Feeders",
      "subcategory": "Cat Bowls",
      "rating": 4.7
  },
  {
      "name": "Cat Water Fountain",
      "img": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxOHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "2500 KSh",
      "category": "Cat Bowls and Feeders",
      "subcategory": "Cat Water Fountains & Waterers",
      "rating": 4.6
  },
  {
      "name": "Cat Eye Care Wipes",
      "img": "https://images.unsplash.com/photo-1557495235-340eb888a9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Cat Grooming",
      "subcategory": "Cat Eye Care",
      "rating": 4.7
  },
  {
      "name": "Cat Nail Clippers",
      "img": "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "600 KSh",
      "category": "Cat Grooming",
      "subcategory": "Cat Nail Clippers",
      "rating": 4.8
  },
  {
      "name": "Cat Hair Trimmers",
      "img": "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1500 KSh",
      "category": "Cat Grooming",
      "subcategory": "Trimmers & Grinders",
      "rating": 4.6
  },
  {
      "name": "Cat Hair Clippers",
      "img": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyM3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "2000 KSh",
      "category": "Cat Grooming",
      "subcategory": "Cat Hair Clippers & Trimmers",
      "rating": 4.7
  },
  {
      "name": "Cat Deodorant Spray",
      "img": "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyNHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "600 KSh",
      "category": "Cat Grooming",
      "subcategory": "Deodorants, Perfumes & Sprays",
      "rating": 4.6
  },
  {
      "name": "Cat Brush and Comb Set",
      "img": "https://images.unsplash.com/photo-1587388777044-cf642142d379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyNXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "800 KSh",
      "category": "Cat Grooming",
      "subcategory": "Cat Brushes & Combs",
      "rating": 4.8
  },
  {
      "name": "Cat Shampoo & Conditioner",
      "img": "https://images.unsplash.com/photo-1516222338250-863216ce01ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyNnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1000 KSh",
      "category": "Cat Grooming",
      "subcategory": "Cat Shampoos & Conditioners",
      "rating": 4.7
  },
  {
      "name": "Cat Costume",
      "img": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2Mnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1200 KSh",
      "category": "Clothes & Apparel",
      "subcategory": "Cat Costumes",
      "rating": 4.9
  },
  {
      "name": "Cat T-Shirt",
      "img": "https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzOXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "800 KSh",
      "category": "Clothes & Apparel",
      "subcategory": "Shirts",
      "rating": 4.7
  },
  {
      "name": "Cat Bow Tie",
      "img": "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1OHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Clothes & Apparel",
      "subcategory": "Ties",
      "rating": 4.6
  },
  {
      "name": "Cat Scratching Post",
      "img": "https://images.unsplash.com/photo-1588727990409-308ef5bfa9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxfHxwZXR8ZW58MHx8fHwxNzIwOTUyMDI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "3500 KSh",
      "category": "Trees, Scratchers & Houses",
      "subcategory": "Cat Scratching Posts",
      "rating": 4.8
  },
  {
      "name": "Cat Scratcher Lounge",
      "img": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0OHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "2500 KSh",
      "category": "Trees, Scratchers & Houses",
      "subcategory": "Cat Scratchers",
      "rating": 4.7
  },
  {
      "name": "Cat Tree with Hammock",
      "img": "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzN3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "7000 KSh",
      "category": "Trees, Scratchers & Houses",
      "subcategory": "Cat Trees & Condos",
      "rating": 4.9
  },
  {
      "name": "Pet Gear NO-Zip Happy Trails Stroller",
      "img": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyM3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "7000 KSh",
      "category": "Carriers and Travel",
      "subcategory": "Cat Strollers",
      "rating": 4.8
  },
  {
      "name": "Heavy-Duty Cat Crate",
      "img": "https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0Nnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "5000 KSh",
      "category": "Cat Crates, Pens & Gates",
      "subcategory": "N/A",
      "rating": 4.7
  },
  {
      "name": "PetSafe Cat GPS Tracker",
      "img": "https://images.unsplash.com/photo-1556546346-ad2946663684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyNnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "6000 KSh",
      "category": "Training & Cleaning",
      "subcategory": "Cat GPS Trackers",
      "rating": 4.8
  },
  {
      "name": "Cat Repellent Spray",
      "img": "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4NHx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1000 KSh",
      "category": "Training & Cleaning",
      "subcategory": "Repellents & Training Aids",
      "rating": 4.7
  },
  {
      "name": "Pet Hair Removal Roller",
      "img": "https://images.unsplash.com/photo-1504595403659-9088ce801e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1Nnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "300 KSh",
      "category": "Training & Cleaning",
      "subcategory": "Cat Hair Removal & Lint Rollers",
      "rating": 4.6
  },
  {
      "name": "Feliway Classic Calming Spray",
      "img": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "2500 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Anxiety & Calming Care",
      "rating": 4.8
  },
  {
      "name": "Pet First Aid Kit for Cats",
      "img": "https://images.unsplash.com/photo-1583511666372-62fc211f8377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzOXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "3000 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Cat First Aid & Recovery Supplies",
      "rating": 4.7
  },
  {
      "name": "Cat Multivitamins",
      "img": "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzN3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyOHww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1200 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Cat Vitamins & Supplements",
      "rating": 4.6
  },
  {
      "name": "Cat Ear Drops",
      "img": "https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzOXx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "800 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Ear & Eye Care",
      "rating": 4.8
  },
  {
      "name": "Cat Dental Chews",
      "img": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyM3x8cGV0fGVufDB8fHx8MTcyMDk1MjAyNnww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1000 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Dental Care",
      "rating": 4.7
  },
  {
      "name": "Cat Deworming Tablets",
      "img": "https://images.unsplash.com/photo-1604165094771-7af34f7fd4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2Nnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "500 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Cat Dewormers",
      "rating": 4.6
  },
  {
      "name": "Flea & Tick Prevention for Cats",
      "img": "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3Nnx8cGV0fGVufDB8fHx8MTcyMDk1MjAyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      "price": "1500 KSh",
      "category": "Cat Healthcare Supplies",
      "subcategory": "Flea & Tick",
      "rating": 4.8
  }
];

export default CatCategoryProducts;
