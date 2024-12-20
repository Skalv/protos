//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves oracle params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the band relayers */
  bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
  /** Retrieves the state for all band price feeds */
  bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
  /** Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
  /** Retrieves the state for all price feeds */
  priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
  /** Retrieves the state for all coinbase price feeds */
  coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
  /** Retrieves the state for all provider price feeds */
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
  /** Retrieves the entire oracle module's state */
  oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
  /** Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
  oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  bandRelayers(request: QueryBandRelayersRequest = {}): Promise<QueryBandRelayersResponse> {
    const data = QueryBandRelayersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
    return promise.then(data => QueryBandRelayersResponse.decode(new BinaryReader(data)));
  }
  bandPriceStates(request: QueryBandPriceStatesRequest = {}): Promise<QueryBandPriceStatesResponse> {
    const data = QueryBandPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
    return promise.then(data => QueryBandPriceStatesResponse.decode(new BinaryReader(data)));
  }
  bandIBCPriceStates(request: QueryBandIBCPriceStatesRequest = {}): Promise<QueryBandIBCPriceStatesResponse> {
    const data = QueryBandIBCPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
    return promise.then(data => QueryBandIBCPriceStatesResponse.decode(new BinaryReader(data)));
  }
  priceFeedPriceStates(request: QueryPriceFeedPriceStatesRequest = {}): Promise<QueryPriceFeedPriceStatesResponse> {
    const data = QueryPriceFeedPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
    return promise.then(data => QueryPriceFeedPriceStatesResponse.decode(new BinaryReader(data)));
  }
  coinbasePriceStates(request: QueryCoinbasePriceStatesRequest = {}): Promise<QueryCoinbasePriceStatesResponse> {
    const data = QueryCoinbasePriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
    return promise.then(data => QueryCoinbasePriceStatesResponse.decode(new BinaryReader(data)));
  }
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> {
    const data = QueryProviderPriceStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
    return promise.then(data => QueryProviderPriceStateResponse.decode(new BinaryReader(data)));
  }
  oracleModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> {
    const data = QueryHistoricalPriceRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
    return promise.then(data => QueryHistoricalPriceRecordsResponse.decode(new BinaryReader(data)));
  }
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> {
    const data = QueryOracleVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
    return promise.then(data => QueryOracleVolatilityResponse.decode(new BinaryReader(data)));
  }
  oracleProvidersInfo(request: QueryOracleProvidersInfoRequest = {}): Promise<QueryOracleProvidersInfoResponse> {
    const data = QueryOracleProvidersInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
    return promise.then(data => QueryOracleProvidersInfoResponse.decode(new BinaryReader(data)));
  }
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> {
    const data = QueryOracleProviderPricesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
    return promise.then(data => QueryOracleProviderPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse> {
      return queryService.bandRelayers(request);
    },
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse> {
      return queryService.bandPriceStates(request);
    },
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse> {
      return queryService.bandIBCPriceStates(request);
    },
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse> {
      return queryService.priceFeedPriceStates(request);
    },
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse> {
      return queryService.coinbasePriceStates(request);
    },
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> {
      return queryService.providerPriceState(request);
    },
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.oracleModuleState(request);
    },
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> {
      return queryService.historicalPriceRecords(request);
    },
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> {
      return queryService.oracleVolatility(request);
    },
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse> {
      return queryService.oracleProvidersInfo(request);
    },
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> {
      return queryService.oracleProviderPrices(request);
    }
  };
};