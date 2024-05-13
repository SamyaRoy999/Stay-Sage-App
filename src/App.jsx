

import './App.css'

// https://i.ibb.co/GJVGzq2/point3d-commercial-imaging-ltd-Kqpw00namok-unsplash.jpg
// https://i.ibb.co/rysRtPb/iwood-R5v8-Xtc0ecg-unsplash.jpg
// https://i.ibb.co/xMddcPP/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg
// https://i.ibb.co/q0s8dG9/point3d-commercial-imaging-ltd-Swg04-CP0b-U-unsplash.jpg
// https://i.ibb.co/Tr3rx0Q/dave-photoz-6-MYm-c-UJRB0-unsplash-1.jpg
// https://i.ibb.co/qxzs3kM/mark-champs-Id2-IIl1j-OB0-unsplash.jpg
// https://i.ibb.co/6mRJjbm/linus-mimietz-p3-UWyaujt-Qo-unsplash.jpg
// https://i.ibb.co/Tr3rx0Q/dave-photoz-6-MYm-c-UJRB0-unsplash-1.jpg
// https://i.ibb.co/zJm987x/adam-winger-VGs8z60y-T2c-unsplash.jpg
// https://i.ibb.co/j5qVvKz/olexandr-ignatov-w72a24br-INI-unsplash.jpg
// https://i.ibb.co/TgwzSmB/sasha-kaunas-67-s-Oi7m-VIk-unsplash-1.jpg
// https://i.ibb.co/MDQzsLw/steven-ungermann-a-RT5-UCf2-MYY-unsplash.jpg
// https://i.ibb.co/HnNFqGN/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg
// https://i.ibb.co/7NqjsJr/marvin-meyer-f-Bdlytm6-Hp8-unsplash.jpg
// https://i.ibb.co/fMz9vgb/point3d-commercial-imaging-ltd-DLz-YCk-Mkj-BQ-unsplash.jpg
// https://i.ibb.co/7gF3ndR/chastity-cortijo-R-w5-Q-4-Mqm0-unsplash.jpg
// https://i.ibb.co/L9vL8Xb/frames-for-your-heart-Fqqi-Av-Jejto-unsplash.jpg
// https://i.ibb.co/r4wjHVR/albert-vincent-wu-fupf3-x-AUqw-unsplash.jpg
// https://i.ibb.co/8DWQsD8/point3d-commercial-imaging-ltd-k-CSlhh-C-Ch8-unsplash.jpg
// https://i.ibb.co/c1PS0xv/point3d-commercial-imaging-ltd-GUno-Fet-WJM-unsplash.jpg

function App() {
  // const data = [
  //   {
  //     "name": "Standard Single Room",
  //     "description": "A cozy single room with basic amenities.",
  //     "price": 50,
  //     "size": "200 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/GJVGzq2/point3d-commercial-imaging-ltd-Kqpw00namok-unsplash.jpg", "image2.jpg"],
  //     "special_offers": "10% off on weekdays",
  //     "total_reviews": 15
  //   },
  //   {
  //     "name": "Deluxe Double Room",
  //     "description": "A spacious double room with luxurious amenities.",
  //     "price": 100,
  //     "size": "350 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/rysRtPb/iwood-R5v8-Xtc0ecg-unsplash.jpg", "image4.jpg"],
  //     "special_offers": "Free breakfast included",
  //     "total_reviews": 20
  //   },
  //   {
  //     "name": "Executive Suite",
  //     "description": "An elegant suite with a separate living area and stunning views.",
  //     "price": 200,
  //     "size": "500 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/xMddcPP/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg", "image6.jpg"],
  //     "special_offers": "Complimentary wine bottle",
  //     "total_reviews": 18
  //   },
  //   {
  //     "name": "Family Room",
  //     "description": "Spacious room suitable for families with children.",
  //     "price": 150,
  //     "size": "400 sqft",
  //     "availability": true,
  //     "images": ["ihttps://i.ibb.co/q0s8dG9/point3d-commercial-imaging-ltd-Swg04-CP0b-U-unsplash.jpg", "image8.jpg"],
  //     "special_offers": "Kids stay free",
  //     "total_reviews": 25
  //   },
  //   {
  //     "name": "Penthouse Suite",
  //     "description": "Luxurious penthouse with panoramic views and exclusive amenities.",
  //     "price": 500,
  //     "size": "1000 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/Tr3rx0Q/dave-photoz-6-MYm-c-UJRB0-unsplash-1.jpg", "image10.jpg"],
  //     "special_offers": "Private butler service",
  //     "total_reviews": 30
  //   },
  //   {
  //     "name": "Ocean View Room",
  //     "description": "Room with a balcony overlooking the ocean.",
  //     "price": 120,
  //     "size": "300 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/qxzs3kM/mark-champs-Id2-IIl1j-OB0-unsplash.jpg", "image12.jpg"],
  //     "special_offers": "Free surf lesson",
  //     "total_reviews": 22
  //   },
  //   {
  //     "name": "Honeymoon Suite",
  //     "description": "Romantic suite designed for couples on their honeymoon.",
  //     "price": 250,
  //     "size": "450 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/6mRJjbm/linus-mimietz-p3-UWyaujt-Qo-unsplash.jpg", "image14.jpg"],
  //     "special_offers": "Candlelit dinner",
  //     "total_reviews": 35
  //   },
  //   {
  //     "name": "Vintage Room",
  //     "description": "Room decorated with vintage furniture and decor.",
  //     "price": 80,
  //     "size": "250 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/Tr3rx0Q/dave-photoz-6-MYm-c-UJRB0-unsplash-1.jpg", "image16.jpg"],
  //     "special_offers": "Free wine tasting",
  //     "total_reviews": 18
  //   },
  //   {
  //     "name": "Business Suite",
  //     "description": "Suite equipped with a work desk and business facilities.",
  //     "price": 180,
  //     "size": "400 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/zJm987x/adam-winger-VGs8z60y-T2c-unsplash.jpg", "image18.jpg"],
  //     "special_offers": "Free airport transfer",
  //     "total_reviews": 28
  //   },
  //   {
  //     "name": "Mountain View Room",
  //     "description": "Room with a balcony offering stunning mountain views.",
  //     "price": 130,
  //     "size": "300 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/j5qVvKz/olexandr-ignatov-w72a24br-INI-unsplash.jpg", "image20.jpg"],
  //     "special_offers": "Guided mountain hike",
  //     "total_reviews": 20
  //   },
  //   {
  //     "name": "Garden View Room",
  //     "description": "Room with a view of the lush garden.",
  //     "price": 110,
  //     "size": "280 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/TgwzSmB/sasha-kaunas-67-s-Oi7m-VIk-unsplash-1.jpg", "image22.jpg"],
  //     "special_offers": "Free yoga session",
  //     "total_reviews": 17
  //   },
  //   {
  //     "name": "Economy Room",
  //     "description": "Affordable room option with essential amenities.",
  //     "price": 70,
  //     "size": "200 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/MDQzsLw/steven-ungermann-a-RT5-UCf2-MYY-unsplash.jpg", "image24.jpg"],
  //     "special_offers": "Discounted weekly rates",
  //     "total_reviews": 15
  //   },
  //   {
  //     "name": "Spa Suite",
  //     "description": "Suite with an in-room spa and relaxation area.",
  //     "price": 300,
  //     "size": "600 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/HnNFqGN/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg", "image26.jpg"],
  //     "special_offers": "Complimentary massage",
  //     "total_reviews": 32
  //   },
  //   {
  //     "name": "Pet-friendly Room",
  //     "description": "Room suitable for guests traveling with pets.",
  //     "price": 90,
  //     "size": "250 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/7NqjsJr/marvin-meyer-f-Bdlytm6-Hp8-unsplash.jpg", "image28.jpg"],
  //     "special_offers": "Pet welcome kit",
  //     "total_reviews": 23
  //   },
  //   {
  //     "name": "Luxury Villa",
  //     "description": "Exclusive villa with private pool and personalized service.",
  //     "price": 1000,
  //     "size": "1500 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/fMz9vgb/point3d-commercial-imaging-ltd-DLz-YCk-Mkj-BQ-unsplash.jpg", "image30.jpg"],
  //     "special_offers": "24/7 personal butler",
  //     "total_reviews": 40
  //   },
  //   {
  //     "name": "Ski Resort Room",
  //     "description": "Room located in a ski resort with direct access to slopes.",
  //     "price": 180,
  //     "size": "350 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/7gF3ndR/chastity-cortijo-R-w5-Q-4-Mqm0-unsplash.jpg", "image32.jpg"],
  //     "special_offers": "Free ski equipment rental",
  //     "total_reviews": 27
  //   },
  //   {
  //     "name": "Beachfront Bungalow",
  //     "description": "Bungalow located right on the beach with private beach access.",
  //     "price": 400,
  //     "size": "800 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/L9vL8Xb/frames-for-your-heart-Fqqi-Av-Jejto-unsplash.jpg", "image34.jpg"],
  //     "special_offers": "Complimentary beach picnic",
  //     "total_reviews": 38
  //   },
  //   {
  //     "name": "City View Room",
  //     "description": "Room with panoramic views of the city skyline.",
  //     "price": 140,
  //     "size": "300 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/r4wjHVR/albert-vincent-wu-fupf3-x-AUqw-unsplash.jpg", "image36.jpg"],
  //     "special_offers": "City tour package included",
  //     "total_reviews": 24
  //   },
  //   {
  //     "name": "Accessible Room",
  //     "description": "Room designed for guests with accessibility needs.",
  //     "price": 120,
  //     "size": "280 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/8DWQsD8/point3d-commercial-imaging-ltd-k-CSlhh-C-Ch8-unsplash.jpg", "image38.jpg"],
  //     "special_offers": "Free shuttle service",
  //     "total_reviews": 20
  //   },
  //   {
  //     "name": "Family Suite",
  //     "description": "Spacious suite ideal for families with separate living and sleeping areas.",
  //     "price": 280,
  //     "size": "600 sqft",
  //     "availability": true,
  //     "images": ["https://i.ibb.co/c1PS0xv/point3d-commercial-imaging-ltd-GUno-Fet-WJM-unsplash.jpg", "image40.jpg"],
  //     "special_offers": "Kids eat free",
  //     "total_reviews": 33
  //   }
  // ]


  return (
    <>

     





    </>
  )
}

export default App
