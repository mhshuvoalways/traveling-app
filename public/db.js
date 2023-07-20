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
    price: "2120",
    itemLocation: {
      placeName: "4849 Saxon Drive, New Smyrna Beach, United States",
      image: NewSmyrnaBeach,
    },
    amenities: [
      {
        id: 1,
        icon: "fa-solid fa-wifi",
        name: "Internet",
      },
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
      beds: 5,
    },
    price: "2420",
    itemLocation: {
      placeName: "3801 S. Atlantic Avenue, New Smyrna Beach, United States",
      image: NewSmyrnaBeach,
    },
    amenities: [
      {
        id: 1,
        icon: "fa-solid fa-wifi",
        name: "Internet",
      },
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
      guests: 8,
      bedrooms: 3,
      beds: 6,
    },
    price: "2720",
    itemLocation: {
      placeName:
        "5300 S. Atlantic Avenue, Building 20, New Smyrna Beach, United States",
      image: NewSmyrnaBeach,
    },
    amenities: [
      {
        id: 1,
        icon: "fa-solid fa-wifi",
        name: "Internet",
      },
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
    availability: [],
    reviews: [],
  },
];

export default items;
