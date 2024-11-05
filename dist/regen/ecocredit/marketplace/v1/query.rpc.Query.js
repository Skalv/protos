"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.sellOrder = this.sellOrder.bind(this);
        this.sellOrders = this.sellOrders.bind(this);
        this.sellOrdersByBatchDenom = this.sellOrdersByBatchDenom.bind(this);
        this.sellOrdersByAddress = this.sellOrdersByAddress.bind(this);
        this.allowedDenoms = this.allowedDenoms.bind(this);
    }
    sellOrder(request) {
        const data = query_1.QuerySellOrderRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
        return promise.then(data => query_1.QuerySellOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrders(request = {
        pagination: undefined
    }) {
        const data = query_1.QuerySellOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
        return promise.then(data => query_1.QuerySellOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrdersByBatchDenom(request) {
        const data = query_1.QuerySellOrdersByBatchDenomRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatchDenom", data);
        return promise.then(data => query_1.QuerySellOrdersByBatchDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrdersByAddress(request) {
        const data = query_1.QuerySellOrdersByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByAddress", data);
        return promise.then(data => query_1.QuerySellOrdersByAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowedDenoms(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllowedDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
        return promise.then(data => query_1.QueryAllowedDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        sellOrder(request) {
            return queryService.sellOrder(request);
        },
        sellOrders(request) {
            return queryService.sellOrders(request);
        },
        sellOrdersByBatchDenom(request) {
            return queryService.sellOrdersByBatchDenom(request);
        },
        sellOrdersByAddress(request) {
            return queryService.sellOrdersByAddress(request);
        },
        allowedDenoms(request) {
            return queryService.allowedDenoms(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
