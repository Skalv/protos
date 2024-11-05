import { MsgClaim } from "./tx";
export const registry = [["/passage3d.claim.v1beta1.MsgClaim", MsgClaim]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        claim(value) {
            return {
                typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
                value: MsgClaim.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        claim(value) {
            return {
                typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
                value
            };
        }
    },
    fromPartial: {
        claim(value) {
            return {
                typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
                value: MsgClaim.fromPartial(value)
            };
        }
    }
};
