import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    currentValset(request = {}) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
        return promise.then(data => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
    }
    valsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
        return promise.then(data => QueryValsetRequestResponse.decode(new BinaryReader(data)));
    }
    valsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
        return promise.then(data => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
    }
    valsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
    }
    lastValsetRequests(request = {}) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
        return promise.then(data => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
    }
    lastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    lastEventByAddr(request) {
        const data = QueryLastEventByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
        return promise.then(data => QueryLastEventByAddrResponse.decode(new BinaryReader(data)));
    }
    getPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
        return promise.then(data => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
    }
    batchFees(request = {}) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
        return promise.then(data => QueryBatchFeeResponse.decode(new BinaryReader(data)));
    }
    outgoingTxBatches(request = {}) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
        return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
    }
    lastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    batchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
        return promise.then(data => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
    }
    batchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
        return promise.then(data => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
    }
    eRC20ToDenom(request) {
        const data = QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
        return promise.then(data => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
    }
    denomToERC20(request) {
        const data = QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
        return promise.then(data => QueryDenomToERC20Response.decode(new BinaryReader(data)));
    }
    getDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
    }
    getDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
    }
    getDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
    }
    peggyModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
