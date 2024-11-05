import { BinaryReader } from "../../../binary";
import { MsgRelayProviderPrices, MsgRelayProviderPricesResponse, MsgRelayPriceFeedPrice, MsgRelayPriceFeedPriceResponse, MsgRelayBandRates, MsgRelayBandRatesResponse, MsgRequestBandIBCRates, MsgRequestBandIBCRatesResponse, MsgRelayCoinbaseMessages, MsgRelayCoinbaseMessagesResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgRelayProviderPrices.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayProviderPrices", data);
        return promise.then(data => MsgRelayProviderPricesResponse.decode(new BinaryReader(data)));
    }
    relayPriceFeedPrice(request) {
        const data = MsgRelayPriceFeedPrice.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPriceFeedPrice", data);
        return promise.then(data => MsgRelayPriceFeedPriceResponse.decode(new BinaryReader(data)));
    }
    relayBandRates(request) {
        const data = MsgRelayBandRates.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayBandRates", data);
        return promise.then(data => MsgRelayBandRatesResponse.decode(new BinaryReader(data)));
    }
    requestBandIBCRates(request) {
        const data = MsgRequestBandIBCRates.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RequestBandIBCRates", data);
        return promise.then(data => MsgRequestBandIBCRatesResponse.decode(new BinaryReader(data)));
    }
    relayCoinbaseMessages(request) {
        const data = MsgRelayCoinbaseMessages.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayCoinbaseMessages", data);
        return promise.then(data => MsgRelayCoinbaseMessagesResponse.decode(new BinaryReader(data)));
    }
}
