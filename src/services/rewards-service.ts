import BaseService from "./base-service"

// Types
import { Constructor } from "../types"
import type { RewardsService as IRewardsService } from "@nft-types"

export default class RewardsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getList(params?: IRewardsService.GetListQuery): Promise<IRewardsService.Response[]> {
		return this.httpClient.$get("/rewards", { params })
	}

	create(body: IRewardsService.CreateBody): Promise<IRewardsService.Reward> {
		return this.httpClient.$post(`/rewards`, body)
	}

	update(rewardId: number, body: Partial<IRewardsService.CreateBody>): Promise<void> {
		return this.httpClient.$patch(`/rewards/${rewardId}`, body)
	}

	remove(rewardId: number): Promise<void> {
		return this.httpClient.$delete(`/rewards/${rewardId}`)
	}
}
