"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/injective.auction.v1beta1.MsgBid", tx_1.MsgBid]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        bid(value) {
            return {
                typeUrl: "/injective.auction.v1beta1.MsgBid",
                value: tx_1.MsgBid.encode(value).finish()
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
                value: tx_1.MsgBid.fromPartial(value)
            };
        }
    }
};
