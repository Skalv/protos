//@ts-nocheck
import { DateCriteria } from "./types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../../helpers";
function createBaseBasket() {
    return {
        id: BigInt(0),
        basketDenom: "",
        name: "",
        disableAutoRetire: false,
        creditTypeAbbrev: "",
        dateCriteria: undefined,
        exponent: 0,
        curator: new Uint8Array()
    };
}
export const Basket = {
    typeUrl: "/regen.ecocredit.basket.v1.Basket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(32).bool(message.disableAutoRetire);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(42).string(message.creditTypeAbbrev);
        }
        if (message.dateCriteria !== undefined) {
            DateCriteria.encode(message.dateCriteria, writer.uint32(50).fork()).ldelim();
        }
        if (message.exponent !== 0) {
            writer.uint32(56).uint32(message.exponent);
        }
        if (message.curator.length !== 0) {
            writer.uint32(66).bytes(message.curator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.basketDenom = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 5:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 6:
                    message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.exponent = reader.uint32();
                    break;
                case 8:
                    message.curator = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasket();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.basketDenom = object.basketDenom ?? "";
        message.name = object.name ?? "";
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
        message.exponent = object.exponent ?? 0;
        message.curator = object.curator ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasket();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.date_criteria !== undefined && object.date_criteria !== null) {
            message.dateCriteria = DateCriteria.fromAmino(object.date_criteria);
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.curator !== undefined && object.curator !== null) {
            message.curator = bytesFromBase64(object.curator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.name = message.name === "" ? undefined : message.name;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.date_criteria = message.dateCriteria ? DateCriteria.toAmino(message.dateCriteria) : undefined;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.curator = message.curator ? base64FromBytes(message.curator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Basket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Basket.decode(message.value);
    },
    toProto(message) {
        return Basket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.Basket",
            value: Basket.encode(message).finish()
        };
    }
};
function createBaseBasketClass() {
    return {
        basketId: BigInt(0),
        classId: ""
    };
}
export const BasketClass = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketClass",
    encode(message, writer = BinaryWriter.create()) {
        if (message.basketId !== BigInt(0)) {
            writer.uint32(8).uint64(message.basketId);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasketClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketId = reader.uint64();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasketClass();
        message.basketId = object.basketId !== undefined && object.basketId !== null ? BigInt(object.basketId.toString()) : BigInt(0);
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasketClass();
        if (object.basket_id !== undefined && object.basket_id !== null) {
            message.basketId = BigInt(object.basket_id);
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_id = message.basketId !== BigInt(0) ? (message.basketId?.toString)() : undefined;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return BasketClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BasketClass.decode(message.value);
    },
    toProto(message) {
        return BasketClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketClass",
            value: BasketClass.encode(message).finish()
        };
    }
};
function createBaseBasketBalance() {
    return {
        basketId: BigInt(0),
        batchDenom: "",
        balance: "",
        batchStartDate: undefined
    };
}
export const BasketBalance = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketBalance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.basketId !== BigInt(0)) {
            writer.uint32(8).uint64(message.basketId);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.balance !== "") {
            writer.uint32(26).string(message.balance);
        }
        if (message.batchStartDate !== undefined) {
            Timestamp.encode(toTimestamp(message.batchStartDate), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasketBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketId = reader.uint64();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.balance = reader.string();
                    break;
                case 4:
                    message.batchStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasketBalance();
        message.basketId = object.basketId !== undefined && object.basketId !== null ? BigInt(object.basketId.toString()) : BigInt(0);
        message.batchDenom = object.batchDenom ?? "";
        message.balance = object.balance ?? "";
        message.batchStartDate = object.batchStartDate ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasketBalance();
        if (object.basket_id !== undefined && object.basket_id !== null) {
            message.basketId = BigInt(object.basket_id);
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        if (object.batch_start_date !== undefined && object.batch_start_date !== null) {
            message.batchStartDate = fromTimestamp(Timestamp.fromAmino(object.batch_start_date));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_id = message.basketId !== BigInt(0) ? (message.basketId?.toString)() : undefined;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.balance = message.balance === "" ? undefined : message.balance;
        obj.batch_start_date = message.batchStartDate ? Timestamp.toAmino(toTimestamp(message.batchStartDate)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BasketBalance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BasketBalance.decode(message.value);
    },
    toProto(message) {
        return BasketBalance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketBalance",
            value: BasketBalance.encode(message).finish()
        };
    }
};
