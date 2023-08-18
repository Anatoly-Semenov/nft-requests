import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { ArticleService as IArticleService } from "@nft-types"

export default class AnalyticsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getArticles(): Promise<IArticleService.Item[]> {
		return this.httpClient.$get("/articles/list")
	}

	getArticlesByGame(gameId: number): Promise<IArticleService.Item[]> {
		return this.httpClient.$get(`/articles/by-game/${gameId}`)
	}
}
