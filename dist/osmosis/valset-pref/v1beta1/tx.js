"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgWithdrawDelegationRewardsResponse = exports.MsgWithdrawDelegationRewards = exports.MsgRedelegateValidatorSetResponse = exports.MsgRedelegateValidatorSet = exports.MsgUndelegateFromValidatorSetResponse = exports.MsgUndelegateFromValidatorSet = exports.MsgDelegateToValidatorSetResponse = exports.MsgDelegateToValidatorSet = exports.MsgSetValidatorSetPreferenceResponse = exports.MsgSetValidatorSetPreference = void 0;
//@ts-nocheck
const state_1 = require("./state");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgSetValidatorSetPreference() {
    return {
        delegator: "",
        preferences: []
    };
}
exports.MsgSetValidatorSetPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
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
        message.preferences = object.preferences?.map(e => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences = object.preferences?.map(e => state_1.ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetValidatorSetPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgSetValidatorSetPreference",
            value: exports.MsgSetValidatorSetPreference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetValidatorSetPreference.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetValidatorSetPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
            value: exports.MsgSetValidatorSetPreference.encode(message).finish()
        };
    }
};
function createBaseMsgSetValidatorSetPreferenceResponse() {
    return {};
}
exports.MsgSetValidatorSetPreferenceResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/set-validator-set-preference-response",
            value: exports.MsgSetValidatorSetPreferenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetValidatorSetPreferenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetValidatorSetPreferenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
            value: exports.MsgSetValidatorSetPreferenceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateToValidatorSet() {
    return {
        delegator: "",
        coin: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDelegateToValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
        message.coin = object.coin !== undefined && object.coin !== null ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateToValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateToValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgDelegateToValidatorSet",
            value: exports.MsgDelegateToValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateToValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateToValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
            value: exports.MsgDelegateToValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateToValidatorSetResponse() {
    return {};
}
exports.MsgDelegateToValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgDelegateToValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/delegate-to-validator-set-response",
            value: exports.MsgDelegateToValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateToValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateToValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
            value: exports.MsgDelegateToValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateFromValidatorSet() {
    return {
        delegator: "",
        coin: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUndelegateFromValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 3:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
        message.coin = object.coin !== undefined && object.coin !== null ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateFromValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateFromValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
            value: exports.MsgUndelegateFromValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
            value: exports.MsgUndelegateFromValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateFromValidatorSetResponse() {
    return {};
}
exports.MsgUndelegateFromValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/undelegate-from-validator-set-response",
            value: exports.MsgUndelegateFromValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
            value: exports.MsgUndelegateFromValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRedelegateValidatorSet() {
    return {
        delegator: "",
        preferences: []
    };
}
exports.MsgRedelegateValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
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
        message.preferences = object.preferences?.map(e => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences = object.preferences?.map(e => state_1.ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === "" ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedelegateValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/redelegate-validator-set",
            value: exports.MsgRedelegateValidatorSet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedelegateValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedelegateValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
            value: exports.MsgRedelegateValidatorSet.encode(message).finish()
        };
    }
};
function createBaseMsgRedelegateValidatorSetResponse() {
    return {};
}
exports.MsgRedelegateValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRedelegateValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/redelegate-validator-set-response",
            value: exports.MsgRedelegateValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedelegateValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedelegateValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
            value: exports.MsgRedelegateValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegationRewards() {
    return {
        delegator: ""
    };
}
exports.MsgWithdrawDelegationRewards = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgWithdrawDelegationRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
            value: exports.MsgWithdrawDelegationRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegationRewards.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegationRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
            value: exports.MsgWithdrawDelegationRewards.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegationRewardsResponse() {
    return {};
}
exports.MsgWithdrawDelegationRewardsResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/withdraw-delegation-rewards-response",
            value: exports.MsgWithdrawDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
            value: exports.MsgWithdrawDelegationRewardsResponse.encode(message).finish()
        };
    }
};
