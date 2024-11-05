import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySellOrderRequest, QuerySellOrderResponse, QuerySellOrdersRequest, QuerySellOrdersResponse, QuerySellOrdersByBatchDenomRequest, QuerySellOrdersByBatchDenomResponse, QuerySellOrdersByAddressRequest, QuerySellOrdersByAddressResponse, QueryAllowedDenomsRequest, QueryAllowedDenomsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QuerySellOrderRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
        return promise.then(data => QuerySellOrderResponse.decode(new BinaryReader(data)));
    }
    sellOrders(request = {
        pagination: undefined
    }) {
        const data = QuerySellOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
        return promise.then(data => QuerySellOrdersResponse.decode(new BinaryReader(data)));
    }
    sellOrdersByBatchDenom(request) {
        const data = QuerySellOrdersByBatchDenomRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatchDenom", data);
        return promise.then(data => QuerySellOrdersByBatchDenomResponse.decode(new BinaryReader(data)));
    }
    sellOrdersByAddress(request) {
        const data = QuerySellOrdersByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByAddress", data);
        return promise.then(data => QuerySellOrdersByAddressResponse.decode(new BinaryReader(data)));
    }
    allowedDenoms(request = {
        pagination: undefined
    }) {
        const data = QueryAllowedDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
        return promise.then(data => QueryAllowedDenomsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
