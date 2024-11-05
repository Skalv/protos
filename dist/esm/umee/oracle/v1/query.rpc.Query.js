import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryExchangeRates.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "ExchangeRates", data);
        return promise.then(data => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
    }
    activeExchangeRates(request = {}) {
        const data = QueryActiveExchangeRates.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "ActiveExchangeRates", data);
        return promise.then(data => QueryActiveExchangeRatesResponse.decode(new BinaryReader(data)));
    }
    feederDelegation(request) {
        const data = QueryFeederDelegation.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "FeederDelegation", data);
        return promise.then(data => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
    }
    missCounter(request) {
        const data = QueryMissCounter.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounter", data);
        return promise.then(data => QueryMissCounterResponse.decode(new BinaryReader(data)));
    }
    slashWindow(request = {}) {
        const data = QuerySlashWindow.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "SlashWindow", data);
        return promise.then(data => QuerySlashWindowResponse.decode(new BinaryReader(data)));
    }
    aggregatePrevote(request) {
        const data = QueryAggregatePrevote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevote", data);
        return promise.then(data => QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
    }
    aggregatePrevotes(request = {}) {
        const data = QueryAggregatePrevotes.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevotes", data);
        return promise.then(data => QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
    }
    aggregateVote(request) {
        const data = QueryAggregateVote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVote", data);
        return promise.then(data => QueryAggregateVoteResponse.decode(new BinaryReader(data)));
    }
    aggregateVotes(request = {}) {
        const data = QueryAggregateVotes.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVotes", data);
        return promise.then(data => QueryAggregateVotesResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParams.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
