"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCloseVault = exports.EventRepayDebt = exports.EventDrawDebt = exports.EventWithdrawCollateral = exports.EventDepositCollateral = exports.EventCreateVault = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseEventCreateVault() {
    return {
        sender: "",
        collateralType: ""
    };
}
exports.EventCreateVault = {
    typeUrl: "/comdex.vault.v1beta1.EventCreateVault",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateVault();
        message.sender = object.sender ?? "";
        message.collateralType = object.collateralType ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateVault();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateVault.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCreateVault.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateVault.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventCreateVault",
            value: exports.EventCreateVault.encode(message).finish()
        };
    }
};
function createBaseEventDepositCollateral() {
    return {
        owner: "",
        collateralType: "",
        collateral: coin_1.Coin.fromPartial({})
    };
}
exports.EventDepositCollateral = {
    typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDepositCollateral();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventDepositCollateral();
        message.owner = object.owner ?? "";
        message.collateralType = object.collateralType ?? "";
        message.collateral = object.collateral !== undefined && object.collateral !== null ? coin_1.Coin.fromPartial(object.collateral) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDepositCollateral();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromAmino(object.collateral);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        obj.collateral = message.collateral ? coin_1.Coin.toAmino(message.collateral) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventDepositCollateral.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventDepositCollateral.decode(message.value);
    },
    toProto(message) {
        return exports.EventDepositCollateral.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral",
            value: exports.EventDepositCollateral.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawCollateral() {
    return {
        owner: "",
        collateralType: "",
        collateral: coin_1.Coin.fromPartial({})
    };
}
exports.EventWithdrawCollateral = {
    typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawCollateral();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawCollateral();
        message.owner = object.owner ?? "";
        message.collateralType = object.collateralType ?? "";
        message.collateral = object.collateral !== undefined && object.collateral !== null ? coin_1.Coin.fromPartial(object.collateral) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawCollateral();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromAmino(object.collateral);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        obj.collateral = message.collateral ? coin_1.Coin.toAmino(message.collateral) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventWithdrawCollateral.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventWithdrawCollateral.decode(message.value);
    },
    toProto(message) {
        return exports.EventWithdrawCollateral.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral",
            value: exports.EventWithdrawCollateral.encode(message).finish()
        };
    }
};
function createBaseEventDrawDebt() {
    return {
        owner: "",
        collateralType: "",
        debt: coin_1.Coin.fromPartial({})
    };
}
exports.EventDrawDebt = {
    typeUrl: "/comdex.vault.v1beta1.EventDrawDebt",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDrawDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventDrawDebt();
        message.owner = object.owner ?? "";
        message.collateralType = object.collateralType ?? "";
        message.debt = object.debt !== undefined && object.debt !== null ? coin_1.Coin.fromPartial(object.debt) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDrawDebt();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromAmino(object.debt);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        obj.debt = message.debt ? coin_1.Coin.toAmino(message.debt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventDrawDebt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventDrawDebt.decode(message.value);
    },
    toProto(message) {
        return exports.EventDrawDebt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventDrawDebt",
            value: exports.EventDrawDebt.encode(message).finish()
        };
    }
};
function createBaseEventRepayDebt() {
    return {
        owner: "",
        collateralType: "",
        debt: coin_1.Coin.fromPartial({})
    };
}
exports.EventRepayDebt = {
    typeUrl: "/comdex.vault.v1beta1.EventRepayDebt",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRepayDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRepayDebt();
        message.owner = object.owner ?? "";
        message.collateralType = object.collateralType ?? "";
        message.debt = object.debt !== undefined && object.debt !== null ? coin_1.Coin.fromPartial(object.debt) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRepayDebt();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromAmino(object.debt);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        obj.debt = message.debt ? coin_1.Coin.toAmino(message.debt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventRepayDebt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventRepayDebt.decode(message.value);
    },
    toProto(message) {
        return exports.EventRepayDebt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventRepayDebt",
            value: exports.EventRepayDebt.encode(message).finish()
        };
    }
};
function createBaseEventCloseVault() {
    return {
        owner: "",
        collateralType: ""
    };
}
exports.EventCloseVault = {
    typeUrl: "/comdex.vault.v1beta1.EventCloseVault",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCloseVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCloseVault();
        message.owner = object.owner ?? "";
        message.collateralType = object.collateralType ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCloseVault();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral_type !== undefined && object.collateral_type !== null) {
            message.collateralType = object.collateral_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCloseVault.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCloseVault.decode(message.value);
    },
    toProto(message) {
        return exports.EventCloseVault.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.EventCloseVault",
            value: exports.EventCloseVault.encode(message).finish()
        };
    }
};
