//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSupply() {
    return {
        supplier: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgSupply = {
    typeUrl: "/umee.leverage.v1.MsgSupply",
    encode(message, writer = BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
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
        const message = createBaseMsgSupply();
        message.supplier = object.supplier ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSupply();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSupply.decode(message.value);
    },
    toProto(message) {
        return MsgSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgSupply",
            value: MsgSupply.encode(message).finish()
        };
    }
};
function createBaseMsgWithdraw() {
    return {
        supplier: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgWithdraw = {
    typeUrl: "/umee.leverage.v1.MsgWithdraw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
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
        const message = createBaseMsgWithdraw();
        message.supplier = object.supplier ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdraw();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdraw.decode(message.value);
    },
    toProto(message) {
        return MsgWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgWithdraw",
            value: MsgWithdraw.encode(message).finish()
        };
    }
};
function createBaseMsgCollateralize() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgCollateralize = {
    typeUrl: "/umee.leverage.v1.MsgCollateralize",
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
        const message = createBaseMsgCollateralize();
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
        const message = createBaseMsgCollateralize();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollateralize();
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
        return MsgCollateralize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCollateralize.decode(message.value);
    },
    toProto(message) {
        return MsgCollateralize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgCollateralize",
            value: MsgCollateralize.encode(message).finish()
        };
    }
};
function createBaseMsgDecollateralize() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgDecollateralize = {
    typeUrl: "/umee.leverage.v1.MsgDecollateralize",
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
        const message = createBaseMsgDecollateralize();
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
        const message = createBaseMsgDecollateralize();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDecollateralize();
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
        return MsgDecollateralize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDecollateralize.decode(message.value);
    },
    toProto(message) {
        return MsgDecollateralize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgDecollateralize",
            value: MsgDecollateralize.encode(message).finish()
        };
    }
};
function createBaseMsgBorrow() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgBorrow = {
    typeUrl: "/umee.leverage.v1.MsgBorrow",
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
        const message = createBaseMsgBorrow();
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
        const message = createBaseMsgBorrow();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBorrow();
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
        return MsgBorrow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBorrow.decode(message.value);
    },
    toProto(message) {
        return MsgBorrow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgBorrow",
            value: MsgBorrow.encode(message).finish()
        };
    }
};
function createBaseMsgRepay() {
    return {
        borrower: "",
        asset: Coin.fromPartial({})
    };
}
export const MsgRepay = {
    typeUrl: "/umee.leverage.v1.MsgRepay",
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
        const message = createBaseMsgRepay();
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
        const message = createBaseMsgRepay();
        message.borrower = object.borrower ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRepay();
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
        return MsgRepay.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRepay.decode(message.value);
    },
    toProto(message) {
        return MsgRepay.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgRepay",
            value: MsgRepay.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidate() {
    return {
        liquidator: "",
        borrower: "",
        repayment: Coin.fromPartial({}),
        rewardDenom: ""
    };
}
export const MsgLiquidate = {
    typeUrl: "/umee.leverage.v1.MsgLiquidate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.liquidator !== "") {
            writer.uint32(10).string(message.liquidator);
        }
        if (message.borrower !== "") {
            writer.uint32(18).string(message.borrower);
        }
        if (message.repayment !== undefined) {
            Coin.encode(message.repayment, writer.uint32(26).fork()).ldelim();
        }
        if (message.rewardDenom !== "") {
            writer.uint32(34).string(message.rewardDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidate();
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
                    message.repayment = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.rewardDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLiquidate();
        message.liquidator = object.liquidator ?? "";
        message.borrower = object.borrower ?? "";
        message.repayment = object.repayment !== undefined && object.repayment !== null ? Coin.fromPartial(object.repayment) : undefined;
        message.rewardDenom = object.rewardDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLiquidate();
        if (object.liquidator !== undefined && object.liquidator !== null) {
            message.liquidator = object.liquidator;
        }
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.repayment !== undefined && object.repayment !== null) {
            message.repayment = Coin.fromAmino(object.repayment);
        }
        if (object.reward_denom !== undefined && object.reward_denom !== null) {
            message.rewardDenom = object.reward_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.liquidator = message.liquidator === "" ? undefined : message.liquidator;
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.repayment = message.repayment ? Coin.toAmino(message.repayment) : undefined;
        obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLiquidate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLiquidate.decode(message.value);
    },
    toProto(message) {
        return MsgLiquidate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgLiquidate",
            value: MsgLiquidate.encode(message).finish()
        };
    }
};
function createBaseMsgSupplyResponse() {
    return {
        received: Coin.fromPartial({})
    };
}
export const MsgSupplyResponse = {
    typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.received !== undefined) {
            Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.received = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSupplyResponse();
        message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSupplyResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = Coin.fromAmino(object.received);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received ? Coin.toAmino(message.received) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
            value: MsgSupplyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawResponse() {
    return {
        received: Coin.fromPartial({})
    };
}
export const MsgWithdrawResponse = {
    typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.received !== undefined) {
            Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.received = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawResponse();
        message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = Coin.fromAmino(object.received);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received ? Coin.toAmino(message.received) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
            value: MsgWithdrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCollateralizeResponse() {
    return {};
}
export const MsgCollateralizeResponse = {
    typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollateralizeResponse();
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
        const message = createBaseMsgCollateralizeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCollateralizeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCollateralizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCollateralizeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCollateralizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
            value: MsgCollateralizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDecollateralizeResponse() {
    return {};
}
export const MsgDecollateralizeResponse = {
    typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDecollateralizeResponse();
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
        const message = createBaseMsgDecollateralizeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDecollateralizeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDecollateralizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDecollateralizeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDecollateralizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
            value: MsgDecollateralizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBorrowResponse() {
    return {};
}
export const MsgBorrowResponse = {
    typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrowResponse();
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
        const message = createBaseMsgBorrowResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBorrowResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBorrowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBorrowResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBorrowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
            value: MsgBorrowResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRepayResponse() {
    return {
        repaid: Coin.fromPartial({})
    };
}
export const MsgRepayResponse = {
    typeUrl: "/umee.leverage.v1.MsgRepayResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.repaid !== undefined) {
            Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgRepayResponse();
        message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRepayResponse();
        if (object.repaid !== undefined && object.repaid !== null) {
            message.repaid = Coin.fromAmino(object.repaid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRepayResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRepayResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRepayResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgRepayResponse",
            value: MsgRepayResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidateResponse() {
    return {
        repaid: Coin.fromPartial({}),
        collateral: Coin.fromPartial({}),
        reward: Coin.fromPartial({})
    };
}
export const MsgLiquidateResponse = {
    typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.repaid !== undefined) {
            Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
        }
        if (message.collateral !== undefined) {
            Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
        }
        if (message.reward !== undefined) {
            Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repaid = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collateral = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reward = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLiquidateResponse();
        message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
        message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
        message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLiquidateResponse();
        if (object.repaid !== undefined && object.repaid !== null) {
            message.repaid = Coin.fromAmino(object.repaid);
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = Coin.fromAmino(object.collateral);
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = Coin.fromAmino(object.reward);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
        obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
        obj.reward = message.reward ? Coin.toAmino(message.reward) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLiquidateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLiquidateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLiquidateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
            value: MsgLiquidateResponse.encode(message).finish()
        };
    }
};
