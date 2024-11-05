"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.ecocredit.basket.v1.MsgCreate", tx_1.MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", tx_1.MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", tx_1.MsgTake]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: tx_1.MsgCreate.encode(value).finish()
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: tx_1.MsgPut.encode(value).finish()
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: tx_1.MsgTake.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value
            };
        }
    },
    fromPartial: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: tx_1.MsgCreate.fromPartial(value)
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: tx_1.MsgPut.fromPartial(value)
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: tx_1.MsgTake.fromPartial(value)
            };
        }
    }
};
