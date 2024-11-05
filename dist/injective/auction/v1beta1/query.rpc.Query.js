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
        this.auctionParams = this.auctionParams.bind(this);
        this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
        this.auctionModuleState = this.auctionModuleState.bind(this);
    }
    auctionParams(request = {}) {
        const data = query_1.QueryAuctionParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
        return promise.then(data => query_1.QueryAuctionParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    currentAuctionBasket(request = {}) {
        const data = query_1.QueryCurrentAuctionBasketRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
        return promise.then(data => query_1.QueryCurrentAuctionBasketResponse.decode(new binary_1.BinaryReader(data)));
    }
    auctionModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
