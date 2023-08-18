;(function(s, r) {
	typeof exports == "object" && typeof module < "u"
		? r(exports)
		: typeof define == "function" && define.amd
		? define(["exports"], r)
		: ((s = typeof globalThis < "u" ? globalThis : s || self),
		  r((s.types = {})))
})(this, function(s) {
	"use strict"
	class r {
		constructor(t) {
			var n
			const e =
					(t == null ? void 0 : t.$axios) ||
					(t == null ? void 0 : t.HttpClient),
				a = (n = t == null ? void 0 : t.app) == null ? void 0 : n.$cookies,
				p = t == null ? void 0 : t.redirect,
				h = t == null ? void 0 : t.store
			;(this.httpClient = e),
				a && (this.cookies = a),
				p && (this.redirect = p),
				h && (this.store = h)
		}
	}
	class u extends r {
		constructor(t) {
			super(t)
		}
		getStatusProcessing() {
			return this.httpClient.$get("/achievements/progress/current")
		}
	}
	class o extends r {
		constructor(t) {
			super(t)
		}
		createNonce(t) {
			return this.httpClient.$post("/auth/nonce", t)
		}
		verifySign(t) {
			return this.httpClient.$post("/auth/signature", t)
		}
		signIn(t) {
			return this.httpClient.$post("/auth/signin", t)
		}
		signBySocial({ provider: t, params: e }) {
			return this.httpClient.$get(`/auth/${t}/callback`, { params: e })
		}
		setAccessToken(t) {
			this.cookies.set("accessToken", t, {
				maxAge: 24 * 60 * 60 * 1e3,
				path: "/"
			})
		}
		getDiscordToken() {
			return this.httpClient.$get("/auth/discord")
		}
		getDiscordCallback() {
			return this.httpClient.$get("/auth/discord/callback")
		}
		getTwitterToken() {
			return this.httpClient.$get("/auth/twitter")
		}
		getTwitterCallback() {
			return this.httpClient.$get("/auth/twitter/callback")
		}
		getEpicGamesToken() {
			return this.httpClient.$get("/auth/epic-games")
		}
		getEpicGamesCallback() {
			return this.httpClient.$get("/auth/epic-games/callback")
		}
	}
	class $ extends r {
		constructor(t) {
			super(t)
		}
		getCurrent() {
			return this.httpClient.$get("/users/current")
		}
		update(t, e) {
			return this.httpClient.$patch(`/users/${t}`, e)
		}
		connectSocial(t, e, a) {
			return this.httpClient.$post(`/users/${t}/${e}`, {}, { params: a })
		}
		getWalletList() {
			return this.httpClient.$get("/users/current/wallets")
		}
		addWallet(t) {
			return this.httpClient.$post("/users/current/wallets", { wallet: t })
		}
		addBalance(t, e) {
			return this.httpClient.$post(`/users/${t}/balance`, e)
		}
		verifyWallet(t, e, a) {
			return this.httpClient.$patch(`/users/${t}/wallets/${e}`, a)
		}
		deleteWallet(t, e) {
			return this.httpClient.$delete(`/users/${t}/wallets/${e}`)
		}
		createNonce() {
			return this.httpClient.$get("/users/nonce/create")
		}
		connectSolanaAccount(t, e) {
			return this.httpClient.$post("/users/wallet/connect/solana-account", {
				account: t,
				signature: e
			})
		}
	}
	class d extends r {
		constructor(t) {
			super(t)
		}
		getUpcomingGames(t = {}) {
			return this.httpClient.$get("/games/upcoming", { params: { ...t } })
		}
		getUpcomingGame(t) {
			return this.httpClient.$get(`/games/upcoming/${t}`)
		}
		getList(t) {
			return this.httpClient.$get("/games/list", { params: t })
		}
		getFullList() {
			return this.httpClient.$get("/games/info")
		}
		getFullGame(t) {
			return this.httpClient.$get(`/games/info/${t}`)
		}
		getTokens(t) {
			return this.httpClient.$get(`/games/info/${t}/tokens`)
		}
		create(t) {
			return this.httpClient.$post("/games", t)
		}
		addAdditionalInfo(t, e) {
			return console.log(e), this.httpClient.$post(`/games/${t}/additional`, e)
		}
		addSocialChannel(t, e) {
			return this.httpClient.$post(`/games/${t}/socials`, e)
		}
		update(t, e) {
			return this.httpClient.$patch(`/games/${t}`, e)
		}
		delete(t) {
			return this.httpClient.$delete(`/games/${t}`)
		}
		deleteSocialChannel(t, e) {
			return this.httpClient.$delete(`/games/${t}/socials/${e}`)
		}
		getUsersByDate(t) {
			return this.httpClient.$get(`/chain-parser/games/${t}/active-users`)
		}
		getAverageEarnings(t, e) {
			return this.httpClient.$get(`/chain-parser/games/${t}/average-earnings`, {
				params: { months: e }
			})
		}
		getSpendingAndEarnings(t) {
			return this.httpClient.$get(`/chain-parser/games/${t}/spending-earnings`)
		}
		getSpendersAndEarners(t, e) {
			return this.httpClient.$get(`/chain-parser/games/${t}/spenders-earners`, {
				params: { months: e }
			})
		}
		getNftBurnAndMint(t) {
			return this.httpClient.$get(`/chain-parser/games/${t}/nft-burn-mint`)
		}
		getNftTrades(t) {
			return this.httpClient.$get(`/chain-parser/games/${t}/nft-trades`)
		}
	}
	class C extends r {
		constructor(t) {
			super(t)
		}
		getNftList() {
			return this.httpClient.$get("/nfts")
		}
		getNft(t) {
			return this.httpClient.$get(`/nfts/${t}`)
		}
		getAirdropList() {
			return this.httpClient.$get("/airdrops")
		}
		getAirdrop(t) {
			return this.httpClient.$get(`/airdrops/${t}`)
		}
		verifyClaim(t, e = {}) {
			return this.httpClient.$post(`/nfts/${t}/verify`, e)
		}
	}
	class m extends r {
		constructor(t) {
			super(t)
		}
		getMe() {
			return this.httpClient.$get("/profile/me")
		}
		getGames(t = 100, e = 10, a = "", p = "DESC", h = !0) {
			const n = { limit: t, offset: e, is_on_chain: h }
			return (
				a && ((n.sort = a), (n.sortType = p)),
				this.httpClient.$get("/profile/games", { params: n })
			)
		}
		getGamesPreview() {
			return this.httpClient.$get("/profile/game-list")
		}
		getGame(t) {
			return this.httpClient.$get(`/profile/games/${t}`)
		}
		getGameNfts(t) {
			return this.httpClient.$get(`/profile/games/${t}/nfts`)
		}
		getGameAchievements(t) {
			return this.httpClient.$get(`/profile/games/${t}/achievements`)
		}
		getEarnedAchievements() {
			return this.httpClient.$get("/profile/earned-achievements")
		}
		getAchievements() {
			return this.httpClient.$get("/profile/achievements")
		}
		getPublicProfile(t) {
			return this.httpClient.$get(`/profile/${t}`)
		}
		getPublicAchievements(t) {
			return this.httpClient.$get(`/profile/${t}/achievements`)
		}
		getLeaderBoard({
			by_days: t,
			q: e,
			limit: a,
			page: p,
			index: h,
			earned_achievements: n,
			games: c,
			points: g
		}) {
			const l = {}
			return (
				e && (l.q = e),
				a && (l.limit = a),
				p && (l.page = p),
				t && (l.filter = { by_days: t }),
				(h || n || c || g) &&
					((l.sort = {}),
					h && (l.sort.index = h),
					n && (l.sort.earned_achievements = n),
					c && (l.sort.games = c),
					g && (l.sort.points = g)),
				this.httpClient.$get("/profile/leaderboard", { params: l })
			)
		}
	}
	class f extends r {
		constructor(t) {
			super(t)
		}
		getSocialStats(t) {
			return this.httpClient.$get("/socials/stats", { params: { ...t } })
		}
		getSocialStatsInfo(t) {
			return this.httpClient.$get("/socials/stats/info", { params: { ...t } })
		}
		getSocialLink(t) {
			return this.httpClient.$get("/socials/link", { params: { ...t } })
		}
	}
	class v extends r {
		constructor(t) {
			super(t)
		}
		getGiveawayList() {
			return this.httpClient.$get("/giveaways/list")
		}
		getGiveawayListAll(t) {
			return this.httpClient.$get("/giveaways/list-all", { params: t })
		}
		getGiveaway(t) {
			return this.httpClient.$get(`/giveaways/${t}`)
		}
		createGiveaway(t) {
			return this.httpClient.$post("/giveaways/create", t)
		}
		updateGiveaway(t, e) {
			return this.httpClient.$put(`/giveaways/${t}`, e)
		}
		deleteGiveaway(t) {
			return this.httpClient.$delete(`/giveaways/${t}`)
		}
	}
	class S extends r {
		constructor(t) {
			super(t)
		}
		getJobList(t) {
			return this.httpClient.$get(
				`https://parser.skilllabs.gg/chain-parser/list-job/${t}`
			)
		}
		getGameList() {
			return this.httpClient.$get(
				"https://parser.skilllabs.gg/chain-parser/list"
			)
		}
		startJob(t) {
			this.httpClient.$get(
				`https://parser.skilllabs.gg/chain-parser/start/${t}`
			)
		}
		stopJob(t) {
			this.httpClient.$get(`https://parser.skilllabs.gg/chain-parser/stop/${t}`)
		}
		getGameContractList() {
			return this.httpClient.$get(
				"https://parser.skilllabs.gg/parser-contract/game-contract"
			)
		}
		getTokenContractList() {
			return this.httpClient.$get(
				"https://parser.skilllabs.gg/parser-contract/token-contract"
			)
		}
		getGameWalletList() {
			return this.httpClient.$get(
				"https://parser.skilllabs.gg/parser-contract/game-wallet"
			)
		}
		saveGameContract(t) {
			return this.httpClient.$post(
				"https://parser.skilllabs.gg/parser-contract/game-contract",
				t
			)
		}
		deleteGameContract(t) {
			return this.httpClient.$delete(
				`https://parser.skilllabs.gg/parser-contract/game-contract/${t}`
			)
		}
		saveTokenContract(t) {
			return this.httpClient.$post(
				"https://parser.skilllabs.gg/parser-contract/token-contract",
				t
			)
		}
		deleteTokenContract(t) {
			return this.httpClient.$delete(
				`https://parser.skilllabs.gg/parser-contract/token-contract/${t}`
			)
		}
		saveGameWallet(t) {
			return this.httpClient.$post(
				"https://parser.skilllabs.gg/parser-contract/game-wallet",
				t
			)
		}
		deleteGameWallet(t) {
			return this.httpClient.$delete(
				`https://parser.skilllabs.gg/parser-contract/game-wallet/${t}`
			)
		}
	}
	class k extends r {
		constructor(t) {
			super(t)
		}
		sendFeedback(t) {
			return this.httpClient.$post("/feedback", t)
		}
		getFeedbackList() {
			return this.httpClient.$get("/feedback")
		}
		getFeedbackDetail(t) {
			return this.httpClient.$get(`/feedback/${t}`)
		}
		deleteFeedback(t) {
			return this.httpClient.$delete(`/feedback/${t}`)
		}
		deleteByIds(t = []) {
			return this.httpClient.$delete("/feedback", { params: { ids: t } })
		}
		updateFeedbackViewed(t, e) {
			return this.httpClient.$put(`/feedback/${t}`, { viewed: e })
		}
	}
	class b extends r {
		constructor(t) {
			super(t)
		}
		getLastInternalId() {
			return this.httpClient.$get("/analytics/last-internal-id")
		}
		getCommonInfo(t, e = 30) {
			return this.httpClient.$get("/analytics/info/common", {
				params: { gameId: t, days: e }
			})
		}
		getScholarsInfo(t, e = 30) {
			return this.httpClient.$get("/analytics/info/scholars", {
				params: { gameId: t, days: e }
			})
		}
		addScholar(t, e) {
			return this.httpClient.$post("/analytics/scholar", {
				data: { gameId: t, text: e }
			})
		}
		deleteScholar(t, e) {
			return this.httpClient.$delete("/analytics/scholar", {
				data: { wallet: t, gameId: e }
			})
		}
	}
	class w extends r {
		constructor(t) {
			super(t)
		}
		getArticles() {
			return this.httpClient.$get("/articles/list")
		}
		getArticlesByGame(t) {
			return this.httpClient.$get(`/articles/by-game/${t}`)
		}
	}
	class y extends r {
		constructor(t) {
			super(t)
		}
		getList(t) {
			return this.httpClient.$get("/rewards", { params: t })
		}
		create(t) {
			return this.httpClient.$post("/rewards", t)
		}
		update(t, e) {
			return this.httpClient.$patch(`/rewards/${t}`, e)
		}
		remove(t) {
			return this.httpClient.$delete(`/rewards/${t}`)
		}
	}
	class A extends r {
		constructor(t) {
			super(t)
		}
		send() {
			return this.httpClient.$post("/airdrop-matic")
		}
		isAllowed() {
			return this.httpClient.$get("/airdrop-matic/is-allowed")
		}
	}
	class G extends r {
		constructor(t) {
			super(t)
		}
		getList() {
			return this.httpClient.$get("/settings")
		}
		create(t) {
			return this.httpClient.$post("/settings", t)
		}
		update(t, e) {
			return this.httpClient.$patch(`/settings/${t}`, e)
		}
	}
	class L extends r {
		constructor(t) {
			super(t)
		}
		getUsers(t = 1, e = 25) {
			return this.httpClient.$get("/referral/users", {
				params: { page: t, limit: e }
			})
		}
		getTotal() {
			return this.httpClient.$get("/referral/total")
		}
	}
	;(s.AchievementsService = u),
		(s.AirdropMaticService = A),
		(s.AnalyticsService = b),
		(s.ArticlesService = w),
		(s.AuthService = o),
		(s.FeedbackService = k),
		(s.GameService = d),
		(s.GiveawayService = v),
		(s.JobsService = S),
		(s.NftService = C),
		(s.ProfileService = m),
		(s.ReferralService = L),
		(s.RewardsService = y),
		(s.SettingsService = G),
		(s.SocialService = f),
		(s.UserService = $),
		Object.defineProperties(s, {
			__esModule: { value: !0 },
			[Symbol.toStringTag]: { value: "Module" }
		})
})
