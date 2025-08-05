const parkAreas = [
  {
    id: 1,
    name: "Chamfort River",
    direction: "northeast"
  },
  {
    id: 2,
    name: "Lost Wolf Hiking Trail",
    direction: "north"
  },
  {
    id: 3,
    name: "Lodge Area",
    direction: "northwest"
  },
  {
    id: 4,
    name: "Gander River",
    direction: "southwest"
  },
  {
    id: 5,
    name: "Campgrounds",
    direction: "south"
  },
  {
    id: 6,
    name: "Pine Bluffs Trails",
    direction: "southeast"
  }
]

const services = [
  { id: 1, name: "hiking" },
  { id: 2, name: "fishing" },
  { id: 3, name: "canoeing" },
  { id: 4, name: "rafting" },
  { id: 5, name: "picnicking" },
  { id: 6, name: "lodging" },
  { id: 7, name: "parking" },
  { id: 8, name: "information" },
  { id: 9, name: "zip lines" },
  { id: 10, name: "food vendors" }
]

const guests = [
  { id: 1, first_name: "John", last_name: "Doe", park_area_id: 1 },
  { id: 2, first_name: "Jane", last_name: "Smith", park_area_id: 2 },
  { id: 3, first_name: "Alice", last_name: "Johnson", park_area_id: 3 },
  { id: 4, first_name: "Bob", last_name: "Williams", park_area_id: 3 },
  { id: 5, first_name: "Charlie", last_name: "Brown", park_area_id: 4 },
  { id: 6, first_name: "Diana", last_name: "Clark", park_area_id: 5 },
  { id: 7, first_name: "Ethan", last_name: "Lee", park_area_id: 6 },
  { id: 8, first_name: "Fiona", last_name: "Davis", park_area_id: 6 }
]

const serviceArea = [
  // Chamfort River
  { id: 1, park_area_id: 1, service_id: 2 }, // fishing
  { id: 2, park_area_id: 1, service_id: 3 }, // canoeing
  { id: 3, park_area_id: 1, service_id: 4 }, // rafting

  // Lost Wolf Hiking Trail
  { id: 4, park_area_id: 2, service_id: 1 }, // hiking
  { id: 5, park_area_id: 2, service_id: 5 }, // picnicking
  { id: 6, park_area_id: 2, service_id: 9 }, // rock climbing not listed, replace with zip lines

  // Lodge Area
  { id: 7, park_area_id: 3, service_id: 6 }, // lodging
  { id: 8, park_area_id: 3, service_id: 7 }, // parking
  { id: 9, park_area_id: 3, service_id: 8 }, // information
  { id: 10, park_area_id: 3, service_id: 5 }, // picnicking

  // Gander River
  { id: 11, park_area_id: 4, service_id: 2 }, // fishing
  { id: 12, park_area_id: 4, service_id: 1 }, // hiking

  // Campgrounds
  { id: 13, park_area_id: 5, service_id: 8 }, // information
  { id: 14, park_area_id: 5, service_id: 6 }, // lodging
  { id: 15, park_area_id: 5, service_id: 7 }, // parking

  // Pine Bluffs Trails
  { id: 16, park_area_id: 6, service_id: 1 }, // hiking
  { id: 17, park_area_id: 6, service_id: 5 }, // picnicking
  { id: 18, park_area_id: 6, service_id: 9 }, // zip lines
  { id: 19, park_area_id: 6, service_id: 10 } // food vendors
]

export const getParkAreas = () => {
  return structuredClone(parkAreas)
}

export const getServices = () => {
  return structuredClone(services)
}

export const getGuests = () => {
  return structuredClone(guests)
}

export const getServiceArea = () => {
  return structuredClone(serviceArea)
}