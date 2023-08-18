import { GameService } from "@nft-types/src/api/game-service"
import { SortType } from "@nft-types"

export type UpcomingGamesResponse = {
	count: number
	items: GameService.UpcomingGame[]
}

export interface UpcomingGamesParams {
	limit?: number
	offset?: number
	sort?: string
	sortType?: SortType
	search?: string
}
