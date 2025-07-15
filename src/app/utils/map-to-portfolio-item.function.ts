import { IPortfolioItem } from "../models";
import { IPortfolioApiItem } from "../models/portfolio-api-item.interface";

/** Конвертирует работу из портфолио в формате от сервера в более удобный формат */
export function mapToPortfolioItem(apiPortfolioItem: IPortfolioApiItem): IPortfolioItem {
    return {
        name: apiPortfolioItem.title.rendered,
        description: apiPortfolioItem.acf.description,
        category: apiPortfolioItem.acf.category,
        coverUrl: apiPortfolioItem.acf.coverUrl,
        videoUrl: apiPortfolioItem.acf.videoLink ? apiPortfolioItem.acf.videoLink : '',
        photoes: apiPortfolioItem.acf.imagesArray?.length ? apiPortfolioItem.acf.imagesArray.map(item => item.imageUrl) : []
    }
}