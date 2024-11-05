"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTotalClaimableResponse = exports.QueryTotalClaimableRequest = exports.QueryClaimableForActionResponse = exports.QueryClaimableForActionRequest = exports.QueryClaimRecordResponse = exports.QueryClaimRecordRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryModuleAccountBalanceResponse = exports.QueryModuleAccountBalanceRequest = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const claim_record_1 = require("./claim_record");
const binary_1 = require("../../../binary");
function createBaseQueryModuleAccountBalanceRequest() {
    return {};
}
exports.QueryModuleAccountBalanceRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryModuleAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest",
            value: exports.QueryModuleAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountBalanceResponse() {
    return {
        moduleAccountBalance: []
    };
}
exports.QueryModuleAccountBalanceResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.moduleAccountBalance) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.module_account_balance?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.module_account_balance = message.moduleAccountBalance.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.module_account_balance = message.moduleAccountBalance;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse",
            value: exports.QueryModuleAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordRequest() {
    return {
        address: ""
    };
}
exports.QueryClaimRecordRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryClaimRecordRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordRequest",
            value: exports.QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: claim_record_1.ClaimRecord.fromPartial({})
    };
}
exports.QueryClaimRecordResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.claimRecord !== undefined) {
            claim_record_1.ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = claim_record_1.ClaimRecord.decode(reader, reader.uint32());
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
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? claim_record_1.ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimRecordResponse();
        if (object.claim_record !== undefined && object.claim_record !== null) {
            message.claimRecord = claim_record_1.ClaimRecord.fromAmino(object.claim_record);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? claim_record_1.ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordResponse",
            value: exports.QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionRequest() {
    return {
        address: "",
        action: ""
    };
}
exports.QueryClaimableForActionRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.action !== "") {
            writer.uint32(18).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryClaimableForActionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimableForActionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimableForActionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest",
            value: exports.QueryClaimableForActionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryClaimableForActionResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimableForActionResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimableForActionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimableForActionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimableForActionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse",
            value: exports.QueryClaimableForActionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableRequest() {
    return {
        address: ""
    };
}
exports.QueryTotalClaimableRequest = {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryTotalClaimableRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalClaimableRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalClaimableRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest",
            value: exports.QueryTotalClaimableRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableResponse() {
    return {
        coins: []
    };
}
exports.QueryTotalClaimableResponse = {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalClaimableResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalClaimableResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalClaimableResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse",
            value: exports.QueryTotalClaimableResponse.encode(message).finish()
        };
    }
};
