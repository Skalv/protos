import { BinaryReader, BinaryWriter } from "../../../binary";
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress";
    value: Uint8Array;
}
export interface WeightedAddressAmino {
    address?: string;
    weight?: string;
}
export interface WeightedAddressAminoMsg {
    type: "/omniflix.alloc.v1beta1.WeightedAddress";
    value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    stakingRewards: string;
    nftIncentives: string;
    nodeHostsIncentives: string;
    developerRewards: string;
    communityPool: string;
}
export interface DistributionProportionsProtoMsg {
    typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions";
    value: Uint8Array;
}
export interface DistributionProportionsAmino {
    staking_rewards?: string;
    nft_incentives?: string;
    node_hosts_incentives?: string;
    developer_rewards?: string;
    community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
    type: "/omniflix.alloc.v1beta1.DistributionProportions";
    value: DistributionProportionsAmino;
}
export interface DistributionProportionsSDKType {
    staking_rewards: string;
    nft_incentives: string;
    node_hosts_incentives: string;
    developer_rewards: string;
    community_pool: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
}
export interface ParamsProtoMsg {
    typeUrl: "/omniflix.alloc.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions?: DistributionProportionsAmino;
    /** address to receive developer rewards */
    weighted_developer_rewards_receivers?: WeightedAddressAmino[];
}
export interface ParamsAminoMsg {
    type: "/omniflix.alloc.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    distribution_proportions: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
}
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
export declare const DistributionProportions: {
    typeUrl: string;
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
    fromAmino(object: DistributionProportionsAmino): DistributionProportions;
    toAmino(message: DistributionProportions): DistributionProportionsAmino;
    fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions;
    fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions;
    toProto(message: DistributionProportions): Uint8Array;
    toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
