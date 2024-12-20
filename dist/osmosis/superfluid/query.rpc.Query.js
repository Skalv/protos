"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.assetType = this.assetType.bind(this);
        this.allAssets = this.allAssets.bind(this);
        this.assetMultiplier = this.assetMultiplier.bind(this);
        this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
        this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
        this.totalDelegationByValidatorForDenom = this.totalDelegationByValidatorForDenom.bind(this);
        this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
        this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
        this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
        this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
        this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
        this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
        this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
        this.unpoolWhitelist = this.unpoolWhitelist.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    assetType(request) {
        const data = query_1.AssetTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
        return promise.then(data => query_1.AssetTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    allAssets(request = {}) {
        const data = query_1.AllAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
        return promise.then(data => query_1.AllAssetsResponse.decode(new binary_1.BinaryReader(data)));
    }
    assetMultiplier(request) {
        const data = query_1.AssetMultiplierRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
        return promise.then(data => query_1.AssetMultiplierResponse.decode(new binary_1.BinaryReader(data)));
    }
    allIntermediaryAccounts(request = {
        pagination: undefined
    }) {
        const data = query_1.AllIntermediaryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
        return promise.then(data => query_1.AllIntermediaryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    connectedIntermediaryAccount(request) {
        const data = query_1.ConnectedIntermediaryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
        return promise.then(data => query_1.ConnectedIntermediaryAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalDelegationByValidatorForDenom(request) {
        const data = query_1.QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
        return promise.then(data => query_1.QueryTotalDelegationByValidatorForDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalSuperfluidDelegations(request = {}) {
        const data = query_1.TotalSuperfluidDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
        return promise.then(data => query_1.TotalSuperfluidDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidDelegationAmount(request) {
        const data = query_1.SuperfluidDelegationAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
        return promise.then(data => query_1.SuperfluidDelegationAmountResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidDelegationsByDelegator(request) {
        const data = query_1.SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
        return promise.then(data => query_1.SuperfluidDelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUndelegationsByDelegator(request) {
        const data = query_1.SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
        return promise.then(data => query_1.SuperfluidUndelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidDelegationsByValidatorDenom(request) {
        const data = query_1.SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
        return promise.then(data => query_1.SuperfluidDelegationsByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSuperfluidDelegatedAmountByValidatorDenom(request) {
        const data = query_1.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
        return promise.then(data => query_1.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalDelegationByDelegator(request) {
        const data = query_1.QueryTotalDelegationByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
        return promise.then(data => query_1.QueryTotalDelegationByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    unpoolWhitelist(request = {}) {
        const data = query_1.QueryUnpoolWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
        return promise.then(data => query_1.QueryUnpoolWhitelistResponse.decode(new binary_1.BinaryReader(data)));
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
        assetType(request) {
            return queryService.assetType(request);
        },
        allAssets(request) {
            return queryService.allAssets(request);
        },
        assetMultiplier(request) {
            return queryService.assetMultiplier(request);
        },
        allIntermediaryAccounts(request) {
            return queryService.allIntermediaryAccounts(request);
        },
        connectedIntermediaryAccount(request) {
            return queryService.connectedIntermediaryAccount(request);
        },
        totalDelegationByValidatorForDenom(request) {
            return queryService.totalDelegationByValidatorForDenom(request);
        },
        totalSuperfluidDelegations(request) {
            return queryService.totalSuperfluidDelegations(request);
        },
        superfluidDelegationAmount(request) {
            return queryService.superfluidDelegationAmount(request);
        },
        superfluidDelegationsByDelegator(request) {
            return queryService.superfluidDelegationsByDelegator(request);
        },
        superfluidUndelegationsByDelegator(request) {
            return queryService.superfluidUndelegationsByDelegator(request);
        },
        superfluidDelegationsByValidatorDenom(request) {
            return queryService.superfluidDelegationsByValidatorDenom(request);
        },
        estimateSuperfluidDelegatedAmountByValidatorDenom(request) {
            return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
        },
        totalDelegationByDelegator(request) {
            return queryService.totalDelegationByDelegator(request);
        },
        unpoolWhitelist(request) {
            return queryService.unpoolWhitelist(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
