//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        nftIncentives: "",
        developerRewards: ""
    };
}
export const DistributionProportions = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nftIncentives !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.nftIncentives, 18).atomics);
        }
        if (message.developerRewards !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.DistributionProportions",
            value: DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        distributionProportions: DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: []
    };
}
export const Params = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distributionProportions !== undefined) {
            DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
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
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
            message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
        }
        message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
