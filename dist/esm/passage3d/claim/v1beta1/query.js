//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryModuleAccountBalanceRequest() {
    return {};
}
export const QueryModuleAccountBalanceRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryModuleAccountBalanceRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleAccountBalanceRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest",
            value: QueryModuleAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountBalanceResponse() {
    return {
        moduleAccountBalance: []
    };
}
export const QueryModuleAccountBalanceResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.moduleAccountBalance) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.module_account_balance?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.module_account_balance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.module_account_balance = message.moduleAccountBalance;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse",
            value: QueryModuleAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordRequest() {
    return {
        address: ""
    };
}
export const QueryClaimRecordRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimRecordRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordRequest",
            value: QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: ClaimRecord.fromPartial({})
    };
}
export const QueryClaimRecordResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.claimRecord !== undefined) {
            ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimRecordResponse();
        if (object.claim_record !== undefined && object.claim_record !== null) {
            message.claimRecord = ClaimRecord.fromAmino(object.claim_record);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordResponse",
            value: QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionRequest() {
    return {
        address: "",
        action: ""
    };
}
export const QueryClaimableForActionRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.action !== "") {
            writer.uint32(18).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionRequest();
        message.address = object.address ?? "";
        message.action = object.action ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimableForActionRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.action = message.action === "" ? undefined : message.action;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimableForActionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimableForActionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimableForActionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest",
            value: QueryClaimableForActionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const QueryClaimableForActionResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimableForActionResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimableForActionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimableForActionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimableForActionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse",
            value: QueryClaimableForActionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableRequest() {
    return {
        address: ""
    };
}
export const QueryTotalClaimableRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalClaimableRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalClaimableRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalClaimableRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTotalClaimableRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalClaimableRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest",
            value: QueryTotalClaimableRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableResponse() {
    return {
        coins: []
    };
}
export const QueryTotalClaimableResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalClaimableResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTotalClaimableResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalClaimableResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse",
            value: QueryTotalClaimableResponse.encode(message).finish()
        };
    }
};
