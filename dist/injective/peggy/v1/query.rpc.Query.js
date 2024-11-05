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
        this.currentValset = this.currentValset.bind(this);
        this.valsetRequest = this.valsetRequest.bind(this);
        this.valsetConfirm = this.valsetConfirm.bind(this);
        this.valsetConfirmsByNonce = this.valsetConfirmsByNonce.bind(this);
        this.lastValsetRequests = this.lastValsetRequests.bind(this);
        this.lastPendingValsetRequestByAddr = this.lastPendingValsetRequestByAddr.bind(this);
        this.lastEventByAddr = this.lastEventByAddr.bind(this);
        this.getPendingSendToEth = this.getPendingSendToEth.bind(this);
        this.batchFees = this.batchFees.bind(this);
        this.outgoingTxBatches = this.outgoingTxBatches.bind(this);
        this.lastPendingBatchRequestByAddr = this.lastPendingBatchRequestByAddr.bind(this);
        this.batchRequestByNonce = this.batchRequestByNonce.bind(this);
        this.batchConfirms = this.batchConfirms.bind(this);
        this.eRC20ToDenom = this.eRC20ToDenom.bind(this);
        this.denomToERC20 = this.denomToERC20.bind(this);
        this.getDelegateKeyByValidator = this.getDelegateKeyByValidator.bind(this);
        this.getDelegateKeyByEth = this.getDelegateKeyByEth.bind(this);
        this.getDelegateKeyByOrchestrator = this.getDelegateKeyByOrchestrator.bind(this);
        this.peggyModuleState = this.peggyModuleState.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    currentValset(request = {}) {
        const data = query_1.QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
        return promise.then(data => query_1.QueryCurrentValsetResponse.decode(new binary_1.BinaryReader(data)));
    }
    valsetRequest(request) {
        const data = query_1.QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
        return promise.then(data => query_1.QueryValsetRequestResponse.decode(new binary_1.BinaryReader(data)));
    }
    valsetConfirm(request) {
        const data = query_1.QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
        return promise.then(data => query_1.QueryValsetConfirmResponse.decode(new binary_1.BinaryReader(data)));
    }
    valsetConfirmsByNonce(request) {
        const data = query_1.QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then(data => query_1.QueryValsetConfirmsByNonceResponse.decode(new binary_1.BinaryReader(data)));
    }
    lastValsetRequests(request = {}) {
        const data = query_1.QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
        return promise.then(data => query_1.QueryLastValsetRequestsResponse.decode(new binary_1.BinaryReader(data)));
    }
    lastPendingValsetRequestByAddr(request) {
        const data = query_1.QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then(data => query_1.QueryLastPendingValsetRequestByAddrResponse.decode(new binary_1.BinaryReader(data)));
    }
    lastEventByAddr(request) {
        const data = query_1.QueryLastEventByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
        return promise.then(data => query_1.QueryLastEventByAddrResponse.decode(new binary_1.BinaryReader(data)));
    }
    getPendingSendToEth(request) {
        const data = query_1.QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
        return promise.then(data => query_1.QueryPendingSendToEthResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchFees(request = {}) {
        const data = query_1.QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
        return promise.then(data => query_1.QueryBatchFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    outgoingTxBatches(request = {}) {
        const data = query_1.QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
        return promise.then(data => query_1.QueryOutgoingTxBatchesResponse.decode(new binary_1.BinaryReader(data)));
    }
    lastPendingBatchRequestByAddr(request) {
        const data = query_1.QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then(data => query_1.QueryLastPendingBatchRequestByAddrResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchRequestByNonce(request) {
        const data = query_1.QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
        return promise.then(data => query_1.QueryBatchRequestByNonceResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchConfirms(request) {
        const data = query_1.QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
        return promise.then(data => query_1.QueryBatchConfirmsResponse.decode(new binary_1.BinaryReader(data)));
    }
    eRC20ToDenom(request) {
        const data = query_1.QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
        return promise.then(data => query_1.QueryERC20ToDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomToERC20(request) {
        const data = query_1.QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
        return promise.then(data => query_1.QueryDenomToERC20Response.decode(new binary_1.BinaryReader(data)));
    }
    getDelegateKeyByValidator(request) {
        const data = query_1.QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then(data => query_1.QueryDelegateKeysByValidatorAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    getDelegateKeyByEth(request) {
        const data = query_1.QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then(data => query_1.QueryDelegateKeysByEthAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    getDelegateKeyByOrchestrator(request) {
        const data = query_1.QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then(data => query_1.QueryDelegateKeysByOrchestratorAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    peggyModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
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
        currentValset(request) {
            return queryService.currentValset(request);
        },
        valsetRequest(request) {
            return queryService.valsetRequest(request);
        },
        valsetConfirm(request) {
            return queryService.valsetConfirm(request);
        },
        valsetConfirmsByNonce(request) {
            return queryService.valsetConfirmsByNonce(request);
        },
        lastValsetRequests(request) {
            return queryService.lastValsetRequests(request);
        },
        lastPendingValsetRequestByAddr(request) {
            return queryService.lastPendingValsetRequestByAddr(request);
        },
        lastEventByAddr(request) {
            return queryService.lastEventByAddr(request);
        },
        getPendingSendToEth(request) {
            return queryService.getPendingSendToEth(request);
        },
        batchFees(request) {
            return queryService.batchFees(request);
        },
        outgoingTxBatches(request) {
            return queryService.outgoingTxBatches(request);
        },
        lastPendingBatchRequestByAddr(request) {
            return queryService.lastPendingBatchRequestByAddr(request);
        },
        batchRequestByNonce(request) {
            return queryService.batchRequestByNonce(request);
        },
        batchConfirms(request) {
            return queryService.batchConfirms(request);
        },
        eRC20ToDenom(request) {
            return queryService.eRC20ToDenom(request);
        },
        denomToERC20(request) {
            return queryService.denomToERC20(request);
        },
        getDelegateKeyByValidator(request) {
            return queryService.getDelegateKeyByValidator(request);
        },
        getDelegateKeyByEth(request) {
            return queryService.getDelegateKeyByEth(request);
        },
        getDelegateKeyByOrchestrator(request) {
            return queryService.getDelegateKeyByOrchestrator(request);
        },
        peggyModuleState(request) {
            return queryService.peggyModuleState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
