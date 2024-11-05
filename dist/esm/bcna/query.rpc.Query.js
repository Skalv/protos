import { BinaryReader } from "../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.bitcannaid = this.bitcannaid.bind(this);
        this.bitcannaidAll = this.bitcannaidAll.bind(this);
        this.supplychain = this.supplychain.bind(this);
        this.supplychainAll = this.supplychainAll.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    bitcannaid(request) {
        const data = QueryGetBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Bitcannaid", data);
        return promise.then(data => QueryGetBitcannaidResponse.decode(new BinaryReader(data)));
    }
    bitcannaidAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "BitcannaidAll", data);
        return promise.then(data => QueryAllBitcannaidResponse.decode(new BinaryReader(data)));
    }
    supplychain(request) {
        const data = QueryGetSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Supplychain", data);
        return promise.then(data => QueryGetSupplychainResponse.decode(new BinaryReader(data)));
    }
    supplychainAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "SupplychainAll", data);
        return promise.then(data => QueryAllSupplychainResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        bitcannaid(request) {
            return queryService.bitcannaid(request);
        },
        bitcannaidAll(request) {
            return queryService.bitcannaidAll(request);
        },
        supplychain(request) {
            return queryService.supplychain(request);
        },
        supplychainAll(request) {
            return queryService.supplychainAll(request);
        }
    };
};
