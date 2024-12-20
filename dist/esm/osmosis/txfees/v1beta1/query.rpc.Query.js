import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.feeTokens = this.feeTokens.bind(this);
        this.denomSpotPrice = this.denomSpotPrice.bind(this);
        this.denomPoolId = this.denomPoolId.bind(this);
        this.baseDenom = this.baseDenom.bind(this);
    }
    feeTokens(request = {}) {
        const data = QueryFeeTokensRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
        return promise.then(data => QueryFeeTokensResponse.decode(new BinaryReader(data)));
    }
    denomSpotPrice(request) {
        const data = QueryDenomSpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
        return promise.then(data => QueryDenomSpotPriceResponse.decode(new BinaryReader(data)));
    }
    denomPoolId(request) {
        const data = QueryDenomPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
        return promise.then(data => QueryDenomPoolIdResponse.decode(new BinaryReader(data)));
    }
    baseDenom(request = {}) {
        const data = QueryBaseDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
        return promise.then(data => QueryBaseDenomResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        feeTokens(request) {
            return queryService.feeTokens(request);
        },
        denomSpotPrice(request) {
            return queryService.denomSpotPrice(request);
        },
        denomPoolId(request) {
            return queryService.denomPoolId(request);
        },
        baseDenom(request) {
            return queryService.baseDenom(request);
        }
    };
};
