import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
        return promise.then(data => QueryOrdersResponse.decode(new BinaryReader(data)));
    }
    order(request) {
        const data = QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
        return promise.then(data => QueryOrderResponse.decode(new BinaryReader(data)));
    }
    bids(request) {
        const data = QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
        return promise.then(data => QueryBidsResponse.decode(new BinaryReader(data)));
    }
    bid(request) {
        const data = QueryBidRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
        return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
    }
    leases(request) {
        const data = QueryLeasesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
        return promise.then(data => QueryLeasesResponse.decode(new BinaryReader(data)));
    }
    lease(request) {
        const data = QueryLeaseRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
        return promise.then(data => QueryLeaseResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
