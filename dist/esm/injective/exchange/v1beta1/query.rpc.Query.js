import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, NinjaVaultInfosRequest, NinjaVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryExchangeParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryExchangeParams", data);
        return promise.then(data => QueryExchangeParamsResponse.decode(new BinaryReader(data)));
    }
    subaccountDeposits(request) {
        const data = QuerySubaccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposits", data);
        return promise.then(data => QuerySubaccountDepositsResponse.decode(new BinaryReader(data)));
    }
    subaccountDeposit(request) {
        const data = QuerySubaccountDepositRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposit", data);
        return promise.then(data => QuerySubaccountDepositResponse.decode(new BinaryReader(data)));
    }
    exchangeBalances(request = {}) {
        const data = QueryExchangeBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeBalances", data);
        return promise.then(data => QueryExchangeBalancesResponse.decode(new BinaryReader(data)));
    }
    spotMarkets(request) {
        const data = QuerySpotMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarkets", data);
        return promise.then(data => QuerySpotMarketsResponse.decode(new BinaryReader(data)));
    }
    spotMarket(request) {
        const data = QuerySpotMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarket", data);
        return promise.then(data => QuerySpotMarketResponse.decode(new BinaryReader(data)));
    }
    spotOrderbook(request) {
        const data = QuerySpotOrderbookRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrderbook", data);
        return promise.then(data => QuerySpotOrderbookResponse.decode(new BinaryReader(data)));
    }
    traderSpotOrders(request) {
        const data = QueryTraderSpotOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotOrders", data);
        return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
    }
    spotOrdersByHashes(request) {
        const data = QuerySpotOrdersByHashesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrdersByHashes", data);
        return promise.then(data => QuerySpotOrdersByHashesResponse.decode(new BinaryReader(data)));
    }
    subaccountOrders(request) {
        const data = QuerySubaccountOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrders", data);
        return promise.then(data => QuerySubaccountOrdersResponse.decode(new BinaryReader(data)));
    }
    traderSpotTransientOrders(request) {
        const data = QueryTraderSpotOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotTransientOrders", data);
        return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
    }
    spotMidPriceAndTOB(request) {
        const data = QuerySpotMidPriceAndTOBRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMidPriceAndTOB", data);
        return promise.then(data => QuerySpotMidPriceAndTOBResponse.decode(new BinaryReader(data)));
    }
    derivativeMidPriceAndTOB(request) {
        const data = QueryDerivativeMidPriceAndTOBRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMidPriceAndTOB", data);
        return promise.then(data => QueryDerivativeMidPriceAndTOBResponse.decode(new BinaryReader(data)));
    }
    derivativeOrderbook(request) {
        const data = QueryDerivativeOrderbookRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrderbook", data);
        return promise.then(data => QueryDerivativeOrderbookResponse.decode(new BinaryReader(data)));
    }
    traderDerivativeOrders(request) {
        const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeOrders", data);
        return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
    }
    derivativeOrdersByHashes(request) {
        const data = QueryDerivativeOrdersByHashesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrdersByHashes", data);
        return promise.then(data => QueryDerivativeOrdersByHashesResponse.decode(new BinaryReader(data)));
    }
    traderDerivativeTransientOrders(request) {
        const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeTransientOrders", data);
        return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
    }
    derivativeMarkets(request) {
        const data = QueryDerivativeMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarkets", data);
        return promise.then(data => QueryDerivativeMarketsResponse.decode(new BinaryReader(data)));
    }
    derivativeMarket(request) {
        const data = QueryDerivativeMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarket", data);
        return promise.then(data => QueryDerivativeMarketResponse.decode(new BinaryReader(data)));
    }
    derivativeMarketAddress(request) {
        const data = QueryDerivativeMarketAddressRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarketAddress", data);
        return promise.then(data => QueryDerivativeMarketAddressResponse.decode(new BinaryReader(data)));
    }
    subaccountTradeNonce(request) {
        const data = QuerySubaccountTradeNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountTradeNonce", data);
        return promise.then(data => QuerySubaccountTradeNonceResponse.decode(new BinaryReader(data)));
    }
    exchangeModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
    positions(request = {}) {
        const data = QueryPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "Positions", data);
        return promise.then(data => QueryPositionsResponse.decode(new BinaryReader(data)));
    }
    subaccountPositions(request) {
        const data = QuerySubaccountPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositions", data);
        return promise.then(data => QuerySubaccountPositionsResponse.decode(new BinaryReader(data)));
    }
    subaccountPositionInMarket(request) {
        const data = QuerySubaccountPositionInMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositionInMarket", data);
        return promise.then(data => QuerySubaccountPositionInMarketResponse.decode(new BinaryReader(data)));
    }
    subaccountEffectivePositionInMarket(request) {
        const data = QuerySubaccountEffectivePositionInMarketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountEffectivePositionInMarket", data);
        return promise.then(data => QuerySubaccountEffectivePositionInMarketResponse.decode(new BinaryReader(data)));
    }
    perpetualMarketInfo(request) {
        const data = QueryPerpetualMarketInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketInfo", data);
        return promise.then(data => QueryPerpetualMarketInfoResponse.decode(new BinaryReader(data)));
    }
    expiryFuturesMarketInfo(request) {
        const data = QueryExpiryFuturesMarketInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExpiryFuturesMarketInfo", data);
        return promise.then(data => QueryExpiryFuturesMarketInfoResponse.decode(new BinaryReader(data)));
    }
    perpetualMarketFunding(request) {
        const data = QueryPerpetualMarketFundingRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketFunding", data);
        return promise.then(data => QueryPerpetualMarketFundingResponse.decode(new BinaryReader(data)));
    }
    subaccountOrderMetadata(request) {
        const data = QuerySubaccountOrderMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrderMetadata", data);
        return promise.then(data => QuerySubaccountOrderMetadataResponse.decode(new BinaryReader(data)));
    }
    tradeRewardPoints(request) {
        const data = QueryTradeRewardPointsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardPoints", data);
        return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
    }
    pendingTradeRewardPoints(request) {
        const data = QueryTradeRewardPointsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PendingTradeRewardPoints", data);
        return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
    }
    tradeRewardCampaign(request = {}) {
        const data = QueryTradeRewardCampaignRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardCampaign", data);
        return promise.then(data => QueryTradeRewardCampaignResponse.decode(new BinaryReader(data)));
    }
    feeDiscountAccountInfo(request) {
        const data = QueryFeeDiscountAccountInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountAccountInfo", data);
        return promise.then(data => QueryFeeDiscountAccountInfoResponse.decode(new BinaryReader(data)));
    }
    feeDiscountSchedule(request = {}) {
        const data = QueryFeeDiscountScheduleRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountSchedule", data);
        return promise.then(data => QueryFeeDiscountScheduleResponse.decode(new BinaryReader(data)));
    }
    balanceMismatches(request) {
        const data = QueryBalanceMismatchesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceMismatches", data);
        return promise.then(data => QueryBalanceMismatchesResponse.decode(new BinaryReader(data)));
    }
    balanceWithBalanceHolds(request = {}) {
        const data = QueryBalanceWithBalanceHoldsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceWithBalanceHolds", data);
        return promise.then(data => QueryBalanceWithBalanceHoldsResponse.decode(new BinaryReader(data)));
    }
    feeDiscountTierStatistics(request = {}) {
        const data = QueryFeeDiscountTierStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountTierStatistics", data);
        return promise.then(data => QueryFeeDiscountTierStatisticsResponse.decode(new BinaryReader(data)));
    }
    ninjaVaultInfos(request = {}) {
        const data = NinjaVaultInfosRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "NinjaVaultInfos", data);
        return promise.then(data => NinjaVaultInfosResponse.decode(new BinaryReader(data)));
    }
    queryMarketIDFromVault(request) {
        const data = QueryMarketIDFromVaultRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryMarketIDFromVault", data);
        return promise.then(data => QueryMarketIDFromVaultResponse.decode(new BinaryReader(data)));
    }
    historicalTradeRecords(request) {
        const data = QueryHistoricalTradeRecordsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "HistoricalTradeRecords", data);
        return promise.then(data => QueryHistoricalTradeRecordsResponse.decode(new BinaryReader(data)));
    }
    isOptedOutOfRewards(request) {
        const data = QueryIsOptedOutOfRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "IsOptedOutOfRewards", data);
        return promise.then(data => QueryIsOptedOutOfRewardsResponse.decode(new BinaryReader(data)));
    }
    optedOutOfRewardsAccounts(request = {}) {
        const data = QueryOptedOutOfRewardsAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "OptedOutOfRewardsAccounts", data);
        return promise.then(data => QueryOptedOutOfRewardsAccountsResponse.decode(new BinaryReader(data)));
    }
    marketVolatility(request) {
        const data = QueryMarketVolatilityRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketVolatility", data);
        return promise.then(data => QueryMarketVolatilityResponse.decode(new BinaryReader(data)));
    }
    binaryOptionsMarkets(request) {
        const data = QueryBinaryMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BinaryOptionsMarkets", data);
        return promise.then(data => QueryBinaryMarketsResponse.decode(new BinaryReader(data)));
    }
    traderDerivativeConditionalOrders(request) {
        const data = QueryTraderDerivativeConditionalOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeConditionalOrders", data);
        return promise.then(data => QueryTraderDerivativeConditionalOrdersResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
