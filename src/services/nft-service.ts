import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { NftService as INftService, ResponseList } from "@nft-types"

export default class NftService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getNftList(): Promise<ResponseList<INftService.Nft>> {
		return this.httpClient.$get("/nfts")
	}

	getNft(id: string): Promise<INftService.Nft> {
		return this.httpClient.$get(`/nfts/${id}`)
	}

	getAirdropList(): Promise<ResponseList<any>> {
		return this.httpClient.$get("/airdrops")
	}

	getAirdrop(id: string): Promise<any> {
		return this.httpClient.$get(`/airdrops/${id}`)
	}

	verifyClaim(id: string, body: INftService.ValidateBody = {}): Promise<INftService.ValidateResponse> {
		return this.httpClient.$post(`/nfts/${id}/verify`, body)
	}
}
