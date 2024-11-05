//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, Payment } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryAccountsRequest() {
    return {
        scope: "",
        xid: "",
        owner: "",
        state: "",
        pagination: undefined
    };
}
export const QueryAccountsRequest = {
    typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(34).string(message.state);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.state = reader.string();
                    break;
                case 5:
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
        const message = createBaseQueryAccountsRequest();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsRequest();
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = object.scope;
        }
        if (object.xid !== undefined && object.xid !== null) {
            message.xid = object.xid;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.scope = message.scope === "" ? undefined : message.scope;
        obj.xid = message.xid === "" ? undefined : message.xid;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.state = message.state === "" ? undefined : message.state;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
            value: QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
export const QueryAccountsResponse = {
    typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(Account.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
            value: QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPaymentsRequest() {
    return {
        scope: "",
        xid: "",
        id: "",
        owner: "",
        state: "",
        pagination: undefined
    };
}
export const QueryPaymentsRequest = {
    typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
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
        const message = createBaseQueryPaymentsRequest();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPaymentsRequest();
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = object.scope;
        }
        if (object.xid !== undefined && object.xid !== null) {
            message.xid = object.xid;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.scope = message.scope === "" ? undefined : message.scope;
        obj.xid = message.xid === "" ? undefined : message.xid;
        obj.id = message.id === "" ? undefined : message.id;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.state = message.state === "" ? undefined : message.state;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPaymentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPaymentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPaymentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
            value: QueryPaymentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPaymentsResponse() {
    return {
        payments: [],
        pagination: undefined
    };
}
export const QueryPaymentsResponse = {
    typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.payments) {
            Payment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payments.push(Payment.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPaymentsResponse();
        message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPaymentsResponse();
        message.payments = object.payments?.map(e => Payment.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.payments) {
            obj.payments = message.payments.map(e => e ? Payment.toAmino(e) : undefined);
        }
        else {
            obj.payments = message.payments;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPaymentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPaymentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPaymentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
            value: QueryPaymentsResponse.encode(message).finish()
        };
    }
};
