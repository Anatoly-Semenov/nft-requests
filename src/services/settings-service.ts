import BaseService from "./base-service"

// Types
import { Constructor } from "../types"
import type { SettingsService as ISettingsService } from "@nft-types"

export default class SettingsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getList(): Promise<ISettingsService.Setting[]> {
		return this.httpClient.$get("/settings")
	}

	create(body: ISettingsService.CreateSettingBody): Promise<ISettingsService.Setting> {
		return this.httpClient.$post(`/settings`, body)
	}

	update(rewardId: number, body: Partial<ISettingsService.UpdateSettingBody>): Promise<void> {
		return this.httpClient.$patch(`/settings/${rewardId}`, body)
	}
}
