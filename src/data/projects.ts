
export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status: "live" | "beta" | "development" | "experiment";
  github: string;
  demo: string | null;
  details: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'spotify roast saas',
    tagline: 'brutally honest music taste analysis',
    description: 'ai-powered spotify analytics that roasts your music taste with surgical precision. generates shareable roast cards because everyone needs to know how basic your top artists really are.',
    tech: ['react', 'python', 'spotify api', 'openai', 'tailwind'],
    status: 'live',
    github: '#',
    demo: '#',
    details: 'full psychometric analysis of listening patterns, mood tracking, and social sharing features that make you question your entire identity through your playlist choices.',
    screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
  },
  {
    id: 2,
    title: 'dating psychology platform',
    tagline: 'deep psychometrics for modern romance',
    description: 'comprehensive personality assessment platform using big-five, attachment styles, and custom algorithms to predict compatibility. because swiping based on photos is prehistoric.',
    tech: ['next.js', 'typescript', 'supabase', 'recharts', 'shadcn/ui'],
    status: 'beta',
    github: '#',
    demo: '#',
    details: 'includes advanced relationship prediction models, communication style analysis, and compatibility scoring that actually makes sense. currently testing with brave souls who think personality matters more than instagram aesthetics.',
    screenshots: ['Dashboard', 'Analysis', 'Results']
  },
  {
    id: 3,
    title: 'chaos productivity tracker',
    tagline: 'embrace the beautiful mess of creative work',
    description: 'productivity app for people who work in creative bursts rather than pomodoro timers. tracks chaos patterns, energy cycles, and breakthrough moments.',
    tech: ['react', 'electron', 'sqlite', 'chartjs'],
    status: 'development',
    github: '#',
    demo: null,
    details: 'designed for insomniacs, creators, and anyone who\'s tired of productivity apps built for 9-5 robots. tracks inspiration strikes, caffeine correlation, and the mysterious patterns of creative flow.',
    screenshots: ['Concept', 'Wireframes']
  },
  {
    id: 4,
    title: 'guitar progress analyzer',
    tagline: 'quantified self meets six strings',
    description: 'audio analysis tool that tracks guitar progress, identifies weak spots, and suggests practice routines. because muscle memory needs data too.',
    tech: ['python', 'tensorflow', 'web audio api', 'react'],
    status: 'experiment',
    github: '#',
    demo: null,
    details: 'uses machine learning to analyze playing technique, timing consistency, and chord progression accuracy. still figuring out how to make it stop judging my 3am jams.',
    screenshots: ['Analysis View']
  }
];
