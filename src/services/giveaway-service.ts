import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { GiveawayService as IGiveawayService, ResponseList } from "@nft-types"

type Giveaway = IGiveawayService.Giveaway

interface GiveawayListParams {
	limit: number
	offset: number
}

export default class GiveawayService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getGiveawayList(): Promise<Giveaway[]> {
		return this.httpClient.$get("/giveaways/list")
	}

	getGiveawayListAll(
		params: GiveawayListParams
	): Promise<ResponseList<Giveaway>> {
		return this.httpClient.$get("/giveaways/list-all", {
			params
		})
	}

	getGiveaway(giveawayId: Giveaway["id"]): Promise<Giveaway> {
		return this.httpClient.$get(`/giveaways/${giveawayId}`)
	}

	createGiveaway(data: Omit<Giveaway, "id">): Promise<Giveaway> {
		return this.httpClient.$post("/giveaways/create", data)
	}

	updateGiveaway(
		giveawayId: Giveaway["id"],
		data: Omit<Giveaway, "id">
	): Promise<Giveaway> {
		return this.httpClient.$put(`/giveaways/${giveawayId}`, data)
	}

	deleteGiveaway(giveawayId: Giveaway["id"]): Promise<boolean> {
		return this.httpClient.$delete(`/giveaways/${giveawayId}`)
	}
}
