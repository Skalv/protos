import { SubaccountOrderData, SubaccountOrderDataAmino, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataAmino, SubaccountOrderbookMetadataSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, Position, PositionAmino, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoAmino, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, TradeRecord, TradeRecordAmino, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceAmino, BalanceSDKType, DerivativePosition, DerivativePositionAmino, DerivativePositionSDKType, GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** CancellationStrategy is the list of cancellation strategies. */
export declare enum CancellationStrategy {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    UnspecifiedOrder = 0,
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    FromWorstToBest = 1,
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    FromBestToWorst = 2,
    UNRECOGNIZED = -1
}
export declare const CancellationStrategySDKType: typeof CancellationStrategy;
export declare const CancellationStrategyAmino: typeof CancellationStrategy;
export declare function cancellationStrategyFromJSON(object: any): CancellationStrategy;
export declare function cancellationStrategyToJSON(object: CancellationStrategy): string;
export interface Subaccount {
    trader: string;
    subaccountNonce: number;
}
export interface SubaccountProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.Subaccount";
    value: Uint8Array;
}
export interface SubaccountAmino {
    trader?: string;
    subaccount_nonce?: number;
}
export interface SubaccountAminoMsg {
    type: "/injective.exchange.v1beta1.Subaccount";
    value: SubaccountAmino;
}
export interface SubaccountSDKType {
    trader: string;
    subaccount_nonce: number;
}
export interface QuerySubaccountOrdersRequest {
    subaccountId: string;
    marketId: string;
}
export interface QuerySubaccountOrdersRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
    value: Uint8Array;
}
export interface QuerySubaccountOrdersRequestAmino {
    subaccount_id?: string;
    market_id?: string;
}
export interface QuerySubaccountOrdersRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
    value: QuerySubaccountOrdersRequestAmino;
}
export interface QuerySubaccountOrdersRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
export interface QuerySubaccountOrdersResponse {
    buyOrders: SubaccountOrderData[];
    sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
    value: Uint8Array;
}
export interface QuerySubaccountOrdersResponseAmino {
    buy_orders?: SubaccountOrderDataAmino[];
    sell_orders?: SubaccountOrderDataAmino[];
}
export interface QuerySubaccountOrdersResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
    value: QuerySubaccountOrdersResponseAmino;
}
export interface QuerySubaccountOrdersResponseSDKType {
    buy_orders: SubaccountOrderDataSDKType[];
    sell_orders: SubaccountOrderDataSDKType[];
}
export interface SubaccountOrderbookMetadataWithMarket {
    metadata?: SubaccountOrderbookMetadata;
    marketId: string;
    isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
    value: Uint8Array;
}
export interface SubaccountOrderbookMetadataWithMarketAmino {
    metadata?: SubaccountOrderbookMetadataAmino;
    market_id?: string;
    isBuy?: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketAminoMsg {
    type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
    value: SubaccountOrderbookMetadataWithMarketAmino;
}
export interface SubaccountOrderbookMetadataWithMarketSDKType {
    metadata?: SubaccountOrderbookMetadataSDKType;
    market_id: string;
    isBuy: boolean;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequest {
}
export interface QueryExchangeParamsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
    value: Uint8Array;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequestAmino {
}
export interface QueryExchangeParamsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
    value: QueryExchangeParamsRequestAmino;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequestSDKType {
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponse {
    params: Params;
}
export interface QueryExchangeParamsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
    value: Uint8Array;
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryExchangeParamsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
    value: QueryExchangeParamsResponseAmino;
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequest {
    subaccountId: string;
    subaccount?: Subaccount;
}
export interface QuerySubaccountDepositsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
    value: Uint8Array;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequestAmino {
    subaccount_id?: string;
    subaccount?: SubaccountAmino;
}
export interface QuerySubaccountDepositsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
    value: QuerySubaccountDepositsRequestAmino;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequestSDKType {
    subaccount_id: string;
    subaccount?: SubaccountSDKType;
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
    key: string;
    value?: Deposit;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAmino {
    key?: string;
    value?: DepositAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAminoMsg {
    type: string;
    value: QuerySubaccountDepositsResponse_DepositsEntryAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntrySDKType {
    key: string;
    value?: DepositSDKType;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponse {
    deposits: {
        [key: string]: Deposit;
    };
}
export interface QuerySubaccountDepositsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
    value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponseAmino {
    deposits?: {
        [key: string]: DepositAmino;
    };
}
export interface QuerySubaccountDepositsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
    value: QuerySubaccountDepositsResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponseSDKType {
    deposits: {
        [key: string]: DepositSDKType;
    };
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequest {
}
export interface QueryExchangeBalancesRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
    value: Uint8Array;
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequestAmino {
}
export interface QueryExchangeBalancesRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
    value: QueryExchangeBalancesRequestAmino;
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequestSDKType {
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponse {
    balances: Balance[];
}
export interface QueryExchangeBalancesResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
    value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponseAmino {
    balances?: BalanceAmino[];
}
export interface QueryExchangeBalancesResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
    value: QueryExchangeBalancesResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponseSDKType {
    balances: BalanceSDKType[];
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequest {
    subaccountId: string;
    denom: string;
}
export interface QuerySubaccountDepositRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
    value: Uint8Array;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequestAmino {
    subaccount_id?: string;
    denom?: string;
}
export interface QuerySubaccountDepositRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
    value: QuerySubaccountDepositRequestAmino;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequestSDKType {
    subaccount_id: string;
    denom: string;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponse {
    deposits?: Deposit;
}
export interface QuerySubaccountDepositResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
    value: Uint8Array;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponseAmino {
    deposits?: DepositAmino;
}
export interface QuerySubaccountDepositResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
    value: QuerySubaccountDepositResponseAmino;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponseSDKType {
    deposits?: DepositSDKType;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
}
export interface QuerySpotMarketsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
    value: Uint8Array;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequestAmino {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
export interface QuerySpotMarketsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
    value: QuerySpotMarketsRequestAmino;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequestSDKType {
    status: string;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponse {
    markets: SpotMarket[];
}
export interface QuerySpotMarketsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
    value: Uint8Array;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponseAmino {
    markets?: SpotMarketAmino[];
}
export interface QuerySpotMarketsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
    value: QuerySpotMarketsResponseAmino;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponseSDKType {
    markets: SpotMarketSDKType[];
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QuerySpotMarketRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
    value: Uint8Array;
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequestAmino {
    /** Market ID for the market */
    market_id?: string;
}
export interface QuerySpotMarketRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
    value: QuerySpotMarketRequestAmino;
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequestSDKType {
    market_id: string;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponse {
    market?: SpotMarket;
}
export interface QuerySpotMarketResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
    value: Uint8Array;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponseAmino {
    market?: SpotMarketAmino;
}
export interface QuerySpotMarketResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
    value: QuerySpotMarketResponseAmino;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponseSDKType {
    market?: SpotMarketSDKType;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: bigint;
}
export interface QuerySpotOrderbookRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
    value: Uint8Array;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    limit?: string;
}
export interface QuerySpotOrderbookRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
    value: QuerySpotOrderbookRequestAmino;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequestSDKType {
    market_id: string;
    limit: bigint;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponse {
    buysPriceLevel: PriceLevel[];
    sellsPriceLevel: PriceLevel[];
}
export interface QuerySpotOrderbookResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
    value: Uint8Array;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponseAmino {
    buys_price_level?: PriceLevelAmino[];
    sells_price_level?: PriceLevelAmino[];
}
export interface QuerySpotOrderbookResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
    value: QuerySpotOrderbookResponseAmino;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponseSDKType {
    buys_price_level: PriceLevelSDKType[];
    sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
export interface QuerySpotOrdersByHashesRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
    value: Uint8Array;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
    /** the order hashes */
    order_hashes?: string[];
}
export interface QuerySpotOrdersByHashesRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
    value: QuerySpotOrdersByHashesRequestAmino;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequestSDKType {
    market_id: string;
    subaccount_id: string;
    order_hashes: string[];
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponse {
    orders: TrimmedSpotLimitOrder[];
}
export interface QuerySpotOrdersByHashesResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
    value: Uint8Array;
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponseAmino {
    orders?: TrimmedSpotLimitOrderAmino[];
}
export interface QuerySpotOrdersByHashesResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
    value: QuerySpotOrdersByHashesResponseAmino;
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
export interface QueryTraderSpotOrdersRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
    value: Uint8Array;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
}
export interface QueryTraderSpotOrdersRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
    value: QueryTraderSpotOrdersRequestAmino;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequestSDKType {
    market_id: string;
    subaccount_id: string;
}
export interface TrimmedSpotLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedSpotLimitOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
    value: Uint8Array;
}
export interface TrimmedSpotLimitOrderAmino {
    /** price of the order */
    price?: string;
    /** quantity of the order */
    quantity?: string;
    /** the amount of the quantity remaining fillable */
    fillable?: string;
    /** true if the order is a buy */
    isBuy?: boolean;
    order_hash?: string;
}
export interface TrimmedSpotLimitOrderAminoMsg {
    type: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
    value: TrimmedSpotLimitOrderAmino;
}
export interface TrimmedSpotLimitOrderSDKType {
    price: string;
    quantity: string;
    fillable: string;
    isBuy: boolean;
    order_hash: string;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
export interface QueryTraderSpotOrdersResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
    value: Uint8Array;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponseAmino {
    orders?: TrimmedSpotLimitOrderAmino[];
}
export interface QueryTraderSpotOrdersResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
    value: QueryTraderSpotOrdersResponseAmino;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QuerySpotMidPriceAndTOBRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
    value: Uint8Array;
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequestAmino {
    /** Market ID for the market */
    market_id?: string;
}
export interface QuerySpotMidPriceAndTOBRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
    value: QuerySpotMidPriceAndTOBRequestAmino;
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequestSDKType {
    market_id: string;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice?: string;
    /** best buy price of the market */
    bestBuyPrice?: string;
    /** best sell price of the market */
    bestSellPrice?: string;
}
export interface QuerySpotMidPriceAndTOBResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
    value: Uint8Array;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponseAmino {
    /** mid price of the market */
    mid_price?: string;
    /** best buy price of the market */
    best_buy_price?: string;
    /** best sell price of the market */
    best_sell_price?: string;
}
export interface QuerySpotMidPriceAndTOBResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
    value: QuerySpotMidPriceAndTOBResponseAmino;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponseSDKType {
    mid_price?: string;
    best_buy_price?: string;
    best_sell_price?: string;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
    value: Uint8Array;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequestAmino {
    /** Market ID for the market */
    market_id?: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
    value: QueryDerivativeMidPriceAndTOBRequestAmino;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequestSDKType {
    market_id: string;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice?: string;
    /** best buy price of the market */
    bestBuyPrice?: string;
    /** best sell price of the market */
    bestSellPrice?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
    value: Uint8Array;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponseAmino {
    /** mid price of the market */
    mid_price?: string;
    /** best buy price of the market */
    best_buy_price?: string;
    /** best sell price of the market */
    best_sell_price?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
    value: QueryDerivativeMidPriceAndTOBResponseAmino;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponseSDKType {
    mid_price?: string;
    best_buy_price?: string;
    best_sell_price?: string;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: bigint;
}
export interface QueryDerivativeOrderbookRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
    value: Uint8Array;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    limit?: string;
}
export interface QueryDerivativeOrderbookRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
    value: QueryDerivativeOrderbookRequestAmino;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequestSDKType {
    market_id: string;
    limit: bigint;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponse {
    buysPriceLevel: PriceLevel[];
    sellsPriceLevel: PriceLevel[];
}
export interface QueryDerivativeOrderbookResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
    value: Uint8Array;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponseAmino {
    buys_price_level?: PriceLevelAmino[];
    sells_price_level?: PriceLevelAmino[];
}
export interface QueryDerivativeOrderbookResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
    value: QueryDerivativeOrderbookResponseAmino;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponseSDKType {
    buys_price_level: PriceLevelSDKType[];
    sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the base amount to cancel (free up) */
    baseAmount: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    referencePrice?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
    value: Uint8Array;
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
    /** the base amount to cancel (free up) */
    base_amount?: string;
    /** the quote amount to cancel (free up) */
    quote_amount?: string;
    /** The cancellation strategy */
    strategy?: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    reference_price?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
    value: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType {
    market_id: string;
    subaccount_id: string;
    base_amount: string;
    quote_amount: string;
    strategy: CancellationStrategy;
    reference_price?: string;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    referencePrice?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
    value: Uint8Array;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
    /** the quote amount to cancel (free up) */
    quote_amount?: string;
    /** The cancellation strategy */
    strategy?: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    reference_price?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
    value: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType {
    market_id: string;
    subaccount_id: string;
    quote_amount: string;
    strategy: CancellationStrategy;
    reference_price?: string;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
export interface QueryTraderDerivativeOrdersRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
    value: Uint8Array;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
}
export interface QueryTraderDerivativeOrdersRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
    value: QueryTraderDerivativeOrdersRequestAmino;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequestSDKType {
    market_id: string;
    subaccount_id: string;
}
export interface TrimmedDerivativeLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeLimitOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
    value: Uint8Array;
}
export interface TrimmedDerivativeLimitOrderAmino {
    /** price of the order */
    price?: string;
    /** quantity of the order */
    quantity?: string;
    /** margin of the order */
    margin?: string;
    /** the amount of the quantity remaining fillable */
    fillable?: string;
    /** true if the order is a buy */
    isBuy: boolean;
    order_hash?: string;
}
export interface TrimmedDerivativeLimitOrderAminoMsg {
    type: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
    value: TrimmedDerivativeLimitOrderAmino;
}
export interface TrimmedDerivativeLimitOrderSDKType {
    price: string;
    quantity: string;
    margin: string;
    fillable: string;
    isBuy: boolean;
    order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryTraderDerivativeOrdersResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
    value: Uint8Array;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponseAmino {
    orders?: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryTraderDerivativeOrdersResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
    value: QueryTraderDerivativeOrdersResponseAmino;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
export interface QueryDerivativeOrdersByHashesRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
    value: Uint8Array;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequestAmino {
    /** Market ID for the market */
    market_id?: string;
    /** SubaccountID of the trader */
    subaccount_id?: string;
    /** the order hashes */
    order_hashes?: string[];
}
export interface QueryDerivativeOrdersByHashesRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
    value: QueryDerivativeOrdersByHashesRequestAmino;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequestSDKType {
    market_id: string;
    subaccount_id: string;
    order_hashes: string[];
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryDerivativeOrdersByHashesResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
    value: Uint8Array;
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponseAmino {
    orders?: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryDerivativeOrdersByHashesResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
    value: QueryDerivativeOrdersByHashesResponseAmino;
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
}
export interface QueryDerivativeMarketsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
    value: Uint8Array;
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequestAmino {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
export interface QueryDerivativeMarketsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
    value: QueryDerivativeMarketsRequestAmino;
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequestSDKType {
    status: string;
}
export interface PriceLevel {
    price: string;
    /** quantity */
    quantity: string;
}
export interface PriceLevelProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.PriceLevel";
    value: Uint8Array;
}
export interface PriceLevelAmino {
    price?: string;
    /** quantity */
    quantity?: string;
}
export interface PriceLevelAminoMsg {
    type: "/injective.exchange.v1beta1.PriceLevel";
    value: PriceLevelAmino;
}
export interface PriceLevelSDKType {
    price: string;
    quantity: string;
}
export interface PerpetualMarketState {
    marketInfo?: PerpetualMarketInfo;
    fundingInfo?: PerpetualMarketFunding;
}
export interface PerpetualMarketStateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState";
    value: Uint8Array;
}
export interface PerpetualMarketStateAmino {
    market_info?: PerpetualMarketInfoAmino;
    funding_info?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketStateAminoMsg {
    type: "/injective.exchange.v1beta1.PerpetualMarketState";
    value: PerpetualMarketStateAmino;
}
export interface PerpetualMarketStateSDKType {
    market_info?: PerpetualMarketInfoSDKType;
    funding_info?: PerpetualMarketFundingSDKType;
}
export interface FullDerivativeMarket {
    market?: DerivativeMarket;
    perpetualInfo?: PerpetualMarketState;
    futuresInfo?: ExpiryFuturesMarketInfo;
    markPrice: string;
}
export interface FullDerivativeMarketProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket";
    value: Uint8Array;
}
export interface FullDerivativeMarketAmino {
    market?: DerivativeMarketAmino;
    perpetual_info?: PerpetualMarketStateAmino;
    futures_info?: ExpiryFuturesMarketInfoAmino;
    mark_price?: string;
}
export interface FullDerivativeMarketAminoMsg {
    type: "/injective.exchange.v1beta1.FullDerivativeMarket";
    value: FullDerivativeMarketAmino;
}
export interface FullDerivativeMarketSDKType {
    market?: DerivativeMarketSDKType;
    perpetual_info?: PerpetualMarketStateSDKType;
    futures_info?: ExpiryFuturesMarketInfoSDKType;
    mark_price: string;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponse {
    markets: FullDerivativeMarket[];
}
export interface QueryDerivativeMarketsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
    value: Uint8Array;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponseAmino {
    markets?: FullDerivativeMarketAmino[];
}
export interface QueryDerivativeMarketsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
    value: QueryDerivativeMarketsResponseAmino;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponseSDKType {
    markets: FullDerivativeMarketSDKType[];
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QueryDerivativeMarketRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
    value: Uint8Array;
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequestAmino {
    /** Market ID for the market */
    market_id?: string;
}
export interface QueryDerivativeMarketRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
    value: QueryDerivativeMarketRequestAmino;
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequestSDKType {
    market_id: string;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponse {
    market?: FullDerivativeMarket;
}
export interface QueryDerivativeMarketResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
    value: Uint8Array;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponseAmino {
    market?: FullDerivativeMarketAmino;
}
export interface QueryDerivativeMarketResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
    value: QueryDerivativeMarketResponseAmino;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponseSDKType {
    market?: FullDerivativeMarketSDKType;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QueryDerivativeMarketAddressRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
    value: Uint8Array;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequestAmino {
    /** Market ID for the market */
    market_id?: string;
}
export interface QueryDerivativeMarketAddressRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
    value: QueryDerivativeMarketAddressRequestAmino;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequestSDKType {
    market_id: string;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponse {
    /** address for the market */
    address: string;
    /** subaccountID for the market */
    subaccountId: string;
}
export interface QueryDerivativeMarketAddressResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
    value: Uint8Array;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponseAmino {
    /** address for the market */
    address?: string;
    /** subaccountID for the market */
    subaccount_id?: string;
}
export interface QueryDerivativeMarketAddressResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
    value: QueryDerivativeMarketAddressResponseAmino;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponseSDKType {
    address: string;
    subaccount_id: string;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequest {
    subaccountId: string;
}
export interface QuerySubaccountTradeNonceRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
    value: Uint8Array;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequestAmino {
    subaccount_id?: string;
}
export interface QuerySubaccountTradeNonceRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
    value: QuerySubaccountTradeNonceRequestAmino;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequest {
    subaccountId: string;
}
export interface QuerySubaccountPositionsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
    value: Uint8Array;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequestAmino {
    subaccount_id?: string;
}
export interface QuerySubaccountPositionsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
    value: QuerySubaccountPositionsRequestAmino;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
export interface QuerySubaccountPositionInMarketRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
    value: Uint8Array;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequestAmino {
    subaccount_id?: string;
    market_id?: string;
}
export interface QuerySubaccountPositionInMarketRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
    value: QuerySubaccountPositionInMarketRequestAmino;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
    value: Uint8Array;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequestAmino {
    subaccount_id?: string;
    market_id?: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
    value: QuerySubaccountEffectivePositionInMarketRequestAmino;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequest {
    subaccountId: string;
}
export interface QuerySubaccountOrderMetadataRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
    value: Uint8Array;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequestAmino {
    subaccount_id?: string;
}
export interface QuerySubaccountOrderMetadataRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
    value: QuerySubaccountOrderMetadataRequestAmino;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponse {
    state: DerivativePosition[];
}
export interface QuerySubaccountPositionsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
    value: Uint8Array;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponseAmino {
    state?: DerivativePositionAmino[];
}
export interface QuerySubaccountPositionsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
    value: QuerySubaccountPositionsResponseAmino;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponse {
    state?: Position;
}
export interface QuerySubaccountPositionInMarketResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
    value: Uint8Array;
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponseAmino {
    state?: PositionAmino;
}
export interface QuerySubaccountPositionInMarketResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
    value: QuerySubaccountPositionInMarketResponseAmino;
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponseSDKType {
    state?: PositionSDKType;
}
export interface EffectivePosition {
    isLong: boolean;
    quantity: string;
    entryPrice: string;
    effectiveMargin: string;
}
export interface EffectivePositionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.EffectivePosition";
    value: Uint8Array;
}
export interface EffectivePositionAmino {
    is_long?: boolean;
    quantity?: string;
    entry_price?: string;
    effective_margin?: string;
}
export interface EffectivePositionAminoMsg {
    type: "/injective.exchange.v1beta1.EffectivePosition";
    value: EffectivePositionAmino;
}
export interface EffectivePositionSDKType {
    is_long: boolean;
    quantity: string;
    entry_price: string;
    effective_margin: string;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponse {
    state?: EffectivePosition;
}
export interface QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
    value: Uint8Array;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponseAmino {
    state?: EffectivePositionAmino;
}
export interface QuerySubaccountEffectivePositionInMarketResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
    value: QuerySubaccountEffectivePositionInMarketResponseAmino;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponseSDKType {
    state?: EffectivePositionSDKType;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequest {
    marketId: string;
}
export interface QueryPerpetualMarketInfoRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
    value: Uint8Array;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequestAmino {
    market_id?: string;
}
export interface QueryPerpetualMarketInfoRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
    value: QueryPerpetualMarketInfoRequestAmino;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequestSDKType {
    market_id: string;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponse {
    info: PerpetualMarketInfo;
}
export interface QueryPerpetualMarketInfoResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
    value: Uint8Array;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponseAmino {
    info?: PerpetualMarketInfoAmino;
}
export interface QueryPerpetualMarketInfoResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
    value: QueryPerpetualMarketInfoResponseAmino;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponseSDKType {
    info: PerpetualMarketInfoSDKType;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequest {
    marketId: string;
}
export interface QueryExpiryFuturesMarketInfoRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
    value: Uint8Array;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequestAmino {
    market_id?: string;
}
export interface QueryExpiryFuturesMarketInfoRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
    value: QueryExpiryFuturesMarketInfoRequestAmino;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequestSDKType {
    market_id: string;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponse {
    info: ExpiryFuturesMarketInfo;
}
export interface QueryExpiryFuturesMarketInfoResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
    value: Uint8Array;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponseAmino {
    info?: ExpiryFuturesMarketInfoAmino;
}
export interface QueryExpiryFuturesMarketInfoResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
    value: QueryExpiryFuturesMarketInfoResponseAmino;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponseSDKType {
    info: ExpiryFuturesMarketInfoSDKType;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequest {
    marketId: string;
}
export interface QueryPerpetualMarketFundingRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
    value: Uint8Array;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequestAmino {
    market_id?: string;
}
export interface QueryPerpetualMarketFundingRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
    value: QueryPerpetualMarketFundingRequestAmino;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequestSDKType {
    market_id: string;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponse {
    state: PerpetualMarketFunding;
}
export interface QueryPerpetualMarketFundingResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
    value: Uint8Array;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponseAmino {
    state?: PerpetualMarketFundingAmino;
}
export interface QueryPerpetualMarketFundingResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
    value: QueryPerpetualMarketFundingResponseAmino;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponseSDKType {
    state: PerpetualMarketFundingSDKType;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponse {
    metadata: SubaccountOrderbookMetadataWithMarket[];
}
export interface QuerySubaccountOrderMetadataResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
    value: Uint8Array;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponseAmino {
    metadata?: SubaccountOrderbookMetadataWithMarketAmino[];
}
export interface QuerySubaccountOrderMetadataResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
    value: QuerySubaccountOrderMetadataResponseAmino;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponseSDKType {
    metadata: SubaccountOrderbookMetadataWithMarketSDKType[];
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponse {
    nonce: number;
}
export interface QuerySubaccountTradeNonceResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
    value: Uint8Array;
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponseAmino {
    nonce?: number;
}
export interface QuerySubaccountTradeNonceResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
    value: QuerySubaccountTradeNonceResponseAmino;
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponseSDKType {
    nonce: number;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponse {
    state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {
}
export interface QueryPositionsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest";
    value: Uint8Array;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestAmino {
}
export interface QueryPositionsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPositionsRequest";
    value: QueryPositionsRequestAmino;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponse {
    state: DerivativePosition[];
}
export interface QueryPositionsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse";
    value: Uint8Array;
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponseAmino {
    state?: DerivativePositionAmino[];
}
export interface QueryPositionsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPositionsResponse";
    value: QueryPositionsResponseAmino;
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequest {
    accounts: string[];
    pendingPoolTimestamp: bigint;
}
export interface QueryTradeRewardPointsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
    value: Uint8Array;
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequestAmino {
    accounts?: string[];
    pending_pool_timestamp?: string;
}
export interface QueryTradeRewardPointsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
    value: QueryTradeRewardPointsRequestAmino;
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequestSDKType {
    accounts: string[];
    pending_pool_timestamp: bigint;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponse {
    accountTradeRewardPoints: string[];
}
export interface QueryTradeRewardPointsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
    value: Uint8Array;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponseAmino {
    account_trade_reward_points?: string[];
}
export interface QueryTradeRewardPointsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
    value: QueryTradeRewardPointsResponseAmino;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponseSDKType {
    account_trade_reward_points: string[];
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequest {
}
export interface QueryTradeRewardCampaignRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
    value: Uint8Array;
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequestAmino {
}
export interface QueryTradeRewardCampaignRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
    value: QueryTradeRewardCampaignRequestAmino;
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequestSDKType {
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponse {
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    totalTradeRewardPoints: string;
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    pendingTotalTradeRewardPoints: string[];
}
export interface QueryTradeRewardCampaignResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
    value: Uint8Array;
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponseAmino {
    trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
    trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
    total_trade_reward_points?: string;
    pending_trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
    pending_total_trade_reward_points?: string[];
}
export interface QueryTradeRewardCampaignResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
    value: QueryTradeRewardCampaignResponseAmino;
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponseSDKType {
    trading_reward_campaign_info?: TradingRewardCampaignInfoSDKType;
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    total_trade_reward_points: string;
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    pending_total_trade_reward_points: string[];
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequest {
    account: string;
}
export interface QueryIsOptedOutOfRewardsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
    value: Uint8Array;
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequestAmino {
    account?: string;
}
export interface QueryIsOptedOutOfRewardsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
    value: QueryIsOptedOutOfRewardsRequestAmino;
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequestSDKType {
    account: string;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponse {
    isOptedOut: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
    value: Uint8Array;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponseAmino {
    is_opted_out?: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
    value: QueryIsOptedOutOfRewardsResponseAmino;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponseSDKType {
    is_opted_out: boolean;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequest {
}
export interface QueryOptedOutOfRewardsAccountsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
    value: Uint8Array;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequestAmino {
}
export interface QueryOptedOutOfRewardsAccountsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
    value: QueryOptedOutOfRewardsAccountsRequestAmino;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequestSDKType {
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponse {
    accounts: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
    value: Uint8Array;
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponseAmino {
    accounts?: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
    value: QueryOptedOutOfRewardsAccountsResponseAmino;
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponseSDKType {
    accounts: string[];
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequest {
    account: string;
}
export interface QueryFeeDiscountAccountInfoRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
    value: Uint8Array;
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequestAmino {
    account?: string;
}
export interface QueryFeeDiscountAccountInfoRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
    value: QueryFeeDiscountAccountInfoRequestAmino;
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequestSDKType {
    account: string;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponse {
    tierLevel: bigint;
    accountInfo?: FeeDiscountTierInfo;
    accountTtl?: FeeDiscountTierTTL;
}
export interface QueryFeeDiscountAccountInfoResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
    value: Uint8Array;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponseAmino {
    tier_level?: string;
    account_info?: FeeDiscountTierInfoAmino;
    account_ttl?: FeeDiscountTierTTLAmino;
}
export interface QueryFeeDiscountAccountInfoResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
    value: QueryFeeDiscountAccountInfoResponseAmino;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponseSDKType {
    tier_level: bigint;
    account_info?: FeeDiscountTierInfoSDKType;
    account_ttl?: FeeDiscountTierTTLSDKType;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequest {
}
export interface QueryFeeDiscountScheduleRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
    value: Uint8Array;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequestAmino {
}
export interface QueryFeeDiscountScheduleRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
    value: QueryFeeDiscountScheduleRequestAmino;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequestSDKType {
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponse {
    feeDiscountSchedule?: FeeDiscountSchedule;
}
export interface QueryFeeDiscountScheduleResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
    value: Uint8Array;
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponseAmino {
    fee_discount_schedule?: FeeDiscountScheduleAmino;
}
export interface QueryFeeDiscountScheduleResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
    value: QueryFeeDiscountScheduleResponseAmino;
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponseSDKType {
    fee_discount_schedule?: FeeDiscountScheduleSDKType;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequest {
    dustFactor: bigint;
}
export interface QueryBalanceMismatchesRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
    value: Uint8Array;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequestAmino {
    dust_factor?: string;
}
export interface QueryBalanceMismatchesRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
    value: QueryBalanceMismatchesRequestAmino;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequestSDKType {
    dust_factor: bigint;
}
export interface BalanceMismatch {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
    expectedTotal: string;
    difference: string;
}
export interface BalanceMismatchProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BalanceMismatch";
    value: Uint8Array;
}
export interface BalanceMismatchAmino {
    subaccountId?: string;
    denom?: string;
    available?: string;
    total?: string;
    balance_hold?: string;
    expected_total?: string;
    difference?: string;
}
export interface BalanceMismatchAminoMsg {
    type: "/injective.exchange.v1beta1.BalanceMismatch";
    value: BalanceMismatchAmino;
}
export interface BalanceMismatchSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
    expected_total: string;
    difference: string;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponse {
    balanceMismatches: BalanceMismatch[];
}
export interface QueryBalanceMismatchesResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
    value: Uint8Array;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponseAmino {
    balance_mismatches?: BalanceMismatchAmino[];
}
export interface QueryBalanceMismatchesResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
    value: QueryBalanceMismatchesResponseAmino;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponseSDKType {
    balance_mismatches: BalanceMismatchSDKType[];
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequest {
}
export interface QueryBalanceWithBalanceHoldsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
    value: Uint8Array;
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequestAmino {
}
export interface QueryBalanceWithBalanceHoldsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
    value: QueryBalanceWithBalanceHoldsRequestAmino;
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequestSDKType {
}
export interface BalanceWithMarginHold {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
}
export interface BalanceWithMarginHoldProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold";
    value: Uint8Array;
}
export interface BalanceWithMarginHoldAmino {
    subaccountId?: string;
    denom?: string;
    available?: string;
    total?: string;
    balance_hold?: string;
}
export interface BalanceWithMarginHoldAminoMsg {
    type: "/injective.exchange.v1beta1.BalanceWithMarginHold";
    value: BalanceWithMarginHoldAmino;
}
export interface BalanceWithMarginHoldSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponse {
    balanceWithBalanceHolds: BalanceWithMarginHold[];
}
export interface QueryBalanceWithBalanceHoldsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
    value: Uint8Array;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponseAmino {
    balance_with_balance_holds?: BalanceWithMarginHoldAmino[];
}
export interface QueryBalanceWithBalanceHoldsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
    value: QueryBalanceWithBalanceHoldsResponseAmino;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponseSDKType {
    balance_with_balance_holds: BalanceWithMarginHoldSDKType[];
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequest {
}
export interface QueryFeeDiscountTierStatisticsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
    value: Uint8Array;
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequestAmino {
}
export interface QueryFeeDiscountTierStatisticsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
    value: QueryFeeDiscountTierStatisticsRequestAmino;
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {
}
export interface TierStatistic {
    tier: bigint;
    count: bigint;
}
export interface TierStatisticProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TierStatistic";
    value: Uint8Array;
}
export interface TierStatisticAmino {
    tier?: string;
    count?: string;
}
export interface TierStatisticAminoMsg {
    type: "/injective.exchange.v1beta1.TierStatistic";
    value: TierStatisticAmino;
}
export interface TierStatisticSDKType {
    tier: bigint;
    count: bigint;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponse {
    statistics: TierStatistic[];
}
export interface QueryFeeDiscountTierStatisticsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
    value: Uint8Array;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponseAmino {
    statistics?: TierStatisticAmino[];
}
export interface QueryFeeDiscountTierStatisticsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
    value: QueryFeeDiscountTierStatisticsResponseAmino;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponseSDKType {
    statistics: TierStatisticSDKType[];
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequest {
}
export interface NinjaVaultInfosRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest";
    value: Uint8Array;
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequestAmino {
}
export interface NinjaVaultInfosRequestAminoMsg {
    type: "/injective.exchange.v1beta1.NinjaVaultInfosRequest";
    value: NinjaVaultInfosRequestAmino;
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequestSDKType {
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponse {
    masterAddresses: string[];
    derivativeAddresses: string[];
    spotAddresses: string[];
    cw20Addresses: string[];
}
export interface NinjaVaultInfosResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse";
    value: Uint8Array;
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponseAmino {
    master_addresses?: string[];
    derivative_addresses?: string[];
    spot_addresses?: string[];
    cw20_addresses?: string[];
}
export interface NinjaVaultInfosResponseAminoMsg {
    type: "/injective.exchange.v1beta1.NinjaVaultInfosResponse";
    value: NinjaVaultInfosResponseAmino;
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponseSDKType {
    master_addresses: string[];
    derivative_addresses: string[];
    spot_addresses: string[];
    cw20_addresses: string[];
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequest {
    vaultSubaccountId: string;
}
export interface QueryMarketIDFromVaultRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
    value: Uint8Array;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestAmino {
    vault_subaccount_id?: string;
}
export interface QueryMarketIDFromVaultRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
    value: QueryMarketIDFromVaultRequestAmino;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestSDKType {
    vault_subaccount_id: string;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponse {
    marketId: string;
}
export interface QueryMarketIDFromVaultResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
    value: Uint8Array;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponseAmino {
    market_id?: string;
}
export interface QueryMarketIDFromVaultResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
    value: QueryMarketIDFromVaultResponseAmino;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponseSDKType {
    market_id: string;
}
export interface QueryHistoricalTradeRecordsRequest {
    marketId: string;
}
export interface QueryHistoricalTradeRecordsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
    value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsRequestAmino {
    market_id?: string;
}
export interface QueryHistoricalTradeRecordsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
    value: QueryHistoricalTradeRecordsRequestAmino;
}
export interface QueryHistoricalTradeRecordsRequestSDKType {
    market_id: string;
}
export interface QueryHistoricalTradeRecordsResponse {
    tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
    value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsResponseAmino {
    trade_records?: TradeRecordsAmino[];
}
export interface QueryHistoricalTradeRecordsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
    value: QueryHistoricalTradeRecordsResponseAmino;
}
export interface QueryHistoricalTradeRecordsResponseSDKType {
    trade_records: TradeRecordsSDKType[];
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptions {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    tradeGroupingSec: bigint;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    maxAge: bigint;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    includeRawHistory: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    includeMetadata: boolean;
}
export interface TradeHistoryOptionsProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions";
    value: Uint8Array;
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptionsAmino {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    trade_grouping_sec?: string;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    max_age?: string;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    include_raw_history?: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    include_metadata?: boolean;
}
export interface TradeHistoryOptionsAminoMsg {
    type: "/injective.exchange.v1beta1.TradeHistoryOptions";
    value: TradeHistoryOptionsAmino;
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptionsSDKType {
    trade_grouping_sec: bigint;
    max_age: bigint;
    include_raw_history: boolean;
    include_metadata: boolean;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequest {
    marketId: string;
    tradeHistoryOptions?: TradeHistoryOptions;
}
export interface QueryMarketVolatilityRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
    value: Uint8Array;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequestAmino {
    market_id?: string;
    trade_history_options?: TradeHistoryOptionsAmino;
}
export interface QueryMarketVolatilityRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
    value: QueryMarketVolatilityRequestAmino;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequestSDKType {
    market_id: string;
    trade_history_options?: TradeHistoryOptionsSDKType;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponse {
    volatility: string;
    historyMetadata?: MetadataStatistics;
    rawHistory: TradeRecord[];
}
export interface QueryMarketVolatilityResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
    value: Uint8Array;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponseAmino {
    volatility?: string;
    history_metadata?: MetadataStatisticsAmino;
    raw_history?: TradeRecordAmino[];
}
export interface QueryMarketVolatilityResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
    value: QueryMarketVolatilityResponseAmino;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponseSDKType {
    volatility: string;
    history_metadata?: MetadataStatisticsSDKType;
    raw_history: TradeRecordSDKType[];
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
}
export interface QueryBinaryMarketsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
    value: Uint8Array;
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequestAmino {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
export interface QueryBinaryMarketsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
    value: QueryBinaryMarketsRequestAmino;
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequestSDKType {
    status: string;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponse {
    markets: BinaryOptionsMarket[];
}
export interface QueryBinaryMarketsResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
    value: Uint8Array;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponseAmino {
    markets?: BinaryOptionsMarketAmino[];
}
export interface QueryBinaryMarketsResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
    value: QueryBinaryMarketsResponseAmino;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponseSDKType {
    markets: BinaryOptionsMarketSDKType[];
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequest {
    subaccountId: string;
    marketId: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
    value: Uint8Array;
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequestAmino {
    subaccount_id?: string;
    market_id?: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
    value: QueryTraderDerivativeConditionalOrdersRequestAmino;
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
export interface TrimmedDerivativeConditionalOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** price to trigger the order */
    triggerPrice: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeConditionalOrderProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
    value: Uint8Array;
}
export interface TrimmedDerivativeConditionalOrderAmino {
    /** price of the order */
    price?: string;
    /** quantity of the order */
    quantity?: string;
    /** margin of the order */
    margin?: string;
    /** price to trigger the order */
    triggerPrice?: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    order_hash?: string;
}
export interface TrimmedDerivativeConditionalOrderAminoMsg {
    type: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
    value: TrimmedDerivativeConditionalOrderAmino;
}
export interface TrimmedDerivativeConditionalOrderSDKType {
    price: string;
    quantity: string;
    margin: string;
    triggerPrice: string;
    isBuy: boolean;
    isLimit: boolean;
    order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponse {
    orders: TrimmedDerivativeConditionalOrder[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
    value: Uint8Array;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponseAmino {
    orders?: TrimmedDerivativeConditionalOrderAmino[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
    value: QueryTraderDerivativeConditionalOrdersResponseAmino;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponseSDKType {
    orders: TrimmedDerivativeConditionalOrderSDKType[];
}
export declare const Subaccount: {
    typeUrl: string;
    encode(message: Subaccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Subaccount;
    fromPartial(object: Partial<Subaccount>): Subaccount;
    fromAmino(object: SubaccountAmino): Subaccount;
    toAmino(message: Subaccount): SubaccountAmino;
    fromAminoMsg(object: SubaccountAminoMsg): Subaccount;
    fromProtoMsg(message: SubaccountProtoMsg): Subaccount;
    toProto(message: Subaccount): Uint8Array;
    toProtoMsg(message: Subaccount): SubaccountProtoMsg;
};
export declare const QuerySubaccountOrdersRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersRequest;
    fromPartial(object: Partial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
    fromAmino(object: QuerySubaccountOrdersRequestAmino): QuerySubaccountOrdersRequest;
    toAmino(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestAmino;
    fromAminoMsg(object: QuerySubaccountOrdersRequestAminoMsg): QuerySubaccountOrdersRequest;
    fromProtoMsg(message: QuerySubaccountOrdersRequestProtoMsg): QuerySubaccountOrdersRequest;
    toProto(message: QuerySubaccountOrdersRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestProtoMsg;
};
export declare const QuerySubaccountOrdersResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersResponse;
    fromPartial(object: Partial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
    fromAmino(object: QuerySubaccountOrdersResponseAmino): QuerySubaccountOrdersResponse;
    toAmino(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseAmino;
    fromAminoMsg(object: QuerySubaccountOrdersResponseAminoMsg): QuerySubaccountOrdersResponse;
    fromProtoMsg(message: QuerySubaccountOrdersResponseProtoMsg): QuerySubaccountOrdersResponse;
    toProto(message: QuerySubaccountOrdersResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseProtoMsg;
};
export declare const SubaccountOrderbookMetadataWithMarket: {
    typeUrl: string;
    encode(message: SubaccountOrderbookMetadataWithMarket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket;
    fromPartial(object: Partial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
    fromAmino(object: SubaccountOrderbookMetadataWithMarketAmino): SubaccountOrderbookMetadataWithMarket;
    toAmino(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketAmino;
    fromAminoMsg(object: SubaccountOrderbookMetadataWithMarketAminoMsg): SubaccountOrderbookMetadataWithMarket;
    fromProtoMsg(message: SubaccountOrderbookMetadataWithMarketProtoMsg): SubaccountOrderbookMetadataWithMarket;
    toProto(message: SubaccountOrderbookMetadataWithMarket): Uint8Array;
    toProtoMsg(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketProtoMsg;
};
export declare const QueryExchangeParamsRequest: {
    typeUrl: string;
    encode(_: QueryExchangeParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsRequest;
    fromPartial(_: Partial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
    fromAmino(_: QueryExchangeParamsRequestAmino): QueryExchangeParamsRequest;
    toAmino(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestAmino;
    fromAminoMsg(object: QueryExchangeParamsRequestAminoMsg): QueryExchangeParamsRequest;
    fromProtoMsg(message: QueryExchangeParamsRequestProtoMsg): QueryExchangeParamsRequest;
    toProto(message: QueryExchangeParamsRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeParamsRequest): QueryExchangeParamsRequestProtoMsg;
};
export declare const QueryExchangeParamsResponse: {
    typeUrl: string;
    encode(message: QueryExchangeParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsResponse;
    fromPartial(object: Partial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
    fromAmino(object: QueryExchangeParamsResponseAmino): QueryExchangeParamsResponse;
    toAmino(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseAmino;
    fromAminoMsg(object: QueryExchangeParamsResponseAminoMsg): QueryExchangeParamsResponse;
    fromProtoMsg(message: QueryExchangeParamsResponseProtoMsg): QueryExchangeParamsResponse;
    toProto(message: QueryExchangeParamsResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseProtoMsg;
};
export declare const QuerySubaccountDepositsRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsRequest;
    fromPartial(object: Partial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
    fromAmino(object: QuerySubaccountDepositsRequestAmino): QuerySubaccountDepositsRequest;
    toAmino(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestAmino;
    fromAminoMsg(object: QuerySubaccountDepositsRequestAminoMsg): QuerySubaccountDepositsRequest;
    fromProtoMsg(message: QuerySubaccountDepositsRequestProtoMsg): QuerySubaccountDepositsRequest;
    toProto(message: QuerySubaccountDepositsRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestProtoMsg;
};
export declare const QuerySubaccountDepositsResponse_DepositsEntry: {
    encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
    fromAmino(object: QuerySubaccountDepositsResponse_DepositsEntryAmino): QuerySubaccountDepositsResponse_DepositsEntry;
    toAmino(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntryAmino;
    fromAminoMsg(object: QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): QuerySubaccountDepositsResponse_DepositsEntry;
    fromProtoMsg(message: QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): QuerySubaccountDepositsResponse_DepositsEntry;
    toProto(message: QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array;
};
export declare const QuerySubaccountDepositsResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
    fromAmino(object: QuerySubaccountDepositsResponseAmino): QuerySubaccountDepositsResponse;
    toAmino(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseAmino;
    fromAminoMsg(object: QuerySubaccountDepositsResponseAminoMsg): QuerySubaccountDepositsResponse;
    fromProtoMsg(message: QuerySubaccountDepositsResponseProtoMsg): QuerySubaccountDepositsResponse;
    toProto(message: QuerySubaccountDepositsResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseProtoMsg;
};
export declare const QueryExchangeBalancesRequest: {
    typeUrl: string;
    encode(_: QueryExchangeBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesRequest;
    fromPartial(_: Partial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
    fromAmino(_: QueryExchangeBalancesRequestAmino): QueryExchangeBalancesRequest;
    toAmino(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestAmino;
    fromAminoMsg(object: QueryExchangeBalancesRequestAminoMsg): QueryExchangeBalancesRequest;
    fromProtoMsg(message: QueryExchangeBalancesRequestProtoMsg): QueryExchangeBalancesRequest;
    toProto(message: QueryExchangeBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestProtoMsg;
};
export declare const QueryExchangeBalancesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesResponse;
    fromPartial(object: Partial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
    fromAmino(object: QueryExchangeBalancesResponseAmino): QueryExchangeBalancesResponse;
    toAmino(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseAmino;
    fromAminoMsg(object: QueryExchangeBalancesResponseAminoMsg): QueryExchangeBalancesResponse;
    fromProtoMsg(message: QueryExchangeBalancesResponseProtoMsg): QueryExchangeBalancesResponse;
    toProto(message: QueryExchangeBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseProtoMsg;
};
export declare const QuerySubaccountDepositRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositRequest;
    fromPartial(object: Partial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
    fromAmino(object: QuerySubaccountDepositRequestAmino): QuerySubaccountDepositRequest;
    toAmino(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestAmino;
    fromAminoMsg(object: QuerySubaccountDepositRequestAminoMsg): QuerySubaccountDepositRequest;
    fromProtoMsg(message: QuerySubaccountDepositRequestProtoMsg): QuerySubaccountDepositRequest;
    toProto(message: QuerySubaccountDepositRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestProtoMsg;
};
export declare const QuerySubaccountDepositResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositResponse;
    fromPartial(object: Partial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
    fromAmino(object: QuerySubaccountDepositResponseAmino): QuerySubaccountDepositResponse;
    toAmino(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseAmino;
    fromAminoMsg(object: QuerySubaccountDepositResponseAminoMsg): QuerySubaccountDepositResponse;
    fromProtoMsg(message: QuerySubaccountDepositResponseProtoMsg): QuerySubaccountDepositResponse;
    toProto(message: QuerySubaccountDepositResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseProtoMsg;
};
export declare const QuerySpotMarketsRequest: {
    typeUrl: string;
    encode(message: QuerySpotMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsRequest;
    fromPartial(object: Partial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
    fromAmino(object: QuerySpotMarketsRequestAmino): QuerySpotMarketsRequest;
    toAmino(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestAmino;
    fromAminoMsg(object: QuerySpotMarketsRequestAminoMsg): QuerySpotMarketsRequest;
    fromProtoMsg(message: QuerySpotMarketsRequestProtoMsg): QuerySpotMarketsRequest;
    toProto(message: QuerySpotMarketsRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestProtoMsg;
};
export declare const QuerySpotMarketsResponse: {
    typeUrl: string;
    encode(message: QuerySpotMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsResponse;
    fromPartial(object: Partial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
    fromAmino(object: QuerySpotMarketsResponseAmino): QuerySpotMarketsResponse;
    toAmino(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseAmino;
    fromAminoMsg(object: QuerySpotMarketsResponseAminoMsg): QuerySpotMarketsResponse;
    fromProtoMsg(message: QuerySpotMarketsResponseProtoMsg): QuerySpotMarketsResponse;
    toProto(message: QuerySpotMarketsResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseProtoMsg;
};
export declare const QuerySpotMarketRequest: {
    typeUrl: string;
    encode(message: QuerySpotMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketRequest;
    fromPartial(object: Partial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
    fromAmino(object: QuerySpotMarketRequestAmino): QuerySpotMarketRequest;
    toAmino(message: QuerySpotMarketRequest): QuerySpotMarketRequestAmino;
    fromAminoMsg(object: QuerySpotMarketRequestAminoMsg): QuerySpotMarketRequest;
    fromProtoMsg(message: QuerySpotMarketRequestProtoMsg): QuerySpotMarketRequest;
    toProto(message: QuerySpotMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMarketRequest): QuerySpotMarketRequestProtoMsg;
};
export declare const QuerySpotMarketResponse: {
    typeUrl: string;
    encode(message: QuerySpotMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketResponse;
    fromPartial(object: Partial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
    fromAmino(object: QuerySpotMarketResponseAmino): QuerySpotMarketResponse;
    toAmino(message: QuerySpotMarketResponse): QuerySpotMarketResponseAmino;
    fromAminoMsg(object: QuerySpotMarketResponseAminoMsg): QuerySpotMarketResponse;
    fromProtoMsg(message: QuerySpotMarketResponseProtoMsg): QuerySpotMarketResponse;
    toProto(message: QuerySpotMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMarketResponse): QuerySpotMarketResponseProtoMsg;
};
export declare const QuerySpotOrderbookRequest: {
    typeUrl: string;
    encode(message: QuerySpotOrderbookRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookRequest;
    fromPartial(object: Partial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
    fromAmino(object: QuerySpotOrderbookRequestAmino): QuerySpotOrderbookRequest;
    toAmino(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestAmino;
    fromAminoMsg(object: QuerySpotOrderbookRequestAminoMsg): QuerySpotOrderbookRequest;
    fromProtoMsg(message: QuerySpotOrderbookRequestProtoMsg): QuerySpotOrderbookRequest;
    toProto(message: QuerySpotOrderbookRequest): Uint8Array;
    toProtoMsg(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestProtoMsg;
};
export declare const QuerySpotOrderbookResponse: {
    typeUrl: string;
    encode(message: QuerySpotOrderbookResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookResponse;
    fromPartial(object: Partial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
    fromAmino(object: QuerySpotOrderbookResponseAmino): QuerySpotOrderbookResponse;
    toAmino(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseAmino;
    fromAminoMsg(object: QuerySpotOrderbookResponseAminoMsg): QuerySpotOrderbookResponse;
    fromProtoMsg(message: QuerySpotOrderbookResponseProtoMsg): QuerySpotOrderbookResponse;
    toProto(message: QuerySpotOrderbookResponse): Uint8Array;
    toProtoMsg(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseProtoMsg;
};
export declare const QuerySpotOrdersByHashesRequest: {
    typeUrl: string;
    encode(message: QuerySpotOrdersByHashesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest;
    fromPartial(object: Partial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
    fromAmino(object: QuerySpotOrdersByHashesRequestAmino): QuerySpotOrdersByHashesRequest;
    toAmino(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestAmino;
    fromAminoMsg(object: QuerySpotOrdersByHashesRequestAminoMsg): QuerySpotOrdersByHashesRequest;
    fromProtoMsg(message: QuerySpotOrdersByHashesRequestProtoMsg): QuerySpotOrdersByHashesRequest;
    toProto(message: QuerySpotOrdersByHashesRequest): Uint8Array;
    toProtoMsg(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestProtoMsg;
};
export declare const QuerySpotOrdersByHashesResponse: {
    typeUrl: string;
    encode(message: QuerySpotOrdersByHashesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse;
    fromPartial(object: Partial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
    fromAmino(object: QuerySpotOrdersByHashesResponseAmino): QuerySpotOrdersByHashesResponse;
    toAmino(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseAmino;
    fromAminoMsg(object: QuerySpotOrdersByHashesResponseAminoMsg): QuerySpotOrdersByHashesResponse;
    fromProtoMsg(message: QuerySpotOrdersByHashesResponseProtoMsg): QuerySpotOrdersByHashesResponse;
    toProto(message: QuerySpotOrdersByHashesResponse): Uint8Array;
    toProtoMsg(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseProtoMsg;
};
export declare const QueryTraderSpotOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
    fromAmino(object: QueryTraderSpotOrdersRequestAmino): QueryTraderSpotOrdersRequest;
    toAmino(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersRequestAminoMsg): QueryTraderSpotOrdersRequest;
    fromProtoMsg(message: QueryTraderSpotOrdersRequestProtoMsg): QueryTraderSpotOrdersRequest;
    toProto(message: QueryTraderSpotOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestProtoMsg;
};
export declare const TrimmedSpotLimitOrder: {
    typeUrl: string;
    encode(message: TrimmedSpotLimitOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TrimmedSpotLimitOrder;
    fromPartial(object: Partial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
    fromAmino(object: TrimmedSpotLimitOrderAmino): TrimmedSpotLimitOrder;
    toAmino(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderAmino;
    fromAminoMsg(object: TrimmedSpotLimitOrderAminoMsg): TrimmedSpotLimitOrder;
    fromProtoMsg(message: TrimmedSpotLimitOrderProtoMsg): TrimmedSpotLimitOrder;
    toProto(message: TrimmedSpotLimitOrder): Uint8Array;
    toProtoMsg(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderProtoMsg;
};
export declare const QueryTraderSpotOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse;
    fromPartial(object: Partial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
    fromAmino(object: QueryTraderSpotOrdersResponseAmino): QueryTraderSpotOrdersResponse;
    toAmino(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersResponseAminoMsg): QueryTraderSpotOrdersResponse;
    fromProtoMsg(message: QueryTraderSpotOrdersResponseProtoMsg): QueryTraderSpotOrdersResponse;
    toProto(message: QueryTraderSpotOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseProtoMsg;
};
export declare const QuerySpotMidPriceAndTOBRequest: {
    typeUrl: string;
    encode(message: QuerySpotMidPriceAndTOBRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
    fromAmino(object: QuerySpotMidPriceAndTOBRequestAmino): QuerySpotMidPriceAndTOBRequest;
    toAmino(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestAmino;
    fromAminoMsg(object: QuerySpotMidPriceAndTOBRequestAminoMsg): QuerySpotMidPriceAndTOBRequest;
    fromProtoMsg(message: QuerySpotMidPriceAndTOBRequestProtoMsg): QuerySpotMidPriceAndTOBRequest;
    toProto(message: QuerySpotMidPriceAndTOBRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestProtoMsg;
};
export declare const QuerySpotMidPriceAndTOBResponse: {
    typeUrl: string;
    encode(message: QuerySpotMidPriceAndTOBResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
    fromAmino(object: QuerySpotMidPriceAndTOBResponseAmino): QuerySpotMidPriceAndTOBResponse;
    toAmino(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseAmino;
    fromAminoMsg(object: QuerySpotMidPriceAndTOBResponseAminoMsg): QuerySpotMidPriceAndTOBResponse;
    fromProtoMsg(message: QuerySpotMidPriceAndTOBResponseProtoMsg): QuerySpotMidPriceAndTOBResponse;
    toProto(message: QuerySpotMidPriceAndTOBResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseProtoMsg;
};
export declare const QueryDerivativeMidPriceAndTOBRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMidPriceAndTOBRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
    fromAmino(object: QueryDerivativeMidPriceAndTOBRequestAmino): QueryDerivativeMidPriceAndTOBRequest;
    toAmino(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestAmino;
    fromAminoMsg(object: QueryDerivativeMidPriceAndTOBRequestAminoMsg): QueryDerivativeMidPriceAndTOBRequest;
    fromProtoMsg(message: QueryDerivativeMidPriceAndTOBRequestProtoMsg): QueryDerivativeMidPriceAndTOBRequest;
    toProto(message: QueryDerivativeMidPriceAndTOBRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestProtoMsg;
};
export declare const QueryDerivativeMidPriceAndTOBResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMidPriceAndTOBResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
    fromAmino(object: QueryDerivativeMidPriceAndTOBResponseAmino): QueryDerivativeMidPriceAndTOBResponse;
    toAmino(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseAmino;
    fromAminoMsg(object: QueryDerivativeMidPriceAndTOBResponseAminoMsg): QueryDerivativeMidPriceAndTOBResponse;
    fromProtoMsg(message: QueryDerivativeMidPriceAndTOBResponseProtoMsg): QueryDerivativeMidPriceAndTOBResponse;
    toProto(message: QueryDerivativeMidPriceAndTOBResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseProtoMsg;
};
export declare const QueryDerivativeOrderbookRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeOrderbookRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest;
    fromPartial(object: Partial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
    fromAmino(object: QueryDerivativeOrderbookRequestAmino): QueryDerivativeOrderbookRequest;
    toAmino(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestAmino;
    fromAminoMsg(object: QueryDerivativeOrderbookRequestAminoMsg): QueryDerivativeOrderbookRequest;
    fromProtoMsg(message: QueryDerivativeOrderbookRequestProtoMsg): QueryDerivativeOrderbookRequest;
    toProto(message: QueryDerivativeOrderbookRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestProtoMsg;
};
export declare const QueryDerivativeOrderbookResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeOrderbookResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse;
    fromPartial(object: Partial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
    fromAmino(object: QueryDerivativeOrderbookResponseAmino): QueryDerivativeOrderbookResponse;
    toAmino(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseAmino;
    fromAminoMsg(object: QueryDerivativeOrderbookResponseAminoMsg): QueryDerivativeOrderbookResponse;
    fromProtoMsg(message: QueryDerivativeOrderbookResponseProtoMsg): QueryDerivativeOrderbookResponse;
    toProto(message: QueryDerivativeOrderbookResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseProtoMsg;
};
export declare const QueryTraderSpotOrdersToCancelUpToAmountRequest: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromAmino(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    toAmino(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    toProto(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg;
};
export declare const QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromAmino(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    toAmino(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    toProto(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg;
};
export declare const QueryTraderDerivativeOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
    fromAmino(object: QueryTraderDerivativeOrdersRequestAmino): QueryTraderDerivativeOrdersRequest;
    toAmino(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersRequestAminoMsg): QueryTraderDerivativeOrdersRequest;
    fromProtoMsg(message: QueryTraderDerivativeOrdersRequestProtoMsg): QueryTraderDerivativeOrdersRequest;
    toProto(message: QueryTraderDerivativeOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestProtoMsg;
};
export declare const TrimmedDerivativeLimitOrder: {
    typeUrl: string;
    encode(message: TrimmedDerivativeLimitOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder;
    fromPartial(object: Partial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
    fromAmino(object: TrimmedDerivativeLimitOrderAmino): TrimmedDerivativeLimitOrder;
    toAmino(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderAmino;
    fromAminoMsg(object: TrimmedDerivativeLimitOrderAminoMsg): TrimmedDerivativeLimitOrder;
    fromProtoMsg(message: TrimmedDerivativeLimitOrderProtoMsg): TrimmedDerivativeLimitOrder;
    toProto(message: TrimmedDerivativeLimitOrder): Uint8Array;
    toProtoMsg(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderProtoMsg;
};
export declare const QueryTraderDerivativeOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
    fromAmino(object: QueryTraderDerivativeOrdersResponseAmino): QueryTraderDerivativeOrdersResponse;
    toAmino(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersResponseAminoMsg): QueryTraderDerivativeOrdersResponse;
    fromProtoMsg(message: QueryTraderDerivativeOrdersResponseProtoMsg): QueryTraderDerivativeOrdersResponse;
    toProto(message: QueryTraderDerivativeOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseProtoMsg;
};
export declare const QueryDerivativeOrdersByHashesRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeOrdersByHashesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
    fromAmino(object: QueryDerivativeOrdersByHashesRequestAmino): QueryDerivativeOrdersByHashesRequest;
    toAmino(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestAmino;
    fromAminoMsg(object: QueryDerivativeOrdersByHashesRequestAminoMsg): QueryDerivativeOrdersByHashesRequest;
    fromProtoMsg(message: QueryDerivativeOrdersByHashesRequestProtoMsg): QueryDerivativeOrdersByHashesRequest;
    toProto(message: QueryDerivativeOrdersByHashesRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestProtoMsg;
};
export declare const QueryDerivativeOrdersByHashesResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeOrdersByHashesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
    fromAmino(object: QueryDerivativeOrdersByHashesResponseAmino): QueryDerivativeOrdersByHashesResponse;
    toAmino(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseAmino;
    fromAminoMsg(object: QueryDerivativeOrdersByHashesResponseAminoMsg): QueryDerivativeOrdersByHashesResponse;
    fromProtoMsg(message: QueryDerivativeOrdersByHashesResponseProtoMsg): QueryDerivativeOrdersByHashesResponse;
    toProto(message: QueryDerivativeOrdersByHashesResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseProtoMsg;
};
export declare const QueryDerivativeMarketsRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsRequest;
    fromPartial(object: Partial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
    fromAmino(object: QueryDerivativeMarketsRequestAmino): QueryDerivativeMarketsRequest;
    toAmino(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketsRequestAminoMsg): QueryDerivativeMarketsRequest;
    fromProtoMsg(message: QueryDerivativeMarketsRequestProtoMsg): QueryDerivativeMarketsRequest;
    toProto(message: QueryDerivativeMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestProtoMsg;
};
export declare const PriceLevel: {
    typeUrl: string;
    encode(message: PriceLevel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PriceLevel;
    fromPartial(object: Partial<PriceLevel>): PriceLevel;
    fromAmino(object: PriceLevelAmino): PriceLevel;
    toAmino(message: PriceLevel): PriceLevelAmino;
    fromAminoMsg(object: PriceLevelAminoMsg): PriceLevel;
    fromProtoMsg(message: PriceLevelProtoMsg): PriceLevel;
    toProto(message: PriceLevel): Uint8Array;
    toProtoMsg(message: PriceLevel): PriceLevelProtoMsg;
};
export declare const PerpetualMarketState: {
    typeUrl: string;
    encode(message: PerpetualMarketState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketState;
    fromPartial(object: Partial<PerpetualMarketState>): PerpetualMarketState;
    fromAmino(object: PerpetualMarketStateAmino): PerpetualMarketState;
    toAmino(message: PerpetualMarketState): PerpetualMarketStateAmino;
    fromAminoMsg(object: PerpetualMarketStateAminoMsg): PerpetualMarketState;
    fromProtoMsg(message: PerpetualMarketStateProtoMsg): PerpetualMarketState;
    toProto(message: PerpetualMarketState): Uint8Array;
    toProtoMsg(message: PerpetualMarketState): PerpetualMarketStateProtoMsg;
};
export declare const FullDerivativeMarket: {
    typeUrl: string;
    encode(message: FullDerivativeMarket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FullDerivativeMarket;
    fromPartial(object: Partial<FullDerivativeMarket>): FullDerivativeMarket;
    fromAmino(object: FullDerivativeMarketAmino): FullDerivativeMarket;
    toAmino(message: FullDerivativeMarket): FullDerivativeMarketAmino;
    fromAminoMsg(object: FullDerivativeMarketAminoMsg): FullDerivativeMarket;
    fromProtoMsg(message: FullDerivativeMarketProtoMsg): FullDerivativeMarket;
    toProto(message: FullDerivativeMarket): Uint8Array;
    toProtoMsg(message: FullDerivativeMarket): FullDerivativeMarketProtoMsg;
};
export declare const QueryDerivativeMarketsResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsResponse;
    fromPartial(object: Partial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
    fromAmino(object: QueryDerivativeMarketsResponseAmino): QueryDerivativeMarketsResponse;
    toAmino(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketsResponseAminoMsg): QueryDerivativeMarketsResponse;
    fromProtoMsg(message: QueryDerivativeMarketsResponseProtoMsg): QueryDerivativeMarketsResponse;
    toProto(message: QueryDerivativeMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseProtoMsg;
};
export declare const QueryDerivativeMarketRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketRequest;
    fromPartial(object: Partial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
    fromAmino(object: QueryDerivativeMarketRequestAmino): QueryDerivativeMarketRequest;
    toAmino(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketRequestAminoMsg): QueryDerivativeMarketRequest;
    fromProtoMsg(message: QueryDerivativeMarketRequestProtoMsg): QueryDerivativeMarketRequest;
    toProto(message: QueryDerivativeMarketRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestProtoMsg;
};
export declare const QueryDerivativeMarketResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketResponse;
    fromPartial(object: Partial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
    fromAmino(object: QueryDerivativeMarketResponseAmino): QueryDerivativeMarketResponse;
    toAmino(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketResponseAminoMsg): QueryDerivativeMarketResponse;
    fromProtoMsg(message: QueryDerivativeMarketResponseProtoMsg): QueryDerivativeMarketResponse;
    toProto(message: QueryDerivativeMarketResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseProtoMsg;
};
export declare const QueryDerivativeMarketAddressRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest;
    fromPartial(object: Partial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
    fromAmino(object: QueryDerivativeMarketAddressRequestAmino): QueryDerivativeMarketAddressRequest;
    toAmino(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketAddressRequestAminoMsg): QueryDerivativeMarketAddressRequest;
    fromProtoMsg(message: QueryDerivativeMarketAddressRequestProtoMsg): QueryDerivativeMarketAddressRequest;
    toProto(message: QueryDerivativeMarketAddressRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestProtoMsg;
};
export declare const QueryDerivativeMarketAddressResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse;
    fromPartial(object: Partial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
    fromAmino(object: QueryDerivativeMarketAddressResponseAmino): QueryDerivativeMarketAddressResponse;
    toAmino(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketAddressResponseAminoMsg): QueryDerivativeMarketAddressResponse;
    fromProtoMsg(message: QueryDerivativeMarketAddressResponseProtoMsg): QueryDerivativeMarketAddressResponse;
    toProto(message: QueryDerivativeMarketAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseProtoMsg;
};
export declare const QuerySubaccountTradeNonceRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountTradeNonceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest;
    fromPartial(object: Partial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
    fromAmino(object: QuerySubaccountTradeNonceRequestAmino): QuerySubaccountTradeNonceRequest;
    toAmino(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestAmino;
    fromAminoMsg(object: QuerySubaccountTradeNonceRequestAminoMsg): QuerySubaccountTradeNonceRequest;
    fromProtoMsg(message: QuerySubaccountTradeNonceRequestProtoMsg): QuerySubaccountTradeNonceRequest;
    toProto(message: QuerySubaccountTradeNonceRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestProtoMsg;
};
export declare const QuerySubaccountPositionsRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsRequest;
    fromPartial(object: Partial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
    fromAmino(object: QuerySubaccountPositionsRequestAmino): QuerySubaccountPositionsRequest;
    toAmino(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestAmino;
    fromAminoMsg(object: QuerySubaccountPositionsRequestAminoMsg): QuerySubaccountPositionsRequest;
    fromProtoMsg(message: QuerySubaccountPositionsRequestProtoMsg): QuerySubaccountPositionsRequest;
    toProto(message: QuerySubaccountPositionsRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestProtoMsg;
};
export declare const QuerySubaccountPositionInMarketRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionInMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
    fromAmino(object: QuerySubaccountPositionInMarketRequestAmino): QuerySubaccountPositionInMarketRequest;
    toAmino(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestAmino;
    fromAminoMsg(object: QuerySubaccountPositionInMarketRequestAminoMsg): QuerySubaccountPositionInMarketRequest;
    fromProtoMsg(message: QuerySubaccountPositionInMarketRequestProtoMsg): QuerySubaccountPositionInMarketRequest;
    toProto(message: QuerySubaccountPositionInMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestProtoMsg;
};
export declare const QuerySubaccountEffectivePositionInMarketRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
    fromAmino(object: QuerySubaccountEffectivePositionInMarketRequestAmino): QuerySubaccountEffectivePositionInMarketRequest;
    toAmino(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestAmino;
    fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketRequestAminoMsg): QuerySubaccountEffectivePositionInMarketRequest;
    fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequestProtoMsg): QuerySubaccountEffectivePositionInMarketRequest;
    toProto(message: QuerySubaccountEffectivePositionInMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestProtoMsg;
};
export declare const QuerySubaccountOrderMetadataRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountOrderMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
    fromAmino(object: QuerySubaccountOrderMetadataRequestAmino): QuerySubaccountOrderMetadataRequest;
    toAmino(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestAmino;
    fromAminoMsg(object: QuerySubaccountOrderMetadataRequestAminoMsg): QuerySubaccountOrderMetadataRequest;
    fromProtoMsg(message: QuerySubaccountOrderMetadataRequestProtoMsg): QuerySubaccountOrderMetadataRequest;
    toProto(message: QuerySubaccountOrderMetadataRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestProtoMsg;
};
export declare const QuerySubaccountPositionsResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsResponse;
    fromPartial(object: Partial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
    fromAmino(object: QuerySubaccountPositionsResponseAmino): QuerySubaccountPositionsResponse;
    toAmino(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseAmino;
    fromAminoMsg(object: QuerySubaccountPositionsResponseAminoMsg): QuerySubaccountPositionsResponse;
    fromProtoMsg(message: QuerySubaccountPositionsResponseProtoMsg): QuerySubaccountPositionsResponse;
    toProto(message: QuerySubaccountPositionsResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseProtoMsg;
};
export declare const QuerySubaccountPositionInMarketResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionInMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
    fromAmino(object: QuerySubaccountPositionInMarketResponseAmino): QuerySubaccountPositionInMarketResponse;
    toAmino(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseAmino;
    fromAminoMsg(object: QuerySubaccountPositionInMarketResponseAminoMsg): QuerySubaccountPositionInMarketResponse;
    fromProtoMsg(message: QuerySubaccountPositionInMarketResponseProtoMsg): QuerySubaccountPositionInMarketResponse;
    toProto(message: QuerySubaccountPositionInMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseProtoMsg;
};
export declare const EffectivePosition: {
    typeUrl: string;
    encode(message: EffectivePosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EffectivePosition;
    fromPartial(object: Partial<EffectivePosition>): EffectivePosition;
    fromAmino(object: EffectivePositionAmino): EffectivePosition;
    toAmino(message: EffectivePosition): EffectivePositionAmino;
    fromAminoMsg(object: EffectivePositionAminoMsg): EffectivePosition;
    fromProtoMsg(message: EffectivePositionProtoMsg): EffectivePosition;
    toProto(message: EffectivePosition): Uint8Array;
    toProtoMsg(message: EffectivePosition): EffectivePositionProtoMsg;
};
export declare const QuerySubaccountEffectivePositionInMarketResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
    fromAmino(object: QuerySubaccountEffectivePositionInMarketResponseAmino): QuerySubaccountEffectivePositionInMarketResponse;
    toAmino(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseAmino;
    fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketResponseAminoMsg): QuerySubaccountEffectivePositionInMarketResponse;
    fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponseProtoMsg): QuerySubaccountEffectivePositionInMarketResponse;
    toProto(message: QuerySubaccountEffectivePositionInMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseProtoMsg;
};
export declare const QueryPerpetualMarketInfoRequest: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest;
    fromPartial(object: Partial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
    fromAmino(object: QueryPerpetualMarketInfoRequestAmino): QueryPerpetualMarketInfoRequest;
    toAmino(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestAmino;
    fromAminoMsg(object: QueryPerpetualMarketInfoRequestAminoMsg): QueryPerpetualMarketInfoRequest;
    fromProtoMsg(message: QueryPerpetualMarketInfoRequestProtoMsg): QueryPerpetualMarketInfoRequest;
    toProto(message: QueryPerpetualMarketInfoRequest): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestProtoMsg;
};
export declare const QueryPerpetualMarketInfoResponse: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse;
    fromPartial(object: Partial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
    fromAmino(object: QueryPerpetualMarketInfoResponseAmino): QueryPerpetualMarketInfoResponse;
    toAmino(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseAmino;
    fromAminoMsg(object: QueryPerpetualMarketInfoResponseAminoMsg): QueryPerpetualMarketInfoResponse;
    fromProtoMsg(message: QueryPerpetualMarketInfoResponseProtoMsg): QueryPerpetualMarketInfoResponse;
    toProto(message: QueryPerpetualMarketInfoResponse): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseProtoMsg;
};
export declare const QueryExpiryFuturesMarketInfoRequest: {
    typeUrl: string;
    encode(message: QueryExpiryFuturesMarketInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
    fromAmino(object: QueryExpiryFuturesMarketInfoRequestAmino): QueryExpiryFuturesMarketInfoRequest;
    toAmino(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestAmino;
    fromAminoMsg(object: QueryExpiryFuturesMarketInfoRequestAminoMsg): QueryExpiryFuturesMarketInfoRequest;
    fromProtoMsg(message: QueryExpiryFuturesMarketInfoRequestProtoMsg): QueryExpiryFuturesMarketInfoRequest;
    toProto(message: QueryExpiryFuturesMarketInfoRequest): Uint8Array;
    toProtoMsg(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestProtoMsg;
};
export declare const QueryExpiryFuturesMarketInfoResponse: {
    typeUrl: string;
    encode(message: QueryExpiryFuturesMarketInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
    fromAmino(object: QueryExpiryFuturesMarketInfoResponseAmino): QueryExpiryFuturesMarketInfoResponse;
    toAmino(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseAmino;
    fromAminoMsg(object: QueryExpiryFuturesMarketInfoResponseAminoMsg): QueryExpiryFuturesMarketInfoResponse;
    fromProtoMsg(message: QueryExpiryFuturesMarketInfoResponseProtoMsg): QueryExpiryFuturesMarketInfoResponse;
    toProto(message: QueryExpiryFuturesMarketInfoResponse): Uint8Array;
    toProtoMsg(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseProtoMsg;
};
export declare const QueryPerpetualMarketFundingRequest: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketFundingRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest;
    fromPartial(object: Partial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
    fromAmino(object: QueryPerpetualMarketFundingRequestAmino): QueryPerpetualMarketFundingRequest;
    toAmino(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestAmino;
    fromAminoMsg(object: QueryPerpetualMarketFundingRequestAminoMsg): QueryPerpetualMarketFundingRequest;
    fromProtoMsg(message: QueryPerpetualMarketFundingRequestProtoMsg): QueryPerpetualMarketFundingRequest;
    toProto(message: QueryPerpetualMarketFundingRequest): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestProtoMsg;
};
export declare const QueryPerpetualMarketFundingResponse: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketFundingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse;
    fromPartial(object: Partial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
    fromAmino(object: QueryPerpetualMarketFundingResponseAmino): QueryPerpetualMarketFundingResponse;
    toAmino(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseAmino;
    fromAminoMsg(object: QueryPerpetualMarketFundingResponseAminoMsg): QueryPerpetualMarketFundingResponse;
    fromProtoMsg(message: QueryPerpetualMarketFundingResponseProtoMsg): QueryPerpetualMarketFundingResponse;
    toProto(message: QueryPerpetualMarketFundingResponse): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseProtoMsg;
};
export declare const QuerySubaccountOrderMetadataResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountOrderMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
    fromAmino(object: QuerySubaccountOrderMetadataResponseAmino): QuerySubaccountOrderMetadataResponse;
    toAmino(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseAmino;
    fromAminoMsg(object: QuerySubaccountOrderMetadataResponseAminoMsg): QuerySubaccountOrderMetadataResponse;
    fromProtoMsg(message: QuerySubaccountOrderMetadataResponseProtoMsg): QuerySubaccountOrderMetadataResponse;
    toProto(message: QuerySubaccountOrderMetadataResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseProtoMsg;
};
export declare const QuerySubaccountTradeNonceResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountTradeNonceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse;
    fromPartial(object: Partial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
    fromAmino(object: QuerySubaccountTradeNonceResponseAmino): QuerySubaccountTradeNonceResponse;
    toAmino(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseAmino;
    fromAminoMsg(object: QuerySubaccountTradeNonceResponseAminoMsg): QuerySubaccountTradeNonceResponse;
    fromProtoMsg(message: QuerySubaccountTradeNonceResponseProtoMsg): QuerySubaccountTradeNonceResponse;
    toProto(message: QuerySubaccountTradeNonceResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
export declare const QueryPositionsRequest: {
    typeUrl: string;
    encode(_: QueryPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsRequest;
    fromPartial(_: Partial<QueryPositionsRequest>): QueryPositionsRequest;
    fromAmino(_: QueryPositionsRequestAmino): QueryPositionsRequest;
    toAmino(_: QueryPositionsRequest): QueryPositionsRequestAmino;
    fromAminoMsg(object: QueryPositionsRequestAminoMsg): QueryPositionsRequest;
    fromProtoMsg(message: QueryPositionsRequestProtoMsg): QueryPositionsRequest;
    toProto(message: QueryPositionsRequest): Uint8Array;
    toProtoMsg(message: QueryPositionsRequest): QueryPositionsRequestProtoMsg;
};
export declare const QueryPositionsResponse: {
    typeUrl: string;
    encode(message: QueryPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsResponse;
    fromPartial(object: Partial<QueryPositionsResponse>): QueryPositionsResponse;
    fromAmino(object: QueryPositionsResponseAmino): QueryPositionsResponse;
    toAmino(message: QueryPositionsResponse): QueryPositionsResponseAmino;
    fromAminoMsg(object: QueryPositionsResponseAminoMsg): QueryPositionsResponse;
    fromProtoMsg(message: QueryPositionsResponseProtoMsg): QueryPositionsResponse;
    toProto(message: QueryPositionsResponse): Uint8Array;
    toProtoMsg(message: QueryPositionsResponse): QueryPositionsResponseProtoMsg;
};
export declare const QueryTradeRewardPointsRequest: {
    typeUrl: string;
    encode(message: QueryTradeRewardPointsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsRequest;
    fromPartial(object: Partial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
    fromAmino(object: QueryTradeRewardPointsRequestAmino): QueryTradeRewardPointsRequest;
    toAmino(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestAmino;
    fromAminoMsg(object: QueryTradeRewardPointsRequestAminoMsg): QueryTradeRewardPointsRequest;
    fromProtoMsg(message: QueryTradeRewardPointsRequestProtoMsg): QueryTradeRewardPointsRequest;
    toProto(message: QueryTradeRewardPointsRequest): Uint8Array;
    toProtoMsg(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestProtoMsg;
};
export declare const QueryTradeRewardPointsResponse: {
    typeUrl: string;
    encode(message: QueryTradeRewardPointsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsResponse;
    fromPartial(object: Partial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
    fromAmino(object: QueryTradeRewardPointsResponseAmino): QueryTradeRewardPointsResponse;
    toAmino(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseAmino;
    fromAminoMsg(object: QueryTradeRewardPointsResponseAminoMsg): QueryTradeRewardPointsResponse;
    fromProtoMsg(message: QueryTradeRewardPointsResponseProtoMsg): QueryTradeRewardPointsResponse;
    toProto(message: QueryTradeRewardPointsResponse): Uint8Array;
    toProtoMsg(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseProtoMsg;
};
export declare const QueryTradeRewardCampaignRequest: {
    typeUrl: string;
    encode(_: QueryTradeRewardCampaignRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest;
    fromPartial(_: Partial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
    fromAmino(_: QueryTradeRewardCampaignRequestAmino): QueryTradeRewardCampaignRequest;
    toAmino(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestAmino;
    fromAminoMsg(object: QueryTradeRewardCampaignRequestAminoMsg): QueryTradeRewardCampaignRequest;
    fromProtoMsg(message: QueryTradeRewardCampaignRequestProtoMsg): QueryTradeRewardCampaignRequest;
    toProto(message: QueryTradeRewardCampaignRequest): Uint8Array;
    toProtoMsg(message: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestProtoMsg;
};
export declare const QueryTradeRewardCampaignResponse: {
    typeUrl: string;
    encode(message: QueryTradeRewardCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse;
    fromPartial(object: Partial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
    fromAmino(object: QueryTradeRewardCampaignResponseAmino): QueryTradeRewardCampaignResponse;
    toAmino(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseAmino;
    fromAminoMsg(object: QueryTradeRewardCampaignResponseAminoMsg): QueryTradeRewardCampaignResponse;
    fromProtoMsg(message: QueryTradeRewardCampaignResponseProtoMsg): QueryTradeRewardCampaignResponse;
    toProto(message: QueryTradeRewardCampaignResponse): Uint8Array;
    toProtoMsg(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseProtoMsg;
};
export declare const QueryIsOptedOutOfRewardsRequest: {
    typeUrl: string;
    encode(message: QueryIsOptedOutOfRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
    fromAmino(object: QueryIsOptedOutOfRewardsRequestAmino): QueryIsOptedOutOfRewardsRequest;
    toAmino(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestAmino;
    fromAminoMsg(object: QueryIsOptedOutOfRewardsRequestAminoMsg): QueryIsOptedOutOfRewardsRequest;
    fromProtoMsg(message: QueryIsOptedOutOfRewardsRequestProtoMsg): QueryIsOptedOutOfRewardsRequest;
    toProto(message: QueryIsOptedOutOfRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestProtoMsg;
};
export declare const QueryIsOptedOutOfRewardsResponse: {
    typeUrl: string;
    encode(message: QueryIsOptedOutOfRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
    fromAmino(object: QueryIsOptedOutOfRewardsResponseAmino): QueryIsOptedOutOfRewardsResponse;
    toAmino(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseAmino;
    fromAminoMsg(object: QueryIsOptedOutOfRewardsResponseAminoMsg): QueryIsOptedOutOfRewardsResponse;
    fromProtoMsg(message: QueryIsOptedOutOfRewardsResponseProtoMsg): QueryIsOptedOutOfRewardsResponse;
    toProto(message: QueryIsOptedOutOfRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseProtoMsg;
};
export declare const QueryOptedOutOfRewardsAccountsRequest: {
    typeUrl: string;
    encode(_: QueryOptedOutOfRewardsAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest;
    fromPartial(_: Partial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
    fromAmino(_: QueryOptedOutOfRewardsAccountsRequestAmino): QueryOptedOutOfRewardsAccountsRequest;
    toAmino(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestAmino;
    fromAminoMsg(object: QueryOptedOutOfRewardsAccountsRequestAminoMsg): QueryOptedOutOfRewardsAccountsRequest;
    fromProtoMsg(message: QueryOptedOutOfRewardsAccountsRequestProtoMsg): QueryOptedOutOfRewardsAccountsRequest;
    toProto(message: QueryOptedOutOfRewardsAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestProtoMsg;
};
export declare const QueryOptedOutOfRewardsAccountsResponse: {
    typeUrl: string;
    encode(message: QueryOptedOutOfRewardsAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse;
    fromPartial(object: Partial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
    fromAmino(object: QueryOptedOutOfRewardsAccountsResponseAmino): QueryOptedOutOfRewardsAccountsResponse;
    toAmino(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseAmino;
    fromAminoMsg(object: QueryOptedOutOfRewardsAccountsResponseAminoMsg): QueryOptedOutOfRewardsAccountsResponse;
    fromProtoMsg(message: QueryOptedOutOfRewardsAccountsResponseProtoMsg): QueryOptedOutOfRewardsAccountsResponse;
    toProto(message: QueryOptedOutOfRewardsAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseProtoMsg;
};
export declare const QueryFeeDiscountAccountInfoRequest: {
    typeUrl: string;
    encode(message: QueryFeeDiscountAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
    fromAmino(object: QueryFeeDiscountAccountInfoRequestAmino): QueryFeeDiscountAccountInfoRequest;
    toAmino(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountAccountInfoRequestAminoMsg): QueryFeeDiscountAccountInfoRequest;
    fromProtoMsg(message: QueryFeeDiscountAccountInfoRequestProtoMsg): QueryFeeDiscountAccountInfoRequest;
    toProto(message: QueryFeeDiscountAccountInfoRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestProtoMsg;
};
export declare const QueryFeeDiscountAccountInfoResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
    fromAmino(object: QueryFeeDiscountAccountInfoResponseAmino): QueryFeeDiscountAccountInfoResponse;
    toAmino(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountAccountInfoResponseAminoMsg): QueryFeeDiscountAccountInfoResponse;
    fromProtoMsg(message: QueryFeeDiscountAccountInfoResponseProtoMsg): QueryFeeDiscountAccountInfoResponse;
    toProto(message: QueryFeeDiscountAccountInfoResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseProtoMsg;
};
export declare const QueryFeeDiscountScheduleRequest: {
    typeUrl: string;
    encode(_: QueryFeeDiscountScheduleRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest;
    fromPartial(_: Partial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
    fromAmino(_: QueryFeeDiscountScheduleRequestAmino): QueryFeeDiscountScheduleRequest;
    toAmino(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountScheduleRequestAminoMsg): QueryFeeDiscountScheduleRequest;
    fromProtoMsg(message: QueryFeeDiscountScheduleRequestProtoMsg): QueryFeeDiscountScheduleRequest;
    toProto(message: QueryFeeDiscountScheduleRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestProtoMsg;
};
export declare const QueryFeeDiscountScheduleResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse;
    fromPartial(object: Partial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
    fromAmino(object: QueryFeeDiscountScheduleResponseAmino): QueryFeeDiscountScheduleResponse;
    toAmino(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountScheduleResponseAminoMsg): QueryFeeDiscountScheduleResponse;
    fromProtoMsg(message: QueryFeeDiscountScheduleResponseProtoMsg): QueryFeeDiscountScheduleResponse;
    toProto(message: QueryFeeDiscountScheduleResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseProtoMsg;
};
export declare const QueryBalanceMismatchesRequest: {
    typeUrl: string;
    encode(message: QueryBalanceMismatchesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesRequest;
    fromPartial(object: Partial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
    fromAmino(object: QueryBalanceMismatchesRequestAmino): QueryBalanceMismatchesRequest;
    toAmino(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestAmino;
    fromAminoMsg(object: QueryBalanceMismatchesRequestAminoMsg): QueryBalanceMismatchesRequest;
    fromProtoMsg(message: QueryBalanceMismatchesRequestProtoMsg): QueryBalanceMismatchesRequest;
    toProto(message: QueryBalanceMismatchesRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestProtoMsg;
};
export declare const BalanceMismatch: {
    typeUrl: string;
    encode(message: BalanceMismatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BalanceMismatch;
    fromPartial(object: Partial<BalanceMismatch>): BalanceMismatch;
    fromAmino(object: BalanceMismatchAmino): BalanceMismatch;
    toAmino(message: BalanceMismatch): BalanceMismatchAmino;
    fromAminoMsg(object: BalanceMismatchAminoMsg): BalanceMismatch;
    fromProtoMsg(message: BalanceMismatchProtoMsg): BalanceMismatch;
    toProto(message: BalanceMismatch): Uint8Array;
    toProtoMsg(message: BalanceMismatch): BalanceMismatchProtoMsg;
};
export declare const QueryBalanceMismatchesResponse: {
    typeUrl: string;
    encode(message: QueryBalanceMismatchesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesResponse;
    fromPartial(object: Partial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
    fromAmino(object: QueryBalanceMismatchesResponseAmino): QueryBalanceMismatchesResponse;
    toAmino(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseAmino;
    fromAminoMsg(object: QueryBalanceMismatchesResponseAminoMsg): QueryBalanceMismatchesResponse;
    fromProtoMsg(message: QueryBalanceMismatchesResponseProtoMsg): QueryBalanceMismatchesResponse;
    toProto(message: QueryBalanceMismatchesResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseProtoMsg;
};
export declare const QueryBalanceWithBalanceHoldsRequest: {
    typeUrl: string;
    encode(_: QueryBalanceWithBalanceHoldsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest;
    fromPartial(_: Partial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
    fromAmino(_: QueryBalanceWithBalanceHoldsRequestAmino): QueryBalanceWithBalanceHoldsRequest;
    toAmino(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestAmino;
    fromAminoMsg(object: QueryBalanceWithBalanceHoldsRequestAminoMsg): QueryBalanceWithBalanceHoldsRequest;
    fromProtoMsg(message: QueryBalanceWithBalanceHoldsRequestProtoMsg): QueryBalanceWithBalanceHoldsRequest;
    toProto(message: QueryBalanceWithBalanceHoldsRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestProtoMsg;
};
export declare const BalanceWithMarginHold: {
    typeUrl: string;
    encode(message: BalanceWithMarginHold, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BalanceWithMarginHold;
    fromPartial(object: Partial<BalanceWithMarginHold>): BalanceWithMarginHold;
    fromAmino(object: BalanceWithMarginHoldAmino): BalanceWithMarginHold;
    toAmino(message: BalanceWithMarginHold): BalanceWithMarginHoldAmino;
    fromAminoMsg(object: BalanceWithMarginHoldAminoMsg): BalanceWithMarginHold;
    fromProtoMsg(message: BalanceWithMarginHoldProtoMsg): BalanceWithMarginHold;
    toProto(message: BalanceWithMarginHold): Uint8Array;
    toProtoMsg(message: BalanceWithMarginHold): BalanceWithMarginHoldProtoMsg;
};
export declare const QueryBalanceWithBalanceHoldsResponse: {
    typeUrl: string;
    encode(message: QueryBalanceWithBalanceHoldsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse;
    fromPartial(object: Partial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
    fromAmino(object: QueryBalanceWithBalanceHoldsResponseAmino): QueryBalanceWithBalanceHoldsResponse;
    toAmino(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseAmino;
    fromAminoMsg(object: QueryBalanceWithBalanceHoldsResponseAminoMsg): QueryBalanceWithBalanceHoldsResponse;
    fromProtoMsg(message: QueryBalanceWithBalanceHoldsResponseProtoMsg): QueryBalanceWithBalanceHoldsResponse;
    toProto(message: QueryBalanceWithBalanceHoldsResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseProtoMsg;
};
export declare const QueryFeeDiscountTierStatisticsRequest: {
    typeUrl: string;
    encode(_: QueryFeeDiscountTierStatisticsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest;
    fromPartial(_: Partial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
    fromAmino(_: QueryFeeDiscountTierStatisticsRequestAmino): QueryFeeDiscountTierStatisticsRequest;
    toAmino(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountTierStatisticsRequestAminoMsg): QueryFeeDiscountTierStatisticsRequest;
    fromProtoMsg(message: QueryFeeDiscountTierStatisticsRequestProtoMsg): QueryFeeDiscountTierStatisticsRequest;
    toProto(message: QueryFeeDiscountTierStatisticsRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestProtoMsg;
};
export declare const TierStatistic: {
    typeUrl: string;
    encode(message: TierStatistic, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TierStatistic;
    fromPartial(object: Partial<TierStatistic>): TierStatistic;
    fromAmino(object: TierStatisticAmino): TierStatistic;
    toAmino(message: TierStatistic): TierStatisticAmino;
    fromAminoMsg(object: TierStatisticAminoMsg): TierStatistic;
    fromProtoMsg(message: TierStatisticProtoMsg): TierStatistic;
    toProto(message: TierStatistic): Uint8Array;
    toProtoMsg(message: TierStatistic): TierStatisticProtoMsg;
};
export declare const QueryFeeDiscountTierStatisticsResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountTierStatisticsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse;
    fromPartial(object: Partial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
    fromAmino(object: QueryFeeDiscountTierStatisticsResponseAmino): QueryFeeDiscountTierStatisticsResponse;
    toAmino(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountTierStatisticsResponseAminoMsg): QueryFeeDiscountTierStatisticsResponse;
    fromProtoMsg(message: QueryFeeDiscountTierStatisticsResponseProtoMsg): QueryFeeDiscountTierStatisticsResponse;
    toProto(message: QueryFeeDiscountTierStatisticsResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseProtoMsg;
};
export declare const NinjaVaultInfosRequest: {
    typeUrl: string;
    encode(_: NinjaVaultInfosRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NinjaVaultInfosRequest;
    fromPartial(_: Partial<NinjaVaultInfosRequest>): NinjaVaultInfosRequest;
    fromAmino(_: NinjaVaultInfosRequestAmino): NinjaVaultInfosRequest;
    toAmino(_: NinjaVaultInfosRequest): NinjaVaultInfosRequestAmino;
    fromAminoMsg(object: NinjaVaultInfosRequestAminoMsg): NinjaVaultInfosRequest;
    fromProtoMsg(message: NinjaVaultInfosRequestProtoMsg): NinjaVaultInfosRequest;
    toProto(message: NinjaVaultInfosRequest): Uint8Array;
    toProtoMsg(message: NinjaVaultInfosRequest): NinjaVaultInfosRequestProtoMsg;
};
export declare const NinjaVaultInfosResponse: {
    typeUrl: string;
    encode(message: NinjaVaultInfosResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NinjaVaultInfosResponse;
    fromPartial(object: Partial<NinjaVaultInfosResponse>): NinjaVaultInfosResponse;
    fromAmino(object: NinjaVaultInfosResponseAmino): NinjaVaultInfosResponse;
    toAmino(message: NinjaVaultInfosResponse): NinjaVaultInfosResponseAmino;
    fromAminoMsg(object: NinjaVaultInfosResponseAminoMsg): NinjaVaultInfosResponse;
    fromProtoMsg(message: NinjaVaultInfosResponseProtoMsg): NinjaVaultInfosResponse;
    toProto(message: NinjaVaultInfosResponse): Uint8Array;
    toProtoMsg(message: NinjaVaultInfosResponse): NinjaVaultInfosResponseProtoMsg;
};
export declare const QueryMarketIDFromVaultRequest: {
    typeUrl: string;
    encode(message: QueryMarketIDFromVaultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest;
    fromPartial(object: Partial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
    fromAmino(object: QueryMarketIDFromVaultRequestAmino): QueryMarketIDFromVaultRequest;
    toAmino(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestAmino;
    fromAminoMsg(object: QueryMarketIDFromVaultRequestAminoMsg): QueryMarketIDFromVaultRequest;
    fromProtoMsg(message: QueryMarketIDFromVaultRequestProtoMsg): QueryMarketIDFromVaultRequest;
    toProto(message: QueryMarketIDFromVaultRequest): Uint8Array;
    toProtoMsg(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestProtoMsg;
};
export declare const QueryMarketIDFromVaultResponse: {
    typeUrl: string;
    encode(message: QueryMarketIDFromVaultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse;
    fromPartial(object: Partial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
    fromAmino(object: QueryMarketIDFromVaultResponseAmino): QueryMarketIDFromVaultResponse;
    toAmino(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseAmino;
    fromAminoMsg(object: QueryMarketIDFromVaultResponseAminoMsg): QueryMarketIDFromVaultResponse;
    fromProtoMsg(message: QueryMarketIDFromVaultResponseProtoMsg): QueryMarketIDFromVaultResponse;
    toProto(message: QueryMarketIDFromVaultResponse): Uint8Array;
    toProtoMsg(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseProtoMsg;
};
export declare const QueryHistoricalTradeRecordsRequest: {
    typeUrl: string;
    encode(message: QueryHistoricalTradeRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
    fromAmino(object: QueryHistoricalTradeRecordsRequestAmino): QueryHistoricalTradeRecordsRequest;
    toAmino(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestAmino;
    fromAminoMsg(object: QueryHistoricalTradeRecordsRequestAminoMsg): QueryHistoricalTradeRecordsRequest;
    fromProtoMsg(message: QueryHistoricalTradeRecordsRequestProtoMsg): QueryHistoricalTradeRecordsRequest;
    toProto(message: QueryHistoricalTradeRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestProtoMsg;
};
export declare const QueryHistoricalTradeRecordsResponse: {
    typeUrl: string;
    encode(message: QueryHistoricalTradeRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
    fromAmino(object: QueryHistoricalTradeRecordsResponseAmino): QueryHistoricalTradeRecordsResponse;
    toAmino(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseAmino;
    fromAminoMsg(object: QueryHistoricalTradeRecordsResponseAminoMsg): QueryHistoricalTradeRecordsResponse;
    fromProtoMsg(message: QueryHistoricalTradeRecordsResponseProtoMsg): QueryHistoricalTradeRecordsResponse;
    toProto(message: QueryHistoricalTradeRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseProtoMsg;
};
export declare const TradeHistoryOptions: {
    typeUrl: string;
    encode(message: TradeHistoryOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradeHistoryOptions;
    fromPartial(object: Partial<TradeHistoryOptions>): TradeHistoryOptions;
    fromAmino(object: TradeHistoryOptionsAmino): TradeHistoryOptions;
    toAmino(message: TradeHistoryOptions): TradeHistoryOptionsAmino;
    fromAminoMsg(object: TradeHistoryOptionsAminoMsg): TradeHistoryOptions;
    fromProtoMsg(message: TradeHistoryOptionsProtoMsg): TradeHistoryOptions;
    toProto(message: TradeHistoryOptions): Uint8Array;
    toProtoMsg(message: TradeHistoryOptions): TradeHistoryOptionsProtoMsg;
};
export declare const QueryMarketVolatilityRequest: {
    typeUrl: string;
    encode(message: QueryMarketVolatilityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityRequest;
    fromPartial(object: Partial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
    fromAmino(object: QueryMarketVolatilityRequestAmino): QueryMarketVolatilityRequest;
    toAmino(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestAmino;
    fromAminoMsg(object: QueryMarketVolatilityRequestAminoMsg): QueryMarketVolatilityRequest;
    fromProtoMsg(message: QueryMarketVolatilityRequestProtoMsg): QueryMarketVolatilityRequest;
    toProto(message: QueryMarketVolatilityRequest): Uint8Array;
    toProtoMsg(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestProtoMsg;
};
export declare const QueryMarketVolatilityResponse: {
    typeUrl: string;
    encode(message: QueryMarketVolatilityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityResponse;
    fromPartial(object: Partial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
    fromAmino(object: QueryMarketVolatilityResponseAmino): QueryMarketVolatilityResponse;
    toAmino(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseAmino;
    fromAminoMsg(object: QueryMarketVolatilityResponseAminoMsg): QueryMarketVolatilityResponse;
    fromProtoMsg(message: QueryMarketVolatilityResponseProtoMsg): QueryMarketVolatilityResponse;
    toProto(message: QueryMarketVolatilityResponse): Uint8Array;
    toProtoMsg(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseProtoMsg;
};
export declare const QueryBinaryMarketsRequest: {
    typeUrl: string;
    encode(message: QueryBinaryMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsRequest;
    fromPartial(object: Partial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
    fromAmino(object: QueryBinaryMarketsRequestAmino): QueryBinaryMarketsRequest;
    toAmino(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestAmino;
    fromAminoMsg(object: QueryBinaryMarketsRequestAminoMsg): QueryBinaryMarketsRequest;
    fromProtoMsg(message: QueryBinaryMarketsRequestProtoMsg): QueryBinaryMarketsRequest;
    toProto(message: QueryBinaryMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestProtoMsg;
};
export declare const QueryBinaryMarketsResponse: {
    typeUrl: string;
    encode(message: QueryBinaryMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsResponse;
    fromPartial(object: Partial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
    fromAmino(object: QueryBinaryMarketsResponseAmino): QueryBinaryMarketsResponse;
    toAmino(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseAmino;
    fromAminoMsg(object: QueryBinaryMarketsResponseAminoMsg): QueryBinaryMarketsResponse;
    fromProtoMsg(message: QueryBinaryMarketsResponseProtoMsg): QueryBinaryMarketsResponse;
    toProto(message: QueryBinaryMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseProtoMsg;
};
export declare const QueryTraderDerivativeConditionalOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
    fromAmino(object: QueryTraderDerivativeConditionalOrdersRequestAmino): QueryTraderDerivativeConditionalOrdersRequest;
    toAmino(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersRequestAminoMsg): QueryTraderDerivativeConditionalOrdersRequest;
    fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequestProtoMsg): QueryTraderDerivativeConditionalOrdersRequest;
    toProto(message: QueryTraderDerivativeConditionalOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestProtoMsg;
};
export declare const TrimmedDerivativeConditionalOrder: {
    typeUrl: string;
    encode(message: TrimmedDerivativeConditionalOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder;
    fromPartial(object: Partial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
    fromAmino(object: TrimmedDerivativeConditionalOrderAmino): TrimmedDerivativeConditionalOrder;
    toAmino(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderAmino;
    fromAminoMsg(object: TrimmedDerivativeConditionalOrderAminoMsg): TrimmedDerivativeConditionalOrder;
    fromProtoMsg(message: TrimmedDerivativeConditionalOrderProtoMsg): TrimmedDerivativeConditionalOrder;
    toProto(message: TrimmedDerivativeConditionalOrder): Uint8Array;
    toProtoMsg(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderProtoMsg;
};
export declare const QueryTraderDerivativeConditionalOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
    fromAmino(object: QueryTraderDerivativeConditionalOrdersResponseAmino): QueryTraderDerivativeConditionalOrdersResponse;
    toAmino(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersResponseAminoMsg): QueryTraderDerivativeConditionalOrdersResponse;
    fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponseProtoMsg): QueryTraderDerivativeConditionalOrdersResponse;
    toProto(message: QueryTraderDerivativeConditionalOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseProtoMsg;
};
