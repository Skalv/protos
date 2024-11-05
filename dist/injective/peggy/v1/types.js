"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20ToDenom = exports.LastClaimEvent = exports.LastObservedEthereumBlockHeight = exports.Valset = exports.BridgeValidator = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseBridgeValidator() {
    return {
        power: BigInt(0),
        ethereumAddress: ""
    };
}
exports.BridgeValidator = {
    typeUrl: "/injective.peggy.v1.BridgeValidator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.power !== BigInt(0)) {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.power = reader.uint64();
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBridgeValidator();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        message.ethereumAddress = object.ethereumAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBridgeValidator();
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        if (object.ethereum_address !== undefined && object.ethereum_address !== null) {
            message.ethereumAddress = object.ethereum_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.power = message.power !== BigInt(0) ? (message.power?.toString)() : undefined;
        obj.ethereum_address = message.ethereumAddress === "" ? undefined : message.ethereumAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BridgeValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BridgeValidator.decode(message.value);
    },
    toProto(message) {
        return exports.BridgeValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.BridgeValidator",
            value: exports.BridgeValidator.encode(message).finish()
        };
    }
};
function createBaseValset() {
    return {
        nonce: BigInt(0),
        members: [],
        height: BigInt(0),
        rewardAmount: "",
        rewardToken: ""
    };
}
exports.Valset = {
    typeUrl: "/injective.peggy.v1.Valset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            exports.BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.members.push(exports.BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.rewardAmount = reader.string();
                    break;
                case 5:
                    message.rewardToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValset();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.members = object.members?.map(e => exports.BridgeValidator.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValset();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        message.members = object.members?.map(e => exports.BridgeValidator.fromAmino(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.reward_amount !== undefined && object.reward_amount !== null) {
            message.rewardAmount = object.reward_amount;
        }
        if (object.reward_token !== undefined && object.reward_token !== null) {
            message.rewardToken = object.reward_token;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        if (message.members) {
            obj.members = message.members.map(e => e ? exports.BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
        obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
        obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Valset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Valset.decode(message.value);
    },
    toProto(message) {
        return exports.Valset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.Valset",
            value: exports.Valset.encode(message).finish()
        };
    }
};
function createBaseLastObservedEthereumBlockHeight() {
    return {
        cosmosBlockHeight: BigInt(0),
        ethereumBlockHeight: BigInt(0)
    };
}
exports.LastObservedEthereumBlockHeight = {
    typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cosmosBlockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (message.ethereumBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastObservedEthereumBlockHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosBlockHeight = reader.uint64();
                    break;
                case 2:
                    message.ethereumBlockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLastObservedEthereumBlockHeight();
        message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? BigInt(object.cosmosBlockHeight.toString()) : BigInt(0);
        message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? BigInt(object.ethereumBlockHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLastObservedEthereumBlockHeight();
        if (object.cosmos_block_height !== undefined && object.cosmos_block_height !== null) {
            message.cosmosBlockHeight = BigInt(object.cosmos_block_height);
        }
        if (object.ethereum_block_height !== undefined && object.ethereum_block_height !== null) {
            message.ethereumBlockHeight = BigInt(object.ethereum_block_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cosmos_block_height = message.cosmosBlockHeight !== BigInt(0) ? (message.cosmosBlockHeight?.toString)() : undefined;
        obj.ethereum_block_height = message.ethereumBlockHeight !== BigInt(0) ? (message.ethereumBlockHeight?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastObservedEthereumBlockHeight.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LastObservedEthereumBlockHeight.decode(message.value);
    },
    toProto(message) {
        return exports.LastObservedEthereumBlockHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight",
            value: exports.LastObservedEthereumBlockHeight.encode(message).finish()
        };
    }
};
function createBaseLastClaimEvent() {
    return {
        ethereumEventNonce: BigInt(0),
        ethereumEventHeight: BigInt(0)
    };
}
exports.LastClaimEvent = {
    typeUrl: "/injective.peggy.v1.LastClaimEvent",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ethereumEventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.ethereumEventNonce);
        }
        if (message.ethereumEventHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethereumEventHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastClaimEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethereumEventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethereumEventHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLastClaimEvent();
        message.ethereumEventNonce = object.ethereumEventNonce !== undefined && object.ethereumEventNonce !== null ? BigInt(object.ethereumEventNonce.toString()) : BigInt(0);
        message.ethereumEventHeight = object.ethereumEventHeight !== undefined && object.ethereumEventHeight !== null ? BigInt(object.ethereumEventHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLastClaimEvent();
        if (object.ethereum_event_nonce !== undefined && object.ethereum_event_nonce !== null) {
            message.ethereumEventNonce = BigInt(object.ethereum_event_nonce);
        }
        if (object.ethereum_event_height !== undefined && object.ethereum_event_height !== null) {
            message.ethereumEventHeight = BigInt(object.ethereum_event_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ethereum_event_nonce = message.ethereumEventNonce !== BigInt(0) ? (message.ethereumEventNonce?.toString)() : undefined;
        obj.ethereum_event_height = message.ethereumEventHeight !== BigInt(0) ? (message.ethereumEventHeight?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastClaimEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LastClaimEvent.decode(message.value);
    },
    toProto(message) {
        return exports.LastClaimEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.LastClaimEvent",
            value: exports.LastClaimEvent.encode(message).finish()
        };
    }
};
function createBaseERC20ToDenom() {
    return {
        erc20: "",
        denom: ""
    };
}
exports.ERC20ToDenom = {
    typeUrl: "/injective.peggy.v1.ERC20ToDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20ToDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseERC20ToDenom();
        message.erc20 = object.erc20 ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20ToDenom();
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ERC20ToDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ERC20ToDenom.decode(message.value);
    },
    toProto(message) {
        return exports.ERC20ToDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.ERC20ToDenom",
            value: exports.ERC20ToDenom.encode(message).finish()
        };
    }
};
