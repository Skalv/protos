"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTake = exports.EventPut = exports.EventCreate = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../../binary");
function createBaseEventCreate() {
    return {
        basketDenom: "",
        curator: ""
    };
}
exports.EventCreate = {
    typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        if (message.curator !== "") {
            writer.uint32(18).string(message.curator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                case 2:
                    message.curator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreate();
        message.basketDenom = object.basketDenom ?? "";
        message.curator = object.curator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreate();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.curator !== undefined && object.curator !== null) {
            message.curator = object.curator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.curator = message.curator === "" ? undefined : message.curator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCreate.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
            value: exports.EventCreate.encode(message).finish()
        };
    }
};
function createBaseEventPut() {
    return {
        owner: "",
        basketDenom: "",
        credits: [],
        amount: ""
    };
}
exports.EventPut = {
    typeUrl: "/regen.ecocredit.basket.v1.EventPut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        for (const v of message.credits) {
            types_1.BasketCredit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.basketDenom = reader.string();
                    break;
                case 3:
                    message.credits.push(types_1.BasketCredit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventPut();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.credits = object.credits?.map(e => types_1.BasketCredit.fromPartial(e)) || [];
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPut();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        message.credits = object.credits?.map(e => types_1.BasketCredit.fromAmino(e)) || [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? types_1.BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventPut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventPut.decode(message.value);
    },
    toProto(message) {
        return exports.EventPut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventPut",
            value: exports.EventPut.encode(message).finish()
        };
    }
};
function createBaseEventTake() {
    return {
        owner: "",
        basketDenom: "",
        credits: [],
        amount: ""
    };
}
exports.EventTake = {
    typeUrl: "/regen.ecocredit.basket.v1.EventTake",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        for (const v of message.credits) {
            types_1.BasketCredit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.basketDenom = reader.string();
                    break;
                case 3:
                    message.credits.push(types_1.BasketCredit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventTake();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.credits = object.credits?.map(e => types_1.BasketCredit.fromPartial(e)) || [];
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTake();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        message.credits = object.credits?.map(e => types_1.BasketCredit.fromAmino(e)) || [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? types_1.BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventTake.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventTake.decode(message.value);
    },
    toProto(message) {
        return exports.EventTake.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventTake",
            value: exports.EventTake.encode(message).finish()
        };
    }
};
