//@ts-nocheck
import { DateCriteria, BasketCredit } from "./types";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseMsgCreate() {
    return {
        curator: "",
        name: "",
        description: "",
        exponent: 0,
        disableAutoRetire: false,
        creditTypeAbbrev: "",
        allowedClasses: [],
        dateCriteria: undefined,
        fee: []
    };
}
export const MsgCreate = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.curator !== "") {
            writer.uint32(10).string(message.curator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.exponent !== 0) {
            writer.uint32(32).uint32(message.exponent);
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(40).bool(message.disableAutoRetire);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(50).string(message.creditTypeAbbrev);
        }
        for (const v of message.allowedClasses) {
            writer.uint32(58).string(v);
        }
        if (message.dateCriteria !== undefined) {
            DateCriteria.encode(message.dateCriteria, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.fee) {
            Coin.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.curator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.exponent = reader.uint32();
                    break;
                case 5:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 6:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 7:
                    message.allowedClasses.push(reader.string());
                    break;
                case 8:
                    message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.fee.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreate();
        message.curator = object.curator ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.exponent = object.exponent ?? 0;
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.allowedClasses = object.allowedClasses?.map(e => e) || [];
        message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
        message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreate();
        if (object.curator !== undefined && object.curator !== null) {
            message.curator = object.curator;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        message.allowedClasses = object.allowed_classes?.map(e => e) || [];
        if (object.date_criteria !== undefined && object.date_criteria !== null) {
            message.dateCriteria = DateCriteria.fromAmino(object.date_criteria);
        }
        message.fee = object.fee?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.curator = message.curator === "" ? undefined : message.curator;
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        if (message.allowedClasses) {
            obj.allowed_classes = message.allowedClasses.map(e => e);
        }
        else {
            obj.allowed_classes = message.allowedClasses;
        }
        obj.date_criteria = message.dateCriteria ? DateCriteria.toAmino(message.dateCriteria) : undefined;
        if (message.fee) {
            obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.fee = message.fee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreate.decode(message.value);
    },
    toProto(message) {
        return MsgCreate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
            value: MsgCreate.encode(message).finish()
        };
    }
};
function createBaseMsgCreateResponse() {
    return {
        basketDenom: ""
    };
}
export const MsgCreateResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResponse();
        message.basketDenom = object.basketDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateResponse();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse",
            value: MsgCreateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPut() {
    return {
        owner: "",
        basketDenom: "",
        credits: []
    };
}
export const MsgPut = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        for (const v of message.credits) {
            BasketCredit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPut();
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
                    message.credits.push(BasketCredit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPut();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPut();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPut.decode(message.value);
    },
    toProto(message) {
        return MsgPut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
            value: MsgPut.encode(message).finish()
        };
    }
};
function createBaseMsgPutResponse() {
    return {
        amountReceived: ""
    };
}
export const MsgPutResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amountReceived !== "") {
            writer.uint32(10).string(message.amountReceived);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amountReceived = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPutResponse();
        message.amountReceived = object.amountReceived ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPutResponse();
        if (object.amount_received !== undefined && object.amount_received !== null) {
            message.amountReceived = object.amount_received;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount_received = message.amountReceived === "" ? undefined : message.amountReceived;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPutResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse",
            value: MsgPutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTake() {
    return {
        owner: "",
        basketDenom: "",
        amount: "",
        retirementJurisdiction: "",
        retireOnTake: false
    };
}
export const MsgTake = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(34).string(message.retirementJurisdiction);
        }
        if (message.retireOnTake === true) {
            writer.uint32(40).bool(message.retireOnTake);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTake();
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
                    message.amount = reader.string();
                    break;
                case 4:
                    message.retirementJurisdiction = reader.string();
                    break;
                case 5:
                    message.retireOnTake = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTake();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.amount = object.amount ?? "";
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        message.retireOnTake = object.retireOnTake ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTake();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        if (object.retire_on_take !== undefined && object.retire_on_take !== null) {
            message.retireOnTake = object.retire_on_take;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        obj.retire_on_take = message.retireOnTake === false ? undefined : message.retireOnTake;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTake.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTake.decode(message.value);
    },
    toProto(message) {
        return MsgTake.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
            value: MsgTake.encode(message).finish()
        };
    }
};
function createBaseMsgTakeResponse() {
    return {
        credits: []
    };
}
export const MsgTakeResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.credits) {
            BasketCredit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTakeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credits.push(BasketCredit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTakeResponse();
        message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTakeResponse();
        message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTakeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTakeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTakeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse",
            value: MsgTakeResponse.encode(message).finish()
        };
    }
};
