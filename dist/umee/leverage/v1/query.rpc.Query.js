"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.registeredTokens = this.registeredTokens.bind(this);
        this.marketSummary = this.marketSummary.bind(this);
        this.accountBalances = this.accountBalances.bind(this);
        this.accountSummary = this.accountSummary.bind(this);
        this.liquidationTargets = this.liquidationTargets.bind(this);
        this.badDebts = this.badDebts.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParams.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    registeredTokens(request = {}) {
        const data = query_1.QueryRegisteredTokens.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "RegisteredTokens", data);
        return promise.then(data => query_1.QueryRegisteredTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
    marketSummary(request) {
        const data = query_1.QueryMarketSummary.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "MarketSummary", data);
        return promise.then(data => query_1.QueryMarketSummaryResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountBalances(request) {
        const data = query_1.QueryAccountBalances.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "AccountBalances", data);
        return promise.then(data => query_1.QueryAccountBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountSummary(request) {
        const data = query_1.QueryAccountSummary.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "AccountSummary", data);
        return promise.then(data => query_1.QueryAccountSummaryResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidationTargets(request = {}) {
        const data = query_1.QueryLiquidationTargets.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "LiquidationTargets", data);
        return promise.then(data => query_1.QueryLiquidationTargetsResponse.decode(new binary_1.BinaryReader(data)));
    }
    badDebts(request = {}) {
        const data = query_1.QueryBadDebts.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "BadDebts", data);
        return promise.then(data => query_1.QueryBadDebtsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        registeredTokens(request) {
            return queryService.registeredTokens(request);
        },
        marketSummary(request) {
            return queryService.marketSummary(request);
        },
        accountBalances(request) {
            return queryService.accountBalances(request);
        },
        accountSummary(request) {
            return queryService.accountSummary(request);
        },
        liquidationTargets(request) {
            return queryService.liquidationTargets(request);
        },
        badDebts(request) {
            return queryService.badDebts(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
