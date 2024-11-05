import { Params, ParamsAmino, ParamsSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoAmino, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderAmino, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderAmino, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderAmino, DerivativeMarketOrderSDKType, Deposit, DepositAmino, DepositSDKType, Position, PositionAmino, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceAmino, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType } from "./exchange";
import { DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to exchange. */
    params: Params;
    /** spot_markets is an array containing the genesis trade pairs */
    spotMarkets: SpotMarket[];
    /** derivative_markets is an array containing the genesis derivative markets */
    derivativeMarkets: DerivativeMarket[];
    /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
    spotOrderbook: SpotOrderBook[];
    /** derivative_orderbook defines the derivative exchange limit orderbook active at genesis. */
    derivativeOrderbook: DerivativeOrderBook[];
    /** balances defines the exchange users balances active at genesis. */
    balances: Balance[];
    /** positions defines the exchange derivative positions at genesis */
    positions: DerivativePosition[];
    /** subaccount_trade_nonces defines the subaccount trade nonces for the subaccounts at genesis */
    subaccountTradeNonces: SubaccountNonce[];
    /** expiry_futures_market_info defines the market info for the expiry futures markets at genesis */
    expiryFuturesMarketInfoState: ExpiryFuturesMarketInfoState[];
    /** perpetual_market_info defines the market info for the perpetual derivative markets at genesis */
    perpetualMarketInfo: PerpetualMarketInfo[];
    /** perpetual_market_funding_state defines the funding state for the perpetual derivative markets at genesis */
    perpetualMarketFundingState: PerpetualMarketFundingState[];
    /** derivative_market_settlement_scheduled defines the scheduled markets for settlement at genesis */
    derivativeMarketSettlementScheduled: DerivativeMarketSettlementInfo[];
    /** sets spot markets as enabled */
    isSpotExchangeEnabled: boolean;
    /** sets derivative markets as enabled */
    isDerivativesExchangeEnabled: boolean;
    /** the current trading reward campaign info */
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    /** the current and upcoming trading reward campaign pools */
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /** the current trading reward account points */
    tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
    /** the fee discount schedule */
    feeDiscountSchedule?: FeeDiscountSchedule;
    /** the cached fee discount account tiers with TTL */
    feeDiscountAccountTierTtl: FeeDiscountAccountTierTTL[];
    /** the fee discount paid by accounts in all buckets */
    feeDiscountBucketVolumeAccounts: FeeDiscountBucketVolumeAccounts[];
    /** sets the first fee cycle as finished */
    isFirstFeeCycleFinished: boolean;
    /** the current and upcoming trading reward campaign pending pools */
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /** the pending trading reward account points */
    pendingTradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPendingPoints[];
    /** the addresses opting out of trading rewards */
    rewardsOptOutAddresses: string[];
    historicalTradeRecords: TradeRecords[];
    /** binary_options_markets is an array containing the genesis binary options markets */
    binaryOptionsMarkets: BinaryOptionsMarket[];
    /** binary_options_markets_scheduled_for_settlement contains the marketIDs of binary options markets scheduled for next-block settlement */
    binaryOptionsMarketIdsScheduledForSettlement: string[];
    /** spot_market_ids_scheduled_to_force_close defines the scheduled markets for forced closings at genesis */
    spotMarketIdsScheduledToForceClose: string[];
    /** denom_decimals defines the denom decimals for the exchange. */
    denomDecimals: DenomDecimals[];
    /** conditional_derivative_orderbook contains conditional orderbooks for all markets (both lmit and market conditional orders) */
    conditionalDerivativeOrderbooks: ConditionalDerivativeOrderBook[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to exchange. */
    params?: ParamsAmino;
    /** spot_markets is an array containing the genesis trade pairs */
    spot_markets?: SpotMarketAmino[];
    /** derivative_markets is an array containing the genesis derivative markets */
    derivative_markets?: DerivativeMarketAmino[];
    /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
    spot_orderbook?: SpotOrderBookAmino[];
    /** derivative_orderbook defines the derivative exchange limit orderbook active at genesis. */
    derivative_orderbook?: DerivativeOrderBookAmino[];
    /** balances defines the exchange users balances active at genesis. */
    balances?: BalanceAmino[];
    /** positions defines the exchange derivative positions at genesis */
    positions?: DerivativePositionAmino[];
    /** subaccount_trade_nonces defines the subaccount trade nonces for the subaccounts at genesis */
    subaccount_trade_nonces?: SubaccountNonceAmino[];
    /** expiry_futures_market_info defines the market info for the expiry futures markets at genesis */
    expiry_futures_market_info_state?: ExpiryFuturesMarketInfoStateAmino[];
    /** perpetual_market_info defines the market info for the perpetual derivative markets at genesis */
    perpetual_market_info?: PerpetualMarketInfoAmino[];
    /** perpetual_market_funding_state defines the funding state for the perpetual derivative markets at genesis */
    perpetual_market_funding_state?: PerpetualMarketFundingStateAmino[];
    /** derivative_market_settlement_scheduled defines the scheduled markets for settlement at genesis */
    derivative_market_settlement_scheduled?: DerivativeMarketSettlementInfoAmino[];
    /** sets spot markets as enabled */
    is_spot_exchange_enabled?: boolean;
    /** sets derivative markets as enabled */
    is_derivatives_exchange_enabled?: boolean;
    /** the current trading reward campaign info */
    trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
    /** the current and upcoming trading reward campaign pools */
    trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
    /** the current trading reward account points */
    trading_reward_campaign_account_points?: TradingRewardCampaignAccountPointsAmino[];
    /** the fee discount schedule */
    fee_discount_schedule?: FeeDiscountScheduleAmino;
    /** the cached fee discount account tiers with TTL */
    fee_discount_account_tier_ttl?: FeeDiscountAccountTierTTLAmino[];
    /** the fee discount paid by accounts in all buckets */
    fee_discount_bucket_volume_accounts?: FeeDiscountBucketVolumeAccountsAmino[];
    /** sets the first fee cycle as finished */
    is_first_fee_cycle_finished?: boolean;
    /** the current and upcoming trading reward campaign pending pools */
    pending_trading_reward_pool_campaign_schedule?: CampaignRewardPoolAmino[];
    /** the pending trading reward account points */
    pending_trading_reward_campaign_account_points?: TradingRewardCampaignAccountPendingPointsAmino[];
    /** the addresses opting out of trading rewards */
    rewards_opt_out_addresses?: string[];
    historical_trade_records?: TradeRecordsAmino[];
    /** binary_options_markets is an array containing the genesis binary options markets */
    binary_options_markets?: BinaryOptionsMarketAmino[];
    /** binary_options_markets_scheduled_for_settlement contains the marketIDs of binary options markets scheduled for next-block settlement */
    binary_options_market_ids_scheduled_for_settlement?: string[];
    /** spot_market_ids_scheduled_to_force_close defines the scheduled markets for forced closings at genesis */
    spot_market_ids_scheduled_to_force_close?: string[];
    /** denom_decimals defines the denom decimals for the exchange. */
    denom_decimals?: DenomDecimalsAmino[];
    /** conditional_derivative_orderbook contains conditional orderbooks for all markets (both lmit and market conditional orders) */
    conditional_derivative_orderbooks?: ConditionalDerivativeOrderBookAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.exchange.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    spot_markets: SpotMarketSDKType[];
    derivative_markets: DerivativeMarketSDKType[];
    spot_orderbook: SpotOrderBookSDKType[];
    derivative_orderbook: DerivativeOrderBookSDKType[];
    balances: BalanceSDKType[];
    positions: DerivativePositionSDKType[];
    subaccount_trade_nonces: SubaccountNonceSDKType[];
    expiry_futures_market_info_state: ExpiryFuturesMarketInfoStateSDKType[];
    perpetual_market_info: PerpetualMarketInfoSDKType[];
    perpetual_market_funding_state: PerpetualMarketFundingStateSDKType[];
    derivative_market_settlement_scheduled: DerivativeMarketSettlementInfoSDKType[];
    is_spot_exchange_enabled: boolean;
    is_derivatives_exchange_enabled: boolean;
    trading_reward_campaign_info?: TradingRewardCampaignInfoSDKType;
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsSDKType[];
    fee_discount_schedule?: FeeDiscountScheduleSDKType;
    fee_discount_account_tier_ttl: FeeDiscountAccountTierTTLSDKType[];
    fee_discount_bucket_volume_accounts: FeeDiscountBucketVolumeAccountsSDKType[];
    is_first_fee_cycle_finished: boolean;
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    pending_trading_reward_campaign_account_points: TradingRewardCampaignAccountPendingPointsSDKType[];
    rewards_opt_out_addresses: string[];
    historical_trade_records: TradeRecordsSDKType[];
    binary_options_markets: BinaryOptionsMarketSDKType[];
    binary_options_market_ids_scheduled_for_settlement: string[];
    spot_market_ids_scheduled_to_force_close: string[];
    denom_decimals: DenomDecimalsSDKType[];
    conditional_derivative_orderbooks: ConditionalDerivativeOrderBookSDKType[];
}
export interface FeeDiscountAccountTierTTL {
    account: string;
    tierTtl?: FeeDiscountTierTTL;
}
export interface FeeDiscountAccountTierTTLProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
    value: Uint8Array;
}
export interface FeeDiscountAccountTierTTLAmino {
    account?: string;
    tier_ttl?: FeeDiscountTierTTLAmino;
}
export interface FeeDiscountAccountTierTTLAminoMsg {
    type: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
    value: FeeDiscountAccountTierTTLAmino;
}
export interface FeeDiscountAccountTierTTLSDKType {
    account: string;
    tier_ttl?: FeeDiscountTierTTLSDKType;
}
export interface FeeDiscountBucketVolumeAccounts {
    bucketStartTimestamp: bigint;
    accountVolume: AccountVolume[];
}
export interface FeeDiscountBucketVolumeAccountsProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
    value: Uint8Array;
}
export interface FeeDiscountBucketVolumeAccountsAmino {
    bucket_start_timestamp?: string;
    account_volume?: AccountVolumeAmino[];
}
export interface FeeDiscountBucketVolumeAccountsAminoMsg {
    type: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
    value: FeeDiscountBucketVolumeAccountsAmino;
}
export interface FeeDiscountBucketVolumeAccountsSDKType {
    bucket_start_timestamp: bigint;
    account_volume: AccountVolumeSDKType[];
}
export interface AccountVolume {
    account: string;
    volume: string;
}
export interface AccountVolumeProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.AccountVolume";
    value: Uint8Array;
}
export interface AccountVolumeAmino {
    account?: string;
    volume?: string;
}
export interface AccountVolumeAminoMsg {
    type: "/injective.exchange.v1beta1.AccountVolume";
    value: AccountVolumeAmino;
}
export interface AccountVolumeSDKType {
    account: string;
    volume: string;
}
export interface TradingRewardCampaignAccountPoints {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPointsProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
    value: Uint8Array;
}
export interface TradingRewardCampaignAccountPointsAmino {
    account?: string;
    points?: string;
}
export interface TradingRewardCampaignAccountPointsAminoMsg {
    type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
    value: TradingRewardCampaignAccountPointsAmino;
}
export interface TradingRewardCampaignAccountPointsSDKType {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPendingPoints {
    rewardPoolStartTimestamp: bigint;
    accountPoints: TradingRewardCampaignAccountPoints[];
}
export interface TradingRewardCampaignAccountPendingPointsProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
    value: Uint8Array;
}
export interface TradingRewardCampaignAccountPendingPointsAmino {
    reward_pool_start_timestamp?: string;
    account_points?: TradingRewardCampaignAccountPointsAmino[];
}
export interface TradingRewardCampaignAccountPendingPointsAminoMsg {
    type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
    value: TradingRewardCampaignAccountPendingPointsAmino;
}
export interface TradingRewardCampaignAccountPendingPointsSDKType {
    reward_pool_start_timestamp: bigint;
    account_points: TradingRewardCampaignAccountPointsSDKType[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: SpotLimitOrder[];
}
export interface SpotOrderBookProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.SpotOrderBook";
    value: Uint8Array;
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookAmino {
    market_id?: string;
    isBuySide?: boolean;
    orders?: SpotLimitOrderAmino[];
}
export interface SpotOrderBookAminoMsg {
    type: "/injective.exchange.v1beta1.SpotOrderBook";
    value: SpotOrderBookAmino;
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: SpotLimitOrderSDKType[];
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrder[];
}
export interface DerivativeOrderBookProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook";
    value: Uint8Array;
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookAmino {
    market_id?: string;
    isBuySide?: boolean;
    orders?: DerivativeLimitOrderAmino[];
}
export interface DerivativeOrderBookAminoMsg {
    type: "/injective.exchange.v1beta1.DerivativeOrderBook";
    value: DerivativeOrderBookAmino;
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrderSDKType[];
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBook {
    marketId: string;
    limitBuyOrders: DerivativeLimitOrder[];
    marketBuyOrders: DerivativeMarketOrder[];
    limitSellOrders: DerivativeLimitOrder[];
    marketSellOrders: DerivativeMarketOrder[];
}
export interface ConditionalDerivativeOrderBookProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
    value: Uint8Array;
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookAmino {
    market_id?: string;
    limit_buy_orders?: DerivativeLimitOrderAmino[];
    market_buy_orders?: DerivativeMarketOrderAmino[];
    limit_sell_orders?: DerivativeLimitOrderAmino[];
    market_sell_orders?: DerivativeMarketOrderAmino[];
}
export interface ConditionalDerivativeOrderBookAminoMsg {
    type: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
    value: ConditionalDerivativeOrderBookAmino;
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookSDKType {
    market_id: string;
    limit_buy_orders: DerivativeLimitOrderSDKType[];
    market_buy_orders: DerivativeMarketOrderSDKType[];
    limit_sell_orders: DerivativeLimitOrderSDKType[];
    market_sell_orders: DerivativeMarketOrderSDKType[];
}
export interface Balance {
    subaccountId: string;
    denom: string;
    deposits?: Deposit;
}
export interface BalanceProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.Balance";
    value: Uint8Array;
}
export interface BalanceAmino {
    subaccount_id?: string;
    denom?: string;
    deposits?: DepositAmino;
}
export interface BalanceAminoMsg {
    type: "/injective.exchange.v1beta1.Balance";
    value: BalanceAmino;
}
export interface BalanceSDKType {
    subaccount_id: string;
    denom: string;
    deposits?: DepositSDKType;
}
export interface DerivativePosition {
    subaccountId: string;
    marketId: string;
    position?: Position;
}
export interface DerivativePositionProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.DerivativePosition";
    value: Uint8Array;
}
export interface DerivativePositionAmino {
    subaccount_id?: string;
    market_id?: string;
    position?: PositionAmino;
}
export interface DerivativePositionAminoMsg {
    type: "/injective.exchange.v1beta1.DerivativePosition";
    value: DerivativePositionAmino;
}
export interface DerivativePositionSDKType {
    subaccount_id: string;
    market_id: string;
    position?: PositionSDKType;
}
export interface SubaccountNonce {
    subaccountId: string;
    subaccountTradeNonce: SubaccountTradeNonce;
}
export interface SubaccountNonceProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.SubaccountNonce";
    value: Uint8Array;
}
export interface SubaccountNonceAmino {
    subaccount_id?: string;
    subaccount_trade_nonce?: SubaccountTradeNonceAmino;
}
export interface SubaccountNonceAminoMsg {
    type: "/injective.exchange.v1beta1.SubaccountNonce";
    value: SubaccountNonceAmino;
}
export interface SubaccountNonceSDKType {
    subaccount_id: string;
    subaccount_trade_nonce: SubaccountTradeNonceSDKType;
}
export interface ExpiryFuturesMarketInfoState {
    marketId: string;
    marketInfo?: ExpiryFuturesMarketInfo;
}
export interface ExpiryFuturesMarketInfoStateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
    value: Uint8Array;
}
export interface ExpiryFuturesMarketInfoStateAmino {
    market_id?: string;
    market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface ExpiryFuturesMarketInfoStateAminoMsg {
    type: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
    value: ExpiryFuturesMarketInfoStateAmino;
}
export interface ExpiryFuturesMarketInfoStateSDKType {
    market_id: string;
    market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface PerpetualMarketFundingState {
    marketId: string;
    funding?: PerpetualMarketFunding;
}
export interface PerpetualMarketFundingStateProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
    value: Uint8Array;
}
export interface PerpetualMarketFundingStateAmino {
    market_id?: string;
    funding?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketFundingStateAminoMsg {
    type: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
    value: PerpetualMarketFundingStateAmino;
}
export interface PerpetualMarketFundingStateSDKType {
    market_id: string;
    funding?: PerpetualMarketFundingSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeeDiscountAccountTierTTL: {
    typeUrl: string;
    encode(message: FeeDiscountAccountTierTTL, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountAccountTierTTL;
    fromPartial(object: Partial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL;
    fromAmino(object: FeeDiscountAccountTierTTLAmino): FeeDiscountAccountTierTTL;
    toAmino(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLAmino;
    fromAminoMsg(object: FeeDiscountAccountTierTTLAminoMsg): FeeDiscountAccountTierTTL;
    fromProtoMsg(message: FeeDiscountAccountTierTTLProtoMsg): FeeDiscountAccountTierTTL;
    toProto(message: FeeDiscountAccountTierTTL): Uint8Array;
    toProtoMsg(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLProtoMsg;
};
export declare const FeeDiscountBucketVolumeAccounts: {
    typeUrl: string;
    encode(message: FeeDiscountBucketVolumeAccounts, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountBucketVolumeAccounts;
    fromPartial(object: Partial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts;
    fromAmino(object: FeeDiscountBucketVolumeAccountsAmino): FeeDiscountBucketVolumeAccounts;
    toAmino(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsAmino;
    fromAminoMsg(object: FeeDiscountBucketVolumeAccountsAminoMsg): FeeDiscountBucketVolumeAccounts;
    fromProtoMsg(message: FeeDiscountBucketVolumeAccountsProtoMsg): FeeDiscountBucketVolumeAccounts;
    toProto(message: FeeDiscountBucketVolumeAccounts): Uint8Array;
    toProtoMsg(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsProtoMsg;
};
export declare const AccountVolume: {
    typeUrl: string;
    encode(message: AccountVolume, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountVolume;
    fromPartial(object: Partial<AccountVolume>): AccountVolume;
    fromAmino(object: AccountVolumeAmino): AccountVolume;
    toAmino(message: AccountVolume): AccountVolumeAmino;
    fromAminoMsg(object: AccountVolumeAminoMsg): AccountVolume;
    fromProtoMsg(message: AccountVolumeProtoMsg): AccountVolume;
    toProto(message: AccountVolume): Uint8Array;
    toProtoMsg(message: AccountVolume): AccountVolumeProtoMsg;
};
export declare const TradingRewardCampaignAccountPoints: {
    typeUrl: string;
    encode(message: TradingRewardCampaignAccountPoints, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignAccountPoints;
    fromPartial(object: Partial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints;
    fromAmino(object: TradingRewardCampaignAccountPointsAmino): TradingRewardCampaignAccountPoints;
    toAmino(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsAmino;
    fromAminoMsg(object: TradingRewardCampaignAccountPointsAminoMsg): TradingRewardCampaignAccountPoints;
    fromProtoMsg(message: TradingRewardCampaignAccountPointsProtoMsg): TradingRewardCampaignAccountPoints;
    toProto(message: TradingRewardCampaignAccountPoints): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsProtoMsg;
};
export declare const TradingRewardCampaignAccountPendingPoints: {
    typeUrl: string;
    encode(message: TradingRewardCampaignAccountPendingPoints, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignAccountPendingPoints;
    fromPartial(object: Partial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints;
    fromAmino(object: TradingRewardCampaignAccountPendingPointsAmino): TradingRewardCampaignAccountPendingPoints;
    toAmino(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsAmino;
    fromAminoMsg(object: TradingRewardCampaignAccountPendingPointsAminoMsg): TradingRewardCampaignAccountPendingPoints;
    fromProtoMsg(message: TradingRewardCampaignAccountPendingPointsProtoMsg): TradingRewardCampaignAccountPendingPoints;
    toProto(message: TradingRewardCampaignAccountPendingPoints): Uint8Array;
    toProtoMsg(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsProtoMsg;
};
export declare const SpotOrderBook: {
    typeUrl: string;
    encode(message: SpotOrderBook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotOrderBook;
    fromPartial(object: Partial<SpotOrderBook>): SpotOrderBook;
    fromAmino(object: SpotOrderBookAmino): SpotOrderBook;
    toAmino(message: SpotOrderBook): SpotOrderBookAmino;
    fromAminoMsg(object: SpotOrderBookAminoMsg): SpotOrderBook;
    fromProtoMsg(message: SpotOrderBookProtoMsg): SpotOrderBook;
    toProto(message: SpotOrderBook): Uint8Array;
    toProtoMsg(message: SpotOrderBook): SpotOrderBookProtoMsg;
};
export declare const DerivativeOrderBook: {
    typeUrl: string;
    encode(message: DerivativeOrderBook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DerivativeOrderBook;
    fromPartial(object: Partial<DerivativeOrderBook>): DerivativeOrderBook;
    fromAmino(object: DerivativeOrderBookAmino): DerivativeOrderBook;
    toAmino(message: DerivativeOrderBook): DerivativeOrderBookAmino;
    fromAminoMsg(object: DerivativeOrderBookAminoMsg): DerivativeOrderBook;
    fromProtoMsg(message: DerivativeOrderBookProtoMsg): DerivativeOrderBook;
    toProto(message: DerivativeOrderBook): Uint8Array;
    toProtoMsg(message: DerivativeOrderBook): DerivativeOrderBookProtoMsg;
};
export declare const ConditionalDerivativeOrderBook: {
    typeUrl: string;
    encode(message: ConditionalDerivativeOrderBook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConditionalDerivativeOrderBook;
    fromPartial(object: Partial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook;
    fromAmino(object: ConditionalDerivativeOrderBookAmino): ConditionalDerivativeOrderBook;
    toAmino(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookAmino;
    fromAminoMsg(object: ConditionalDerivativeOrderBookAminoMsg): ConditionalDerivativeOrderBook;
    fromProtoMsg(message: ConditionalDerivativeOrderBookProtoMsg): ConditionalDerivativeOrderBook;
    toProto(message: ConditionalDerivativeOrderBook): Uint8Array;
    toProtoMsg(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookProtoMsg;
};
export declare const Balance: {
    typeUrl: string;
    encode(message: Balance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Balance;
    fromPartial(object: Partial<Balance>): Balance;
    fromAmino(object: BalanceAmino): Balance;
    toAmino(message: Balance): BalanceAmino;
    fromAminoMsg(object: BalanceAminoMsg): Balance;
    fromProtoMsg(message: BalanceProtoMsg): Balance;
    toProto(message: Balance): Uint8Array;
    toProtoMsg(message: Balance): BalanceProtoMsg;
};
export declare const DerivativePosition: {
    typeUrl: string;
    encode(message: DerivativePosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DerivativePosition;
    fromPartial(object: Partial<DerivativePosition>): DerivativePosition;
    fromAmino(object: DerivativePositionAmino): DerivativePosition;
    toAmino(message: DerivativePosition): DerivativePositionAmino;
    fromAminoMsg(object: DerivativePositionAminoMsg): DerivativePosition;
    fromProtoMsg(message: DerivativePositionProtoMsg): DerivativePosition;
    toProto(message: DerivativePosition): Uint8Array;
    toProtoMsg(message: DerivativePosition): DerivativePositionProtoMsg;
};
export declare const SubaccountNonce: {
    typeUrl: string;
    encode(message: SubaccountNonce, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SubaccountNonce;
    fromPartial(object: Partial<SubaccountNonce>): SubaccountNonce;
    fromAmino(object: SubaccountNonceAmino): SubaccountNonce;
    toAmino(message: SubaccountNonce): SubaccountNonceAmino;
    fromAminoMsg(object: SubaccountNonceAminoMsg): SubaccountNonce;
    fromProtoMsg(message: SubaccountNonceProtoMsg): SubaccountNonce;
    toProto(message: SubaccountNonce): Uint8Array;
    toProtoMsg(message: SubaccountNonce): SubaccountNonceProtoMsg;
};
export declare const ExpiryFuturesMarketInfoState: {
    typeUrl: string;
    encode(message: ExpiryFuturesMarketInfoState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExpiryFuturesMarketInfoState;
    fromPartial(object: Partial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState;
    fromAmino(object: ExpiryFuturesMarketInfoStateAmino): ExpiryFuturesMarketInfoState;
    toAmino(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateAmino;
    fromAminoMsg(object: ExpiryFuturesMarketInfoStateAminoMsg): ExpiryFuturesMarketInfoState;
    fromProtoMsg(message: ExpiryFuturesMarketInfoStateProtoMsg): ExpiryFuturesMarketInfoState;
    toProto(message: ExpiryFuturesMarketInfoState): Uint8Array;
    toProtoMsg(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateProtoMsg;
};
export declare const PerpetualMarketFundingState: {
    typeUrl: string;
    encode(message: PerpetualMarketFundingState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketFundingState;
    fromPartial(object: Partial<PerpetualMarketFundingState>): PerpetualMarketFundingState;
    fromAmino(object: PerpetualMarketFundingStateAmino): PerpetualMarketFundingState;
    toAmino(message: PerpetualMarketFundingState): PerpetualMarketFundingStateAmino;
    fromAminoMsg(object: PerpetualMarketFundingStateAminoMsg): PerpetualMarketFundingState;
    fromProtoMsg(message: PerpetualMarketFundingStateProtoMsg): PerpetualMarketFundingState;
    toProto(message: PerpetualMarketFundingState): Uint8Array;
    toProtoMsg(message: PerpetualMarketFundingState): PerpetualMarketFundingStateProtoMsg;
};
