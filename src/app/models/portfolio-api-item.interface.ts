export interface IPortfolioApiItem {
    id: number,
    title: {
        rendered: string,
    },
    acf: {
        description: string,
        category: "commertials" | "cinema" | "NDA"
        videoLink: string,
        coverUrl: string
    }
}