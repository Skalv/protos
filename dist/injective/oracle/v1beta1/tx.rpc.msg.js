"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.relayProviderPrices = this.relayProviderPrices.bind(this);
        this.relayPriceFeedPrice = this.relayPriceFeedPrice.bind(this);
        this.relayBandRates = this.relayBandRates.bind(this);
        this.requestBandIBCRates = this.requestBandIBCRates.bind(this);
        this.relayCoinbaseMessages = this.relayCoinbaseMessages.bind(this);
    }
    relayProviderPrices(request) {
        const data = tx_1.MsgRelayProviderPrices.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayProviderPrices", data);
        return promise.then(data => tx_1.MsgRelayProviderPricesResponse.decode(new binary_1.BinaryReader(data)));
    }
    relayPriceFeedPrice(request) {
        const data = tx_1.MsgRelayPriceFeedPrice.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPriceFeedPrice", data);
        return promise.then(data => tx_1.MsgRelayPriceFeedPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    relayBandRates(request) {
        const data = tx_1.MsgRelayBandRates.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayBandRates", data);
        return promise.then(data => tx_1.MsgRelayBandRatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    requestBandIBCRates(request) {
        const data = tx_1.MsgRequestBandIBCRates.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RequestBandIBCRates", data);
        return promise.then(data => tx_1.MsgRequestBandIBCRatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    relayCoinbaseMessages(request) {
        const data = tx_1.MsgRelayCoinbaseMessages.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayCoinbaseMessages", data);
        return promise.then(data => tx_1.MsgRelayCoinbaseMessagesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
