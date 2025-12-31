/**
 * Item Registry and Utilities
 * Centralized system for managing all items across the site
 */

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Work items data - single source of truth
 */
const workItemsData = [
  {
    id: 1,
    title: "Los Angeles, 2018 (watercolor on paper)",
    slug: "los-angeles-2018",
    publicId: "DTLA",
    width: 800,
    height: 400,
    description: "Description of your work project."
  },
  {
    id: 2,
    title: "Valley (2018) (graphite & colored pencils on paper)",
    slug: "valley-2018",
    publicId: "Valley_California",
    width: 800,
    height: 400,
    description: ""
  },
  {
    id: 3,
    title: "Coyote Hill, 2018 (watercolor on paper)",
    slug: "coyote-hill-2018",
    publicId: "Coyote-Hill",
    width: 800,
    height: 600,
    description: ""
  },
  {
    id: 4,
    title: "I-5 (2018) (graphite & colored pencils on paper)",
    slug: "i-5-2018",
    publicId: "I-5",
    width: 800,
    height: 600,
    description: "Description of your work project."
  },
];

/**
 * Sketch items data - single source of truth
 */
const sketchItemsData = [
  {
    id: 1,
    title: "Alabama Hills",
    slug: "alabama-hills",
    publicId: "AlabamaHills",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    title: "Cars",
    slug: "cars",
    publicId: "Cars",
    width: 600,
    height: 800,
  },
  {
    id: 3,
    title: "San Pedro",
    slug: "san-pedro",
    publicId: "San-Pedro",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    title: "Birds",
    slug: "birds",
    publicId: "Birds",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    title: "Debs",
    slug: "debs",
    publicId: "Debs",
    width: 600,
    height: 800,
  },
  {
    id: 6,
    title: "Lake Merritt",
    slug: "lake-merritt",
    publicId: "Lake-Merritt",
    width: 800,
    height: 600,
  },
];

/**
 * Get all work items
 */
export function getWorkItems() {
  return workItemsData.map(item => ({
    ...item,
    slug: item.slug || generateSlug(item.title),
  }));
}

/**
 * Get all sketch items
 */
export function getSketchItems() {
  return sketchItemsData.map(item => ({
    ...item,
    slug: item.slug || generateSlug(item.title),
  }));
}

/**
 * Get all items from all sources
 * This aggregates items from work page, sketches, etc.
 */
export function getAllItems() {
  const items = [];
  
  // Add work items
  workItemsData.forEach(item => {
    items.push({
      ...item,
      slug: item.slug || generateSlug(item.title),
      source: 'work'
    });
  });
  
  // Add sketch items
  sketchItemsData.forEach(item => {
    items.push({
      ...item,
      slug: item.slug || generateSlug(item.title),
      source: 'sketches'
    });
  });
  
  return items;
}

/**
 * Get a single item by slug
 */
export function getItemBySlug(slug) {
  const allItems = getAllItems();
  return allItems.find(item => item.slug === slug) || null;
}

/**
 * Get next and previous items (for navigation)
 * Filters by source if provided (e.g., 'work' or 'sketches')
 */
export function getAdjacentItems(currentSlug, source = null) {
  const allItems = getAllItems();
  let filteredItems = allItems;
  
  // If source is provided, only get items from that source
  if (source) {
    filteredItems = allItems.filter(item => item.source === source);
  }
  
  const currentIndex = filteredItems.findIndex(item => item.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { next: null, previous: null };
  }
  
  const next = currentIndex < filteredItems.length - 1 
    ? filteredItems[currentIndex + 1] 
    : null;
  const previous = currentIndex > 0 
    ? filteredItems[currentIndex - 1] 
    : null;
  
  return { next, previous };
}

