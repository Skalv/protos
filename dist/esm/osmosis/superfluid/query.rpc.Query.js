import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    assetType(request) {
        const data = AssetTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
        return promise.then(data => AssetTypeResponse.decode(new BinaryReader(data)));
    }
    allAssets(request = {}) {
        const data = AllAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
        return promise.then(data => AllAssetsResponse.decode(new BinaryReader(data)));
    }
    assetMultiplier(request) {
        const data = AssetMultiplierRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
        return promise.then(data => AssetMultiplierResponse.decode(new BinaryReader(data)));
    }
    allIntermediaryAccounts(request = {
        pagination: undefined
    }) {
        const data = AllIntermediaryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
        return promise.then(data => AllIntermediaryAccountsResponse.decode(new BinaryReader(data)));
    }
    connectedIntermediaryAccount(request) {
        const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
        return promise.then(data => ConnectedIntermediaryAccountResponse.decode(new BinaryReader(data)));
    }
    totalDelegationByValidatorForDenom(request) {
        const data = QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
        return promise.then(data => QueryTotalDelegationByValidatorForDenomResponse.decode(new BinaryReader(data)));
    }
    totalSuperfluidDelegations(request = {}) {
        const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
        return promise.then(data => TotalSuperfluidDelegationsResponse.decode(new BinaryReader(data)));
    }
    superfluidDelegationAmount(request) {
        const data = SuperfluidDelegationAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
        return promise.then(data => SuperfluidDelegationAmountResponse.decode(new BinaryReader(data)));
    }
    superfluidDelegationsByDelegator(request) {
        const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
        return promise.then(data => SuperfluidDelegationsByDelegatorResponse.decode(new BinaryReader(data)));
    }
    superfluidUndelegationsByDelegator(request) {
        const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
        return promise.then(data => SuperfluidUndelegationsByDelegatorResponse.decode(new BinaryReader(data)));
    }
    superfluidDelegationsByValidatorDenom(request) {
        const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
        return promise.then(data => SuperfluidDelegationsByValidatorDenomResponse.decode(new BinaryReader(data)));
    }
    estimateSuperfluidDelegatedAmountByValidatorDenom(request) {
        const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
        return promise.then(data => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new BinaryReader(data)));
    }
    totalDelegationByDelegator(request) {
        const data = QueryTotalDelegationByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
        return promise.then(data => QueryTotalDelegationByDelegatorResponse.decode(new BinaryReader(data)));
    }
    unpoolWhitelist(request = {}) {
        const data = QueryUnpoolWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
        return promise.then(data => QueryUnpoolWhitelistResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
