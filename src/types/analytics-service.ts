import { AnalyticsService } from "@sk-types/src/api/analytics-service"

export type CommonInfoResponse = AnalyticsService.ScholarColumn[]

export type ScholarsInfoResponse = {
	columns: AnalyticsService.ScholarColumn[]
}[]
