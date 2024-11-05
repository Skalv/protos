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
        this.arithmeticTwap = this.arithmeticTwap.bind(this);
        this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    }
    params(request = {}) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    arithmeticTwap(request) {
        const data = query_1.ArithmeticTwapRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
        return promise.then(data => query_1.ArithmeticTwapResponse.decode(new binary_1.BinaryReader(data)));
    }
    arithmeticTwapToNow(request) {
        const data = query_1.ArithmeticTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
        return promise.then(data => query_1.ArithmeticTwapToNowResponse.decode(new binary_1.BinaryReader(data)));
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
        arithmeticTwap(request) {
            return queryService.arithmeticTwap(request);
        },
        arithmeticTwapToNow(request) {
            return queryService.arithmeticTwapToNow(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
