import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
    }
    recoveredSinceDowntimeOfLength(request) {
        const data = RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
        return promise.then(data => RecoveredSinceDowntimeOfLengthResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        recoveredSinceDowntimeOfLength(request) {
            return queryService.recoveredSinceDowntimeOfLength(request);
        }
    };
};
