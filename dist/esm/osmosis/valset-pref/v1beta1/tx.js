//@ts-nocheck
import { ValidatorPreference } from "./state";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSetValidatorSetPreference() {
    return {
        delegator: "",
        preferences: []
    };
}
export const MsgSetValidatorSetPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        message.delegator = object.delegator ?? "";
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetValidatorSetPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgSetValidatorSetPreference",
            value: MsgSetValidatorSetPreference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetValidatorSetPreference.decode(message.value);
    },
    toProto(message) {
        return MsgSetValidatorSetPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
            value: MsgSetValidatorSetPreference.encode(message).finish()
        };
    }
};
function createBaseMsgSetValidatorSetPreferenceResponse() {
    return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
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
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/set-validator-set-preference-response",
            value: MsgSetValidatorSetPreferenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetValidatorSetPreferenceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetValidatorSetPreferenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
            value: MsgSetValidatorSetPreferenceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateToValidatorSet() {
    return {
        delegator: "",
        coin: Coin.fromPartial({})
    };
}
export const MsgDelegateToValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateToValidatorSet();
        message.delegator = object.delegator ?? "";
        message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateToValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateToValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgDelegateToValidatorSet",
            value: MsgDelegateToValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegateToValidatorSet.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateToValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
            value: MsgDelegateToValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateToValidatorSetResponse() {
    return {};
}
export const MsgDelegateToValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSetResponse();
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
        const message = createBaseMsgDelegateToValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateToValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateToValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/delegate-to-validator-set-response",
            value: MsgDelegateToValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegateToValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateToValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
            value: MsgDelegateToValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateFromValidatorSet() {
    return {
        delegator: "",
        coin: Coin.fromPartial({})
    };
}
export const MsgUndelegateFromValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 3:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateFromValidatorSet();
        message.delegator = object.delegator ?? "";
        message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateFromValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUndelegateFromValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
            value: MsgUndelegateFromValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegateFromValidatorSet.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegateFromValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
            value: MsgUndelegateFromValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateFromValidatorSetResponse() {
    return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
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
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/undelegate-from-validator-set-response",
            value: MsgUndelegateFromValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegateFromValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegateFromValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
            value: MsgUndelegateFromValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRedelegateValidatorSet() {
    return {
        delegator: "",
        preferences: []
    };
}
export const MsgRedelegateValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        message.delegator = object.delegator ?? "";
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRedelegateValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/redelegate-validator-set",
            value: MsgRedelegateValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRedelegateValidatorSet.decode(message.value);
    },
    toProto(message) {
        return MsgRedelegateValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
            value: MsgRedelegateValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgRedelegateValidatorSetResponse() {
    return {};
}
export const MsgRedelegateValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSetResponse();
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
        const message = createBaseMsgRedelegateValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRedelegateValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRedelegateValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/redelegate-validator-set-response",
            value: MsgRedelegateValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRedelegateValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRedelegateValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
            value: MsgRedelegateValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegationRewards() {
    return {
        delegator: ""
    };
}
export const MsgWithdrawDelegationRewards = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegationRewards();
        message.delegator = object.delegator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegationRewards();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawDelegationRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
            value: MsgWithdrawDelegationRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegationRewards.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegationRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
            value: MsgWithdrawDelegationRewards.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegationRewardsResponse() {
    return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
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
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/withdraw-delegation-rewards-response",
            value: MsgWithdrawDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
            value: MsgWithdrawDelegationRewardsResponse.encode(message).finish()
        };
    }
};
