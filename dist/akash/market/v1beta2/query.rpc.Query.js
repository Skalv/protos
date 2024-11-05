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
        this.orders = this.orders.bind(this);
        this.order = this.order.bind(this);
        this.bids = this.bids.bind(this);
        this.bid = this.bid.bind(this);
        this.leases = this.leases.bind(this);
        this.lease = this.lease.bind(this);
    }
    orders(request) {
        const data = query_1.QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
        return promise.then(data => query_1.QueryOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    order(request) {
        const data = query_1.QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
        return promise.then(data => query_1.QueryOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    bids(request) {
        const data = query_1.QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
        return promise.then(data => query_1.QueryBidsResponse.decode(new binary_1.BinaryReader(data)));
    }
    bid(request) {
        const data = query_1.QueryBidRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
        return promise.then(data => query_1.QueryBidResponse.decode(new binary_1.BinaryReader(data)));
    }
    leases(request) {
        const data = query_1.QueryLeasesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
        return promise.then(data => query_1.QueryLeasesResponse.decode(new binary_1.BinaryReader(data)));
    }
    lease(request) {
        const data = query_1.QueryLeaseRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
        return promise.then(data => query_1.QueryLeaseResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        orders(request) {
            return queryService.orders(request);
        },
        order(request) {
            return queryService.order(request);
        },
        bids(request) {
            return queryService.bids(request);
        },
        bid(request) {
            return queryService.bid(request);
        },
        leases(request) {
            return queryService.leases(request);
        },
        lease(request) {
            return queryService.lease(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
