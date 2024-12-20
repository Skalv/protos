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
        this.feeTokens = this.feeTokens.bind(this);
        this.denomSpotPrice = this.denomSpotPrice.bind(this);
        this.denomPoolId = this.denomPoolId.bind(this);
        this.baseDenom = this.baseDenom.bind(this);
    }
    feeTokens(request = {}) {
        const data = query_1.QueryFeeTokensRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
        return promise.then(data => query_1.QueryFeeTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomSpotPrice(request) {
        const data = query_1.QueryDenomSpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
        return promise.then(data => query_1.QueryDenomSpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomPoolId(request) {
        const data = query_1.QueryDenomPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
        return promise.then(data => query_1.QueryDenomPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    baseDenom(request = {}) {
        const data = query_1.QueryBaseDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
        return promise.then(data => query_1.QueryBaseDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
