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
    description: `Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. <br/>
    There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. <br/>
    The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.`,
    benefits: {
      guests: 4,
      bedrooms: 2,
      beds: 4,
    },
    price: 2,
    itemLocation: {
      placeName: "4849 Saxon Drive, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [29.0295217, -81.2502721],
    },
    amenities: [
      {
        id: 2,
        icon: "fa-solid fa-tv",
        name: "TV",
      },
      {
        id: 3,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming",
      },
      {
        id: 5,
        icon: "fa-solid fa-fan",
        name: "AC",
      },
      {
        id: 6,
        icon: "fa-solid fa-soap",
        name: "Washing machine",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Clothes dryer",
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
    availability: [],
    reviews: [],
  },
  {
    id: 2,
    images: condo2Images,
    title: "☀Beach Paradise | Steps to the Ocean | 2nd floor Point East",
    description: `Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. <br/>
    There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. <br/>
    The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 4,
    },
    price: 6,
    itemLocation: {
      placeName: "3801 S. Atlantic Avenue, New Smyrna Beach FL, United States",
      image: NewSmyrnaBeach,
      coords: [28.9537076, -81.0240806],
    },
    amenities: [
      {
        id: 3,
        icon: "fa-solid fa-person-swimming",
        name: "Swiming",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Kitchen",
      },
      {
        id: 5,
        icon: "fa-solid fa-fan",
        name: "AC",
      },
      {
        id: 6,
        icon: "fa-solid fa-soap",
        name: "Washing machine",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Clothes dryer",
      },
      {
        id: 8,
        icon: "fa-solid fa-square",
        name: "Oven",
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
    ],
    availability: [],
    reviews: [],
  },
  {
    id: 3,
    images: condo3Images,
    title: "Oceanwalk Building 20 Pet Friendly Your home away from Home!",
    description: `Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. <br/>
    There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. <br/>
    The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.`,
    benefits: {
      guests: 6,
      bedrooms: 2,
      beds: 3,
    },
    price: 9,
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
        name: "Internet",
      },
      {
        id: 4,
        icon: "fa-solid fa-kitchen-set",
        name: "Kitchen",
      },
      {
        id: 5,
        icon: "fa-solid fa-fan",
        name: "AC",
      },
      {
        id: 6,
        icon: "fa-solid fa-soap",
        name: "Washing machine",
      },
      {
        id: 7,
        icon: "fa-regular fa-hard-drive",
        name: "Clothes dryer",
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
    availability: [],
    reviews: [],
  },
];

export default items;
