"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgLiquidateResponse = exports.MsgRepayResponse = exports.MsgBorrowResponse = exports.MsgDecollateralizeResponse = exports.MsgCollateralizeResponse = exports.MsgWithdrawResponse = exports.MsgSupplyResponse = exports.MsgLiquidate = exports.MsgRepay = exports.MsgBorrow = exports.MsgDecollateralize = exports.MsgCollateralize = exports.MsgWithdraw = exports.MsgSupply = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgSupply() {
    return {
        supplier: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSupply = {
    typeUrl: "/umee.leverage.v1.MsgSupply",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSupply();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSupply.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgSupply",
            value: exports.MsgSupply.encode(message).finish()
        };
    }
};
function createBaseMsgWithdraw() {
    return {
        supplier: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgWithdraw = {
    typeUrl: "/umee.leverage.v1.MsgWithdraw",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.supplier !== "") {
            writer.uint32(10).string(message.supplier);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplier = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdraw();
        if (object.supplier !== undefined && object.supplier !== null) {
            message.supplier = object.supplier;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplier = message.supplier === "" ? undefined : message.supplier;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdraw.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgWithdraw",
            value: exports.MsgWithdraw.encode(message).finish()
        };
    }
};
function createBaseMsgCollateralize() {
    return {
        borrower: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgCollateralize = {
    typeUrl: "/umee.leverage.v1.MsgCollateralize",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollateralize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollateralize();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCollateralize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCollateralize.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollateralize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgCollateralize",
            value: exports.MsgCollateralize.encode(message).finish()
        };
    }
};
function createBaseMsgDecollateralize() {
    return {
        borrower: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDecollateralize = {
    typeUrl: "/umee.leverage.v1.MsgDecollateralize",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDecollateralize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDecollateralize();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDecollateralize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDecollateralize.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDecollateralize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgDecollateralize",
            value: exports.MsgDecollateralize.encode(message).finish()
        };
    }
};
function createBaseMsgBorrow() {
    return {
        borrower: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgBorrow = {
    typeUrl: "/umee.leverage.v1.MsgBorrow",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBorrow();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBorrow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBorrow.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBorrow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgBorrow",
            value: exports.MsgBorrow.encode(message).finish()
        };
    }
};
function createBaseMsgRepay() {
    return {
        borrower: "",
        asset: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRepay = {
    typeUrl: "/umee.leverage.v1.MsgRepay",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (message.asset !== undefined) {
            coin_1.Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.asset = coin_1.Coin.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? coin_1.Coin.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRepay();
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = coin_1.Coin.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.borrower = message.borrower === "" ? undefined : message.borrower;
        obj.asset = message.asset ? coin_1.Coin.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRepay.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRepay.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRepay.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgRepay",
            value: exports.MsgRepay.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidate() {
    return {
        liquidator: "",
        borrower: "",
        repayment: coin_1.Coin.fromPartial({}),
        rewardDenom: ""
    };
}
exports.MsgLiquidate = {
    typeUrl: "/umee.leverage.v1.MsgLiquidate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidator !== "") {
            writer.uint32(10).string(message.liquidator);
        }
        if (message.borrower !== "") {
            writer.uint32(18).string(message.borrower);
        }
        if (message.repayment !== undefined) {
            coin_1.Coin.encode(message.repayment, writer.uint32(26).fork()).ldelim();
        }
        if (message.rewardDenom !== "") {
            writer.uint32(34).string(message.rewardDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.repayment = coin_1.Coin.decode(reader, reader.uint32());
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
        message.repayment = object.repayment !== undefined && object.repayment !== null ? coin_1.Coin.fromPartial(object.repayment) : undefined;
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
            message.repayment = coin_1.Coin.fromAmino(object.repayment);
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
        obj.repayment = message.repayment ? coin_1.Coin.toAmino(message.repayment) : undefined;
        obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLiquidate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLiquidate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLiquidate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgLiquidate",
            value: exports.MsgLiquidate.encode(message).finish()
        };
    }
};
function createBaseMsgSupplyResponse() {
    return {
        received: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSupplyResponse = {
    typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.received !== undefined) {
            coin_1.Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.received = coin_1.Coin.decode(reader, reader.uint32());
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
        message.received = object.received !== undefined && object.received !== null ? coin_1.Coin.fromPartial(object.received) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSupplyResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = coin_1.Coin.fromAmino(object.received);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received ? coin_1.Coin.toAmino(message.received) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgSupplyResponse",
            value: exports.MsgSupplyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawResponse() {
    return {
        received: coin_1.Coin.fromPartial({})
    };
}
exports.MsgWithdrawResponse = {
    typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.received !== undefined) {
            coin_1.Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.received = coin_1.Coin.decode(reader, reader.uint32());
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
        message.received = object.received !== undefined && object.received !== null ? coin_1.Coin.fromPartial(object.received) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = coin_1.Coin.fromAmino(object.received);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received ? coin_1.Coin.toAmino(message.received) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgWithdrawResponse",
            value: exports.MsgWithdrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCollateralizeResponse() {
    return {};
}
exports.MsgCollateralizeResponse = {
    typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCollateralizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCollateralizeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollateralizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse",
            value: exports.MsgCollateralizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDecollateralizeResponse() {
    return {};
}
exports.MsgDecollateralizeResponse = {
    typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgDecollateralizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDecollateralizeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDecollateralizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse",
            value: exports.MsgDecollateralizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBorrowResponse() {
    return {};
}
exports.MsgBorrowResponse = {
    typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBorrowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBorrowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBorrowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgBorrowResponse",
            value: exports.MsgBorrowResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRepayResponse() {
    return {
        repaid: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRepayResponse = {
    typeUrl: "/umee.leverage.v1.MsgRepayResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.repaid !== undefined) {
            coin_1.Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repaid = coin_1.Coin.decode(reader, reader.uint32());
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
        message.repaid = object.repaid !== undefined && object.repaid !== null ? coin_1.Coin.fromPartial(object.repaid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRepayResponse();
        if (object.repaid !== undefined && object.repaid !== null) {
            message.repaid = coin_1.Coin.fromAmino(object.repaid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.repaid = message.repaid ? coin_1.Coin.toAmino(message.repaid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRepayResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRepayResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRepayResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgRepayResponse",
            value: exports.MsgRepayResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidateResponse() {
    return {
        repaid: coin_1.Coin.fromPartial({}),
        collateral: coin_1.Coin.fromPartial({}),
        reward: coin_1.Coin.fromPartial({})
    };
}
exports.MsgLiquidateResponse = {
    typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.repaid !== undefined) {
            coin_1.Coin.encode(message.repaid, writer.uint32(10).fork()).ldelim();
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
        }
        if (message.reward !== undefined) {
            coin_1.Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repaid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reward = coin_1.Coin.decode(reader, reader.uint32());
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
        message.repaid = object.repaid !== undefined && object.repaid !== null ? coin_1.Coin.fromPartial(object.repaid) : undefined;
        message.collateral = object.collateral !== undefined && object.collateral !== null ? coin_1.Coin.fromPartial(object.collateral) : undefined;
        message.reward = object.reward !== undefined && object.reward !== null ? coin_1.Coin.fromPartial(object.reward) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLiquidateResponse();
        if (object.repaid !== undefined && object.repaid !== null) {
            message.repaid = coin_1.Coin.fromAmino(object.repaid);
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromAmino(object.collateral);
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = coin_1.Coin.fromAmino(object.reward);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.repaid = message.repaid ? coin_1.Coin.toAmino(message.repaid) : undefined;
        obj.collateral = message.collateral ? coin_1.Coin.toAmino(message.collateral) : undefined;
        obj.reward = message.reward ? coin_1.Coin.toAmino(message.reward) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLiquidateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLiquidateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLiquidateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.MsgLiquidateResponse",
            value: exports.MsgLiquidateResponse.encode(message).finish()
        };
    }
};
