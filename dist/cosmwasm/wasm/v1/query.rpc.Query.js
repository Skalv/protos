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
        this.contractInfo = this.contractInfo.bind(this);
        this.contractHistory = this.contractHistory.bind(this);
        this.contractsByCode = this.contractsByCode.bind(this);
        this.allContractState = this.allContractState.bind(this);
        this.rawContractState = this.rawContractState.bind(this);
        this.smartContractState = this.smartContractState.bind(this);
        this.code = this.code.bind(this);
        this.codes = this.codes.bind(this);
        this.pinnedCodes = this.pinnedCodes.bind(this);
        this.params = this.params.bind(this);
        this.contractsByCreator = this.contractsByCreator.bind(this);
    }
    contractInfo(request) {
        const data = query_1.QueryContractInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
        return promise.then(data => query_1.QueryContractInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    contractHistory(request) {
        const data = query_1.QueryContractHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
        return promise.then(data => query_1.QueryContractHistoryResponse.decode(new binary_1.BinaryReader(data)));
    }
    contractsByCode(request) {
        const data = query_1.QueryContractsByCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
        return promise.then(data => query_1.QueryContractsByCodeResponse.decode(new binary_1.BinaryReader(data)));
    }
    allContractState(request) {
        const data = query_1.QueryAllContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
        return promise.then(data => query_1.QueryAllContractStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    rawContractState(request) {
        const data = query_1.QueryRawContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
        return promise.then(data => query_1.QueryRawContractStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    smartContractState(request) {
        const data = query_1.QuerySmartContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
        return promise.then(data => query_1.QuerySmartContractStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    code(request) {
        const data = query_1.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
        return promise.then(data => query_1.QueryCodeResponse.decode(new binary_1.BinaryReader(data)));
    }
    codes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
        return promise.then(data => query_1.QueryCodesResponse.decode(new binary_1.BinaryReader(data)));
    }
    pinnedCodes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryPinnedCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
        return promise.then(data => query_1.QueryPinnedCodesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    contractsByCreator(request) {
        const data = query_1.QueryContractsByCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
        return promise.then(data => query_1.QueryContractsByCreatorResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        contractInfo(request) {
            return queryService.contractInfo(request);
        },
        contractHistory(request) {
            return queryService.contractHistory(request);
        },
        contractsByCode(request) {
            return queryService.contractsByCode(request);
        },
        allContractState(request) {
            return queryService.allContractState(request);
        },
        rawContractState(request) {
            return queryService.rawContractState(request);
        },
        smartContractState(request) {
            return queryService.smartContractState(request);
        },
        code(request) {
            return queryService.code(request);
        },
        codes(request) {
            return queryService.codes(request);
        },
        pinnedCodes(request) {
            return queryService.pinnedCodes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        contractsByCreator(request) {
            return queryService.contractsByCreator(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
