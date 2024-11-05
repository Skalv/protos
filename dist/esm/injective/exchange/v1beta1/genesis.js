//@ts-nocheck
import { Params, SpotMarket, DerivativeMarket, PerpetualMarketInfo, DerivativeMarketSettlementInfo, TradingRewardCampaignInfo, CampaignRewardPool, FeeDiscountSchedule, TradeRecords, BinaryOptionsMarket, FeeDiscountTierTTL, SpotLimitOrder, DerivativeLimitOrder, DerivativeMarketOrder, Deposit, Position, SubaccountTradeNonce, ExpiryFuturesMarketInfo, PerpetualMarketFunding } from "./exchange";
import { DenomDecimals } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        spotMarkets: [],
        derivativeMarkets: [],
        spotOrderbook: [],
        derivativeOrderbook: [],
        balances: [],
        positions: [],
        subaccountTradeNonces: [],
        expiryFuturesMarketInfoState: [],
        perpetualMarketInfo: [],
        perpetualMarketFundingState: [],
        derivativeMarketSettlementScheduled: [],
        isSpotExchangeEnabled: false,
        isDerivativesExchangeEnabled: false,
        tradingRewardCampaignInfo: undefined,
        tradingRewardPoolCampaignSchedule: [],
        tradingRewardCampaignAccountPoints: [],
        feeDiscountSchedule: undefined,
        feeDiscountAccountTierTtl: [],
        feeDiscountBucketVolumeAccounts: [],
        isFirstFeeCycleFinished: false,
        pendingTradingRewardPoolCampaignSchedule: [],
        pendingTradingRewardCampaignAccountPoints: [],
        rewardsOptOutAddresses: [],
        historicalTradeRecords: [],
        binaryOptionsMarkets: [],
        binaryOptionsMarketIdsScheduledForSettlement: [],
        spotMarketIdsScheduledToForceClose: [],
        denomDecimals: [],
        conditionalDerivativeOrderbooks: []
    };
}
export const GenesisState = {
    typeUrl: "/injective.exchange.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.spotMarkets) {
            SpotMarket.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.derivativeMarkets) {
            DerivativeMarket.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.spotOrderbook) {
            SpotOrderBook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.derivativeOrderbook) {
            DerivativeOrderBook.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.positions) {
            DerivativePosition.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.subaccountTradeNonces) {
            SubaccountNonce.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketInfoState) {
            ExpiryFuturesMarketInfoState.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.perpetualMarketInfo) {
            PerpetualMarketInfo.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.perpetualMarketFundingState) {
            PerpetualMarketFundingState.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.derivativeMarketSettlementScheduled) {
            DerivativeMarketSettlementInfo.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.isSpotExchangeEnabled === true) {
            writer.uint32(104).bool(message.isSpotExchangeEnabled);
        }
        if (message.isDerivativesExchangeEnabled === true) {
            writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
        }
        if (message.tradingRewardCampaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.tradingRewardCampaignAccountPoints) {
            TradingRewardCampaignAccountPoints.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.feeDiscountSchedule !== undefined) {
            FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.feeDiscountAccountTierTtl) {
            FeeDiscountAccountTierTTL.encode(v, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.feeDiscountBucketVolumeAccounts) {
            FeeDiscountBucketVolumeAccounts.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.isFirstFeeCycleFinished === true) {
            writer.uint32(168).bool(message.isFirstFeeCycleFinished);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.pendingTradingRewardCampaignAccountPoints) {
            TradingRewardCampaignAccountPendingPoints.encode(v, writer.uint32(186).fork()).ldelim();
        }
        for (const v of message.rewardsOptOutAddresses) {
            writer.uint32(194).string(v);
        }
        for (const v of message.historicalTradeRecords) {
            TradeRecords.encode(v, writer.uint32(202).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarkets) {
            BinaryOptionsMarket.encode(v, writer.uint32(210).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
            writer.uint32(218).string(v);
        }
        for (const v of message.spotMarketIdsScheduledToForceClose) {
            writer.uint32(226).string(v);
        }
        for (const v of message.denomDecimals) {
            DenomDecimals.encode(v, writer.uint32(234).fork()).ldelim();
        }
        for (const v of message.conditionalDerivativeOrderbooks) {
            ConditionalDerivativeOrderBook.encode(v, writer.uint32(242).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.spotMarkets.push(SpotMarket.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.derivativeMarkets.push(DerivativeMarket.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.spotOrderbook.push(SpotOrderBook.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.derivativeOrderbook.push(DerivativeOrderBook.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.positions.push(DerivativePosition.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.subaccountTradeNonces.push(SubaccountNonce.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.expiryFuturesMarketInfoState.push(ExpiryFuturesMarketInfoState.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.perpetualMarketInfo.push(PerpetualMarketInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.perpetualMarketFundingState.push(PerpetualMarketFundingState.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.derivativeMarketSettlementScheduled.push(DerivativeMarketSettlementInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.isSpotExchangeEnabled = reader.bool();
                    break;
                case 14:
                    message.isDerivativesExchangeEnabled = reader.bool();
                    break;
                case 15:
                    message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.tradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.feeDiscountAccountTierTtl.push(FeeDiscountAccountTierTTL.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.feeDiscountBucketVolumeAccounts.push(FeeDiscountBucketVolumeAccounts.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.isFirstFeeCycleFinished = reader.bool();
                    break;
                case 22:
                    message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.pendingTradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPendingPoints.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.rewardsOptOutAddresses.push(reader.string());
                    break;
                case 25:
                    message.historicalTradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.binaryOptionsMarkets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
                    break;
                case 27:
                    message.binaryOptionsMarketIdsScheduledForSettlement.push(reader.string());
                    break;
                case 28:
                    message.spotMarketIdsScheduledToForceClose.push(reader.string());
                    break;
                case 29:
                    message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
                    break;
                case 30:
                    message.conditionalDerivativeOrderbooks.push(ConditionalDerivativeOrderBook.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.spotMarkets = object.spotMarkets?.map(e => SpotMarket.fromPartial(e)) || [];
        message.derivativeMarkets = object.derivativeMarkets?.map(e => DerivativeMarket.fromPartial(e)) || [];
        message.spotOrderbook = object.spotOrderbook?.map(e => SpotOrderBook.fromPartial(e)) || [];
        message.derivativeOrderbook = object.derivativeOrderbook?.map(e => DerivativeOrderBook.fromPartial(e)) || [];
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        message.positions = object.positions?.map(e => DerivativePosition.fromPartial(e)) || [];
        message.subaccountTradeNonces = object.subaccountTradeNonces?.map(e => SubaccountNonce.fromPartial(e)) || [];
        message.expiryFuturesMarketInfoState = object.expiryFuturesMarketInfoState?.map(e => ExpiryFuturesMarketInfoState.fromPartial(e)) || [];
        message.perpetualMarketInfo = object.perpetualMarketInfo?.map(e => PerpetualMarketInfo.fromPartial(e)) || [];
        message.perpetualMarketFundingState = object.perpetualMarketFundingState?.map(e => PerpetualMarketFundingState.fromPartial(e)) || [];
        message.derivativeMarketSettlementScheduled = object.derivativeMarketSettlementScheduled?.map(e => DerivativeMarketSettlementInfo.fromPartial(e)) || [];
        message.isSpotExchangeEnabled = object.isSpotExchangeEnabled ?? false;
        message.isDerivativesExchangeEnabled = object.isDerivativesExchangeEnabled ?? false;
        message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
        message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        message.tradingRewardCampaignAccountPoints = object.tradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
        message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
        message.feeDiscountAccountTierTtl = object.feeDiscountAccountTierTtl?.map(e => FeeDiscountAccountTierTTL.fromPartial(e)) || [];
        message.feeDiscountBucketVolumeAccounts = object.feeDiscountBucketVolumeAccounts?.map(e => FeeDiscountBucketVolumeAccounts.fromPartial(e)) || [];
        message.isFirstFeeCycleFinished = object.isFirstFeeCycleFinished ?? false;
        message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        message.pendingTradingRewardCampaignAccountPoints = object.pendingTradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPendingPoints.fromPartial(e)) || [];
        message.rewardsOptOutAddresses = object.rewardsOptOutAddresses?.map(e => e) || [];
        message.historicalTradeRecords = object.historicalTradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
        message.binaryOptionsMarkets = object.binaryOptionsMarkets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
        message.binaryOptionsMarketIdsScheduledForSettlement = object.binaryOptionsMarketIdsScheduledForSettlement?.map(e => e) || [];
        message.spotMarketIdsScheduledToForceClose = object.spotMarketIdsScheduledToForceClose?.map(e => e) || [];
        message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
        message.conditionalDerivativeOrderbooks = object.conditionalDerivativeOrderbooks?.map(e => ConditionalDerivativeOrderBook.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.spotMarkets = object.spot_markets?.map(e => SpotMarket.fromAmino(e)) || [];
        message.derivativeMarkets = object.derivative_markets?.map(e => DerivativeMarket.fromAmino(e)) || [];
        message.spotOrderbook = object.spot_orderbook?.map(e => SpotOrderBook.fromAmino(e)) || [];
        message.derivativeOrderbook = object.derivative_orderbook?.map(e => DerivativeOrderBook.fromAmino(e)) || [];
        message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
        message.positions = object.positions?.map(e => DerivativePosition.fromAmino(e)) || [];
        message.subaccountTradeNonces = object.subaccount_trade_nonces?.map(e => SubaccountNonce.fromAmino(e)) || [];
        message.expiryFuturesMarketInfoState = object.expiry_futures_market_info_state?.map(e => ExpiryFuturesMarketInfoState.fromAmino(e)) || [];
        message.perpetualMarketInfo = object.perpetual_market_info?.map(e => PerpetualMarketInfo.fromAmino(e)) || [];
        message.perpetualMarketFundingState = object.perpetual_market_funding_state?.map(e => PerpetualMarketFundingState.fromAmino(e)) || [];
        message.derivativeMarketSettlementScheduled = object.derivative_market_settlement_scheduled?.map(e => DerivativeMarketSettlementInfo.fromAmino(e)) || [];
        if (object.is_spot_exchange_enabled !== undefined && object.is_spot_exchange_enabled !== null) {
            message.isSpotExchangeEnabled = object.is_spot_exchange_enabled;
        }
        if (object.is_derivatives_exchange_enabled !== undefined && object.is_derivatives_exchange_enabled !== null) {
            message.isDerivativesExchangeEnabled = object.is_derivatives_exchange_enabled;
        }
        if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
            message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
        }
        message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        message.tradingRewardCampaignAccountPoints = object.trading_reward_campaign_account_points?.map(e => TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
        if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
            message.feeDiscountSchedule = FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
        }
        message.feeDiscountAccountTierTtl = object.fee_discount_account_tier_ttl?.map(e => FeeDiscountAccountTierTTL.fromAmino(e)) || [];
        message.feeDiscountBucketVolumeAccounts = object.fee_discount_bucket_volume_accounts?.map(e => FeeDiscountBucketVolumeAccounts.fromAmino(e)) || [];
        if (object.is_first_fee_cycle_finished !== undefined && object.is_first_fee_cycle_finished !== null) {
            message.isFirstFeeCycleFinished = object.is_first_fee_cycle_finished;
        }
        message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        message.pendingTradingRewardCampaignAccountPoints = object.pending_trading_reward_campaign_account_points?.map(e => TradingRewardCampaignAccountPendingPoints.fromAmino(e)) || [];
        message.rewardsOptOutAddresses = object.rewards_opt_out_addresses?.map(e => e) || [];
        message.historicalTradeRecords = object.historical_trade_records?.map(e => TradeRecords.fromAmino(e)) || [];
        message.binaryOptionsMarkets = object.binary_options_markets?.map(e => BinaryOptionsMarket.fromAmino(e)) || [];
        message.binaryOptionsMarketIdsScheduledForSettlement = object.binary_options_market_ids_scheduled_for_settlement?.map(e => e) || [];
        message.spotMarketIdsScheduledToForceClose = object.spot_market_ids_scheduled_to_force_close?.map(e => e) || [];
        message.denomDecimals = object.denom_decimals?.map(e => DenomDecimals.fromAmino(e)) || [];
        message.conditionalDerivativeOrderbooks = object.conditional_derivative_orderbooks?.map(e => ConditionalDerivativeOrderBook.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.spotMarkets) {
            obj.spot_markets = message.spotMarkets.map(e => e ? SpotMarket.toAmino(e) : undefined);
        }
        else {
            obj.spot_markets = message.spotMarkets;
        }
        if (message.derivativeMarkets) {
            obj.derivative_markets = message.derivativeMarkets.map(e => e ? DerivativeMarket.toAmino(e) : undefined);
        }
        else {
            obj.derivative_markets = message.derivativeMarkets;
        }
        if (message.spotOrderbook) {
            obj.spot_orderbook = message.spotOrderbook.map(e => e ? SpotOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.spot_orderbook = message.spotOrderbook;
        }
        if (message.derivativeOrderbook) {
            obj.derivative_orderbook = message.derivativeOrderbook.map(e => e ? DerivativeOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orderbook = message.derivativeOrderbook;
        }
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        if (message.subaccountTradeNonces) {
            obj.subaccount_trade_nonces = message.subaccountTradeNonces.map(e => e ? SubaccountNonce.toAmino(e) : undefined);
        }
        else {
            obj.subaccount_trade_nonces = message.subaccountTradeNonces;
        }
        if (message.expiryFuturesMarketInfoState) {
            obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState.map(e => e ? ExpiryFuturesMarketInfoState.toAmino(e) : undefined);
        }
        else {
            obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState;
        }
        if (message.perpetualMarketInfo) {
            obj.perpetual_market_info = message.perpetualMarketInfo.map(e => e ? PerpetualMarketInfo.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_info = message.perpetualMarketInfo;
        }
        if (message.perpetualMarketFundingState) {
            obj.perpetual_market_funding_state = message.perpetualMarketFundingState.map(e => e ? PerpetualMarketFundingState.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_funding_state = message.perpetualMarketFundingState;
        }
        if (message.derivativeMarketSettlementScheduled) {
            obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled.map(e => e ? DerivativeMarketSettlementInfo.toAmino(e) : undefined);
        }
        else {
            obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled;
        }
        obj.is_spot_exchange_enabled = message.isSpotExchangeEnabled === false ? undefined : message.isSpotExchangeEnabled;
        obj.is_derivatives_exchange_enabled = message.isDerivativesExchangeEnabled === false ? undefined : message.isDerivativesExchangeEnabled;
        obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
        }
        if (message.tradingRewardCampaignAccountPoints) {
            obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints;
        }
        obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
        if (message.feeDiscountAccountTierTtl) {
            obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl.map(e => e ? FeeDiscountAccountTierTTL.toAmino(e) : undefined);
        }
        else {
            obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl;
        }
        if (message.feeDiscountBucketVolumeAccounts) {
            obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts.map(e => e ? FeeDiscountBucketVolumeAccounts.toAmino(e) : undefined);
        }
        else {
            obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts;
        }
        obj.is_first_fee_cycle_finished = message.isFirstFeeCycleFinished === false ? undefined : message.isFirstFeeCycleFinished;
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
        }
        if (message.pendingTradingRewardCampaignAccountPoints) {
            obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPendingPoints.toAmino(e) : undefined);
        }
        else {
            obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints;
        }
        if (message.rewardsOptOutAddresses) {
            obj.rewards_opt_out_addresses = message.rewardsOptOutAddresses.map(e => e);
        }
        else {
            obj.rewards_opt_out_addresses = message.rewardsOptOutAddresses;
        }
        if (message.historicalTradeRecords) {
            obj.historical_trade_records = message.historicalTradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
        }
        else {
            obj.historical_trade_records = message.historicalTradeRecords;
        }
        if (message.binaryOptionsMarkets) {
            obj.binary_options_markets = message.binaryOptionsMarkets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_markets = message.binaryOptionsMarkets;
        }
        if (message.binaryOptionsMarketIdsScheduledForSettlement) {
            obj.binary_options_market_ids_scheduled_for_settlement = message.binaryOptionsMarketIdsScheduledForSettlement.map(e => e);
        }
        else {
            obj.binary_options_market_ids_scheduled_for_settlement = message.binaryOptionsMarketIdsScheduledForSettlement;
        }
        if (message.spotMarketIdsScheduledToForceClose) {
            obj.spot_market_ids_scheduled_to_force_close = message.spotMarketIdsScheduledToForceClose.map(e => e);
        }
        else {
            obj.spot_market_ids_scheduled_to_force_close = message.spotMarketIdsScheduledToForceClose;
        }
        if (message.denomDecimals) {
            obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
        }
        else {
            obj.denom_decimals = message.denomDecimals;
        }
        if (message.conditionalDerivativeOrderbooks) {
            obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks.map(e => e ? ConditionalDerivativeOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountAccountTierTTL() {
    return {
        account: "",
        tierTtl: undefined
    };
}
export const FeeDiscountAccountTierTTL = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.tierTtl !== undefined) {
            FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountAccountTierTTL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.tierTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountAccountTierTTL();
        message.account = object.account ?? "";
        message.tierTtl = object.tierTtl !== undefined && object.tierTtl !== null ? FeeDiscountTierTTL.fromPartial(object.tierTtl) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountAccountTierTTL();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.tier_ttl !== undefined && object.tier_ttl !== null) {
            message.tierTtl = FeeDiscountTierTTL.fromAmino(object.tier_ttl);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        obj.tier_ttl = message.tierTtl ? FeeDiscountTierTTL.toAmino(message.tierTtl) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountAccountTierTTL.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountAccountTierTTL.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountAccountTierTTL.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
            value: FeeDiscountAccountTierTTL.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountBucketVolumeAccounts() {
    return {
        bucketStartTimestamp: BigInt(0),
        accountVolume: []
    };
}
export const FeeDiscountBucketVolumeAccounts = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bucketStartTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.bucketStartTimestamp);
        }
        for (const v of message.accountVolume) {
            AccountVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketStartTimestamp = reader.int64();
                    break;
                case 2:
                    message.accountVolume.push(AccountVolume.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        message.bucketStartTimestamp = object.bucketStartTimestamp !== undefined && object.bucketStartTimestamp !== null ? BigInt(object.bucketStartTimestamp.toString()) : BigInt(0);
        message.accountVolume = object.accountVolume?.map(e => AccountVolume.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        if (object.bucket_start_timestamp !== undefined && object.bucket_start_timestamp !== null) {
            message.bucketStartTimestamp = BigInt(object.bucket_start_timestamp);
        }
        message.accountVolume = object.account_volume?.map(e => AccountVolume.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bucket_start_timestamp = message.bucketStartTimestamp !== BigInt(0) ? (message.bucketStartTimestamp?.toString)() : undefined;
        if (message.accountVolume) {
            obj.account_volume = message.accountVolume.map(e => e ? AccountVolume.toAmino(e) : undefined);
        }
        else {
            obj.account_volume = message.accountVolume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountBucketVolumeAccounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountBucketVolumeAccounts.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountBucketVolumeAccounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
            value: FeeDiscountBucketVolumeAccounts.encode(message).finish()
        };
    }
};
function createBaseAccountVolume() {
    return {
        account: "",
        volume: ""
    };
}
export const AccountVolume = {
    typeUrl: "/injective.exchange.v1beta1.AccountVolume",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.volume !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.volume, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountVolume();
        message.account = object.account ?? "";
        message.volume = object.volume ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountVolume();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.volume !== undefined && object.volume !== null) {
            message.volume = object.volume;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        obj.volume = message.volume === "" ? undefined : message.volume;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountVolume.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AccountVolume.decode(message.value);
    },
    toProto(message) {
        return AccountVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.AccountVolume",
            value: AccountVolume.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignAccountPoints() {
    return {
        account: "",
        points: ""
    };
}
export const TradingRewardCampaignAccountPoints = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.points !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.points, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.points = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignAccountPoints();
        message.account = object.account ?? "";
        message.points = object.points ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignAccountPoints();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.points !== undefined && object.points !== null) {
            message.points = object.points;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        obj.points = message.points === "" ? undefined : message.points;
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignAccountPoints.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignAccountPoints.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignAccountPoints.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
            value: TradingRewardCampaignAccountPoints.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignAccountPendingPoints() {
    return {
        rewardPoolStartTimestamp: BigInt(0),
        accountPoints: []
    };
}
export const TradingRewardCampaignAccountPendingPoints = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rewardPoolStartTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.rewardPoolStartTimestamp);
        }
        for (const v of message.accountPoints) {
            TradingRewardCampaignAccountPoints.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardPoolStartTimestamp = reader.int64();
                    break;
                case 2:
                    message.accountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        message.rewardPoolStartTimestamp = object.rewardPoolStartTimestamp !== undefined && object.rewardPoolStartTimestamp !== null ? BigInt(object.rewardPoolStartTimestamp.toString()) : BigInt(0);
        message.accountPoints = object.accountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        if (object.reward_pool_start_timestamp !== undefined && object.reward_pool_start_timestamp !== null) {
            message.rewardPoolStartTimestamp = BigInt(object.reward_pool_start_timestamp);
        }
        message.accountPoints = object.account_points?.map(e => TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reward_pool_start_timestamp = message.rewardPoolStartTimestamp !== BigInt(0) ? (message.rewardPoolStartTimestamp?.toString)() : undefined;
        if (message.accountPoints) {
            obj.account_points = message.accountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
        }
        else {
            obj.account_points = message.accountPoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignAccountPendingPoints.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignAccountPendingPoints.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignAccountPendingPoints.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
            value: TradingRewardCampaignAccountPendingPoints.encode(message).finish()
        };
    }
};
function createBaseSpotOrderBook() {
    return {
        marketId: "",
        isBuySide: false,
        orders: []
    };
}
export const SpotOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            SpotLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isBuySide = reader.bool();
                    break;
                case 3:
                    message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotOrderBook();
        message.marketId = object.marketId ?? "";
        message.isBuySide = object.isBuySide ?? false;
        message.orders = object.orders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotOrderBook();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.isBuySide !== undefined && object.isBuySide !== null) {
            message.isBuySide = object.isBuySide;
        }
        message.orders = object.orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SpotOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotOrderBook.decode(message.value);
    },
    toProto(message) {
        return SpotOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
            value: SpotOrderBook.encode(message).finish()
        };
    }
};
function createBaseDerivativeOrderBook() {
    return {
        marketId: "",
        isBuySide: false,
        orders: []
    };
}
export const DerivativeOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            DerivativeLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isBuySide = reader.bool();
                    break;
                case 3:
                    message.orders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeOrderBook();
        message.marketId = object.marketId ?? "";
        message.isBuySide = object.isBuySide ?? false;
        message.orders = object.orders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeOrderBook();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.isBuySide !== undefined && object.isBuySide !== null) {
            message.isBuySide = object.isBuySide;
        }
        message.orders = object.orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeOrderBook.decode(message.value);
    },
    toProto(message) {
        return DerivativeOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
            value: DerivativeOrderBook.encode(message).finish()
        };
    }
};
function createBaseConditionalDerivativeOrderBook() {
    return {
        marketId: "",
        limitBuyOrders: [],
        marketBuyOrders: [],
        limitSellOrders: [],
        marketSellOrders: []
    };
}
export const ConditionalDerivativeOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.limitBuyOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.marketBuyOrders) {
            DerivativeMarketOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.limitSellOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.marketSellOrders) {
            DerivativeMarketOrder.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConditionalDerivativeOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.limitBuyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.marketBuyOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.limitSellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.marketSellOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConditionalDerivativeOrderBook();
        message.marketId = object.marketId ?? "";
        message.limitBuyOrders = object.limitBuyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
        message.marketBuyOrders = object.marketBuyOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
        message.limitSellOrders = object.limitSellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
        message.marketSellOrders = object.marketSellOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConditionalDerivativeOrderBook();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.limitBuyOrders = object.limit_buy_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
        message.marketBuyOrders = object.market_buy_orders?.map(e => DerivativeMarketOrder.fromAmino(e)) || [];
        message.limitSellOrders = object.limit_sell_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
        message.marketSellOrders = object.market_sell_orders?.map(e => DerivativeMarketOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.limitBuyOrders) {
            obj.limit_buy_orders = message.limitBuyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.limit_buy_orders = message.limitBuyOrders;
        }
        if (message.marketBuyOrders) {
            obj.market_buy_orders = message.marketBuyOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
        }
        else {
            obj.market_buy_orders = message.marketBuyOrders;
        }
        if (message.limitSellOrders) {
            obj.limit_sell_orders = message.limitSellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.limit_sell_orders = message.limitSellOrders;
        }
        if (message.marketSellOrders) {
            obj.market_sell_orders = message.marketSellOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
        }
        else {
            obj.market_sell_orders = message.marketSellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ConditionalDerivativeOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConditionalDerivativeOrderBook.decode(message.value);
    },
    toProto(message) {
        return ConditionalDerivativeOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
            value: ConditionalDerivativeOrderBook.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        subaccountId: "",
        denom: "",
        deposits: undefined
    };
}
export const Balance = {
    typeUrl: "/injective.exchange.v1beta1.Balance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.deposits !== undefined) {
            Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.deposits = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.subaccountId = object.subaccountId ?? "";
        message.denom = object.denom ?? "";
        message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.deposits !== undefined && object.deposits !== null) {
            message.deposits = Deposit.fromAmino(object.deposits);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Balance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Balance.decode(message.value);
    },
    toProto(message) {
        return Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Balance",
            value: Balance.encode(message).finish()
        };
    }
};
function createBaseDerivativePosition() {
    return {
        subaccountId: "",
        marketId: "",
        position: undefined
    };
}
export const DerivativePosition = {
    typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.position = Position.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativePosition();
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativePosition();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Position.fromAmino(object.position);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.position = message.position ? Position.toAmino(message.position) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativePosition.decode(message.value);
    },
    toProto(message) {
        return DerivativePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
            value: DerivativePosition.encode(message).finish()
        };
    }
};
function createBaseSubaccountNonce() {
    return {
        subaccountId: "",
        subaccountTradeNonce: SubaccountTradeNonce.fromPartial({})
    };
}
export const SubaccountNonce = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccountTradeNonce !== undefined) {
            SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountNonce();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.subaccountTradeNonce = SubaccountTradeNonce.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountNonce();
        message.subaccountId = object.subaccountId ?? "";
        message.subaccountTradeNonce = object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null ? SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountNonce();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.subaccount_trade_nonce !== undefined && object.subaccount_trade_nonce !== null) {
            message.subaccountTradeNonce = SubaccountTradeNonce.fromAmino(object.subaccount_trade_nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.subaccount_trade_nonce = message.subaccountTradeNonce ? SubaccountTradeNonce.toAmino(message.subaccountTradeNonce) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountNonce.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountNonce.decode(message.value);
    },
    toProto(message) {
        return SubaccountNonce.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
            value: SubaccountNonce.encode(message).finish()
        };
    }
};
function createBaseExpiryFuturesMarketInfoState() {
    return {
        marketId: "",
        marketInfo: undefined
    };
}
export const ExpiryFuturesMarketInfoState = {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketInfo !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfoState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.marketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExpiryFuturesMarketInfoState();
        message.marketId = object.marketId ?? "";
        message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.marketInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExpiryFuturesMarketInfoState();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.market_info !== undefined && object.market_info !== null) {
            message.marketInfo = ExpiryFuturesMarketInfo.fromAmino(object.market_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.market_info = message.marketInfo ? ExpiryFuturesMarketInfo.toAmino(message.marketInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExpiryFuturesMarketInfoState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExpiryFuturesMarketInfoState.decode(message.value);
    },
    toProto(message) {
        return ExpiryFuturesMarketInfoState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
            value: ExpiryFuturesMarketInfoState.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketFundingState() {
    return {
        marketId: "",
        funding: undefined
    };
}
export const PerpetualMarketFundingState = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.funding !== undefined) {
            PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFundingState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketFundingState();
        message.marketId = object.marketId ?? "";
        message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketFundingState();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.funding !== undefined && object.funding !== null) {
            message.funding = PerpetualMarketFunding.fromAmino(object.funding);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PerpetualMarketFundingState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PerpetualMarketFundingState.decode(message.value);
    },
    toProto(message) {
        return PerpetualMarketFundingState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
            value: PerpetualMarketFundingState.encode(message).finish()
        };
    }
};
