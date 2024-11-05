import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption } from "./tx";
export const registry = [["/injective.insurance.v1beta1.MsgCreateInsuranceFund", MsgCreateInsuranceFund], ["/injective.insurance.v1beta1.MsgUnderwrite", MsgUnderwrite], ["/injective.insurance.v1beta1.MsgRequestRedemption", MsgRequestRedemption]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createInsuranceFund(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
                value: MsgCreateInsuranceFund.encode(value).finish()
            };
        },
        underwrite(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
                value: MsgUnderwrite.encode(value).finish()
            };
        },
        requestRedemption(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
                value: MsgRequestRedemption.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createInsuranceFund(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
                value
            };
        },
        underwrite(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
                value
            };
        },
        requestRedemption(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
                value
            };
        }
    },
    fromPartial: {
        createInsuranceFund(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
                value: MsgCreateInsuranceFund.fromPartial(value)
            };
        },
        underwrite(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
                value: MsgUnderwrite.fromPartial(value)
            };
        },
        requestRedemption(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
                value: MsgRequestRedemption.fromPartial(value)
            };
        }
    }
};
