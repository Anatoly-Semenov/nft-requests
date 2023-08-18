import BaseService from "./base-service"

// types
import type { JobService as IJobService } from "@nft-types"
import type { Constructor } from "../types"
type Contract = IJobService.Contract
type JobGames = IJobService.JobGames

export default class JobsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getJobList(id: JobGames["gameId"]): Promise<IJobService.Job[]> {
		return this.httpClient.$get(
			`https://parser.skilllabs.gg/chain-parser/list-job/${id}`
		)
	}

	getGameList(): Promise<JobGames[]> {
		return this.httpClient.$get("https://parser.skilllabs.gg/chain-parser/list")
	}

	startJob(id: JobGames["gameId"]): void {
		this.httpClient.$get(`https://parser.skilllabs.gg/chain-parser/start/${id}`)
	}

	stopJob(id: JobGames["gameId"]): void {
		this.httpClient.$get(`https://parser.skilllabs.gg/chain-parser/stop/${id}`)
	}

	getGameContractList(): Promise<Contract[]> {
		return this.httpClient.$get(
			"https://parser.skilllabs.gg/parser-contract/game-contract"
		)
	}

	getTokenContractList(): Promise<Contract[]> {
		return this.httpClient.$get(
			"https://parser.skilllabs.gg/parser-contract/token-contract"
		)
	}

	getGameWalletList(): Promise<Contract[]> {
		return this.httpClient.$get(
			"https://parser.skilllabs.gg/parser-contract/game-wallet"
		)
	}

	saveGameContract(
		body: Contract
	): Promise<Contract> {
		return this.httpClient.$post(
			"https://parser.skilllabs.gg/parser-contract/game-contract",
			body
		)
	}

	deleteGameContract(id: string): Promise<void> {
		return this.httpClient.$delete(
			`https://parser.skilllabs.gg/parser-contract/game-contract/${id}`
		)
	}

	saveTokenContract(
		body: Contract
	): Promise<Contract> {
		return this.httpClient.$post(
			"https://parser.skilllabs.gg/parser-contract/token-contract",
			body
		)
	}

	deleteTokenContract(id: string): Promise<void> {
		return this.httpClient.$delete(
			`https://parser.skilllabs.gg/parser-contract/token-contract/${id}`
		)
	}

	saveGameWallet(body: Contract): Promise<Contract> {
		return this.httpClient.$post(
			"https://parser.skilllabs.gg/parser-contract/game-wallet",
			body
		)
	}

	deleteGameWallet(id: string): Promise<void> {
		return this.httpClient.$delete(
			`https://parser.skilllabs.gg/parser-contract/game-wallet/${id}`
		)
	}
}
