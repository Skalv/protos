import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards } from "./tx";
export const registry = [["/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference", MsgSetValidatorSetPreference], ["/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet", MsgDelegateToValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet", MsgUndelegateFromValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet", MsgRedelegateValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards", MsgWithdrawDelegationRewards]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        setValidatorSetPreference(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
                value: MsgSetValidatorSetPreference.encode(value).finish()
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
                value: MsgDelegateToValidatorSet.encode(value).finish()
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
                value: MsgUndelegateFromValidatorSet.encode(value).finish()
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
                value: MsgRedelegateValidatorSet.encode(value).finish()
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
                value: MsgWithdrawDelegationRewards.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setValidatorSetPreference(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
                value
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
                value
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
                value
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
                value
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
                value
            };
        }
    },
    fromPartial: {
        setValidatorSetPreference(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
                value: MsgSetValidatorSetPreference.fromPartial(value)
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
                value: MsgDelegateToValidatorSet.fromPartial(value)
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
                value: MsgUndelegateFromValidatorSet.fromPartial(value)
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
                value: MsgRedelegateValidatorSet.fromPartial(value)
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
                value: MsgWithdrawDelegationRewards.fromPartial(value)
            };
        }
    }
};
