import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import {AchievementService as IAchievementService} from "@nft-types"

export default class AchievementsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getStatusProcessing(): Promise<IAchievementService.Status> {
		return this.httpClient.$get("/achievements/progress/current")
	}
}
