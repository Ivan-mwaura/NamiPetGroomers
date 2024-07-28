const categoryProducts = [
  {
    "name": "Reflex Puppy Food with Lamb & Rice",
    "img": "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxfHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "3100 KSh - 11025 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Puppy Food",
    "rating": 4.5
  },
  {
    "name": "Josera Large Breed Dog Food - Salmon",
    "img": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyfHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "12161 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.7
  },
  {
    "name": "InsectDog Sensitive Adult Dog Food",
    "img": "https://images.unsplash.com/photo-1591946614720-90a587da4a36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzfHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1405 KSh - 11913 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.6
  },
  {
    "name": "Bonnie Lamb and Rice Adult Dog Food",
    "img": "https://images.unsplash.com/photo-1530041539828-114de669390e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1695 KSh - 6570 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.0
  },
  {
    "name": "Spectrum Low Grain Adult Mini & Small Breed Dog Food",
    "img": "https://images.unsplash.com/photo-1505628346881-b72b27e84530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "N/A",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.3
  },
  {
    "name": "Josera JosiDog Mini Small Breed Dog Food",
    "img": "https://images.unsplash.com/photo-1581888227599-779811939961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "N/A",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.2
  },
  {
    "name": "Josera Kids Dog Food For Growing Dogs",
    "img": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1117 KSh - 12594 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.4
  },
  {
    "name": "Reflex Puppy Food with Beef",
    "img": "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "N/A",
    "category": "Dog Food & Treats",
    "subcategory": "Puppy Food",
    "rating": 4.5
  },
  {
    "name": "JUNIOR BITES Puppy Treats",
    "img": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw5fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "750 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dog Treats",
    "rating": 4.0
  },
  {
    "name": "Spectrum Sensitive27 Small Breed Adult Dog Food",
    "img": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMHx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "4350 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.5
  },
  {
    "name": "Spectrum Low Grain Mini & Small Breed Dog Food",
    "img": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "4450 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.4
  },
  {
    "name": "BEWI DOG® Meat Selection Wet Canned Dog Food",
    "img": "https://images.unsplash.com/photo-1553736026-ff14d158d222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxMnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2438 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Wet Dog Food",
    "rating": 4.3
  },
  {
    "name": "Josera JosiDog Economy Dog Food",
    "img": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxM3x8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "6832 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.5
  },
  {
    "name": "Josera Josidog Junior Puppy Food",
    "img": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNHx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "10552 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Puppy Food",
    "rating": 4.6
  },
  {
    "name": "Josera JosiDog Active Dog Food",
    "img": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "9745 KSh",
    "category": "Dog Food & Treats",
    "subcategory": "Dry Dog Food",
    "rating": 4.2
  },
  {
    "name": "Dog Collar with ID Tag",
    "img": "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "500 KSh",
    "category": "Collars, Leashes & Harnesses",
    "subcategory": "Dog Collars",
    "rating": 4.8
  },
  {
    "name": "Reflective Dog Leash",
    "img": "https://images.unsplash.com/photo-1525983360072-2ebda055ba40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxN3x8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "700 KSh",
    "category": "Collars, Leashes & Harnesses",
    "subcategory": "Dog Leashes",
    "rating": 4.7
  },
  {
    "name": "Adjustable Dog Harness",
    "img": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxOHx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Collars, Leashes & Harnesses",
    "subcategory": "Dog Harnesses",
    "rating": 4.6
  },
  {
    "name": "Personalized Dog ID Tag",
    "img": "https://images.unsplash.com/photo-1557495235-340eb888a9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxOXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "300 KSh",
    "category": "Collars, Leashes & Harnesses",
    "subcategory": "Dog ID Tags",
    "rating": 4.9
  },
  {
    "name": "Mesh Dog Muzzle",
    "img": "https://images.unsplash.com/photo-1560743173-567a3b5658b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMHx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Collars, Leashes & Harnesses",
    "subcategory": "Dog Muzzles",
    "rating": 4.3
  },
  {
    "name": "Rubber Dog Fetch Toy",
    "img": "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "500 KSh",
    "category": "Dog Toys",
    "subcategory": "Dog Fetch Toys",
    "rating": 4.7
  },
  {
    "name": "Interactive Treat Dispensing Toy",
    "img": "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyMnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1500 KSh",
    "category": "Dog Toys",
    "subcategory": "Dog Interactive Toys",
    "rating": 4.8
  },
  {
    "name": "Plush Dog Squeaky Toy",
    "img": "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwyM3x8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "700 KSh",
    "category": "Dog Toys",
    "subcategory": "Dog Plush Toys",
    "rating": 4.5
  },
  {
    "name": "Rope and Tug Toy for Dogs",
    "img": "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3fHxwZXR8ZW58MHx8fHwxNzIwNjkyOTA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "600 KSh",
    "category": "Dog Toys",
    "subcategory": "Dog Rope & Tug Toys",
    "rating": 4.6
  },
  {
    "name": "Durable Chew Toy for Aggressive Chewers",
    "img": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1300 KSh",
    "category": "Dog Toys",
    "subcategory": "Dog Chew Toys",
    "rating": 4.4
  },
  {
    "name": "Automatic Dog Feeder",
    "img": "https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1MXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "5000 KSh",
    "category": "Bowls & Feeders",
    "subcategory": "Dog Feeders",
    "rating": 4.8
  },
  {
    "name": "Stainless Steel Dog Bowl",
    "img": "https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1Mnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Bowls & Feeders",
    "subcategory": "Dog Bowls",
    "rating": 4.7
  },
  {
    "name": "Portable Water Bottle for Dogs",
    "img": "https://images.unsplash.com/photo-1547955922-85912e223015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Bowls & Feeders",
    "subcategory": "Bottles & Waterers",
    "rating": 4.6
  },
  {
    "name": "Foldable Dog Stroller",
    "img": "https://images.unsplash.com/photo-1591856419156-3979c9edd30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw1NHx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "7000 KSh",
    "category": "Carriers & Travel Accessories",
    "subcategory": "Dog Strollers",
    "rating": 4.9
  },
  {
    "name": "Soft-Sided Dog Carrier Bag",
    "img": "https://images.unsplash.com/photo-1521247560470-d2cbfe2f7b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "4500 KSh",
    "category": "Carriers & Travel Accessories",
    "subcategory": "Dog Carriers, Bags & Crates",
    "rating": 4.8
  },
  {
    "name": "Car Seat Cover for Dogs",
    "img": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2500 KSh",
    "category": "Carriers & Travel Accessories",
    "subcategory": "Car Travel Accessories",
    "rating": 4.7
  },
  {
    "name": "Dog Life Jacket",
    "img": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "3500 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Dog Life Jackets & Swim Suits",
    "rating": 4.8
  },
  {
    "name": "Waterproof Dog Coat",
    "img": "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzN3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "3000 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Dog Coats & Jackets",
    "rating": 4.7
  },
  {
    "name": "Dog T-Shirt",
    "img": "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzOHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1500 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Shirts & Tops",
    "rating": 4.6
  },
  {
    "name": "Dog Dress with Bow",
    "img": "https://images.unsplash.com/photo-1583511666372-62fc211f8377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzOXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2000 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Dog Dresses",
    "rating": 4.4
  },
  {
    "name": "Dog Boots for Winter",
    "img": "https://images.unsplash.com/photo-1544568100-847a948585b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0MHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1800 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Dog Boots & Shoes",
    "rating": 4.8
  },
  {
    "name": "Dog Bow Tie Collar",
    "img": "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0MXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "600 KSh",
    "category": "Clothing and Accessories",
    "subcategory": "Ties",
    "rating": 4.7
  },
  {
    "name": "Adjustable Dog Gate",
    "img": "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0Mnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "5000 KSh",
    "category": "Kennels, Gates, Crates",
    "subcategory": "Dog Gates",
    "rating": 4.6
  },
  {
    "name": "Foldable Dog Pen",
    "img": "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw0M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "6000 KSh",
    "category": "Kennels, Gates, Crates",
    "subcategory": "Dog Pens",
    "rating": 4.9
  },
  {
    "name": "Heavy-Duty Dog Crate",
    "img": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "8000 KSh",
    "category": "Kennels, Gates, Crates",
    "subcategory": "Dog Crates & Kennels",
    "rating": 4.8
  },
  {
    "name": "Orthopedic Dog Bed",
    "img": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwxNXx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "4500 KSh",
    "category": "Beds & Furniture",
    "subcategory": "Dog Beds",
    "rating": 4.7
  },
  {
    "name": "Dog Grooming Kit",
    "img": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHwzNnx8cGV0fGVufDB8fHx8MTcyMDY5MjkwOXww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "3500 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Hair Clippers & Grooming Kits",
    "rating": 4.8
  },
  {
    "name": "Dog Tear Stain Wipes",
    "img": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2MHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "700 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Dog Eye Wipes and Tear Stain Wipes",
    "rating": 4.5
  },
  {
    "name": "Dog Ear Cleaning Solution",
    "img": "https://images.unsplash.com/photo-1516222338250-863216ce01ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2MXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Ear Care & Cleaning",
    "rating": 4.6
  },
  {
    "name": "Dog Brush and Comb Set",
    "img": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2Mnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Dog Brushes & Combs",
    "rating": 4.4
  },
  {
    "name": "Natural Dog Shampoo",
    "img": "https://images.unsplash.com/photo-1506499422601-ecc792cf898e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1000 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Dog Shampoos & Conditioners",
    "rating": 4.8
  },
  {
    "name": "Dog Deodorizing Spray",
    "img": "https://images.unsplash.com/photo-1604165094771-7af34f7fd4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2NHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "600 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Perfumes, Colognes & Deodorizing Sprays",
    "rating": 4.7
  },
  {
    "name": "Dog Nail Clipper",
    "img": "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2NXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "500 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Dog Paw & Nail Care",
    "rating": 4.6
  },
  {
    "name": "Pet Hair Remover Roller",
    "img": "https://images.unsplash.com/photo-1601758003453-6c950f17727d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2Nnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "300 KSh",
    "category": "Dog Grooming & Cleaning Supplies",
    "subcategory": "Dog Hair Removal & Lint Rollers",
    "rating": 4.9
  },
  {
    "name": "Biodegradable Poop Bags",
    "img": "https://images.unsplash.com/photo-1549297161-14f79605a74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2N3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "500 KSh",
    "category": "Dog Potty & Waste",
    "subcategory": "Poop Bags & Scoopers",
    "rating": 4.8
  },
  {
    "name": "Dog Pee Pads",
    "img": "https://images.unsplash.com/photo-1631307495039-3f9e947c2070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2OHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Dog Potty & Waste",
    "subcategory": "Dog Potty Pee Pads & Diapers",
    "rating": 4.7
  },
  {
    "name": "Potty Training Spray",
    "img": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw2OXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Dog Potty & Waste",
    "subcategory": "Potty Training",
    "rating": 4.6
  },
  {
    "name": "Dog GPS Tracker",
    "img": "https://images.unsplash.com/photo-1542578951838-47d40e8b4f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3MHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "5000 KSh",
    "category": "Dog Training & Behaviour",
    "subcategory": "Dog GPS Trackers",
    "rating": 4.8
  },
  {
    "name": "Dog Repellent Spray",
    "img": "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3MXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1000 KSh",
    "category": "Dog Training & Behaviour",
    "subcategory": "Dog Repellents & Deterrents",
    "rating": 4.7
  },
  {
    "name": "Dog Training Clicker",
    "img": "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3Mnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "300 KSh",
    "category": "Dog Training & Behaviour",
    "subcategory": "Professional Dog Training Supplies",
    "rating": 4.6
  },
  {
    "name": "Anti-Bark Collar",
    "img": "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2000 KSh",
    "category": "Dog Training & Behaviour",
    "subcategory": "Bark Control & Remote Training",
    "rating": 4.4
  },
  {
    "name": "Dog Potty Training Aid",
    "img": "https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3NHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Dog Training & Behaviour",
    "subcategory": "Dog Potty Training Aids",
    "rating": 4.8
  },
  {
    "name": "Dog Skin Care Lotion",
    "img": "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3NXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Skin & Coat Care",
    "rating": 4.7
  },
  {
    "name": "Dog Joint Supplement",
    "img": "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3Nnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2000 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Bone and Joint Care",
    "rating": 4.6
  },
  {
    "name": "Dog Ear Drops",
    "img": "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3N3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Ear & Eye Care",
    "rating": 4.8
  },
  {
    "name": "Dog Calming Chews",
    "img": "https://images.unsplash.com/photo-1575679448344-1f6c0799c0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3OHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1500 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Anxiety & Calming",
    "rating": 4.7
  },
  {
    "name": "Dog First Aid Kit",
    "img": "https://images.unsplash.com/photo-1530991671072-ac4f81c2c3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw3OXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "3000 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog First Aid & Recovery Supplies",
    "rating": 4.6
  },
  {
    "name": "Dog Deworming Tablets",
    "img": "https://images.unsplash.com/photo-1534243510675-3c687393caff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4MHx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "500 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Dewormers",
    "rating": 4.8
  },
  {
    "name": "Dog Multivitamins",
    "img": "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4MXx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "1200 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Vitamins & Supplements",
    "rating": 4.7
  },
  {
    "name": "Dog Dental Chews",
    "img": "https://images.unsplash.com/photo-1561312176-5aedf7172115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4Mnx8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "800 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Dental Care",
    "rating": 4.6
  },
  {
    "name": "Dog Flea Collar",
    "img": "https://images.unsplash.com/photo-1517451330947-7809dead78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjU0OTd8MHwxfHNlYXJjaHw4M3x8cGV0fGVufDB8fHx8MTcyMDY5MjkxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    "price": "2000 KSh",
    "category": "Dog Healthcare Supplies",
    "subcategory": "Dog Flea and Tick",
    "rating": 4.8
  }
];

module.exports = categoryProducts;
