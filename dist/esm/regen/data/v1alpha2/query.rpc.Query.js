import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryByHashRequest, QueryByHashResponse, QueryBySignerRequest, QueryBySignerResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.byHash = this.byHash.bind(this);
        this.bySigner = this.bySigner.bind(this);
    }
    byHash(request) {
        const data = QueryByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Query", "ByHash", data);
        return promise.then(data => QueryByHashResponse.decode(new BinaryReader(data)));
    }
    bySigner(request) {
        const data = QueryBySignerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Query", "BySigner", data);
        return promise.then(data => QueryBySignerResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        byHash(request) {
            return queryService.byHash(request);
        },
        bySigner(request) {
            return queryService.bySigner(request);
        }
    };
};
