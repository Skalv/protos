"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpoolWhitelistedPools = exports.LockIdIntermediaryAccountConnection = exports.SuperfluidDelegationRecord = exports.OsmoEquivalentMultiplierRecord = exports.SuperfluidIntermediaryAccount = exports.SuperfluidAsset = exports.SuperfluidAssetTypeAmino = exports.SuperfluidAssetTypeSDKType = exports.SuperfluidAssetType = void 0;
exports.superfluidAssetTypeFromJSON = superfluidAssetTypeFromJSON;
exports.superfluidAssetTypeToJSON = superfluidAssetTypeToJSON;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
var SuperfluidAssetType;
(function (SuperfluidAssetType) {
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
    SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SuperfluidAssetType || (exports.SuperfluidAssetType = SuperfluidAssetType = {}));
exports.SuperfluidAssetTypeSDKType = SuperfluidAssetType;
exports.SuperfluidAssetTypeAmino = SuperfluidAssetType;
function superfluidAssetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SuperfluidAssetTypeNative":
            return SuperfluidAssetType.SuperfluidAssetTypeNative;
        case 1:
        case "SuperfluidAssetTypeLPShare":
            return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SuperfluidAssetType.UNRECOGNIZED;
    }
}
function superfluidAssetTypeToJSON(object) {
    switch (object) {
        case SuperfluidAssetType.SuperfluidAssetTypeNative:
            return "SuperfluidAssetTypeNative";
        case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
            return "SuperfluidAssetTypeLPShare";
        case SuperfluidAssetType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSuperfluidAsset() {
    return {
        denom: "",
        assetType: 0
    };
}
exports.SuperfluidAsset = {
    typeUrl: "/osmosis.superfluid.SuperfluidAsset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.assetType !== 0) {
            writer.uint32(16).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.assetType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidAsset();
        message.denom = object.denom ?? "";
        message.assetType = object.assetType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidAsset();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.asset_type !== undefined && object.asset_type !== null) {
            message.assetType = object.asset_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-asset",
            value: exports.SuperfluidAsset.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidAsset.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidAsset",
            value: exports.SuperfluidAsset.encode(message).finish()
        };
    }
};
function createBaseSuperfluidIntermediaryAccount() {
    return {
        denom: "",
        valAddr: "",
        gaugeId: BigInt(0)
    };
}
exports.SuperfluidIntermediaryAccount = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== "") {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        message.denom = object.denom ?? "";
        message.valAddr = object.valAddr ?? "";
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidIntermediaryAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account",
            value: exports.SuperfluidIntermediaryAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidIntermediaryAccount.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidIntermediaryAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
            value: exports.SuperfluidIntermediaryAccount.encode(message).finish()
        };
    }
};
function createBaseOsmoEquivalentMultiplierRecord() {
    return {
        epochNumber: BigInt(0),
        denom: "",
        multiplier: ""
    };
}
exports.OsmoEquivalentMultiplierRecord = {
    typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochNumber !== BigInt(0)) {
            writer.uint32(8).int64(message.epochNumber);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.multiplier !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.multiplier, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOsmoEquivalentMultiplierRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochNumber = reader.int64();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.multiplier = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.multiplier = object.multiplier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        if (object.epoch_number !== undefined && object.epoch_number !== null) {
            message.epochNumber = BigInt(object.epoch_number);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = object.multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.multiplier = message.multiplier === "" ? undefined : message.multiplier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OsmoEquivalentMultiplierRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/osmo-equivalent-multiplier-record",
            value: exports.OsmoEquivalentMultiplierRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.OsmoEquivalentMultiplierRecord.decode(message.value);
    },
    toProto(message) {
        return exports.OsmoEquivalentMultiplierRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
            value: exports.OsmoEquivalentMultiplierRecord.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        delegationAmount: coin_1.Coin.fromPartial({}),
        equivalentStakedAmount: undefined
    };
}
exports.SuperfluidDelegationRecord = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.delegationAmount !== undefined) {
            coin_1.Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.delegationAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.equivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? coin_1.Coin.fromPartial(object.delegationAmount) : undefined;
        message.equivalentStakedAmount = object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null ? coin_1.Coin.fromPartial(object.equivalentStakedAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationRecord();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.delegation_amount !== undefined && object.delegation_amount !== null) {
            message.delegationAmount = coin_1.Coin.fromAmino(object.delegation_amount);
        }
        if (object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null) {
            message.equivalentStakedAmount = coin_1.Coin.fromAmino(object.equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.delegation_amount = message.delegationAmount ? coin_1.Coin.toAmino(message.delegationAmount) : undefined;
        obj.equivalent_staked_amount = message.equivalentStakedAmount ? coin_1.Coin.toAmino(message.equivalentStakedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-record",
            value: exports.SuperfluidDelegationRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationRecord.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
            value: exports.SuperfluidDelegationRecord.encode(message).finish()
        };
    }
};
function createBaseLockIdIntermediaryAccountConnection() {
    return {
        lockId: BigInt(0),
        intermediaryAccount: ""
    };
}
exports.LockIdIntermediaryAccountConnection = {
    typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.intermediaryAccount !== "") {
            writer.uint32(18).string(message.intermediaryAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockIdIntermediaryAccountConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.intermediaryAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        message.intermediaryAccount = object.intermediaryAccount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.intermediary_account !== undefined && object.intermediary_account !== null) {
            message.intermediaryAccount = object.intermediary_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lockId !== BigInt(0) ? (message.lockId?.toString)() : undefined;
        obj.intermediary_account = message.intermediaryAccount === "" ? undefined : message.intermediaryAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockIdIntermediaryAccountConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-id-intermediary-account-connection",
            value: exports.LockIdIntermediaryAccountConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockIdIntermediaryAccountConnection.decode(message.value);
    },
    toProto(message) {
        return exports.LockIdIntermediaryAccountConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
            value: exports.LockIdIntermediaryAccountConnection.encode(message).finish()
        };
    }
};
function createBaseUnpoolWhitelistedPools() {
    return {
        ids: []
    };
}
exports.UnpoolWhitelistedPools = {
    typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpoolWhitelistedPools();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = message.ids;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnpoolWhitelistedPools.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pools",
            value: exports.UnpoolWhitelistedPools.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnpoolWhitelistedPools.decode(message.value);
    },
    toProto(message) {
        return exports.UnpoolWhitelistedPools.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
            value: exports.UnpoolWhitelistedPools.encode(message).finish()
        };
    }
};
