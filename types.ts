
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  category: 'Infrastructure' | 'Education' | 'Social' | 'Development';
  description: string;
  iconName: string;
}

export interface Responsibility {
  id: number;
  title: string;
  role: string;
  description: string;
  iconName: string;
}

export interface ElectionResult {
  year: string;
  candidateVotes: number;
  opponentVotes: number;
  totalVoters: number;
  result: string;
}

export interface DocumentItem {
  id: number;
  title: string;
  type: 'PDF' | 'DOC';
  date: string;
  size: string;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  date: string;
  summary: string;
  image: string;
  link: string;
  type: 'News' | 'Interview' | 'PressNote';
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  category: 'Political' | 'Development' | 'Social' | 'Family';
  url: string;
  caption: string;
}

export interface VisionItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'Upcoming' | 'Past';
  description: string;
}

export interface SupportItem {
  title: string;
  description: string;
  actionText: string;
  link: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
