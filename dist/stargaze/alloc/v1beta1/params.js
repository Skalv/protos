"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DistributionProportions = exports.WeightedAddress = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
exports.WeightedAddress = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress",
            value: exports.WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        nftIncentives: "",
        developerRewards: ""
    };
}
exports.DistributionProportions = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nftIncentives !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.nftIncentives, 18).atomics);
        }
        if (message.developerRewards !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.developerRewards, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftIncentives = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.developerRewards = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.nftIncentives = object.nftIncentives ?? "";
        message.developerRewards = object.developerRewards ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistributionProportions();
        if (object.nft_incentives !== undefined && object.nft_incentives !== null) {
            message.nftIncentives = object.nft_incentives;
        }
        if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
            message.developerRewards = object.developer_rewards;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft_incentives = message.nftIncentives === "" ? undefined : message.nftIncentives;
        obj.developer_rewards = message.developerRewards === "" ? undefined : message.developerRewards;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return exports.DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions",
            value: exports.DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: []
    };
}
exports.Params = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            exports.WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weightedDeveloperRewardsReceivers.push(exports.WeightedAddress.decode(reader, reader.uint32()));
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
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? exports.DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => exports.WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
            message.distributionProportions = exports.DistributionProportions.fromAmino(object.distribution_proportions);
        }
        message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => exports.WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distribution_proportions = message.distributionProportions ? exports.DistributionProportions.toAmino(message.distributionProportions) : undefined;
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? exports.WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
        }
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
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
