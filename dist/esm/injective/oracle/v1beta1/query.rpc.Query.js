import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    bandRelayers(request = {}) {
        const data = QueryBandRelayersRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
        return promise.then(data => QueryBandRelayersResponse.decode(new BinaryReader(data)));
    }
    bandPriceStates(request = {}) {
        const data = QueryBandPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
        return promise.then(data => QueryBandPriceStatesResponse.decode(new BinaryReader(data)));
    }
    bandIBCPriceStates(request = {}) {
        const data = QueryBandIBCPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
        return promise.then(data => QueryBandIBCPriceStatesResponse.decode(new BinaryReader(data)));
    }
    priceFeedPriceStates(request = {}) {
        const data = QueryPriceFeedPriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
        return promise.then(data => QueryPriceFeedPriceStatesResponse.decode(new BinaryReader(data)));
    }
    coinbasePriceStates(request = {}) {
        const data = QueryCoinbasePriceStatesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
        return promise.then(data => QueryCoinbasePriceStatesResponse.decode(new BinaryReader(data)));
    }
    providerPriceState(request) {
        const data = QueryProviderPriceStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
        return promise.then(data => QueryProviderPriceStateResponse.decode(new BinaryReader(data)));
    }
    oracleModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
    historicalPriceRecords(request) {
        const data = QueryHistoricalPriceRecordsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
        return promise.then(data => QueryHistoricalPriceRecordsResponse.decode(new BinaryReader(data)));
    }
    oracleVolatility(request) {
        const data = QueryOracleVolatilityRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
        return promise.then(data => QueryOracleVolatilityResponse.decode(new BinaryReader(data)));
    }
    oracleProvidersInfo(request = {}) {
        const data = QueryOracleProvidersInfoRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
        return promise.then(data => QueryOracleProvidersInfoResponse.decode(new BinaryReader(data)));
    }
    oracleProviderPrices(request) {
        const data = QueryOracleProviderPricesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
        return promise.then(data => QueryOracleProviderPricesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
