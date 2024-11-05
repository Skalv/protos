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
        this.exchangeRates = this.exchangeRates.bind(this);
        this.activeExchangeRates = this.activeExchangeRates.bind(this);
        this.feederDelegation = this.feederDelegation.bind(this);
        this.missCounter = this.missCounter.bind(this);
        this.slashWindow = this.slashWindow.bind(this);
        this.aggregatePrevote = this.aggregatePrevote.bind(this);
        this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
        this.aggregateVote = this.aggregateVote.bind(this);
        this.aggregateVotes = this.aggregateVotes.bind(this);
        this.params = this.params.bind(this);
    }
    exchangeRates(request) {
        const data = query_1.QueryExchangeRates.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "ExchangeRates", data);
        return promise.then(data => query_1.QueryExchangeRatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    activeExchangeRates(request = {}) {
        const data = query_1.QueryActiveExchangeRates.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "ActiveExchangeRates", data);
        return promise.then(data => query_1.QueryActiveExchangeRatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    feederDelegation(request) {
        const data = query_1.QueryFeederDelegation.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "FeederDelegation", data);
        return promise.then(data => query_1.QueryFeederDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
    missCounter(request) {
        const data = query_1.QueryMissCounter.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounter", data);
        return promise.then(data => query_1.QueryMissCounterResponse.decode(new binary_1.BinaryReader(data)));
    }
    slashWindow(request = {}) {
        const data = query_1.QuerySlashWindow.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "SlashWindow", data);
        return promise.then(data => query_1.QuerySlashWindowResponse.decode(new binary_1.BinaryReader(data)));
    }
    aggregatePrevote(request) {
        const data = query_1.QueryAggregatePrevote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevote", data);
        return promise.then(data => query_1.QueryAggregatePrevoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    aggregatePrevotes(request = {}) {
        const data = query_1.QueryAggregatePrevotes.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevotes", data);
        return promise.then(data => query_1.QueryAggregatePrevotesResponse.decode(new binary_1.BinaryReader(data)));
    }
    aggregateVote(request) {
        const data = query_1.QueryAggregateVote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVote", data);
        return promise.then(data => query_1.QueryAggregateVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    aggregateVotes(request = {}) {
        const data = query_1.QueryAggregateVotes.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVotes", data);
        return promise.then(data => query_1.QueryAggregateVotesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParams.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        exchangeRates(request) {
            return queryService.exchangeRates(request);
        },
        activeExchangeRates(request) {
            return queryService.activeExchangeRates(request);
        },
        feederDelegation(request) {
            return queryService.feederDelegation(request);
        },
        missCounter(request) {
            return queryService.missCounter(request);
        },
        slashWindow(request) {
            return queryService.slashWindow(request);
        },
        aggregatePrevote(request) {
            return queryService.aggregatePrevote(request);
        },
        aggregatePrevotes(request) {
            return queryService.aggregatePrevotes(request);
        },
        aggregateVote(request) {
            return queryService.aggregateVote(request);
        },
        aggregateVotes(request) {
            return queryService.aggregateVotes(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
