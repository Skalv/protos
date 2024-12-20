import { Rpc } from "../../../helpers";
import { MsgRelayProviderPrices, MsgRelayProviderPricesResponse, MsgRelayPriceFeedPrice, MsgRelayPriceFeedPriceResponse, MsgRelayBandRates, MsgRelayBandRatesResponse, MsgRequestBandIBCRates, MsgRequestBandIBCRatesResponse, MsgRelayCoinbaseMessages, MsgRelayCoinbaseMessagesResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
    /** RelayProviderPrice defines a method for relaying a price for a provider-based oracle */
    relayProviderPrices(request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse>;
    /** RelayPriceFeedPrice defines a method for relaying a price for a price feeder-based oracle */
    relayPriceFeedPrice(request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse>;
    /** RelayBandRates defines a method for relaying rates from Band */
    relayBandRates(request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse>;
    /** RequestBandIBCRates defines a method for fetching rates from Band ibc */
    requestBandIBCRates(request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse>;
    /** RelayCoinbaseMessages defines a method for relaying price messages from Coinbase API */
    relayCoinbaseMessages(request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    relayProviderPrices(request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse>;
    relayPriceFeedPrice(request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse>;
    relayBandRates(request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse>;
    requestBandIBCRates(request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse>;
    relayCoinbaseMessages(request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse>;
}
