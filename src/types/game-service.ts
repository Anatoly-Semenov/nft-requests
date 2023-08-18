import { GameService } from "@sk-types/src/api/game-service"
import { SortType } from "@sk-types"

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
