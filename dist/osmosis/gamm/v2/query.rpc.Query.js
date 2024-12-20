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
        this.spotPrice = this.spotPrice.bind(this);
    }
    spotPrice(request) {
        const data = query_1.QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v2.Query", "SpotPrice", data);
        return promise.then(data => query_1.QuerySpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        spotPrice(request) {
            return queryService.spotPrice(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
