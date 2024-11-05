"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.protorev.v1beta1.MsgSetHotRoutes", tx_1.MsgSetHotRoutes], ["/osmosis.protorev.v1beta1.MsgSetDeveloperAccount", tx_1.MsgSetDeveloperAccount]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value: tx_1.MsgSetHotRoutes.encode(value).finish()
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value: tx_1.MsgSetDeveloperAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value
            };
        }
    },
    fromPartial: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value: tx_1.MsgSetHotRoutes.fromPartial(value)
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value: tx_1.MsgSetDeveloperAccount.fromPartial(value)
            };
        }
    }
};
