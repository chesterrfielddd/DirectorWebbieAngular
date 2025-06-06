export interface IPortfolioItem {
  name: string,
  category: "commertials" | "cinema" | "NDA",
  description?: string,
  coverUrl: string,
  videoUrl?: string,
  photoes?: string[],
}