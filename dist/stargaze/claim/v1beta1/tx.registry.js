"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim", tx_1.MsgInitialClaim], ["/publicawesome.stargaze.claim.v1beta1.MsgClaimFor", tx_1.MsgClaimFor]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        initialClaim(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
                value: tx_1.MsgInitialClaim.encode(value).finish()
            };
        },
        claimFor(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
                value: tx_1.MsgClaimFor.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        initialClaim(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
                value
            };
        },
        claimFor(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
                value
            };
        }
    },
    fromPartial: {
        initialClaim(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
                value: tx_1.MsgInitialClaim.fromPartial(value)
            };
        },
        claimFor(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
                value: tx_1.MsgClaimFor.fromPartial(value)
            };
        }
    }
};
