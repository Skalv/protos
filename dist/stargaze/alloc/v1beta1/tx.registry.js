"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount", tx_1.MsgCreateVestingAccount]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value
            };
        }
    },
    fromPartial: {
        createVestingAccount(value) {
            return {
                typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.fromPartial(value)
            };
        }
    }
};
