import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { ScholarsInfoResponse, CommonInfoResponse } from "../types/analytics-service"

export default class AnalyticsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getLastInternalId(): string {
		return this.httpClient.$get("/analytics/last-internal-id")
	}

	getCommonInfo(gameId: number, days = 30): Promise<CommonInfoResponse> {
		return this.httpClient.$get("/analytics/info/common", {
			params: {
				gameId,
				days
			}
		})
	}

	getScholarsInfo(gameId: number, days = 30): Promise<ScholarsInfoResponse> {
		return this.httpClient.$get("/analytics/info/scholars", {
			params: {
				gameId,
				days
			}
		})
	}

	addScholar(gameId: number, text: string): Promise<void> {
		return this.httpClient.$post("/analytics/scholar", {
			data: {
				gameId,
				text
			}
			}
		)
	}

	deleteScholar(wallet: string, gameId: number): Promise<void> {
		return this.httpClient.$delete("/analytics/scholar", {
			data: {
				wallet,
				gameId
			}
			}
		)
	}
}
