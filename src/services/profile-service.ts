import BaseService from "./base-service"

// Types
import { Constructor } from "../types"
import { ProfileService as IProfileService, Sort } from "@nft-types"

interface LeaderBoardParams {
	by_days?: IProfileService.LeaderboardDays
	q?: string
	limit?: number
	page?: number
	index?: Sort
	earned_achievements?: Sort
	games?: Sort
	points?: Sort
}

export default class ProfileService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getMe(): Promise<IProfileService.Me> {
		return this.httpClient.$get("/profile/me")
	}

	getGames(
		limit: number = 100,
		offset: number = 10,
		sort: string = "",
		sortType: "DESC" | "ASC" = "DESC",
		is_on_chain = true
	): Promise<IProfileService.ResponseGames> {
		const params: any = { limit, offset, is_on_chain }

		if (sort) {
			params.sort = sort
			params.sortType = sortType
		}

		return this.httpClient.$get(`/profile/games`, {
			params: params
		})
	}

	getGamesPreview(): Promise<IProfileService.GamePreviewResponse> {
		return this.httpClient.$get(`/profile/game-list`)
	}

	getGame(gameId: string): Promise<IProfileService.GameDetails> {
		return this.httpClient.$get(`/profile/games/${gameId}`)
	}

	getGameNfts(gameId: string): Promise<IProfileService.GameNft> {
		return this.httpClient.$get(`/profile/games/${gameId}/nfts`)
	}

	getGameAchievements(
		gameId: string
	): Promise<IProfileService.ResponseGameAchievements> {
		return this.httpClient.$get(`/profile/games/${gameId}/achievements`)
	}

	getEarnedAchievements(): Promise<
		IProfileService.ResponseAvailableAchievements
	> {
		return this.httpClient.$get(`/profile/earned-achievements`)
	}

	getAchievements(): Promise<IProfileService.ResponseAchievements> {
		return this.httpClient.$get(`/profile/achievements`)
	}

	getPublicProfile(id: number): Promise<IProfileService.PublicProfile> {
		return this.httpClient.$get(`/profile/${id}`)
	}

	getPublicAchievements(
		id: number
	): Promise<IProfileService.PublicAchievements> {
		return this.httpClient.$get(`/profile/${id}/achievements`)
	}

	getLeaderBoard({
		by_days,
		q,
		limit,
		page,
		index,
		earned_achievements,
		games,
		points
	}: LeaderBoardParams): Promise<IProfileService.LeaderboardResponse> {
		const params: any = {}

		// Search
		if (q) {
			params.q = q
		}

		// Pagination
		if (limit) {
			params.limit = limit
		}
		if (page) {
			params.page = page
		}

		// Filters
		if (by_days) {
			params.filter = { by_days }
		}

		// Sorters
		if (index || earned_achievements || games || points) {
			params.sort = {}

			if (index) {
				params.sort.index = index
			}
			if (earned_achievements) {
				params.sort.earned_achievements = earned_achievements
			}
			if (games) {
				params.sort.games = games
			}
			if (points) {
				params.sort.points = points
			}
		}

		return this.httpClient.$get(`/profile/leaderboard`, {
			params
		})
	}
}
