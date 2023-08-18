import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { SocialService, UserService as IUserService  } from "@nft-types"

export default class UserService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getCurrent(): Promise<IUserService.User> {
		return this.httpClient.$get("/users/current")
	}

	update(id: string, body: Partial<IUserService.User>): Promise<void> {
		return this.httpClient.$patch(`/users/${id}`, body)
	}

	connectSocial(id: string, type: SocialService.ServiceList, params: Record<string, string>): Promise<IUserService.User> {
		return this.httpClient.$post(
			`/users/${id}/${type}`,
			{},
			{ params }
		)
	}

	getWalletList(): Promise<IUserService.UserWallet[]> {
		return this.httpClient.$get(`/users/current/wallets`)
	}

	addWallet(wallet: string): Promise<IUserService.UserWallet> {
		return this.httpClient.$post('/users/current/wallets', { wallet })
	}

	addBalance(userId: string, body: IUserService.UserBalance): Promise<IUserService.UserBalance> {
		return this.httpClient.$post(`/users/${userId}/balance`, body)
	}

	verifyWallet(userId: string, wallet: string, body: IUserService.VerifyWalletBody): Promise<{ status: 'success' | 'fail' }> {
		return this.httpClient.$patch(`/users/${userId}/wallets/${wallet}`, body)
	}

	deleteWallet(userId: string, wallet: string): Promise<void> {
		return this.httpClient.$delete(`/users/${userId}/wallets/${wallet}`)
	}

	createNonce(): Promise<{ nonce: string }> {
		return this.httpClient.$get('/users/nonce/create')
	}

	connectSolanaAccount(account: string, signature: Array<any>): Promise<{ result: boolean }> {
		return this.httpClient.$post('/users/wallet/connect/solana-account', { account,	signature })
	}
}
