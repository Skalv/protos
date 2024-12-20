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
        this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
    }
    recoveredSinceDowntimeOfLength(request) {
        const data = query_1.RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
        return promise.then(data => query_1.RecoveredSinceDowntimeOfLengthResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        recoveredSinceDowntimeOfLength(request) {
            return queryService.recoveredSinceDowntimeOfLength(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
