"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditTypeProposal = exports.OriginTx = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const state_1 = require("./state");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        creditClassFee: [],
        basketFee: [],
        allowedClassCreators: [],
        allowlistEnabled: false
    };
}
exports.Params = {
    typeUrl: "/regen.ecocredit.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.creditClassFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.basketFee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.allowedClassCreators) {
            writer.uint32(26).string(v);
        }
        if (message.allowlistEnabled === true) {
            writer.uint32(32).bool(message.allowlistEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditClassFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.basketFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.allowedClassCreators.push(reader.string());
                    break;
                case 4:
                    message.allowlistEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.creditClassFee = object.creditClassFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.basketFee = object.basketFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
        message.allowlistEnabled = object.allowlistEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.creditClassFee = object.credit_class_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.basketFee = object.basket_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.allowedClassCreators = object.allowed_class_creators?.map(e => e) || [];
        if (object.allowlist_enabled !== undefined && object.allowlist_enabled !== null) {
            message.allowlistEnabled = object.allowlist_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditClassFee) {
            obj.credit_class_fee = message.creditClassFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.credit_class_fee = message.creditClassFee;
        }
        if (message.basketFee) {
            obj.basket_fee = message.basketFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.basket_fee = message.basketFee;
        }
        if (message.allowedClassCreators) {
            obj.allowed_class_creators = message.allowedClassCreators.map(e => e);
        }
        else {
            obj.allowed_class_creators = message.allowedClassCreators;
        }
        obj.allowlist_enabled = message.allowlistEnabled === false ? undefined : message.allowlistEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseOriginTx() {
    return {
        typ: "",
        id: ""
    };
}
exports.OriginTx = {
    typeUrl: "/regen.ecocredit.v1.OriginTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.typ !== "") {
            writer.uint32(10).string(message.typ);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOriginTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typ = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOriginTx();
        message.typ = object.typ ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOriginTx();
        if (object.typ !== undefined && object.typ !== null) {
            message.typ = object.typ;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.typ = message.typ === "" ? undefined : message.typ;
        obj.id = message.id === "" ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OriginTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OriginTx.decode(message.value);
    },
    toProto(message) {
        return exports.OriginTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.OriginTx",
            value: exports.OriginTx.encode(message).finish()
        };
    }
};
function createBaseCreditTypeProposal() {
    return {
        title: "",
        description: "",
        creditType: undefined
    };
}
exports.CreditTypeProposal = {
    typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.creditType !== undefined) {
            state_1.CreditType.encode(message.creditType, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreditTypeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.creditType = state_1.CreditType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreditTypeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.creditType = object.creditType !== undefined && object.creditType !== null ? state_1.CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditTypeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = state_1.CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.credit_type = message.creditType ? state_1.CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreditTypeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreditTypeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CreditTypeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
            value: exports.CreditTypeProposal.encode(message).finish()
        };
    }
};
