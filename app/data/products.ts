export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  color: string;
  badge?: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "ridge-daypack",
    name: "Ridge Daypack",
    category: "Packs",
    price: 148,
    summary: "A lighter load for longer days.",
    description:
      "Room for the layers you need, with a clean silhouette that stays close from the first climb to the last mile home.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A weathered canvas hiking backpack resting outdoors",
    color: "Moss / natural",
    badge: "Field favorite",
    features: ["22 litre capacity", "Recycled ripstop shell", "Weatherproof roll top"],
  },
  {
    id: "field-flask",
    name: "Field Flask",
    category: "Camp kitchen",
    price: 42,
    summary: "Keep the good water close.",
    description:
      "A double-wall steel flask that keeps your morning coffee warm and your pack dry, season after season.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Reusable stainless steel bottle in soft daylight",
    color: "Stone / black",
    features: ["750 ml", "18/8 stainless steel", "Leak-proof screw cap"],
  },
  {
    id: "switchback-shell",
    name: "Switchback Shell",
    category: "Layers",
    price: 220,
    summary: "A little weather never hurt.",
    description:
      "A breathable outer layer for surprise showers and exposed ridgelines, cut to move without the swish.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Olive outdoor jacket hanging against a textured wall",
    color: "Pine / slate",
    badge: "New season",
    features: ["Three-layer recycled fabric", "Adjustable storm hood", "Packs into its own pocket"],
  },
  {
    id: "camp-light-no-2",
    name: "Camp Light No. 2",
    category: "Camp essentials",
    price: 68,
    summary: "A warm glow, wherever you stop.",
    description:
      "A small, rechargeable lantern with a soft amber setting for cooking, reading, and finding your way back to the tent.",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Small camping lantern glowing at a quiet campsite",
    color: "Ochre / cream",
    features: ["Up to 40 hours of light", "USB-C rechargeable", "Water resistant"],
  },
  {
    id: "alpine-mug",
    name: "Alpine Mug",
    category: "Camp kitchen",
    price: 28,
    summary: "The first good thing in the morning.",
    description:
      "An easy-grip enamel mug made for slow mornings, shared coffee, and the small rituals that make camp feel like home.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Enamel camping mug beside a freshly brewed cup of coffee",
    color: "Chalk / forest",
    features: ["350 ml capacity", "Chip-resistant enamel", "Hand-finished rim"],
  },
  {
    id: "trail-blanket",
    name: "Trail Blanket",
    category: "Camp essentials",
    price: 96,
    summary: "An extra layer for the long pause.",
    description:
      "A soft, packable blanket for lunch stops, open-air concerts, and watching the evening light leave the valley.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Sunlit forest floor under a canopy of trees",
    color: "Moss / clay",
    features: ["Recycled wool blend", "Rolls with integrated straps", "Machine washable"],
  },
  {
    id: "summit-socks",
    name: "Summit Socks",
    category: "Layers",
    price: 24,
    summary: "The kind of small thing that matters.",
    description:
      "Cushioned in the right places and breathable through the climb, with a soft merino blend for comfort on repeat wear.",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Folded wool hiking socks in earthy colors",
    color: "Granite / rust",
    features: ["Merino wool blend", "Reinforced heel and toe", "Made for all-day wear"],
  },
  {
    id: "coastline-binoculars",
    name: "Coastline Field Glasses",
    category: "Field tools",
    price: 184,
    summary: "Stay a little longer at the lookout.",
    description:
      "Bright, clear optics in a compact body for shorebirds, distant peaks, and whatever catches your eye along the way.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Wildflowers along an open trail in late afternoon",
    color: "Graphite / lichen",
    features: ["8× magnification", "Water-resistant body", "Neck strap and soft case included"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
