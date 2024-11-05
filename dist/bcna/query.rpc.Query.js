"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    bitcannaid(request) {
        const data = query_1.QueryGetBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Bitcannaid", data);
        return promise.then(data => query_1.QueryGetBitcannaidResponse.decode(new binary_1.BinaryReader(data)));
    }
    bitcannaidAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "BitcannaidAll", data);
        return promise.then(data => query_1.QueryAllBitcannaidResponse.decode(new binary_1.BinaryReader(data)));
    }
    supplychain(request) {
        const data = query_1.QueryGetSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Supplychain", data);
        return promise.then(data => query_1.QueryGetSupplychainResponse.decode(new binary_1.BinaryReader(data)));
    }
    supplychainAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "SupplychainAll", data);
        return promise.then(data => query_1.QueryAllSupplychainResponse.decode(new binary_1.BinaryReader(data)));
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
exports.createRpcQueryExtension = createRpcQueryExtension;
