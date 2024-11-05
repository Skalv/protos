import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryParams.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    registeredTokens(request = {}) {
        const data = QueryRegisteredTokens.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "RegisteredTokens", data);
        return promise.then(data => QueryRegisteredTokensResponse.decode(new BinaryReader(data)));
    }
    marketSummary(request) {
        const data = QueryMarketSummary.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "MarketSummary", data);
        return promise.then(data => QueryMarketSummaryResponse.decode(new BinaryReader(data)));
    }
    accountBalances(request) {
        const data = QueryAccountBalances.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "AccountBalances", data);
        return promise.then(data => QueryAccountBalancesResponse.decode(new BinaryReader(data)));
    }
    accountSummary(request) {
        const data = QueryAccountSummary.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "AccountSummary", data);
        return promise.then(data => QueryAccountSummaryResponse.decode(new BinaryReader(data)));
    }
    liquidationTargets(request = {}) {
        const data = QueryLiquidationTargets.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "LiquidationTargets", data);
        return promise.then(data => QueryLiquidationTargetsResponse.decode(new BinaryReader(data)));
    }
    badDebts(request = {}) {
        const data = QueryBadDebts.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Query", "BadDebts", data);
        return promise.then(data => QueryBadDebtsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
