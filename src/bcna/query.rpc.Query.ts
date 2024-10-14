//@ts-nocheck
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Bitcannaid by id. */
  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
  /** Queries a list of Bitcannaid items. */
  bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
  /** Queries a Supplychain by id. */
  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
  /** Queries a list of Supplychain items. */
  supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bitcannaid = this.bitcannaid.bind(this);
    this.bitcannaidAll = this.bitcannaidAll.bind(this);
    this.supplychain = this.supplychain.bind(this);
    this.supplychainAll = this.supplychainAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
    const data = QueryGetBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Bitcannaid", data);
    return promise.then(data => QueryGetBitcannaidResponse.decode(new BinaryReader(data)));
  }
  bitcannaidAll(request: QueryAllBitcannaidRequest = {
    pagination: undefined
  }): Promise<QueryAllBitcannaidResponse> {
    const data = QueryAllBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "BitcannaidAll", data);
    return promise.then(data => QueryAllBitcannaidResponse.decode(new BinaryReader(data)));
  }
  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
    const data = QueryGetSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Supplychain", data);
    return promise.then(data => QueryGetSupplychainResponse.decode(new BinaryReader(data)));
  }
  supplychainAll(request: QueryAllSupplychainRequest = {
    pagination: undefined
  }): Promise<QueryAllSupplychainResponse> {
    const data = QueryAllSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "SupplychainAll", data);
    return promise.then(data => QueryAllSupplychainResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
      return queryService.bitcannaid(request);
    },
    bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse> {
      return queryService.bitcannaidAll(request);
    },
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
      return queryService.supplychain(request);
    },
    supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse> {
      return queryService.supplychainAll(request);
    }
  };
};