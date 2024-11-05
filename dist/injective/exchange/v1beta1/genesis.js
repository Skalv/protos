"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerpetualMarketFundingState = exports.ExpiryFuturesMarketInfoState = exports.SubaccountNonce = exports.DerivativePosition = exports.Balance = exports.ConditionalDerivativeOrderBook = exports.DerivativeOrderBook = exports.SpotOrderBook = exports.TradingRewardCampaignAccountPendingPoints = exports.TradingRewardCampaignAccountPoints = exports.AccountVolume = exports.FeeDiscountBucketVolumeAccounts = exports.FeeDiscountAccountTierTTL = exports.GenesisState = void 0;
//@ts-nocheck
const exchange_1 = require("./exchange");
const tx_1 = require("./tx");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseGenesisState() {
    return {
        params: exchange_1.Params.fromPartial({}),
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
exports.GenesisState = {
    typeUrl: "/injective.exchange.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exchange_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.spotMarkets) {
            exchange_1.SpotMarket.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.derivativeMarkets) {
            exchange_1.DerivativeMarket.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.spotOrderbook) {
            exports.SpotOrderBook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.derivativeOrderbook) {
            exports.DerivativeOrderBook.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.positions) {
            exports.DerivativePosition.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.subaccountTradeNonces) {
            exports.SubaccountNonce.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketInfoState) {
            exports.ExpiryFuturesMarketInfoState.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.perpetualMarketInfo) {
            exchange_1.PerpetualMarketInfo.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.perpetualMarketFundingState) {
            exports.PerpetualMarketFundingState.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.derivativeMarketSettlementScheduled) {
            exchange_1.DerivativeMarketSettlementInfo.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.isSpotExchangeEnabled === true) {
            writer.uint32(104).bool(message.isSpotExchangeEnabled);
        }
        if (message.isDerivativesExchangeEnabled === true) {
            writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
        }
        if (message.tradingRewardCampaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.tradingRewardCampaignAccountPoints) {
            exports.TradingRewardCampaignAccountPoints.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.feeDiscountSchedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.feeDiscountAccountTierTtl) {
            exports.FeeDiscountAccountTierTTL.encode(v, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.feeDiscountBucketVolumeAccounts) {
            exports.FeeDiscountBucketVolumeAccounts.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.isFirstFeeCycleFinished === true) {
            writer.uint32(168).bool(message.isFirstFeeCycleFinished);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.pendingTradingRewardCampaignAccountPoints) {
            exports.TradingRewardCampaignAccountPendingPoints.encode(v, writer.uint32(186).fork()).ldelim();
        }
        for (const v of message.rewardsOptOutAddresses) {
            writer.uint32(194).string(v);
        }
        for (const v of message.historicalTradeRecords) {
            exchange_1.TradeRecords.encode(v, writer.uint32(202).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarkets) {
            exchange_1.BinaryOptionsMarket.encode(v, writer.uint32(210).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
            writer.uint32(218).string(v);
        }
        for (const v of message.spotMarketIdsScheduledToForceClose) {
            writer.uint32(226).string(v);
        }
        for (const v of message.denomDecimals) {
            tx_1.DenomDecimals.encode(v, writer.uint32(234).fork()).ldelim();
        }
        for (const v of message.conditionalDerivativeOrderbooks) {
            exports.ConditionalDerivativeOrderBook.encode(v, writer.uint32(242).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exchange_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.spotMarkets.push(exchange_1.SpotMarket.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.derivativeMarkets.push(exchange_1.DerivativeMarket.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.spotOrderbook.push(exports.SpotOrderBook.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.derivativeOrderbook.push(exports.DerivativeOrderBook.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.positions.push(exports.DerivativePosition.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.subaccountTradeNonces.push(exports.SubaccountNonce.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.expiryFuturesMarketInfoState.push(exports.ExpiryFuturesMarketInfoState.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.perpetualMarketInfo.push(exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.perpetualMarketFundingState.push(exports.PerpetualMarketFundingState.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.derivativeMarketSettlementScheduled.push(exchange_1.DerivativeMarketSettlementInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.isSpotExchangeEnabled = reader.bool();
                    break;
                case 14:
                    message.isDerivativesExchangeEnabled = reader.bool();
                    break;
                case 15:
                    message.tradingRewardCampaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.tradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.tradingRewardCampaignAccountPoints.push(exports.TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.feeDiscountSchedule = exchange_1.FeeDiscountSchedule.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.feeDiscountAccountTierTtl.push(exports.FeeDiscountAccountTierTTL.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.feeDiscountBucketVolumeAccounts.push(exports.FeeDiscountBucketVolumeAccounts.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.isFirstFeeCycleFinished = reader.bool();
                    break;
                case 22:
                    message.pendingTradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.pendingTradingRewardCampaignAccountPoints.push(exports.TradingRewardCampaignAccountPendingPoints.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.rewardsOptOutAddresses.push(reader.string());
                    break;
                case 25:
                    message.historicalTradeRecords.push(exchange_1.TradeRecords.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.binaryOptionsMarkets.push(exchange_1.BinaryOptionsMarket.decode(reader, reader.uint32()));
                    break;
                case 27:
                    message.binaryOptionsMarketIdsScheduledForSettlement.push(reader.string());
                    break;
                case 28:
                    message.spotMarketIdsScheduledToForceClose.push(reader.string());
                    break;
                case 29:
                    message.denomDecimals.push(tx_1.DenomDecimals.decode(reader, reader.uint32()));
                    break;
                case 30:
                    message.conditionalDerivativeOrderbooks.push(exports.ConditionalDerivativeOrderBook.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? exchange_1.Params.fromPartial(object.params) : undefined;
        message.spotMarkets = object.spotMarkets?.map(e => exchange_1.SpotMarket.fromPartial(e)) || [];
        message.derivativeMarkets = object.derivativeMarkets?.map(e => exchange_1.DerivativeMarket.fromPartial(e)) || [];
        message.spotOrderbook = object.spotOrderbook?.map(e => exports.SpotOrderBook.fromPartial(e)) || [];
        message.derivativeOrderbook = object.derivativeOrderbook?.map(e => exports.DerivativeOrderBook.fromPartial(e)) || [];
        message.balances = object.balances?.map(e => exports.Balance.fromPartial(e)) || [];
        message.positions = object.positions?.map(e => exports.DerivativePosition.fromPartial(e)) || [];
        message.subaccountTradeNonces = object.subaccountTradeNonces?.map(e => exports.SubaccountNonce.fromPartial(e)) || [];
        message.expiryFuturesMarketInfoState = object.expiryFuturesMarketInfoState?.map(e => exports.ExpiryFuturesMarketInfoState.fromPartial(e)) || [];
        message.perpetualMarketInfo = object.perpetualMarketInfo?.map(e => exchange_1.PerpetualMarketInfo.fromPartial(e)) || [];
        message.perpetualMarketFundingState = object.perpetualMarketFundingState?.map(e => exports.PerpetualMarketFundingState.fromPartial(e)) || [];
        message.derivativeMarketSettlementScheduled = object.derivativeMarketSettlementScheduled?.map(e => exchange_1.DerivativeMarketSettlementInfo.fromPartial(e)) || [];
        message.isSpotExchangeEnabled = object.isSpotExchangeEnabled ?? false;
        message.isDerivativesExchangeEnabled = object.isDerivativesExchangeEnabled ?? false;
        message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
        message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        message.tradingRewardCampaignAccountPoints = object.tradingRewardCampaignAccountPoints?.map(e => exports.TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
        message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? exchange_1.FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
        message.feeDiscountAccountTierTtl = object.feeDiscountAccountTierTtl?.map(e => exports.FeeDiscountAccountTierTTL.fromPartial(e)) || [];
        message.feeDiscountBucketVolumeAccounts = object.feeDiscountBucketVolumeAccounts?.map(e => exports.FeeDiscountBucketVolumeAccounts.fromPartial(e)) || [];
        message.isFirstFeeCycleFinished = object.isFirstFeeCycleFinished ?? false;
        message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        message.pendingTradingRewardCampaignAccountPoints = object.pendingTradingRewardCampaignAccountPoints?.map(e => exports.TradingRewardCampaignAccountPendingPoints.fromPartial(e)) || [];
        message.rewardsOptOutAddresses = object.rewardsOptOutAddresses?.map(e => e) || [];
        message.historicalTradeRecords = object.historicalTradeRecords?.map(e => exchange_1.TradeRecords.fromPartial(e)) || [];
        message.binaryOptionsMarkets = object.binaryOptionsMarkets?.map(e => exchange_1.BinaryOptionsMarket.fromPartial(e)) || [];
        message.binaryOptionsMarketIdsScheduledForSettlement = object.binaryOptionsMarketIdsScheduledForSettlement?.map(e => e) || [];
        message.spotMarketIdsScheduledToForceClose = object.spotMarketIdsScheduledToForceClose?.map(e => e) || [];
        message.denomDecimals = object.denomDecimals?.map(e => tx_1.DenomDecimals.fromPartial(e)) || [];
        message.conditionalDerivativeOrderbooks = object.conditionalDerivativeOrderbooks?.map(e => exports.ConditionalDerivativeOrderBook.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exchange_1.Params.fromAmino(object.params);
        }
        message.spotMarkets = object.spot_markets?.map(e => exchange_1.SpotMarket.fromAmino(e)) || [];
        message.derivativeMarkets = object.derivative_markets?.map(e => exchange_1.DerivativeMarket.fromAmino(e)) || [];
        message.spotOrderbook = object.spot_orderbook?.map(e => exports.SpotOrderBook.fromAmino(e)) || [];
        message.derivativeOrderbook = object.derivative_orderbook?.map(e => exports.DerivativeOrderBook.fromAmino(e)) || [];
        message.balances = object.balances?.map(e => exports.Balance.fromAmino(e)) || [];
        message.positions = object.positions?.map(e => exports.DerivativePosition.fromAmino(e)) || [];
        message.subaccountTradeNonces = object.subaccount_trade_nonces?.map(e => exports.SubaccountNonce.fromAmino(e)) || [];
        message.expiryFuturesMarketInfoState = object.expiry_futures_market_info_state?.map(e => exports.ExpiryFuturesMarketInfoState.fromAmino(e)) || [];
        message.perpetualMarketInfo = object.perpetual_market_info?.map(e => exchange_1.PerpetualMarketInfo.fromAmino(e)) || [];
        message.perpetualMarketFundingState = object.perpetual_market_funding_state?.map(e => exports.PerpetualMarketFundingState.fromAmino(e)) || [];
        message.derivativeMarketSettlementScheduled = object.derivative_market_settlement_scheduled?.map(e => exchange_1.DerivativeMarketSettlementInfo.fromAmino(e)) || [];
        if (object.is_spot_exchange_enabled !== undefined && object.is_spot_exchange_enabled !== null) {
            message.isSpotExchangeEnabled = object.is_spot_exchange_enabled;
        }
        if (object.is_derivatives_exchange_enabled !== undefined && object.is_derivatives_exchange_enabled !== null) {
            message.isDerivativesExchangeEnabled = object.is_derivatives_exchange_enabled;
        }
        if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
            message.tradingRewardCampaignInfo = exchange_1.TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
        }
        message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        message.tradingRewardCampaignAccountPoints = object.trading_reward_campaign_account_points?.map(e => exports.TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
        if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
            message.feeDiscountSchedule = exchange_1.FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
        }
        message.feeDiscountAccountTierTtl = object.fee_discount_account_tier_ttl?.map(e => exports.FeeDiscountAccountTierTTL.fromAmino(e)) || [];
        message.feeDiscountBucketVolumeAccounts = object.fee_discount_bucket_volume_accounts?.map(e => exports.FeeDiscountBucketVolumeAccounts.fromAmino(e)) || [];
        if (object.is_first_fee_cycle_finished !== undefined && object.is_first_fee_cycle_finished !== null) {
            message.isFirstFeeCycleFinished = object.is_first_fee_cycle_finished;
        }
        message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        message.pendingTradingRewardCampaignAccountPoints = object.pending_trading_reward_campaign_account_points?.map(e => exports.TradingRewardCampaignAccountPendingPoints.fromAmino(e)) || [];
        message.rewardsOptOutAddresses = object.rewards_opt_out_addresses?.map(e => e) || [];
        message.historicalTradeRecords = object.historical_trade_records?.map(e => exchange_1.TradeRecords.fromAmino(e)) || [];
        message.binaryOptionsMarkets = object.binary_options_markets?.map(e => exchange_1.BinaryOptionsMarket.fromAmino(e)) || [];
        message.binaryOptionsMarketIdsScheduledForSettlement = object.binary_options_market_ids_scheduled_for_settlement?.map(e => e) || [];
        message.spotMarketIdsScheduledToForceClose = object.spot_market_ids_scheduled_to_force_close?.map(e => e) || [];
        message.denomDecimals = object.denom_decimals?.map(e => tx_1.DenomDecimals.fromAmino(e)) || [];
        message.conditionalDerivativeOrderbooks = object.conditional_derivative_orderbooks?.map(e => exports.ConditionalDerivativeOrderBook.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? exchange_1.Params.toAmino(message.params) : undefined;
        if (message.spotMarkets) {
            obj.spot_markets = message.spotMarkets.map(e => e ? exchange_1.SpotMarket.toAmino(e) : undefined);
        }
        else {
            obj.spot_markets = message.spotMarkets;
        }
        if (message.derivativeMarkets) {
            obj.derivative_markets = message.derivativeMarkets.map(e => e ? exchange_1.DerivativeMarket.toAmino(e) : undefined);
        }
        else {
            obj.derivative_markets = message.derivativeMarkets;
        }
        if (message.spotOrderbook) {
            obj.spot_orderbook = message.spotOrderbook.map(e => e ? exports.SpotOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.spot_orderbook = message.spotOrderbook;
        }
        if (message.derivativeOrderbook) {
            obj.derivative_orderbook = message.derivativeOrderbook.map(e => e ? exports.DerivativeOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orderbook = message.derivativeOrderbook;
        }
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? exports.DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        if (message.subaccountTradeNonces) {
            obj.subaccount_trade_nonces = message.subaccountTradeNonces.map(e => e ? exports.SubaccountNonce.toAmino(e) : undefined);
        }
        else {
            obj.subaccount_trade_nonces = message.subaccountTradeNonces;
        }
        if (message.expiryFuturesMarketInfoState) {
            obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState.map(e => e ? exports.ExpiryFuturesMarketInfoState.toAmino(e) : undefined);
        }
        else {
            obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState;
        }
        if (message.perpetualMarketInfo) {
            obj.perpetual_market_info = message.perpetualMarketInfo.map(e => e ? exchange_1.PerpetualMarketInfo.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_info = message.perpetualMarketInfo;
        }
        if (message.perpetualMarketFundingState) {
            obj.perpetual_market_funding_state = message.perpetualMarketFundingState.map(e => e ? exports.PerpetualMarketFundingState.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_funding_state = message.perpetualMarketFundingState;
        }
        if (message.derivativeMarketSettlementScheduled) {
            obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled.map(e => e ? exchange_1.DerivativeMarketSettlementInfo.toAmino(e) : undefined);
        }
        else {
            obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled;
        }
        obj.is_spot_exchange_enabled = message.isSpotExchangeEnabled === false ? undefined : message.isSpotExchangeEnabled;
        obj.is_derivatives_exchange_enabled = message.isDerivativesExchangeEnabled === false ? undefined : message.isDerivativesExchangeEnabled;
        obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? exchange_1.TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
        }
        if (message.tradingRewardCampaignAccountPoints) {
            obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints.map(e => e ? exports.TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints;
        }
        obj.fee_discount_schedule = message.feeDiscountSchedule ? exchange_1.FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
        if (message.feeDiscountAccountTierTtl) {
            obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl.map(e => e ? exports.FeeDiscountAccountTierTTL.toAmino(e) : undefined);
        }
        else {
            obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl;
        }
        if (message.feeDiscountBucketVolumeAccounts) {
            obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts.map(e => e ? exports.FeeDiscountBucketVolumeAccounts.toAmino(e) : undefined);
        }
        else {
            obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts;
        }
        obj.is_first_fee_cycle_finished = message.isFirstFeeCycleFinished === false ? undefined : message.isFirstFeeCycleFinished;
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
        }
        if (message.pendingTradingRewardCampaignAccountPoints) {
            obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints.map(e => e ? exports.TradingRewardCampaignAccountPendingPoints.toAmino(e) : undefined);
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
            obj.historical_trade_records = message.historicalTradeRecords.map(e => e ? exchange_1.TradeRecords.toAmino(e) : undefined);
        }
        else {
            obj.historical_trade_records = message.historicalTradeRecords;
        }
        if (message.binaryOptionsMarkets) {
            obj.binary_options_markets = message.binaryOptionsMarkets.map(e => e ? exchange_1.BinaryOptionsMarket.toAmino(e) : undefined);
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
            obj.denom_decimals = message.denomDecimals.map(e => e ? tx_1.DenomDecimals.toAmino(e) : undefined);
        }
        else {
            obj.denom_decimals = message.denomDecimals;
        }
        if (message.conditionalDerivativeOrderbooks) {
            obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks.map(e => e ? exports.ConditionalDerivativeOrderBook.toAmino(e) : undefined);
        }
        else {
            obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountAccountTierTTL() {
    return {
        account: "",
        tierTtl: undefined
    };
}
exports.FeeDiscountAccountTierTTL = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.tierTtl !== undefined) {
            exchange_1.FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountAccountTierTTL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.tierTtl = exchange_1.FeeDiscountTierTTL.decode(reader, reader.uint32());
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
        message.tierTtl = object.tierTtl !== undefined && object.tierTtl !== null ? exchange_1.FeeDiscountTierTTL.fromPartial(object.tierTtl) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountAccountTierTTL();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.tier_ttl !== undefined && object.tier_ttl !== null) {
            message.tierTtl = exchange_1.FeeDiscountTierTTL.fromAmino(object.tier_ttl);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        obj.tier_ttl = message.tierTtl ? exchange_1.FeeDiscountTierTTL.toAmino(message.tierTtl) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeeDiscountAccountTierTTL.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeeDiscountAccountTierTTL.decode(message.value);
    },
    toProto(message) {
        return exports.FeeDiscountAccountTierTTL.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
            value: exports.FeeDiscountAccountTierTTL.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountBucketVolumeAccounts() {
    return {
        bucketStartTimestamp: BigInt(0),
        accountVolume: []
    };
}
exports.FeeDiscountBucketVolumeAccounts = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bucketStartTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.bucketStartTimestamp);
        }
        for (const v of message.accountVolume) {
            exports.AccountVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketStartTimestamp = reader.int64();
                    break;
                case 2:
                    message.accountVolume.push(exports.AccountVolume.decode(reader, reader.uint32()));
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
        message.accountVolume = object.accountVolume?.map(e => exports.AccountVolume.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        if (object.bucket_start_timestamp !== undefined && object.bucket_start_timestamp !== null) {
            message.bucketStartTimestamp = BigInt(object.bucket_start_timestamp);
        }
        message.accountVolume = object.account_volume?.map(e => exports.AccountVolume.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bucket_start_timestamp = message.bucketStartTimestamp !== BigInt(0) ? (message.bucketStartTimestamp?.toString)() : undefined;
        if (message.accountVolume) {
            obj.account_volume = message.accountVolume.map(e => e ? exports.AccountVolume.toAmino(e) : undefined);
        }
        else {
            obj.account_volume = message.accountVolume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeeDiscountBucketVolumeAccounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeeDiscountBucketVolumeAccounts.decode(message.value);
    },
    toProto(message) {
        return exports.FeeDiscountBucketVolumeAccounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
            value: exports.FeeDiscountBucketVolumeAccounts.encode(message).finish()
        };
    }
};
function createBaseAccountVolume() {
    return {
        account: "",
        volume: ""
    };
}
exports.AccountVolume = {
    typeUrl: "/injective.exchange.v1beta1.AccountVolume",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.volume !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.volume, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.volume = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.AccountVolume.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AccountVolume.decode(message.value);
    },
    toProto(message) {
        return exports.AccountVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.AccountVolume",
            value: exports.AccountVolume.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignAccountPoints() {
    return {
        account: "",
        points: ""
    };
}
exports.TradingRewardCampaignAccountPoints = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.points !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.points, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.points = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.TradingRewardCampaignAccountPoints.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradingRewardCampaignAccountPoints.decode(message.value);
    },
    toProto(message) {
        return exports.TradingRewardCampaignAccountPoints.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
            value: exports.TradingRewardCampaignAccountPoints.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignAccountPendingPoints() {
    return {
        rewardPoolStartTimestamp: BigInt(0),
        accountPoints: []
    };
}
exports.TradingRewardCampaignAccountPendingPoints = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rewardPoolStartTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.rewardPoolStartTimestamp);
        }
        for (const v of message.accountPoints) {
            exports.TradingRewardCampaignAccountPoints.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardPoolStartTimestamp = reader.int64();
                    break;
                case 2:
                    message.accountPoints.push(exports.TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
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
        message.accountPoints = object.accountPoints?.map(e => exports.TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        if (object.reward_pool_start_timestamp !== undefined && object.reward_pool_start_timestamp !== null) {
            message.rewardPoolStartTimestamp = BigInt(object.reward_pool_start_timestamp);
        }
        message.accountPoints = object.account_points?.map(e => exports.TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reward_pool_start_timestamp = message.rewardPoolStartTimestamp !== BigInt(0) ? (message.rewardPoolStartTimestamp?.toString)() : undefined;
        if (message.accountPoints) {
            obj.account_points = message.accountPoints.map(e => e ? exports.TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
        }
        else {
            obj.account_points = message.accountPoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingRewardCampaignAccountPendingPoints.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradingRewardCampaignAccountPendingPoints.decode(message.value);
    },
    toProto(message) {
        return exports.TradingRewardCampaignAccountPendingPoints.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
            value: exports.TradingRewardCampaignAccountPendingPoints.encode(message).finish()
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
exports.SpotOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            exchange_1.SpotLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.orders.push(exchange_1.SpotLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => exchange_1.SpotLimitOrder.fromPartial(e)) || [];
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
        message.orders = object.orders?.map(e => exchange_1.SpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exchange_1.SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SpotOrderBook.decode(message.value);
    },
    toProto(message) {
        return exports.SpotOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
            value: exports.SpotOrderBook.encode(message).finish()
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
exports.DerivativeOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            exchange_1.DerivativeLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.orders.push(exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => exchange_1.DerivativeLimitOrder.fromPartial(e)) || [];
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
        message.orders = object.orders?.map(e => exchange_1.DerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exchange_1.DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DerivativeOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DerivativeOrderBook.decode(message.value);
    },
    toProto(message) {
        return exports.DerivativeOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
            value: exports.DerivativeOrderBook.encode(message).finish()
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
exports.ConditionalDerivativeOrderBook = {
    typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.limitBuyOrders) {
            exchange_1.DerivativeLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.marketBuyOrders) {
            exchange_1.DerivativeMarketOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.limitSellOrders) {
            exchange_1.DerivativeLimitOrder.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.marketSellOrders) {
            exchange_1.DerivativeMarketOrder.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConditionalDerivativeOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.limitBuyOrders.push(exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.marketBuyOrders.push(exchange_1.DerivativeMarketOrder.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.limitSellOrders.push(exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.marketSellOrders.push(exchange_1.DerivativeMarketOrder.decode(reader, reader.uint32()));
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
        message.limitBuyOrders = object.limitBuyOrders?.map(e => exchange_1.DerivativeLimitOrder.fromPartial(e)) || [];
        message.marketBuyOrders = object.marketBuyOrders?.map(e => exchange_1.DerivativeMarketOrder.fromPartial(e)) || [];
        message.limitSellOrders = object.limitSellOrders?.map(e => exchange_1.DerivativeLimitOrder.fromPartial(e)) || [];
        message.marketSellOrders = object.marketSellOrders?.map(e => exchange_1.DerivativeMarketOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConditionalDerivativeOrderBook();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.limitBuyOrders = object.limit_buy_orders?.map(e => exchange_1.DerivativeLimitOrder.fromAmino(e)) || [];
        message.marketBuyOrders = object.market_buy_orders?.map(e => exchange_1.DerivativeMarketOrder.fromAmino(e)) || [];
        message.limitSellOrders = object.limit_sell_orders?.map(e => exchange_1.DerivativeLimitOrder.fromAmino(e)) || [];
        message.marketSellOrders = object.market_sell_orders?.map(e => exchange_1.DerivativeMarketOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.limitBuyOrders) {
            obj.limit_buy_orders = message.limitBuyOrders.map(e => e ? exchange_1.DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.limit_buy_orders = message.limitBuyOrders;
        }
        if (message.marketBuyOrders) {
            obj.market_buy_orders = message.marketBuyOrders.map(e => e ? exchange_1.DerivativeMarketOrder.toAmino(e) : undefined);
        }
        else {
            obj.market_buy_orders = message.marketBuyOrders;
        }
        if (message.limitSellOrders) {
            obj.limit_sell_orders = message.limitSellOrders.map(e => e ? exchange_1.DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.limit_sell_orders = message.limitSellOrders;
        }
        if (message.marketSellOrders) {
            obj.market_sell_orders = message.marketSellOrders.map(e => e ? exchange_1.DerivativeMarketOrder.toAmino(e) : undefined);
        }
        else {
            obj.market_sell_orders = message.marketSellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConditionalDerivativeOrderBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConditionalDerivativeOrderBook.decode(message.value);
    },
    toProto(message) {
        return exports.ConditionalDerivativeOrderBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
            value: exports.ConditionalDerivativeOrderBook.encode(message).finish()
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
exports.Balance = {
    typeUrl: "/injective.exchange.v1beta1.Balance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.deposits !== undefined) {
            exchange_1.Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.deposits = exchange_1.Deposit.decode(reader, reader.uint32());
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
        message.deposits = object.deposits !== undefined && object.deposits !== null ? exchange_1.Deposit.fromPartial(object.deposits) : undefined;
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
            message.deposits = exchange_1.Deposit.fromAmino(object.deposits);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.deposits = message.deposits ? exchange_1.Deposit.toAmino(message.deposits) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Balance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Balance.decode(message.value);
    },
    toProto(message) {
        return exports.Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Balance",
            value: exports.Balance.encode(message).finish()
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
exports.DerivativePosition = {
    typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.position !== undefined) {
            exchange_1.Position.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.position = exchange_1.Position.decode(reader, reader.uint32());
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
        message.position = object.position !== undefined && object.position !== null ? exchange_1.Position.fromPartial(object.position) : undefined;
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
            message.position = exchange_1.Position.fromAmino(object.position);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.position = message.position ? exchange_1.Position.toAmino(message.position) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DerivativePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DerivativePosition.decode(message.value);
    },
    toProto(message) {
        return exports.DerivativePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
            value: exports.DerivativePosition.encode(message).finish()
        };
    }
};
function createBaseSubaccountNonce() {
    return {
        subaccountId: "",
        subaccountTradeNonce: exchange_1.SubaccountTradeNonce.fromPartial({})
    };
}
exports.SubaccountNonce = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccountTradeNonce !== undefined) {
            exchange_1.SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountNonce();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.subaccountTradeNonce = exchange_1.SubaccountTradeNonce.decode(reader, reader.uint32());
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
        message.subaccountTradeNonce = object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null ? exchange_1.SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountNonce();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.subaccount_trade_nonce !== undefined && object.subaccount_trade_nonce !== null) {
            message.subaccountTradeNonce = exchange_1.SubaccountTradeNonce.fromAmino(object.subaccount_trade_nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.subaccount_trade_nonce = message.subaccountTradeNonce ? exchange_1.SubaccountTradeNonce.toAmino(message.subaccountTradeNonce) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SubaccountNonce.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SubaccountNonce.decode(message.value);
    },
    toProto(message) {
        return exports.SubaccountNonce.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
            value: exports.SubaccountNonce.encode(message).finish()
        };
    }
};
function createBaseExpiryFuturesMarketInfoState() {
    return {
        marketId: "",
        marketInfo: undefined
    };
}
exports.ExpiryFuturesMarketInfoState = {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketInfo !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfoState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.marketInfo = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
        message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.marketInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExpiryFuturesMarketInfoState();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.market_info !== undefined && object.market_info !== null) {
            message.marketInfo = exchange_1.ExpiryFuturesMarketInfo.fromAmino(object.market_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.market_info = message.marketInfo ? exchange_1.ExpiryFuturesMarketInfo.toAmino(message.marketInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExpiryFuturesMarketInfoState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExpiryFuturesMarketInfoState.decode(message.value);
    },
    toProto(message) {
        return exports.ExpiryFuturesMarketInfoState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
            value: exports.ExpiryFuturesMarketInfoState.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketFundingState() {
    return {
        marketId: "",
        funding: undefined
    };
}
exports.PerpetualMarketFundingState = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.funding !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFundingState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.funding = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
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
        message.funding = object.funding !== undefined && object.funding !== null ? exchange_1.PerpetualMarketFunding.fromPartial(object.funding) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketFundingState();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.funding !== undefined && object.funding !== null) {
            message.funding = exchange_1.PerpetualMarketFunding.fromAmino(object.funding);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.funding = message.funding ? exchange_1.PerpetualMarketFunding.toAmino(message.funding) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PerpetualMarketFundingState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PerpetualMarketFundingState.decode(message.value);
    },
    toProto(message) {
        return exports.PerpetualMarketFundingState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
            value: exports.PerpetualMarketFundingState.encode(message).finish()
        };
    }
};
