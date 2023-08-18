import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { SocialService as iSocialService } from "@nft-types"
import type { StatsParams, StatsInfoParams } from "../types/social-service";

export default class SocialService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getSocialStats(params: StatsParams): Promise<iSocialService.Stats> {
		return this.httpClient.$get("/socials/stats", {
			params: {
				...params
			}
		})
	}

	getSocialStatsInfo(
		params: StatsInfoParams
	): Promise<iSocialService.StatsInfo[]> {
		return this.httpClient.$get("/socials/stats/info", {
			params: {
				...params
			}
		})
	}

	getSocialLink(params: StatsParams): Promise<string> {
		return this.httpClient.$get("/socials/link", {
			params: {
				...params
			}
		})
	}
}
