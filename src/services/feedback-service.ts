import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { SendFeedbackBody } from "../types/feedback-service"
import type { FeedbackService as IFeedbackService } from "@nft-types"

export default class FeedbackService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	sendFeedback(body: SendFeedbackBody): Promise<IFeedbackService.Feedback> {
		return this.httpClient.$post("/feedback", body)
	}

	getFeedbackList(): Promise<IFeedbackService.Feedback[]> {
		return this.httpClient.$get("/feedback")
	}

	getFeedbackDetail(id: string): Promise<IFeedbackService.Feedback> {
		return this.httpClient.$get(`/feedback/${id}`)
	}

	deleteFeedback(id: string): Promise<void> {
		return this.httpClient.$delete(`/feedback/${id}`)
	}

	deleteByIds(ids: string[] = []): Promise<void> {
		return this.httpClient.$delete(`/feedback`, {
			params: {
				ids: ids
			}
		})
	}

	updateFeedbackViewed(id: string, viewed: boolean): IFeedbackService.Feedback {
		return this.httpClient.$put(`/feedback/${id}`, {
			viewed: viewed
		})
	}
}
