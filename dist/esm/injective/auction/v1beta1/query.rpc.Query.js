import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.auctionParams = this.auctionParams.bind(this);
        this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
        this.auctionModuleState = this.auctionModuleState.bind(this);
    }
    auctionParams(request = {}) {
        const data = QueryAuctionParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
        return promise.then(data => QueryAuctionParamsResponse.decode(new BinaryReader(data)));
    }
    currentAuctionBasket(request = {}) {
        const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
        return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new BinaryReader(data)));
    }
    auctionModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        auctionParams(request) {
            return queryService.auctionParams(request);
        },
        currentAuctionBasket(request) {
            return queryService.currentAuctionBasket(request);
        },
        auctionModuleState(request) {
            return queryService.auctionModuleState(request);
        }
    };
};
