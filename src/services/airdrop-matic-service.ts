import BaseService from "./base-service"

// Types
import { Constructor } from "../types"
import { AirdropMaticService as IAirdropMaticService } from "@nft-types"

export default class AirdropMaticService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	send(): Promise<IAirdropMaticService.ResponseSend> {
		return this.httpClient.$post("/airdrop-matic")
	}

	isAllowed(): Promise<IAirdropMaticService.ResponseIsAllowed> {
		return this.httpClient.$get("/airdrop-matic/is-allowed")
	}
}
