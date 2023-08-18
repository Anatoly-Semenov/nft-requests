import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type { SocialService  } from "@nft-types"

export default class AuthService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	createNonce(data: { walletAddress: string }): Promise<{ nonce: string }> {
		return this.httpClient.$post("/auth/nonce", data)
	}

	verifySign(data: {
		walletAddress: string
		signature: string
		nonce: string
	}): Promise<{ status: "success" | "fail" }> {
		return this.httpClient.$post("/auth/signature", data)
	}

	signIn(data: { walletAddress: string }): Promise<{ accessToken: string }> {
		return this.httpClient.$post("/auth/signin", data)
	}

	signBySocial({
		provider,
		params
	}: {
		provider: SocialService.ServiceList
		params: Record<string, string>
	}): Promise<{ accessToken: string }> {
		return this.httpClient.$get(`/auth/${provider}/callback`, {
			params
		})
	}

	setAccessToken(accessToken: string) {
		this.cookies.set("accessToken", accessToken, {
			maxAge: 24 * 60 * 60 * 1000,
			path: "/"
		})
	}

	// Socials

	getDiscordToken(): Promise<string> {
		return this.httpClient.$get("/auth/discord")
	}

	getDiscordCallback(): Promise<string> {
		return this.httpClient.$get("/auth/discord/callback")
	}

	getTwitterToken(): Promise<string> {
		return this.httpClient.$get("/auth/twitter")
	}

	getTwitterCallback(): Promise<string> {
		return this.httpClient.$get("/auth/twitter/callback")
	}

	getEpicGamesToken(): Promise<string> {
		return this.httpClient.$get("/auth/epic-games")
	}

	getEpicGamesCallback(): Promise<string> {
		return this.httpClient.$get("/auth/epic-games/callback")
	}
}
