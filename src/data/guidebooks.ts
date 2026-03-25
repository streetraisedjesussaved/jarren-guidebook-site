export interface Guidebook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  pages: number;
  coverColor: string;
  featured: boolean;
  topics: string[];
}

export const guidebooks: Guidebook[] = [
  {
    id: 'from-pain-to-purpose',
    title: 'From Pain to Purpose',
    subtitle: 'A 30-Day Journey to Reclaiming Your Life',
    description:
      'This guidebook walks you through a proven 30-day framework for transforming personal pain into meaningful purpose. Each day includes reflection exercises, actionable steps, and real stories from people who made it through.',
    category: 'Personal Transformation',
    price: 19.99,
    pages: 120,
    coverColor: '#2563EB',
    featured: true,
    topics: ['Mindset', 'Daily habits', 'Journaling', 'Goal setting'],
  },
  {
    id: 'street-to-stability',
    title: 'Street to Stability',
    subtitle: 'Practical Tools for Getting Back on Your Feet',
    description:
      'A no-nonsense guide built for people navigating housing insecurity, financial hardship, or life after incarceration. Packed with resources, scripts, and step-by-step plans to help you rebuild from the ground up.',
    category: 'Life Skills',
    price: 14.99,
    pages: 96,
    coverColor: '#16A34A',
    featured: true,
    topics: ['Housing', 'Finances', 'Employment', 'Community resources'],
  },
  {
    id: 'healed-not-hidden',
    title: 'Healed, Not Hidden',
    subtitle: 'Breaking the Silence Around Trauma and Recovery',
    description:
      'This guidebook gives you language for your pain and tools to start healing out loud. It covers trauma-informed self-care, how to find safe support, and how to help others in your circle do the same.',
    category: 'Mental Health',
    price: 17.99,
    pages: 108,
    coverColor: '#7C3AED',
    featured: false,
    topics: ['Trauma', 'Self-care', 'Boundaries', 'Support systems'],
  },
  {
    id: 'raising-kings-queens',
    title: 'Raising Kings & Queens',
    subtitle: 'Parenting With Presence When Life Has Been Hard',
    description:
      'A guidebook for parents who are healing while raising children. Covers how to break cycles, stay present under pressure, and give your kids what you may not have had — even when you\'re still figuring things out yourself.',
    category: 'Parenting',
    price: 16.99,
    pages: 88,
    coverColor: '#DC2626',
    featured: false,
    topics: ['Breaking cycles', 'Emotional presence', 'Communication', 'Discipline'],
  },
  {
    id: 'the-comeback-code',
    title: 'The Comeback Code',
    subtitle: 'How to Rise After Every Setback',
    description:
      'Failure, loss, setback — this guidebook reframes them all as data points on the road to your comeback. Includes the five-step Comeback Code framework used by people who rebuilt careers, relationships, and identities after rock bottom.',
    category: 'Personal Transformation',
    price: 19.99,
    pages: 114,
    coverColor: '#D97706',
    featured: true,
    topics: ['Resilience', 'Rebuilding', 'Identity', 'Success mindset'],
  },
  {
    id: 'faith-over-fear',
    title: 'Faith Over Fear',
    subtitle: 'Devotional Practices for Uncertain Times',
    description:
      'A spirit-led guidebook combining scripture, prayer prompts, and practical exercises for people who want to anchor their healing in faith. Works across denominational backgrounds and is accessible whether you\'re just starting or returning to faith.',
    category: 'Faith & Spirituality',
    price: 15.99,
    pages: 100,
    coverColor: '#0891B2',
    featured: false,
    topics: ['Scripture', 'Prayer', 'Forgiveness', 'Spiritual growth'],
  },
];
