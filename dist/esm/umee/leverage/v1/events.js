//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventSupply() {
    return {
        supplier: "",
        asset: Coin.fromPartial({}),
        utoken: Coin.fromPartial({})
    };
}
export const EventSupply = {
    typeUrl: "/umee.leverage.v1.EventSupply",
    encode(message, writer = BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        if (message.utoken !== undefined) {
            Coin.encode(message.utoken, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
                    break;
                case 2:
                    message.asset = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.utoken = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSupply();
        message.supplier = object.supplier ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSupply();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.utoken !== undefined && object.utoken !== null) {
            message.utoken = Coin.fromAmino(object.utoken);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSupply.decode(message.value);
    },
    toProto(message) {
        return EventSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventSupply",
            value: EventSupply.encode(message).finish()
        };
    }
};
function createBaseEventWithdraw() {
    return {
        supplier: "",
        utoken: Coin.fromPartial({}),
        asset: Coin.fromPartial({})
    };
}
export const EventWithdraw = {
    typeUrl: "/umee.leverage.v1.EventWithdraw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.utoken !== undefined) {
            Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
                    break;
                case 2:
                    message.utoken = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.asset = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventWithdraw();
        message.supplier = object.supplier ?? "";
        message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdraw();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.utoken !== undefined && object.utoken !== null) {
            message.utoken = Coin.fromAmino(object.utoken);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventWithdraw.decode(message.value);
    },
    toProto(message) {
        return EventWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventWithdraw",
            value: EventWithdraw.encode(message).finish()
        };
    }
};
function createBaseEventCollaterize() {
    return {
        borrower: "",
        utoken: Coin.fromPartial({})
    };
}
export const EventCollaterize = {
    typeUrl: "/umee.leverage.v1.EventCollaterize",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.utoken !== undefined) {
            Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCollaterize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.utoken = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCollaterize();
        message.borrower = object.borrower ?? "";
        message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCollaterize();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.utoken !== undefined && object.utoken !== null) {
            message.utoken = Coin.fromAmino(object.utoken);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCollaterize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCollaterize.decode(message.value);
    },
    toProto(message) {
        return EventCollaterize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventCollaterize",
            value: EventCollaterize.encode(message).finish()
        };
    }
};
function createBaseEventDecollaterize() {
    return {
        borrower: "",
        utoken: Coin.fromPartial({})
    };
}
export const EventDecollaterize = {
    typeUrl: "/umee.leverage.v1.EventDecollaterize",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.utoken !== undefined) {
            Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDecollaterize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.utoken = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventDecollaterize();
        message.borrower = object.borrower ?? "";
        message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDecollaterize();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.utoken !== undefined && object.utoken !== null) {
            message.utoken = Coin.fromAmino(object.utoken);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventDecollaterize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDecollaterize.decode(message.value);
    },
    toProto(message) {
        return EventDecollaterize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventDecollaterize",
            value: EventDecollaterize.encode(message).finish()
        };
    }
};
function createBaseEventBorrow() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const EventBorrow = {
    typeUrl: "/umee.leverage.v1.EventBorrow",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBorrow();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBorrow();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBorrow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBorrow.decode(message.value);
    },
    toProto(message) {
        return EventBorrow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventBorrow",
            value: EventBorrow.encode(message).finish()
        };
    }
};
function createBaseEventRepay() {
    return {
        borrower: "",
        repaid: Coin.fromPartial({})
    };
}
export const EventRepay = {
    typeUrl: "/umee.leverage.v1.EventRepay",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.repaid !== undefined) {
            Coin.encode(message.repaid, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRepay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.repaid = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRepay();
        message.borrower = object.borrower ?? "";
        message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRepay();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.repaid !== undefined && object.repaid !== null) {
            message.repaid = Coin.fromAmino(object.repaid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRepay.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRepay.decode(message.value);
    },
    toProto(message) {
        return EventRepay.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventRepay",
            value: EventRepay.encode(message).finish()
        };
    }
};
function createBaseEventLiquidate() {
    return {
        liquidator: "",
        borrower: "",
        liquidated: Coin.fromPartial({})
    };
}
export const EventLiquidate = {
    typeUrl: "/umee.leverage.v1.EventLiquidate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.liquidator !== "") {
            writer.uint32(10).string(message.liquidator);
        }
        if (message.borrower !== "") {
            writer.uint32(18).string(message.borrower);
        }
        if (message.liquidated !== undefined) {
            Coin.encode(message.liquidated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLiquidate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidator = reader.string();
                    break;
                case 2:
                    message.borrower = reader.string();
                    break;
                case 3:
                    message.liquidated = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventLiquidate();
        message.liquidator = object.liquidator ?? "";
        message.borrower = object.borrower ?? "";
        message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? Coin.fromPartial(object.liquidated) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventLiquidate();
        if (object.liquidator !== undefined && object.liquidator !== null) {
            message.liquidator = object.liquidator;
        }
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.liquidated !== undefined && object.liquidated !== null) {
            message.liquidated = Coin.fromAmino(object.liquidated);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.liquidator = message.liquidator === "" ? undefined : message.liquidator;
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.liquidated = message.liquidated ? Coin.toAmino(message.liquidated) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventLiquidate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventLiquidate.decode(message.value);
    },
    toProto(message) {
        return EventLiquidate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventLiquidate",
            value: EventLiquidate.encode(message).finish()
        };
    }
};
function createBaseEventInterestAccrual() {
    return {
        blockHeight: BigInt(0),
        timestamp: BigInt(0),
        totalInterest: [],
        reserved: []
    };
}
export const EventInterestAccrual = {
    typeUrl: "/umee.leverage.v1.EventInterestAccrual",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        for (const v of message.totalInterest) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reserved) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInterestAccrual();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.totalInterest.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.reserved.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventInterestAccrual();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.totalInterest = object.totalInterest?.map(e => Coin.fromPartial(e)) || [];
        message.reserved = object.reserved?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventInterestAccrual();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        message.totalInterest = object.total_interest?.map(e => Coin.fromAmino(e)) || [];
        message.reserved = object.reserved?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        if (message.totalInterest) {
            obj.total_interest = message.totalInterest.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_interest = message.totalInterest;
        }
        if (message.reserved) {
            obj.reserved = message.reserved.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.reserved = message.reserved;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventInterestAccrual.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventInterestAccrual.decode(message.value);
    },
    toProto(message) {
        return EventInterestAccrual.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventInterestAccrual",
            value: EventInterestAccrual.encode(message).finish()
        };
    }
};
function createBaseEventRepayBadDebt() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const EventRepayBadDebt = {
    typeUrl: "/umee.leverage.v1.EventRepayBadDebt",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRepayBadDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRepayBadDebt();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRepayBadDebt();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRepayBadDebt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRepayBadDebt.decode(message.value);
    },
    toProto(message) {
        return EventRepayBadDebt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventRepayBadDebt",
            value: EventRepayBadDebt.encode(message).finish()
        };
    }
};
function createBaseEventReservesExhausted() {
    return {
        borrower: "",
        outstandingDebt: Coin.fromPartial({})
    };
}
export const EventReservesExhausted = {
    typeUrl: "/umee.leverage.v1.EventReservesExhausted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.outstandingDebt !== undefined) {
            Coin.encode(message.outstandingDebt, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventReservesExhausted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.outstandingDebt = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventReservesExhausted();
        message.borrower = object.borrower ?? "";
        message.outstandingDebt = object.outstandingDebt !== undefined && object.outstandingDebt !== null ? Coin.fromPartial(object.outstandingDebt) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventReservesExhausted();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.outstanding_debt !== undefined && object.outstanding_debt !== null) {
            message.outstandingDebt = Coin.fromAmino(object.outstanding_debt);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.outstanding_debt = message.outstandingDebt ? Coin.toAmino(message.outstandingDebt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventReservesExhausted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventReservesExhausted.decode(message.value);
    },
    toProto(message) {
        return EventReservesExhausted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventReservesExhausted",
            value: EventReservesExhausted.encode(message).finish()
        };
    }
};
function createBaseEventFundOracle() {
    return {
        assets: []
    };
}
export const EventFundOracle = {
    typeUrl: "/umee.leverage.v1.EventFundOracle",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFundOracle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventFundOracle();
        message.assets = object.assets?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFundOracle();
        message.assets = object.assets?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventFundOracle.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventFundOracle.decode(message.value);
    },
    toProto(message) {
        return EventFundOracle.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.EventFundOracle",
            value: EventFundOracle.encode(message).finish()
        };
    }
};
