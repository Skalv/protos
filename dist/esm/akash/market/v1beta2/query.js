//@ts-nocheck
import { OrderFilters, OrderID, Order } from "./order";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "./bid";
import { LeaseFilters, LeaseID, Lease } from "./lease";
import { Account, FractionalPayment } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryOrdersRequest() {
    return {
        filters: OrderFilters.fromPartial({}),
        pagination: undefined
    };
}
export const QueryOrdersRequest = {
    typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filters !== undefined) {
            OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = OrderFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersRequest();
        message.filters = object.filters !== undefined && object.filters !== null ? OrderFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrdersRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = OrderFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? OrderFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
            value: QueryOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrdersResponse() {
    return {
        orders: [],
        pagination: undefined
    };
}
export const QueryOrdersResponse = {
    typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
            value: QueryOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderRequest() {
    return {
        id: OrderID.fromPartial({})
    };
}
export const QueryOrderRequest = {
    typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = OrderID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderRequest();
        message.id = object.id !== undefined && object.id !== null ? OrderID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = OrderID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? OrderID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
            value: QueryOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderResponse() {
    return {
        order: Order.fromPartial({})
    };
}
export const QueryOrderResponse = {
    typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderResponse();
        message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderResponse();
        if (object.order !== undefined && object.order !== null) {
            message.order = Order.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
            value: QueryOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBidsRequest() {
    return {
        filters: BidFilters.fromPartial({}),
        pagination: undefined
    };
}
export const QueryBidsRequest = {
    typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filters !== undefined) {
            BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = BidFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidsRequest();
        message.filters = object.filters !== undefined && object.filters !== null ? BidFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = BidFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? BidFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBidsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
            value: QueryBidsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidsResponse() {
    return {
        bids: [],
        pagination: undefined
    };
}
export const QueryBidsResponse = {
    typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.bids) {
            QueryBidResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidsResponse();
        message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsResponse();
        message.bids = object.bids?.map(e => QueryBidResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.bids) {
            obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e) : undefined);
        }
        else {
            obj.bids = message.bids;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
            value: QueryBidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBidRequest() {
    return {
        id: BidID.fromPartial({})
    };
}
export const QueryBidRequest = {
    typeUrl: "/akash.market.v1beta2.QueryBidRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidRequest();
        message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BidID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? BidID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidRequest",
            value: QueryBidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidResponse() {
    return {
        bid: Bid.fromPartial({}),
        escrowAccount: Account.fromPartial({})
    };
}
export const QueryBidResponse = {
    typeUrl: "/akash.market.v1beta2.QueryBidResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bid !== undefined) {
            Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bid = Bid.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowAccount = Account.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidResponse();
        message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
        message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidResponse();
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = Bid.fromAmino(object.bid);
        }
        if (object.escrow_account !== undefined && object.escrow_account !== null) {
            message.escrowAccount = Account.fromAmino(object.escrow_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
        obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidResponse",
            value: QueryBidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLeasesRequest() {
    return {
        filters: LeaseFilters.fromPartial({}),
        pagination: undefined
    };
}
export const QueryLeasesRequest = {
    typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filters !== undefined) {
            LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = LeaseFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLeasesRequest();
        message.filters = object.filters !== undefined && object.filters !== null ? LeaseFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeasesRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = LeaseFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? LeaseFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLeasesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLeasesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLeasesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
            value: QueryLeasesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLeasesResponse() {
    return {
        leases: [],
        pagination: undefined
    };
}
export const QueryLeasesResponse = {
    typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.leases) {
            QueryLeaseResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLeasesResponse();
        message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeasesResponse();
        message.leases = object.leases?.map(e => QueryLeaseResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.leases) {
            obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e) : undefined);
        }
        else {
            obj.leases = message.leases;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLeasesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLeasesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLeasesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
            value: QueryLeasesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLeaseRequest() {
    return {
        id: LeaseID.fromPartial({})
    };
}
export const QueryLeaseRequest = {
    typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLeaseRequest();
        message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeaseRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = LeaseID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? LeaseID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLeaseRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLeaseRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLeaseRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
            value: QueryLeaseRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLeaseResponse() {
    return {
        lease: Lease.fromPartial({}),
        escrowPayment: FractionalPayment.fromPartial({})
    };
}
export const QueryLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lease !== undefined) {
            Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowPayment !== undefined) {
            FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lease = Lease.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowPayment = FractionalPayment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLeaseResponse();
        message.lease = object.lease !== undefined && object.lease !== null ? Lease.fromPartial(object.lease) : undefined;
        message.escrowPayment = object.escrowPayment !== undefined && object.escrowPayment !== null ? FractionalPayment.fromPartial(object.escrowPayment) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeaseResponse();
        if (object.lease !== undefined && object.lease !== null) {
            message.lease = Lease.fromAmino(object.lease);
        }
        if (object.escrow_payment !== undefined && object.escrow_payment !== null) {
            message.escrowPayment = FractionalPayment.fromAmino(object.escrow_payment);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease = message.lease ? Lease.toAmino(message.lease) : undefined;
        obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
            value: QueryLeaseResponse.encode(message).finish()
        };
    }
};
