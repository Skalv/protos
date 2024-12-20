"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractAuthzFilterX_ToAmino = exports.ContractAuthzFilterX_FromAmino = exports.ContractAuthzFilterX_InterfaceDecoder = exports.ContractAuthzLimitX_ToAmino = exports.ContractAuthzLimitX_FromAmino = exports.ContractAuthzLimitX_InterfaceDecoder = exports.AcceptedMessagesFilter = exports.AcceptedMessageKeysFilter = exports.AllowAllMessagesFilter = exports.CombinedLimit = exports.MaxFundsLimit = exports.MaxCallsLimit = exports.ContractGrant = exports.ContractMigrationAuthorization = exports.ContractExecutionAuthorization = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const encoding_1 = require("@cosmjs/encoding");
function createBaseContractExecutionAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        grants: []
    };
}
exports.ContractExecutionAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractExecutionAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractExecutionAuthorization();
        message.grants = object.grants?.map(e => exports.ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractExecutionAuthorization();
        message.grants = object.grants?.map(e => exports.ContractGrant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? exports.ContractGrant.toAmino(e) : undefined);
        }
        else {
            obj.grants = message.grants;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractExecutionAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractExecutionAuthorization",
            value: exports.ContractExecutionAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractExecutionAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.ContractExecutionAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
            value: exports.ContractExecutionAuthorization.encode(message).finish()
        };
    }
};
function createBaseContractMigrationAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        grants: []
    };
}
exports.ContractMigrationAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractMigrationAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractMigrationAuthorization();
        message.grants = object.grants?.map(e => exports.ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractMigrationAuthorization();
        message.grants = object.grants?.map(e => exports.ContractGrant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? exports.ContractGrant.toAmino(e) : undefined);
        }
        else {
            obj.grants = message.grants;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractMigrationAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractMigrationAuthorization",
            value: exports.ContractMigrationAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractMigrationAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.ContractMigrationAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
            value: exports.ContractMigrationAuthorization.encode(message).finish()
        };
    }
};
function createBaseContractGrant() {
    return {
        contract: "",
        limit: undefined,
        filter: undefined
    };
}
exports.ContractGrant = {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            any_1.Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            any_1.Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.limit = (0, exports.ContractAuthzLimitX_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.filter = (0, exports.ContractAuthzFilterX_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractGrant();
        message.contract = object.contract ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? any_1.Any.fromPartial(object.limit) : undefined;
        message.filter = object.filter !== undefined && object.filter !== null ? any_1.Any.fromPartial(object.filter) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractGrant();
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = (0, exports.ContractAuthzLimitX_FromAmino)(object.limit);
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = (0, exports.ContractAuthzFilterX_FromAmino)(object.filter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.limit = message.limit ? (0, exports.ContractAuthzLimitX_ToAmino)(message.limit) : undefined;
        obj.filter = message.filter ? (0, exports.ContractAuthzFilterX_ToAmino)(message.filter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractGrant",
            value: exports.ContractGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractGrant.decode(message.value);
    },
    toProto(message) {
        return exports.ContractGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
            value: exports.ContractGrant.encode(message).finish()
        };
    }
};
function createBaseMaxCallsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        remaining: BigInt(0)
    };
}
exports.MaxCallsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.remaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxCallsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.remaining = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxCallsLimit();
        message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMaxCallsLimit();
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = BigInt(object.remaining);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.remaining = message.remaining !== BigInt(0) ? (message.remaining?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MaxCallsLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MaxCallsLimit",
            value: exports.MaxCallsLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MaxCallsLimit.decode(message.value);
    },
    toProto(message) {
        return exports.MaxCallsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
            value: exports.MaxCallsLimit.encode(message).finish()
        };
    }
};
function createBaseMaxFundsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        amounts: []
    };
}
exports.MaxFundsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxFundsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxFundsLimit();
        message.amounts = object.amounts?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMaxFundsLimit();
        message.amounts = object.amounts?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amounts) {
            obj.amounts = message.amounts.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amounts = message.amounts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MaxFundsLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MaxFundsLimit",
            value: exports.MaxFundsLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MaxFundsLimit.decode(message.value);
    },
    toProto(message) {
        return exports.MaxFundsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
            value: exports.MaxFundsLimit.encode(message).finish()
        };
    }
};
function createBaseCombinedLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        callsRemaining: BigInt(0),
        amounts: []
    };
}
exports.CombinedLimit = {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.callsRemaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCombinedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callsRemaining = reader.uint64();
                    break;
                case 2:
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCombinedLimit();
        message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
        message.amounts = object.amounts?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCombinedLimit();
        if (object.calls_remaining !== undefined && object.calls_remaining !== null) {
            message.callsRemaining = BigInt(object.calls_remaining);
        }
        message.amounts = object.amounts?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calls_remaining = message.callsRemaining !== BigInt(0) ? (message.callsRemaining?.toString)() : undefined;
        if (message.amounts) {
            obj.amounts = message.amounts.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amounts = message.amounts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CombinedLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CombinedLimit",
            value: exports.CombinedLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CombinedLimit.decode(message.value);
    },
    toProto(message) {
        return exports.CombinedLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
            value: exports.CombinedLimit.encode(message).finish()
        };
    }
};
function createBaseAllowAllMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
    };
}
exports.AllowAllMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowAllMessagesFilter();
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
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllowAllMessagesFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AllowAllMessagesFilter",
            value: exports.AllowAllMessagesFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllowAllMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return exports.AllowAllMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
            value: exports.AllowAllMessagesFilter.encode(message).finish()
        };
    }
};
function createBaseAcceptedMessageKeysFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        keys: []
    };
}
exports.AcceptedMessageKeysFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessageKeysFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = message.keys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AcceptedMessageKeysFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AcceptedMessageKeysFilter",
            value: exports.AcceptedMessageKeysFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AcceptedMessageKeysFilter.decode(message.value);
    },
    toProto(message) {
        return exports.AcceptedMessageKeysFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
            value: exports.AcceptedMessageKeysFilter.encode(message).finish()
        };
    }
};
function createBaseAcceptedMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        messages: []
    };
}
exports.AcceptedMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessagesFilter();
        message.messages = object.messages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcceptedMessagesFilter();
        message.messages = object.messages?.map(e => (0, encoding_1.toUtf8)(JSON.stringify(e))) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => JSON.parse((0, encoding_1.fromUtf8)(e)));
        }
        else {
            obj.messages = message.messages;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AcceptedMessagesFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AcceptedMessagesFilter",
            value: exports.AcceptedMessagesFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AcceptedMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return exports.AcceptedMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
            value: exports.AcceptedMessagesFilter.encode(message).finish()
        };
    }
};
const ContractAuthzLimitX_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmwasm.wasm.v1.MaxCallsLimit":
            return exports.MaxCallsLimit.decode(data.value);
        case "/cosmwasm.wasm.v1.MaxFundsLimit":
            return exports.MaxFundsLimit.decode(data.value);
        case "/cosmwasm.wasm.v1.CombinedLimit":
            return exports.CombinedLimit.decode(data.value);
        default:
            return data;
    }
};
exports.ContractAuthzLimitX_InterfaceDecoder = ContractAuthzLimitX_InterfaceDecoder;
const ContractAuthzLimitX_FromAmino = (content) => {
    switch (content.type) {
        case "wasm/MaxCallsLimit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
                value: exports.MaxCallsLimit.encode(exports.MaxCallsLimit.fromPartial(exports.MaxCallsLimit.fromAmino(content.value))).finish()
            });
        case "wasm/MaxFundsLimit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                value: exports.MaxFundsLimit.encode(exports.MaxFundsLimit.fromPartial(exports.MaxFundsLimit.fromAmino(content.value))).finish()
            });
        case "wasm/CombinedLimit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
                value: exports.CombinedLimit.encode(exports.CombinedLimit.fromPartial(exports.CombinedLimit.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.ContractAuthzLimitX_FromAmino = ContractAuthzLimitX_FromAmino;
const ContractAuthzLimitX_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmwasm.wasm.v1.MaxCallsLimit":
            return {
                type: "wasm/MaxCallsLimit",
                value: exports.MaxCallsLimit.toAmino(exports.MaxCallsLimit.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.MaxFundsLimit":
            return {
                type: "wasm/MaxFundsLimit",
                value: exports.MaxFundsLimit.toAmino(exports.MaxFundsLimit.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.CombinedLimit":
            return {
                type: "wasm/CombinedLimit",
                value: exports.CombinedLimit.toAmino(exports.CombinedLimit.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.ContractAuthzLimitX_ToAmino = ContractAuthzLimitX_ToAmino;
const ContractAuthzFilterX_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
            return exports.AllowAllMessagesFilter.decode(data.value);
        case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
            return exports.AcceptedMessageKeysFilter.decode(data.value);
        case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
            return exports.AcceptedMessagesFilter.decode(data.value);
        default:
            return data;
    }
};
exports.ContractAuthzFilterX_InterfaceDecoder = ContractAuthzFilterX_InterfaceDecoder;
const ContractAuthzFilterX_FromAmino = (content) => {
    switch (content.type) {
        case "wasm/AllowAllMessagesFilter":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
                value: exports.AllowAllMessagesFilter.encode(exports.AllowAllMessagesFilter.fromPartial(exports.AllowAllMessagesFilter.fromAmino(content.value))).finish()
            });
        case "wasm/AcceptedMessageKeysFilter":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                value: exports.AcceptedMessageKeysFilter.encode(exports.AcceptedMessageKeysFilter.fromPartial(exports.AcceptedMessageKeysFilter.fromAmino(content.value))).finish()
            });
        case "wasm/AcceptedMessagesFilter":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
                value: exports.AcceptedMessagesFilter.encode(exports.AcceptedMessagesFilter.fromPartial(exports.AcceptedMessagesFilter.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.ContractAuthzFilterX_FromAmino = ContractAuthzFilterX_FromAmino;
const ContractAuthzFilterX_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
            return {
                type: "wasm/AllowAllMessagesFilter",
                value: exports.AllowAllMessagesFilter.toAmino(exports.AllowAllMessagesFilter.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
            return {
                type: "wasm/AcceptedMessageKeysFilter",
                value: exports.AcceptedMessageKeysFilter.toAmino(exports.AcceptedMessageKeysFilter.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
            return {
                type: "wasm/AcceptedMessagesFilter",
                value: exports.AcceptedMessagesFilter.toAmino(exports.AcceptedMessagesFilter.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.ContractAuthzFilterX_ToAmino = ContractAuthzFilterX_ToAmino;
