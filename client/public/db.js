import NewSmyrnaBeach from "./location/NewSmyrnaBeach.png";

const cloudinaryBaseUrl = "https://res.cloudinary.com/mhshuvoit/image/upload";

// condo 1
const condo1Images = [];
(async function importImages() {
  for (let i = 1; i <= 71; i++) {
    const imageModule = `${cloudinaryBaseUrl}/v1689816568/traveling/condo1/item-${i}.jpg`;
    condo1Images.push(imageModule);
  }
})();

// condo 2
const condo2Images = [];
(async function importImages() {
  for (let i = 1; i <= 69; i++) {
    const imageModule = `${cloudinaryBaseUrl}/v1689817202/traveling/condo2/item-${i}.jpg`;
    condo2Images.push(imageModule);
  }
})();

// condo 3
const condo3Images = [];
(async function importImages() {
  for (let i = 1; i <= 113; i++) {
    const imageModule = `${cloudinaryBaseUrl}/v1689817344/traveling/condo3/item-${i}.jpg`;
    condo3Images.push(imageModule);
  }
})();

const items = [
  {
    id: 1,
    images: condo1Images,
    title: "☀Beach Paradise | Steps to the Ocean | Pool | Pets Book NOW!",
    description: `Ocean Club South is an ideal place for a getaway to the beach. Located on the no-drive side of New Smyrna Beach, you can enjoy all the amenities of home with just a two-minute walk from your condo to the ocean. The two-bedroom two bath condo also features a fully equipped kitchen, coffee maker, full-size washer and dryer, and is pet friendly. With the oceanfront pool offering a clear view, you can easily spend time relaxing in the sun. <br/> <br/>
    The area provides plenty of activities to enjoy including fishing, surfing, biking along Flagler Avenue and more. Whether you are looking for a weekend rental or an extended stay during the winter months, you can find it all here at New Smyrna Beach. Book your stay today and experience the beauty of this coastal town. <br/><br/>
    Discover all that Ocean Club South has to offer and create memories that will last a lifetime! Enjoy the perfect balance of relaxation, adventure, and fun with a trip to this wonderful destination. Spend your days soaking up the sun on one of the most beautiful beaches in Florida while exploring all that the area has to offer. Treat yourself and your family to an unforgettable vacation at Ocean Club South today!`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 4,
    },
    price: 225,
    minNight: 3,
    itemLocation: {
      placeName: "4849 Saxon Drive, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 2,
        icon: "fa-solid fa-tv",
        name: "TV in every bedroom",
      },
      {
        id: 3,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 5,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 6,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Tennis court shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 9,
        icon: "fa-solid fa-soap",
        name: "Dryer",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 2,
        icon: "fa-brands fa-accessible-icon",
        name: "Accessible 24/7",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Ocean Club South Rules</p>
    <br/>
      <p>House Rules for Ocean Club South
      Welcome to New Smyrna Beach and Ocean Club South Condominiums! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules: <br/>
      Check in time is at 3PM <br/>
      Check out time is at 9:30AM <br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned. <br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Pet Rules to be followed:<br/>
      * Pets are not permitted in the pool area. (Per the County Ordinance,       there is a fine for pets on the beach.)<br/>
      * Pets and Service Animals must be on a leash when walking around the       complex. Please pick up after your pet and put it in the trash bin      along your walk.<br/>
      * While authorized dogs are permitted, barking dogs are not allowed to      go unattended in your unit. If there is a complaint that your dog is      creating a nuisance, you will be required to remove the dog from this     facility.<br/>
      * Service animals are allowed in the pool area but are not allowed in       the pool. For the safety and enjoyment of everyone in our community, we       appreciate you following a few simple rules:</p>
      <br/>
      <p>Other Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.<br/>
      • We hope you have an awesome time in our condo and look forward to hosting you in your home away from home</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 2,
    images: condo2Images,
    title: "☀Beach Paradise | Steps to the Ocean | 2nd floor Point East",
    description: `At Point East Condo, you can experience all of the best that Florida has to offer! With its two bedrooms and two baths, our Oceanview condo is perfect for a family vacation or romantic getaway. Enjoy lounging by the heated pool and kiddy pool, playing shuffleboard on the oceanfront, or heading over to the nearby park for some basketball, racquetball, or a fun time on the swings and playground. There's also plenty of delicious restaurants in the area, as well as fishing, surfing, pool deck relaxing with a book, and biking on the beach that you can take advantage of during your stay. Plus, with our fully stocked kitchen, you can make yourself right at home! So come experience all Point East Condo has to offer! Book your 4-night stay with us today. Please note that we are not pet friendly due to condo rules we do accept Service dog with documentation. So come experience all that Florida has to offer and book your unforgettable vacation at Point East Condo today! Let the adventure begin!<br/><br/>
    If you're looking for some nightlife on your vacation, then Flagler Avenue in New Smyrna Beach is the perfect destination! With its lively atmosphere and great selection of restaurants, bars, and shops, it's a must-see spot during your stay with us. Enjoy an evening of strolling around town or take in some live entertainment at one of the local venues. There's something for everyone on Flagler Avenue! So don't forget to add it to your list of things to do when you stay with us at Point East Condo. You won't regret it! Book your 4-night stay at our Oceanview condo today and start planning an unforgettable getaway in Florida! Let the adventure begin!`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 4,
    },
    price: 250,
    minNight: 4,
    itemLocation: {
      placeName: "4849 Saxon Drive, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [28.9537076, -81.0240806],
    },
    amenities: [
      {
        id: 53,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 76,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 3,
        icon: "fa-solid fa-person-swimming",
        name: "Heated kiddy pool",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Washer and Dryer on Premise",
      },
      {
        id: 8,
        icon: "fa-solid fa-square",
        name: "Microwave",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 3,
        icon: "fa-solid fa-house",
        name: "Elevator in building",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Heated",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Point East -Rules</p>
    <br/>
    <br/>
      <p>House Rules for Point East Condos in New Smyrna Beach, Florida
      Welcome to New Smyrna Beach and Point East Condo in New Smyrna Beach! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules:<br/>
      Check in time is at 4PM<br/>
      Check out time is at 9:30AM<br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned.<br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.
      <br/>
      <br/>
      We hope you have an awesome time in our condo and look forward to hosting you in your home away from home.</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 3,
    images: condo3Images,
    title: "Oceanwalk Building 20 Pet Friendly Your home away from Home!",
    description: `If you're looking to get away for a few days, look no further than Ocean Walk Building 20 in New Smyrna Beach. This 2-bedroom, 2 bath condo has an ocean view from the balcony and living room, and though it's across the street from the beach on A1A, it's only a 4-minute walk away via a dedicated crossing walk! Plus, the condo is stocked with a wagon for all your beach chairs and boogie boards, so you can easily get all your things to the beach in one go.
    <br/><br/>
    For maximum relaxation, enjoy the heated pool at Ocean Walk - perfect for soaking up some Florida sunshine. And don't forget about Flagler Avenue, which has plenty of night life close by! Plus, the condo offers a 3-night minimum and is pet friendly - perfect for a short beach vacation or even an extended stay.
    <br/><br/>
    So, if you're looking for the ideal getaway spot close to the beach, come stay at Ocean Walk in New Smyrna Beach! You won't regret it - especially with all the wonderful amenities provided by this gated community. Go ahead and plan your trip - you deserve a little break!
    <br/><br/>
    Enjoy the fantastic view of the ocean from your balcony, or explore the night life on Flagler Avenue. No matter what you choose to do, Ocean walk has something for everyone - making it the perfect place to get away and relax! So come visit New Smyrna Beach soon and experience all that this beautiful beach town has to offer. You won't be disappointed!<br/><br/>
    Don't wait any longer - book your vacation to Ocean Walk today and start planning your perfect getaway! You won't regret it. See you soon!`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 3,
    },
    price: 250,
    minNight: 3,
    itemLocation: {
      placeName:
        "5300 S. Atlantic Avenue, Building 20, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 1,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Fully stocked",
      },
      {
        id: 53,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 5,
        icon: "fa-solid fa-fan",
        name: "AC",
      },
      {
        id: 6,
        icon: "fa-solid fa-soap",
        name: "Dryer",
      },
      {
        id: 7,
        icon: "fa-solid fa-dumbbell",
        name: "Gym",
      },
      {
        id: 13,
        icon: "fa-solid fa-person-swimming",
        name: "Heated pool",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Tennis court",
      },
      {
        id: 36,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Basketball shuffle courts",
      },
      {
        id: 38,
        icon: "fa-solid fa-masks-theater",
        name: "Movie theatres",
      },
      {
        id: 89,
        icon: "fa-solid fa-tree",
        name: "Nature trails",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Outdoor swimming pool",
      },
      {
        id: 2,
        icon: "fa-brands fa-accessible-icon",
        name: "Accessible 24/7",
      },
      {
        id: 3,
        icon: "fa-solid fa-house",
        name: "Elevator in building",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Ocean walk Building 20 Rules</p>
    <br/>
    <br/>
      <p>House Rules for Ocean Walk Building 20 in New Smyrna Beach, Florida
      Welcome to New Smyrna Beach and Ocean Walk Building 20 in New Smyrna Beach! We know you'll enjoy your stay!</p> <br/>
      For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules:<br/>
    Check in time is at 4PM<br/>
    Check out time is at 9:30AM<br/>
    If the condo is ready earlier, we will text you to let you know the     condo is cleaned.<br/>
    We ask that you start the dishwasher is there are dirty dishes, you     take out the trash, you put the thermostat back to 78 degrees, and you    make sure all doors and windows are locked. <br/>
    <br/>

      <p>
      Pet Rules to be followed: <br/>

* Pets are not permitted in the pool area. (Per the County Ordinance, there is a fine for pets on the beach.)<br/>
* Pets and Service Animals must be on a leash when walking around the complex. Please pick up after your pet and put it in the trash bin along your walk.<br/>
* While authorized dogs are permitted, barking dogs are not allowed to go unattended in your unit. If there is a complaint that your dog is creating a nuisance, you will be required to remove the dog from this facility.<br/>
* Service animals are allowed in the pool area but are not allowed in the pool. For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules.<br/>
<br/>
Other Rules to be followed:<br/>
lease rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
• A noise ban is in effect from 10:30PM to 7:30AM<br/>
• Please tie up your trash before putting it down the trash chute<br/>
<br/>
We give you 2 parking passes and if you need more, please advise at the time of booking. There is one car allowed in the garage and you can park a car out front of the condo.<br/>

We hope you have an awesome time in our condo and look forward to hosting you in your home away from home.</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 4,
    images: condo1Images,
    title:
      "☀Oceanfront Luxury Highrise Condo! Oceanfront Luxury Highrise Condo",
    description: `The Inlet at Minorca offers the best panoramic, beachfront views of any condo in New Smyrna Beach.
    <br/><br/>
    Your breath will be taken away by the incredible view from this spacious 13th-floor 2/2 vacation condo, located at the northernmost point of New Smyrna Beach island, adjacent to Smyrna Dunes Park.
    <br/><br/>
    The ocean and/or river can be seen out of every single window! Mirrored walls in the living room and master bedroom add more to your view!! This unit is light and bright with floor-to-ceiling windows, new carpeting in the bedrooms and living room, and tile throughout the kitchen.
    <br/><br/>
    NASA and SpaceX launches can easily be seen from the front door of the condo, which offers a view of the river. From the private balcony, you will enjoy views of the oceanfront; the inlet, Intracoastal Waterway, Smyrna Dunes Park (a 220-acre county park), and Ponce Inlet Lighthouse.
    <br/><br/>
    The Inlet at Minorca is within a gated, resort-like community, offering a panoply of first-class amenities to enjoy. Pools, heated spas, a fitness center, clay tennis courts, gated beach access, an outdoor kitchen with a gazebo and two gas grills, a clubhouse with billiards, saunas, a ChargePoint electric vehicle charging station, a game room with ping pong table, a reserved garage parking space, and additional guest parking are some of the many offerings in the community.
    A beach pavilion offers a great venue for parties or Yoga classes in the mornings.
    <br/><br/>
    White cabinets and a center island are found in the kitchen. Floor-to-ceiling sliders are located in the living room, master bedroom, and guest bedroom.
    <br/><br/>
    The master bathroom has dual sinks and a shower, while the guest bedroom features an en-suite bathroom with a bathtub and shower. A full-size washer and dryer are found in the kitchen area.`,
    benefits: {
      guests: 4,
      bedrooms: 1,
      beds: 3,
    },
    price: 190,
    minNight: 3,
    itemLocation: {
      placeName: "508 N Riverside Dr, New Smyrna Beach, FL 32168, USA",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 2,
        icon: "fa-solid fa-tv",
        name: "TV in every bedroom",
      },
      {
        id: 3,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 5,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 6,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Tennis court shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 9,
        icon: "fa-solid fa-soap",
        name: "Dryer",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 2,
        icon: "fa-brands fa-accessible-icon",
        name: "Accessible 24/7",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Ocean Club South Rules</p>
    <br/>
      <p>House Rules for Ocean Club South
      Welcome to New Smyrna Beach and Ocean Club South Condominiums! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules: <br/>
      Check in time is at 3PM <br/>
      Check out time is at 9:30AM <br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned. <br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Pet Rules to be followed:<br/>
      * Pets are not permitted in the pool area. (Per the County Ordinance,       there is a fine for pets on the beach.)<br/>
      * Pets and Service Animals must be on a leash when walking around the       complex. Please pick up after your pet and put it in the trash bin      along your walk.<br/>
      * While authorized dogs are permitted, barking dogs are not allowed to      go unattended in your unit. If there is a complaint that your dog is      creating a nuisance, you will be required to remove the dog from this     facility.<br/>
      * Service animals are allowed in the pool area but are not allowed in       the pool. For the safety and enjoyment of everyone in our community, we       appreciate you following a few simple rules:</p>
      <br/>
      <p>Other Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.<br/>
      • We hope you have an awesome time in our condo and look forward to hosting you in your home away from home</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 5,
    images: condo2Images,
    title:
      "☀Bath Manatee Pool House - 2 Minutes to Beach Pet Friendly | Bath Manatee Pool House",
    description: `Beautiful screened-in, solar-heated pool! Free wifi. Huge great room with breakfast bar, three bedrooms, two bathrooms, a full and totally equipped kitchen including microwave, smooth-top range, dishwasher, side-by-side refrigerator with ice water, ice cube, and crushed ice dispenser in the door. The laundry with new high-capacity washer and dryer is located inside and we have supplied you with an iron and ironing board.
  <br/><br/>
    Everything has been provided for you for the perfect beach day - beach toys, chairs, cooler, beach umbrellas.
    <br/><br/>
    The living has plenty of seating, a large-screen smart TV. Off the living room is the enclosed pool/patio area where you can have your morning coffee and get ready for the day, whether it be on the best beach in Florida or taking in the attractions in Orlando, Daytona, St. Augustine, or Cape Canaveral.
    <br/><br/>
    Area Information
    <br/><br/>
    New Smyrna Beach is a Florida city south of Daytona Beach. It’s a surf hub known for its beaches, including nearby Canaveral National Seashore. The coastal Smyrna Dunes Park has views of Ponce Inlet and its lighthouse. Downtown’s palm-lined Canal Street Historic District has art galleries, shops and the New Smyrna Museum of History.
    <br/><br/>
    Our house is located within walking distance of Flagler Avenue, the quaint street leading to the beach with it's many restaurants and shops. We are also close to the shopping on Third Avenue.`,
    benefits: {
      guests: 8,
      bedrooms: 4,
      beds: 7,
    },
    price: 350,
    minNight: 4,
    itemLocation: {
      placeName: "831 Hope Ave, New Smyrna Beach, FL 32169, USA",
      image: NewSmyrnaBeach,
      coords: [28.9537076, -81.0240806],
    },
    amenities: [
      {
        id: 53,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 76,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 3,
        icon: "fa-solid fa-person-swimming",
        name: "Heated kiddy pool",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Washer and Dryer on Premise",
      },
      {
        id: 8,
        icon: "fa-solid fa-square",
        name: "Microwave",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 3,
        icon: "fa-solid fa-house",
        name: "Elevator in building",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Heated",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Point East -Rules</p>
    <br/>
    <br/>
      <p>House Rules for Point East Condos in New Smyrna Beach, Florida
      Welcome to New Smyrna Beach and Point East Condo in New Smyrna Beach! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules:<br/>
      Check in time is at 4PM<br/>
      Check out time is at 9:30AM<br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned.<br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.
      <br/>
      <br/>
      We hope you have an awesome time in our condo and look forward to hosting you in your home away from home.</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 6,
    images: condo3Images,
    title: "Pearl By The Sea - Manicured home & pool house w/ private pool!",
    description: `Enjoy your next vacation to New Smyrna Beach in this charming home with an additional pool house! This home offers a tropical oasis right outside the back door, allowing you to relax and cool off in the refreshing pool. Enjoy your very own grill, a full kitchen with stainless steel appliances, and a jetted bathtub in the master suite where you can unwind each evening.
    <br/><br/>
    You can't beat the location of this home, as it sits just across A1A from an access point to the ocean beach. When you're not sunbathing on the sand, you'll be less than three miles south of Flagler Avenue's local shops, popular boutiques, and variety of restaurants. You'll even be within day-tripping distance (70 miles) of Central Florida's most famous amusement parks, including Walt Disney World, Universal Studios, and SeaWorld.<br/><br/>
    Don't wait any longer - book your vacation to Ocean Walk today and start planning your perfect getaway! You won't regret it. See you soon!`,
    benefits: {
      guests: 7,
      bedrooms: 4,
      beds: 7,
    },
    price: 270,
    minNight: 3,
    itemLocation: {
      placeName: "4849 Saxon Drive, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 1,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Fully stocked",
      },
      {
        id: 53,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 5,
        icon: "fa-solid fa-fan",
        name: "AC",
      },
      {
        id: 6,
        icon: "fa-solid fa-soap",
        name: "Dryer",
      },
      {
        id: 7,
        icon: "fa-solid fa-dumbbell",
        name: "Gym",
      },
      {
        id: 13,
        icon: "fa-solid fa-person-swimming",
        name: "Heated pool",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Tennis court",
      },
      {
        id: 36,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Basketball shuffle courts",
      },
      {
        id: 38,
        icon: "fa-solid fa-masks-theater",
        name: "Movie theatres",
      },
      {
        id: 89,
        icon: "fa-solid fa-tree",
        name: "Nature trails",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Outdoor swimming pool",
      },
      {
        id: 2,
        icon: "fa-brands fa-accessible-icon",
        name: "Accessible 24/7",
      },
      {
        id: 3,
        icon: "fa-solid fa-house",
        name: "Elevator in building",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Ocean walk Building 20 Rules</p>
    <br/>
    <br/>
      <p>House Rules for Ocean Walk Building 20 in New Smyrna Beach, Florida
      Welcome to New Smyrna Beach and Ocean Walk Building 20 in New Smyrna Beach! We know you'll enjoy your stay!</p> <br/>
      For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules:<br/>
    Check in time is at 4PM<br/>
    Check out time is at 9:30AM<br/>
    If the condo is ready earlier, we will text you to let you know the     condo is cleaned.<br/>
    We ask that you start the dishwasher is there are dirty dishes, you     take out the trash, you put the thermostat back to 78 degrees, and you    make sure all doors and windows are locked. <br/>
    <br/>

      <p>
      Pet Rules to be followed: <br/>

* Pets are not permitted in the pool area. (Per the County Ordinance, there is a fine for pets on the beach.)<br/>
* Pets and Service Animals must be on a leash when walking around the complex. Please pick up after your pet and put it in the trash bin along your walk.<br/>
* While authorized dogs are permitted, barking dogs are not allowed to go unattended in your unit. If there is a complaint that your dog is creating a nuisance, you will be required to remove the dog from this facility.<br/>
* Service animals are allowed in the pool area but are not allowed in the pool. For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules.<br/>
<br/>
Other Rules to be followed:<br/>
lease rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
• A noise ban is in effect from 10:30PM to 7:30AM<br/>
• Please tie up your trash before putting it down the trash chute<br/>
<br/>
We give you 2 parking passes and if you need more, please advise at the time of booking. There is one car allowed in the garage and you can park a car out front of the condo.<br/>

We hope you have an awesome time in our condo and look forward to hosting you in your home away from home.</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 7,
    images: condo1Images,
    title:
      "☀Ocean Club South is an ideal place for a getaway to the beach | Pets Book NOW!",
    description: `Ocean Club South is an ideal place for a getaway to the beach. Located on the no-drive side of New Smyrna Beach, you can enjoy all the amenities of home with just a two-minute walk from your condo to the ocean. The two-bedroom two bath condo also features a fully equipped kitchen, coffee maker, full-size washer and dryer, and is pet friendly. With the oceanfront pool offering a clear view, you can easily spend time relaxing in the sun. <br/> <br/>
    The area provides plenty of activities to enjoy including fishing, surfing, biking along Flagler Avenue and more. Whether you are looking for a weekend rental or an extended stay during the winter months, you can find it all here at New Smyrna Beach. Book your stay today and experience the beauty of this coastal town. <br/><br/>
    Discover all that Ocean Club South has to offer and create memories that will last a lifetime! Enjoy the perfect balance of relaxation, adventure, and fun with a trip to this wonderful destination. Spend your days soaking up the sun on one of the most beautiful beaches in Florida while exploring all that the area has to offer. Treat yourself and your family to an unforgettable vacation at Ocean Club South today!`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 4,
    },
    price: 225,
    minNight: 3,
    itemLocation: {
      placeName: "312 Florida Ave, New Smyrna Beach, FL 32169, USA",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 2,
        icon: "fa-solid fa-tv",
        name: "TV in every bedroom",
      },
      {
        id: 3,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 5,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 6,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Tennis court shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 9,
        icon: "fa-solid fa-soap",
        name: "Dryer",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 2,
        icon: "fa-brands fa-accessible-icon",
        name: "Accessible 24/7",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Ocean Club South Rules</p>
    <br/>
      <p>House Rules for Ocean Club South
      Welcome to New Smyrna Beach and Ocean Club South Condominiums! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules: <br/>
      Check in time is at 3PM <br/>
      Check out time is at 9:30AM <br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned. <br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Pet Rules to be followed:<br/>
      * Pets are not permitted in the pool area. (Per the County Ordinance,       there is a fine for pets on the beach.)<br/>
      * Pets and Service Animals must be on a leash when walking around the       complex. Please pick up after your pet and put it in the trash bin      along your walk.<br/>
      * While authorized dogs are permitted, barking dogs are not allowed to      go unattended in your unit. If there is a complaint that your dog is      creating a nuisance, you will be required to remove the dog from this     facility.<br/>
      * Service animals are allowed in the pool area but are not allowed in       the pool. For the safety and enjoyment of everyone in our community, we       appreciate you following a few simple rules:</p>
      <br/>
      <p>Other Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.<br/>
      • We hope you have an awesome time in our condo and look forward to hosting you in your home away from home</p>
    `,
    availability: [],
    reviews: [],
  },
  {
    id: 8,
    images: condo2Images,
    title:
      "☀Beautiful screened-in, solar-heated pool! Free wifi | Bath Manatee Pool House",
    description: `Beautiful screened-in, solar-heated pool! Free wifi. Huge great room with breakfast bar, three bedrooms, two bathrooms, a full and totally equipped kitchen including microwave, smooth-top range, dishwasher, side-by-side refrigerator with ice water, ice cube, and crushed ice dispenser in the door. The laundry with new high-capacity washer and dryer is located inside and we have supplied you with an iron and ironing board.
  <br/><br/>
    Everything has been provided for you for the perfect beach day - beach toys, chairs, cooler, beach umbrellas.
    <br/><br/>
    The living has plenty of seating, a large-screen smart TV. Off the living room is the enclosed pool/patio area where you can have your morning coffee and get ready for the day, whether it be on the best beach in Florida or taking in the attractions in Orlando, Daytona, St. Augustine, or Cape Canaveral.
    <br/><br/>
    Area Information
    <br/><br/>
    New Smyrna Beach is a Florida city south of Daytona Beach. It’s a surf hub known for its beaches, including nearby Canaveral National Seashore. The coastal Smyrna Dunes Park has views of Ponce Inlet and its lighthouse. Downtown’s palm-lined Canal Street Historic District has art galleries, shops and the New Smyrna Museum of History.
    <br/><br/>
    Our house is located within walking distance of Flagler Avenue, the quaint street leading to the beach with it's many restaurants and shops. We are also close to the shopping on Third Avenue.`,
    benefits: {
      guests: 8,
      bedrooms: 4,
      beds: 7,
    },
    price: 350,
    minNight: 4,
    itemLocation: {
      placeName: "312 Florida Ave, New Smyrna Beach, FL 32169, USA",
      image: NewSmyrnaBeach,
      coords: [28.9537076, -81.0240806],
    },
    amenities: [
      {
        id: 53,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Central air's heat",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 76,
        icon: "fa-solid fa-wifi",
        name: "High speed internet",
      },
      {
        id: 3,
        icon: "fa-solid fa-person-swimming",
        name: "Heated kiddy pool",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Full kitchen",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Washer and Dryer on Premise",
      },
      {
        id: 8,
        icon: "fa-solid fa-square",
        name: "Microwave",
      },
    ],
    propertyType: [
      {
        id: 1,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming pool",
      },
      {
        id: 3,
        icon: "fa-solid fa-house",
        name: "Elevator in building",
      },
      {
        id: 16,
        icon: "fa-solid fa-table-tennis-paddle-ball",
        name: "Shuffle board",
      },
      {
        id: 7,
        icon: "fa-solid fa-temperature-arrow-up",
        name: "Heated",
      },
    ],
    rules: `<p className="text-2xl font-semibold">Point East -Rules</p>
    <br/>
    <br/>
      <p>House Rules for Point East Condos in New Smyrna Beach, Florida
      Welcome to New Smyrna Beach and Point East Condo in New Smyrna Beach! We know you'll enjoy your stay!</p> <br/>
      <p>For the safety and enjoyment of everyone in our community, we appreciate you following a few simple rules:<br/>
      Check in time is at 4PM<br/>
      Check out time is at 9:30AM<br/>
      If the condo is ready earlier, we will text you to let you know the condo is cleaned.<br/>
      We ask that you start the dishwasher is there are dirty dishes, you take out the trash, you put the thermostat back to 78 degrees, and you make sure all doors and windows are locked.</p> <br/>
      <p>
      Rules to be followed:<br/>
      • Please rinse off the beach chair, boogie boards, sand toys on your way in from the beach before storing in the closet<br/>
      • A noise ban is in effect from 10:30PM to 7:30AM<br/>
      • Please tie up your trash before putting it down the dumpster<br/>
      • We give you 2 parking passes and if you need more, please advise at the time of booking.
      <br/>
      <br/>
      We hope you have an awesome time in our condo and look forward to hosting you in your home away from home.</p>
    `,
    availability: [],
    reviews: [],
  },
];

export default items;
