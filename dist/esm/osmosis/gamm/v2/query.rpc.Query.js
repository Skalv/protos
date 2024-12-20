import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.spotPrice = this.spotPrice.bind(this);
    }
    spotPrice(request) {
        const data = QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v2.Query", "SpotPrice", data);
        return promise.then(data => QuerySpotPriceResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        spotPrice(request) {
            return queryService.spotPrice(request);
        }
    };
};
