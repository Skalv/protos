import { MsgInitialClaim, MsgClaimFor } from "./tx";
export const registry = [["/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim", MsgInitialClaim], ["/publicawesome.stargaze.claim.v1beta1.MsgClaimFor", MsgClaimFor]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        initialClaim(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
                value: MsgInitialClaim.encode(value).finish()
            };
        },
        claimFor(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
                value: MsgClaimFor.encode(value).finish()
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
                value: MsgInitialClaim.fromPartial(value)
            };
        },
        claimFor(value) {
            return {
                typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
                value: MsgClaimFor.fromPartial(value)
            };
        }
    }
};
