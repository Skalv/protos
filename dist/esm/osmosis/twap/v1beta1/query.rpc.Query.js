import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.arithmeticTwap = this.arithmeticTwap.bind(this);
        this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    arithmeticTwap(request) {
        const data = ArithmeticTwapRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
        return promise.then(data => ArithmeticTwapResponse.decode(new BinaryReader(data)));
    }
    arithmeticTwapToNow(request) {
        const data = ArithmeticTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
        return promise.then(data => ArithmeticTwapToNowResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
