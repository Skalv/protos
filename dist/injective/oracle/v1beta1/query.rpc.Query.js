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
        this.params = this.params.bind(this);
        this.bandRelayers = this.bandRelayers.bind(this);
        this.bandPriceStates = this.bandPriceStates.bind(this);
        this.bandIBCPriceStates = this.bandIBCPriceStates.bind(this);
        this.priceFeedPriceStates = this.priceFeedPriceStates.bind(this);
        this.coinbasePriceStates = this.coinbasePriceStates.bind(this);
        this.providerPriceState = this.providerPriceState.bind(this);
        this.oracleModuleState = this.oracleModuleState.bind(this);
        this.historicalPriceRecords = this.historicalPriceRecords.bind(this);
        this.oracleVolatility = this.oracleVolatility.bind(this);
        this.oracleProvidersInfo = this.oracleProvidersInfo.bind(this);
        this.oracleProviderPrices = this.oracleProviderPrices.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    bandRelayers(request = {}) {
        const data = query_1.QueryBandRelayersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
        return promise.then(data => query_1.QueryBandRelayersResponse.decode(new binary_1.BinaryReader(data)));
    }
    bandPriceStates(request = {}) {
        const data = query_1.QueryBandPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
        return promise.then(data => query_1.QueryBandPriceStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    bandIBCPriceStates(request = {}) {
        const data = query_1.QueryBandIBCPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
        return promise.then(data => query_1.QueryBandIBCPriceStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    priceFeedPriceStates(request = {}) {
        const data = query_1.QueryPriceFeedPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
        return promise.then(data => query_1.QueryPriceFeedPriceStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    coinbasePriceStates(request = {}) {
        const data = query_1.QueryCoinbasePriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
        return promise.then(data => query_1.QueryCoinbasePriceStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    providerPriceState(request) {
        const data = query_1.QueryProviderPriceStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
        return promise.then(data => query_1.QueryProviderPriceStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    oracleModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    historicalPriceRecords(request) {
        const data = query_1.QueryHistoricalPriceRecordsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
        return promise.then(data => query_1.QueryHistoricalPriceRecordsResponse.decode(new binary_1.BinaryReader(data)));
    }
    oracleVolatility(request) {
        const data = query_1.QueryOracleVolatilityRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
        return promise.then(data => query_1.QueryOracleVolatilityResponse.decode(new binary_1.BinaryReader(data)));
    }
    oracleProvidersInfo(request = {}) {
        const data = query_1.QueryOracleProvidersInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
        return promise.then(data => query_1.QueryOracleProvidersInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    oracleProviderPrices(request) {
        const data = query_1.QueryOracleProviderPricesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
        return promise.then(data => query_1.QueryOracleProviderPricesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        bandRelayers(request) {
            return queryService.bandRelayers(request);
        },
        bandPriceStates(request) {
            return queryService.bandPriceStates(request);
        },
        bandIBCPriceStates(request) {
            return queryService.bandIBCPriceStates(request);
        },
        priceFeedPriceStates(request) {
            return queryService.priceFeedPriceStates(request);
        },
        coinbasePriceStates(request) {
            return queryService.coinbasePriceStates(request);
        },
        providerPriceState(request) {
            return queryService.providerPriceState(request);
        },
        oracleModuleState(request) {
            return queryService.oracleModuleState(request);
        },
        historicalPriceRecords(request) {
            return queryService.historicalPriceRecords(request);
        },
        oracleVolatility(request) {
            return queryService.oracleVolatility(request);
        },
        oracleProvidersInfo(request) {
            return queryService.oracleProvidersInfo(request);
        },
        oracleProviderPrices(request) {
            return queryService.oracleProviderPrices(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
