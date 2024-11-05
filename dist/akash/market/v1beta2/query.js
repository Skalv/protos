"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLeaseResponse = exports.QueryLeaseRequest = exports.QueryLeasesResponse = exports.QueryLeasesRequest = exports.QueryBidResponse = exports.QueryBidRequest = exports.QueryBidsResponse = exports.QueryBidsRequest = exports.QueryOrderResponse = exports.QueryOrderRequest = exports.QueryOrdersResponse = exports.QueryOrdersRequest = void 0;
//@ts-nocheck
const order_1 = require("./order");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const bid_1 = require("./bid");
const lease_1 = require("./lease");
const types_1 = require("../../escrow/v1beta2/types");
const binary_1 = require("../../../binary");
function createBaseQueryOrdersRequest() {
    return {
        filters: order_1.OrderFilters.fromPartial({}),
        pagination: undefined
    };
}
exports.QueryOrdersRequest = {
    typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filters !== undefined) {
            order_1.OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = order_1.OrderFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.filters = object.filters !== undefined && object.filters !== null ? order_1.OrderFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrdersRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = order_1.OrderFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? order_1.OrderFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
            value: exports.QueryOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrdersResponse() {
    return {
        orders: [],
        pagination: undefined
    };
}
exports.QueryOrdersResponse = {
    typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.orders = object.orders?.map(e => order_1.Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map(e => order_1.Order.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? order_1.Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
            value: exports.QueryOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderRequest() {
    return {
        id: order_1.OrderID.fromPartial({})
    };
}
exports.QueryOrderRequest = {
    typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            order_1.OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = order_1.OrderID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? order_1.OrderID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = order_1.OrderID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? order_1.OrderID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
            value: exports.QueryOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderResponse() {
    return {
        order: order_1.Order.fromPartial({})
    };
}
exports.QueryOrderResponse = {
    typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? order_1.Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderResponse();
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.Order.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? order_1.Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
            value: exports.QueryOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBidsRequest() {
    return {
        filters: bid_1.BidFilters.fromPartial({}),
        pagination: undefined
    };
}
exports.QueryBidsRequest = {
    typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filters !== undefined) {
            bid_1.BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = bid_1.BidFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.filters = object.filters !== undefined && object.filters !== null ? bid_1.BidFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = bid_1.BidFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? bid_1.BidFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBidsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBidsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBidsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
            value: exports.QueryBidsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidsResponse() {
    return {
        bids: [],
        pagination: undefined
    };
}
exports.QueryBidsResponse = {
    typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.bids) {
            exports.QueryBidResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids.push(exports.QueryBidResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.bids = object.bids?.map(e => exports.QueryBidResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsResponse();
        message.bids = object.bids?.map(e => exports.QueryBidResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.bids) {
            obj.bids = message.bids.map(e => e ? exports.QueryBidResponse.toAmino(e) : undefined);
        }
        else {
            obj.bids = message.bids;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBidsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
            value: exports.QueryBidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBidRequest() {
    return {
        id: bid_1.BidID.fromPartial({})
    };
}
exports.QueryBidRequest = {
    typeUrl: "/akash.market.v1beta2.QueryBidRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            bid_1.BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = bid_1.BidID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? bid_1.BidID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = bid_1.BidID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? bid_1.BidID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBidRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidRequest",
            value: exports.QueryBidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidResponse() {
    return {
        bid: bid_1.Bid.fromPartial({}),
        escrowAccount: types_1.Account.fromPartial({})
    };
}
exports.QueryBidResponse = {
    typeUrl: "/akash.market.v1beta2.QueryBidResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bid !== undefined) {
            bid_1.Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bid = bid_1.Bid.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowAccount = types_1.Account.decode(reader, reader.uint32());
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
        message.bid = object.bid !== undefined && object.bid !== null ? bid_1.Bid.fromPartial(object.bid) : undefined;
        message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? types_1.Account.fromPartial(object.escrowAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidResponse();
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = bid_1.Bid.fromAmino(object.bid);
        }
        if (object.escrow_account !== undefined && object.escrow_account !== null) {
            message.escrowAccount = types_1.Account.fromAmino(object.escrow_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid = message.bid ? bid_1.Bid.toAmino(message.bid) : undefined;
        obj.escrow_account = message.escrowAccount ? types_1.Account.toAmino(message.escrowAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBidResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryBidResponse",
            value: exports.QueryBidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLeasesRequest() {
    return {
        filters: lease_1.LeaseFilters.fromPartial({}),
        pagination: undefined
    };
}
exports.QueryLeasesRequest = {
    typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filters !== undefined) {
            lease_1.LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = lease_1.LeaseFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.filters = object.filters !== undefined && object.filters !== null ? lease_1.LeaseFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeasesRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = lease_1.LeaseFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? lease_1.LeaseFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLeasesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLeasesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLeasesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
            value: exports.QueryLeasesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLeasesResponse() {
    return {
        leases: [],
        pagination: undefined
    };
}
exports.QueryLeasesResponse = {
    typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.leases) {
            exports.QueryLeaseResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leases.push(exports.QueryLeaseResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.leases = object.leases?.map(e => exports.QueryLeaseResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeasesResponse();
        message.leases = object.leases?.map(e => exports.QueryLeaseResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.leases) {
            obj.leases = message.leases.map(e => e ? exports.QueryLeaseResponse.toAmino(e) : undefined);
        }
        else {
            obj.leases = message.leases;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLeasesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLeasesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLeasesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
            value: exports.QueryLeasesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLeaseRequest() {
    return {
        id: lease_1.LeaseID.fromPartial({})
    };
}
exports.QueryLeaseRequest = {
    typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            lease_1.LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = lease_1.LeaseID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? lease_1.LeaseID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeaseRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = lease_1.LeaseID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? lease_1.LeaseID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLeaseRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLeaseRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLeaseRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
            value: exports.QueryLeaseRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLeaseResponse() {
    return {
        lease: lease_1.Lease.fromPartial({}),
        escrowPayment: types_1.FractionalPayment.fromPartial({})
    };
}
exports.QueryLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lease !== undefined) {
            lease_1.Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowPayment !== undefined) {
            types_1.FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lease = lease_1.Lease.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowPayment = types_1.FractionalPayment.decode(reader, reader.uint32());
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
        message.lease = object.lease !== undefined && object.lease !== null ? lease_1.Lease.fromPartial(object.lease) : undefined;
        message.escrowPayment = object.escrowPayment !== undefined && object.escrowPayment !== null ? types_1.FractionalPayment.fromPartial(object.escrowPayment) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLeaseResponse();
        if (object.lease !== undefined && object.lease !== null) {
            message.lease = lease_1.Lease.fromAmino(object.lease);
        }
        if (object.escrow_payment !== undefined && object.escrow_payment !== null) {
            message.escrowPayment = types_1.FractionalPayment.fromAmino(object.escrow_payment);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease = message.lease ? lease_1.Lease.toAmino(message.lease) : undefined;
        obj.escrow_payment = message.escrowPayment ? types_1.FractionalPayment.toAmino(message.escrowPayment) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
            value: exports.QueryLeaseResponse.encode(message).finish()
        };
    }
};
