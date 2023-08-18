import { SocialService } from "@sk-types/src/api/social-service"

export interface StatsParams {
	gameId: number
	serviceName: SocialService.StatsServiceName
}

export interface StatsInfoParams extends StatsParams {
	take: number
}
