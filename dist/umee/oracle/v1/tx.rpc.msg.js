"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.aggregateExchangeRatePrevote = this.aggregateExchangeRatePrevote.bind(this);
        this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
        this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
    }
    aggregateExchangeRatePrevote(request) {
        const data = tx_1.MsgAggregateExchangeRatePrevote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Msg", "AggregateExchangeRatePrevote", data);
        return promise.then(data => tx_1.MsgAggregateExchangeRatePrevoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    aggregateExchangeRateVote(request) {
        const data = tx_1.MsgAggregateExchangeRateVote.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Msg", "AggregateExchangeRateVote", data);
        return promise.then(data => tx_1.MsgAggregateExchangeRateVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegateFeedConsent(request) {
        const data = tx_1.MsgDelegateFeedConsent.encode(request).finish();
        const promise = this.rpc.request("umee.oracle.v1.Msg", "DelegateFeedConsent", data);
        return promise.then(data => tx_1.MsgDelegateFeedConsentResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
