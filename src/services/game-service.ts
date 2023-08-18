import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { GameService as IGameService, SocialService } from "@nft-types"
import type { UpcomingGamesResponse, UpcomingGamesParams } from "../types/game-service"

export default class GameService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getUpcomingGames(
		params: UpcomingGamesParams = {}
	): Promise<UpcomingGamesResponse> {
		return this.httpClient.$get("/games/upcoming", {
			params: {
				...params
			}
		})
	}

	getUpcomingGame(id: string): Promise<IGameService.UpcomingGame> {
		return this.httpClient.$get(`/games/upcoming/${id}`)
	}

	getList(params?: { is_upcoming?: boolean }): Promise<IGameService.Game[]> {
		return this.httpClient.$get("/games/list", { params })
	}

	getFullList(): Promise<IGameService.Game[]> {
		return this.httpClient.$get("/games/info")
	}

	getFullGame(id: number): Promise<IGameService.Game> {
		return this.httpClient.$get(`/games/info/${id}`)
	}

	getTokens(gameId: number): Promise<IGameService.TokenContract> {
		return this.httpClient.$get(`/games/info/${gameId}/tokens`)
	}

	create(body: IGameService.GameDto): Promise<IGameService.Game> {
		return this.httpClient.$post("/games", body)
	}

	addAdditionalInfo(
		id: string,
		body: Partial<IGameService.Additional>
	): Promise<IGameService.Additional> {
		console.log(body)
		return this.httpClient.$post(`/games/${id}/additional`, body)
	}

	addSocialChannel(
		id: string,
		body: {
			channel: string
			service: SocialService.ServiceList
		}
	): Promise<SocialService.Channel> {
		return this.httpClient.$post(`/games/${id}/socials`, body)
	}

	update(id: string, body: Partial<IGameService.Game>): Promise<void> {
		return this.httpClient.$patch(`/games/${id}`, body)
	}

	delete(id: string): Promise<void> {
		return this.httpClient.$delete(`/games/${id}`)
	}

	deleteSocialChannel(id: string, socialId: string): Promise<void> {
		return this.httpClient.$delete(`/games/${id}/socials/${socialId}`)
	}

	// Charts
	getUsersByDate( gameId?: number): Promise<IGameService.UsersByDate> {
		return this.httpClient.$get(
			`/chain-parser/games/${gameId}/active-users`
		)
	}

	getAverageEarnings(gameId: number, months?: number): Promise<IGameService.AverageEarnings> {
		return this.httpClient.$get(
			`/chain-parser/games/${gameId}/average-earnings`,
			{ params: { months }}
		)
	}

	getSpendingAndEarnings(gameId: number): Promise<IGameService.SpendingAndEarnings> {
		return this.httpClient.$get(`/chain-parser/games/${gameId}/spending-earnings`)
	}

	getSpendersAndEarners(gameId: number, months?: number): Promise<IGameService.SpendersAndEarners> {
		return this.httpClient.$get(
			`/chain-parser/games/${gameId}/spenders-earners`,
			{ params: { months }}
		)
	}

	getNftBurnAndMint(gameId: number): Promise<IGameService.NtfBurnAndMint> {
		return this.httpClient.$get(
			`/chain-parser/games/${gameId}/nft-burn-mint`
		)
	}

	getNftTrades(gameId: number): Promise<IGameService.NftTrades> {
		return this.httpClient.$get(
			`/chain-parser/games/${gameId}/nft-trades`
		)
	}
}
