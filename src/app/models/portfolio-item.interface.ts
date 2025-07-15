/** Тип работы для портфолио, готовый к вставке на сайт */
export interface IPortfolioItem {
  name: string,
  category: "commertials" | "cinema" | "NDA",
  description?: string,
  coverUrl: string,
  videoUrl?: string,
  photoes?: string[],
}