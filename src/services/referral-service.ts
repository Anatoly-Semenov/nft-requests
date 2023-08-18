import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { ReferralService as IReferralService, ResponseListMeta } from "@nft-types"

export default class ReferralService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getUsers(page = 1, limit = 25): Promise<ResponseListMeta<IReferralService.Users>> {
		return this.httpClient.$get("/referral/users", {
			params: { page, limit	}
		})
	}

	getTotal(): Promise<IReferralService.Total> {
		return this.httpClient.$get("/referral/total")
	}
}
