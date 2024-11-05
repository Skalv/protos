"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/passage3d.claim.v1beta1.MsgClaim", tx_1.MsgClaim]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        claim(value) {
            return {
                typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
                value: tx_1.MsgClaim.encode(value).finish()
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
                value: tx_1.MsgClaim.fromPartial(value)
            };
        }
    }
};
