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
        this.queryExchangeParams = this.queryExchangeParams.bind(this);
        this.subaccountDeposits = this.subaccountDeposits.bind(this);
        this.subaccountDeposit = this.subaccountDeposit.bind(this);
        this.exchangeBalances = this.exchangeBalances.bind(this);
        this.spotMarkets = this.spotMarkets.bind(this);
        this.spotMarket = this.spotMarket.bind(this);
        this.spotOrderbook = this.spotOrderbook.bind(this);
        this.traderSpotOrders = this.traderSpotOrders.bind(this);
        this.spotOrdersByHashes = this.spotOrdersByHashes.bind(this);
        this.subaccountOrders = this.subaccountOrders.bind(this);
        this.traderSpotTransientOrders = this.traderSpotTransientOrders.bind(this);
        this.spotMidPriceAndTOB = this.spotMidPriceAndTOB.bind(this);
        this.derivativeMidPriceAndTOB = this.derivativeMidPriceAndTOB.bind(this);
        this.derivativeOrderbook = this.derivativeOrderbook.bind(this);
        this.traderDerivativeOrders = this.traderDerivativeOrders.bind(this);
        this.derivativeOrdersByHashes = this.derivativeOrdersByHashes.bind(this);
        this.traderDerivativeTransientOrders = this.traderDerivativeTransientOrders.bind(this);
        this.derivativeMarkets = this.derivativeMarkets.bind(this);
        this.derivativeMarket = this.derivativeMarket.bind(this);
        this.derivativeMarketAddress = this.derivativeMarketAddress.bind(this);
        this.subaccountTradeNonce = this.subaccountTradeNonce.bind(this);
        this.exchangeModuleState = this.exchangeModuleState.bind(this);
        this.positions = this.positions.bind(this);
        this.subaccountPositions = this.subaccountPositions.bind(this);
        this.subaccountPositionInMarket = this.subaccountPositionInMarket.bind(this);
        this.subaccountEffectivePositionInMarket = this.subaccountEffectivePositionInMarket.bind(this);
        this.perpetualMarketInfo = this.perpetualMarketInfo.bind(this);
        this.expiryFuturesMarketInfo = this.expiryFuturesMarketInfo.bind(this);
        this.perpetualMarketFunding = this.perpetualMarketFunding.bind(this);
        this.subaccountOrderMetadata = this.subaccountOrderMetadata.bind(this);
        this.tradeRewardPoints = this.tradeRewardPoints.bind(this);
        this.pendingTradeRewardPoints = this.pendingTradeRewardPoints.bind(this);
        this.tradeRewardCampaign = this.tradeRewardCampaign.bind(this);
        this.feeDiscountAccountInfo = this.feeDiscountAccountInfo.bind(this);
        this.feeDiscountSchedule = this.feeDiscountSchedule.bind(this);
        this.balanceMismatches = this.balanceMismatches.bind(this);
        this.balanceWithBalanceHolds = this.balanceWithBalanceHolds.bind(this);
        this.feeDiscountTierStatistics = this.feeDiscountTierStatistics.bind(this);
        this.ninjaVaultInfos = this.ninjaVaultInfos.bind(this);
        this.queryMarketIDFromVault = this.queryMarketIDFromVault.bind(this);
        this.historicalTradeRecords = this.historicalTradeRecords.bind(this);
        this.isOptedOutOfRewards = this.isOptedOutOfRewards.bind(this);
        this.optedOutOfRewardsAccounts = this.optedOutOfRewardsAccounts.bind(this);
        this.marketVolatility = this.marketVolatility.bind(this);
        this.binaryOptionsMarkets = this.binaryOptionsMarkets.bind(this);
        this.traderDerivativeConditionalOrders = this.traderDerivativeConditionalOrders.bind(this);
    }
    queryExchangeParams(request = {}) {
        const data = query_1.QueryExchangeParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryExchangeParams", data);
        return promise.then(data => query_1.QueryExchangeParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountDeposits(request) {
        const data = query_1.QuerySubaccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposits", data);
        return promise.then(data => query_1.QuerySubaccountDepositsResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountDeposit(request) {
        const data = query_1.QuerySubaccountDepositRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposit", data);
        return promise.then(data => query_1.QuerySubaccountDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
    exchangeBalances(request = {}) {
        const data = query_1.QueryExchangeBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeBalances", data);
        return promise.then(data => query_1.QueryExchangeBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotMarkets(request) {
        const data = query_1.QuerySpotMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarkets", data);
        return promise.then(data => query_1.QuerySpotMarketsResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotMarket(request) {
        const data = query_1.QuerySpotMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarket", data);
        return promise.then(data => query_1.QuerySpotMarketResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotOrderbook(request) {
        const data = query_1.QuerySpotOrderbookRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrderbook", data);
        return promise.then(data => query_1.QuerySpotOrderbookResponse.decode(new binary_1.BinaryReader(data)));
    }
    traderSpotOrders(request) {
        const data = query_1.QueryTraderSpotOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotOrders", data);
        return promise.then(data => query_1.QueryTraderSpotOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotOrdersByHashes(request) {
        const data = query_1.QuerySpotOrdersByHashesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrdersByHashes", data);
        return promise.then(data => query_1.QuerySpotOrdersByHashesResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountOrders(request) {
        const data = query_1.QuerySubaccountOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrders", data);
        return promise.then(data => query_1.QuerySubaccountOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    traderSpotTransientOrders(request) {
        const data = query_1.QueryTraderSpotOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotTransientOrders", data);
        return promise.then(data => query_1.QueryTraderSpotOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotMidPriceAndTOB(request) {
        const data = query_1.QuerySpotMidPriceAndTOBRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMidPriceAndTOB", data);
        return promise.then(data => query_1.QuerySpotMidPriceAndTOBResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeMidPriceAndTOB(request) {
        const data = query_1.QueryDerivativeMidPriceAndTOBRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMidPriceAndTOB", data);
        return promise.then(data => query_1.QueryDerivativeMidPriceAndTOBResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeOrderbook(request) {
        const data = query_1.QueryDerivativeOrderbookRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrderbook", data);
        return promise.then(data => query_1.QueryDerivativeOrderbookResponse.decode(new binary_1.BinaryReader(data)));
    }
    traderDerivativeOrders(request) {
        const data = query_1.QueryTraderDerivativeOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeOrders", data);
        return promise.then(data => query_1.QueryTraderDerivativeOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeOrdersByHashes(request) {
        const data = query_1.QueryDerivativeOrdersByHashesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrdersByHashes", data);
        return promise.then(data => query_1.QueryDerivativeOrdersByHashesResponse.decode(new binary_1.BinaryReader(data)));
    }
    traderDerivativeTransientOrders(request) {
        const data = query_1.QueryTraderDerivativeOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeTransientOrders", data);
        return promise.then(data => query_1.QueryTraderDerivativeOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeMarkets(request) {
        const data = query_1.QueryDerivativeMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarkets", data);
        return promise.then(data => query_1.QueryDerivativeMarketsResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeMarket(request) {
        const data = query_1.QueryDerivativeMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarket", data);
        return promise.then(data => query_1.QueryDerivativeMarketResponse.decode(new binary_1.BinaryReader(data)));
    }
    derivativeMarketAddress(request) {
        const data = query_1.QueryDerivativeMarketAddressRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarketAddress", data);
        return promise.then(data => query_1.QueryDerivativeMarketAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountTradeNonce(request) {
        const data = query_1.QuerySubaccountTradeNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountTradeNonce", data);
        return promise.then(data => query_1.QuerySubaccountTradeNonceResponse.decode(new binary_1.BinaryReader(data)));
    }
    exchangeModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    positions(request = {}) {
        const data = query_1.QueryPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "Positions", data);
        return promise.then(data => query_1.QueryPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountPositions(request) {
        const data = query_1.QuerySubaccountPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositions", data);
        return promise.then(data => query_1.QuerySubaccountPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountPositionInMarket(request) {
        const data = query_1.QuerySubaccountPositionInMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositionInMarket", data);
        return promise.then(data => query_1.QuerySubaccountPositionInMarketResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountEffectivePositionInMarket(request) {
        const data = query_1.QuerySubaccountEffectivePositionInMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountEffectivePositionInMarket", data);
        return promise.then(data => query_1.QuerySubaccountEffectivePositionInMarketResponse.decode(new binary_1.BinaryReader(data)));
    }
    perpetualMarketInfo(request) {
        const data = query_1.QueryPerpetualMarketInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketInfo", data);
        return promise.then(data => query_1.QueryPerpetualMarketInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    expiryFuturesMarketInfo(request) {
        const data = query_1.QueryExpiryFuturesMarketInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExpiryFuturesMarketInfo", data);
        return promise.then(data => query_1.QueryExpiryFuturesMarketInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    perpetualMarketFunding(request) {
        const data = query_1.QueryPerpetualMarketFundingRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketFunding", data);
        return promise.then(data => query_1.QueryPerpetualMarketFundingResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountOrderMetadata(request) {
        const data = query_1.QuerySubaccountOrderMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrderMetadata", data);
        return promise.then(data => query_1.QuerySubaccountOrderMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    tradeRewardPoints(request) {
        const data = query_1.QueryTradeRewardPointsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardPoints", data);
        return promise.then(data => query_1.QueryTradeRewardPointsResponse.decode(new binary_1.BinaryReader(data)));
    }
    pendingTradeRewardPoints(request) {
        const data = query_1.QueryTradeRewardPointsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PendingTradeRewardPoints", data);
        return promise.then(data => query_1.QueryTradeRewardPointsResponse.decode(new binary_1.BinaryReader(data)));
    }
    tradeRewardCampaign(request = {}) {
        const data = query_1.QueryTradeRewardCampaignRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardCampaign", data);
        return promise.then(data => query_1.QueryTradeRewardCampaignResponse.decode(new binary_1.BinaryReader(data)));
    }
    feeDiscountAccountInfo(request) {
        const data = query_1.QueryFeeDiscountAccountInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountAccountInfo", data);
        return promise.then(data => query_1.QueryFeeDiscountAccountInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    feeDiscountSchedule(request = {}) {
        const data = query_1.QueryFeeDiscountScheduleRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountSchedule", data);
        return promise.then(data => query_1.QueryFeeDiscountScheduleResponse.decode(new binary_1.BinaryReader(data)));
    }
    balanceMismatches(request) {
        const data = query_1.QueryBalanceMismatchesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceMismatches", data);
        return promise.then(data => query_1.QueryBalanceMismatchesResponse.decode(new binary_1.BinaryReader(data)));
    }
    balanceWithBalanceHolds(request = {}) {
        const data = query_1.QueryBalanceWithBalanceHoldsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceWithBalanceHolds", data);
        return promise.then(data => query_1.QueryBalanceWithBalanceHoldsResponse.decode(new binary_1.BinaryReader(data)));
    }
    feeDiscountTierStatistics(request = {}) {
        const data = query_1.QueryFeeDiscountTierStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountTierStatistics", data);
        return promise.then(data => query_1.QueryFeeDiscountTierStatisticsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ninjaVaultInfos(request = {}) {
        const data = query_1.NinjaVaultInfosRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "NinjaVaultInfos", data);
        return promise.then(data => query_1.NinjaVaultInfosResponse.decode(new binary_1.BinaryReader(data)));
    }
    queryMarketIDFromVault(request) {
        const data = query_1.QueryMarketIDFromVaultRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryMarketIDFromVault", data);
        return promise.then(data => query_1.QueryMarketIDFromVaultResponse.decode(new binary_1.BinaryReader(data)));
    }
    historicalTradeRecords(request) {
        const data = query_1.QueryHistoricalTradeRecordsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "HistoricalTradeRecords", data);
        return promise.then(data => query_1.QueryHistoricalTradeRecordsResponse.decode(new binary_1.BinaryReader(data)));
    }
    isOptedOutOfRewards(request) {
        const data = query_1.QueryIsOptedOutOfRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "IsOptedOutOfRewards", data);
        return promise.then(data => query_1.QueryIsOptedOutOfRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    optedOutOfRewardsAccounts(request = {}) {
        const data = query_1.QueryOptedOutOfRewardsAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "OptedOutOfRewardsAccounts", data);
        return promise.then(data => query_1.QueryOptedOutOfRewardsAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    marketVolatility(request) {
        const data = query_1.QueryMarketVolatilityRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketVolatility", data);
        return promise.then(data => query_1.QueryMarketVolatilityResponse.decode(new binary_1.BinaryReader(data)));
    }
    binaryOptionsMarkets(request) {
        const data = query_1.QueryBinaryMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BinaryOptionsMarkets", data);
        return promise.then(data => query_1.QueryBinaryMarketsResponse.decode(new binary_1.BinaryReader(data)));
    }
    traderDerivativeConditionalOrders(request) {
        const data = query_1.QueryTraderDerivativeConditionalOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeConditionalOrders", data);
        return promise.then(data => query_1.QueryTraderDerivativeConditionalOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        queryExchangeParams(request) {
            return queryService.queryExchangeParams(request);
        },
        subaccountDeposits(request) {
            return queryService.subaccountDeposits(request);
        },
        subaccountDeposit(request) {
            return queryService.subaccountDeposit(request);
        },
        exchangeBalances(request) {
            return queryService.exchangeBalances(request);
        },
        spotMarkets(request) {
            return queryService.spotMarkets(request);
        },
        spotMarket(request) {
            return queryService.spotMarket(request);
        },
        spotOrderbook(request) {
            return queryService.spotOrderbook(request);
        },
        traderSpotOrders(request) {
            return queryService.traderSpotOrders(request);
        },
        spotOrdersByHashes(request) {
            return queryService.spotOrdersByHashes(request);
        },
        subaccountOrders(request) {
            return queryService.subaccountOrders(request);
        },
        traderSpotTransientOrders(request) {
            return queryService.traderSpotTransientOrders(request);
        },
        spotMidPriceAndTOB(request) {
            return queryService.spotMidPriceAndTOB(request);
        },
        derivativeMidPriceAndTOB(request) {
            return queryService.derivativeMidPriceAndTOB(request);
        },
        derivativeOrderbook(request) {
            return queryService.derivativeOrderbook(request);
        },
        traderDerivativeOrders(request) {
            return queryService.traderDerivativeOrders(request);
        },
        derivativeOrdersByHashes(request) {
            return queryService.derivativeOrdersByHashes(request);
        },
        traderDerivativeTransientOrders(request) {
            return queryService.traderDerivativeTransientOrders(request);
        },
        derivativeMarkets(request) {
            return queryService.derivativeMarkets(request);
        },
        derivativeMarket(request) {
            return queryService.derivativeMarket(request);
        },
        derivativeMarketAddress(request) {
            return queryService.derivativeMarketAddress(request);
        },
        subaccountTradeNonce(request) {
            return queryService.subaccountTradeNonce(request);
        },
        exchangeModuleState(request) {
            return queryService.exchangeModuleState(request);
        },
        positions(request) {
            return queryService.positions(request);
        },
        subaccountPositions(request) {
            return queryService.subaccountPositions(request);
        },
        subaccountPositionInMarket(request) {
            return queryService.subaccountPositionInMarket(request);
        },
        subaccountEffectivePositionInMarket(request) {
            return queryService.subaccountEffectivePositionInMarket(request);
        },
        perpetualMarketInfo(request) {
            return queryService.perpetualMarketInfo(request);
        },
        expiryFuturesMarketInfo(request) {
            return queryService.expiryFuturesMarketInfo(request);
        },
        perpetualMarketFunding(request) {
            return queryService.perpetualMarketFunding(request);
        },
        subaccountOrderMetadata(request) {
            return queryService.subaccountOrderMetadata(request);
        },
        tradeRewardPoints(request) {
            return queryService.tradeRewardPoints(request);
        },
        pendingTradeRewardPoints(request) {
            return queryService.pendingTradeRewardPoints(request);
        },
        tradeRewardCampaign(request) {
            return queryService.tradeRewardCampaign(request);
        },
        feeDiscountAccountInfo(request) {
            return queryService.feeDiscountAccountInfo(request);
        },
        feeDiscountSchedule(request) {
            return queryService.feeDiscountSchedule(request);
        },
        balanceMismatches(request) {
            return queryService.balanceMismatches(request);
        },
        balanceWithBalanceHolds(request) {
            return queryService.balanceWithBalanceHolds(request);
        },
        feeDiscountTierStatistics(request) {
            return queryService.feeDiscountTierStatistics(request);
        },
        ninjaVaultInfos(request) {
            return queryService.ninjaVaultInfos(request);
        },
        queryMarketIDFromVault(request) {
            return queryService.queryMarketIDFromVault(request);
        },
        historicalTradeRecords(request) {
            return queryService.historicalTradeRecords(request);
        },
        isOptedOutOfRewards(request) {
            return queryService.isOptedOutOfRewards(request);
        },
        optedOutOfRewardsAccounts(request) {
            return queryService.optedOutOfRewardsAccounts(request);
        },
        marketVolatility(request) {
            return queryService.marketVolatility(request);
        },
        binaryOptionsMarkets(request) {
            return queryService.binaryOptionsMarkets(request);
        },
        traderDerivativeConditionalOrders(request) {
            return queryService.traderDerivativeConditionalOrders(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
