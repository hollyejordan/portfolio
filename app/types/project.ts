export type Project = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  content?: { type: string; text: string }[]; // optional content array
};