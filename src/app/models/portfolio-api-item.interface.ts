/** Работа для портфолио с сервера */
export interface IPortfolioApiItem {
    id: number,
    title: {
        rendered: string,
    },
    acf: {
        description: string,
        category: "commercials" | "cinema" | "NDA"
        videoLink?: string | null,
        imagesArray?: { imageUrl: string }[] | null,
        coverUrl: string
    }
}