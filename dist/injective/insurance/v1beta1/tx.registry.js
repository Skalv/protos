"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/injective.insurance.v1beta1.MsgCreateInsuranceFund", tx_1.MsgCreateInsuranceFund], ["/injective.insurance.v1beta1.MsgUnderwrite", tx_1.MsgUnderwrite], ["/injective.insurance.v1beta1.MsgRequestRedemption", tx_1.MsgRequestRedemption]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createInsuranceFund(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
                value: tx_1.MsgCreateInsuranceFund.encode(value).finish()
            };
        },
        underwrite(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
                value: tx_1.MsgUnderwrite.encode(value).finish()
            };
        },
        requestRedemption(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
                value: tx_1.MsgRequestRedemption.encode(value).finish()
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
                value: tx_1.MsgCreateInsuranceFund.fromPartial(value)
            };
        },
        underwrite(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
                value: tx_1.MsgUnderwrite.fromPartial(value)
            };
        },
        requestRedemption(value) {
            return {
                typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
                value: tx_1.MsgRequestRedemption.fromPartial(value)
            };
        }
    }
};
