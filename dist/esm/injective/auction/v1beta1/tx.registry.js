import { MsgBid } from "./tx";
export const registry = [["/injective.auction.v1beta1.MsgBid", MsgBid]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        bid(value) {
            return {
                typeUrl: "/injective.auction.v1beta1.MsgBid",
                value: MsgBid.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        bid(value) {
            return {
                typeUrl: "/injective.auction.v1beta1.MsgBid",
                value
            };
        }
    },
    fromPartial: {
        bid(value) {
            return {
                typeUrl: "/injective.auction.v1beta1.MsgBid",
                value: MsgBid.fromPartial(value)
            };
        }
    }
};
