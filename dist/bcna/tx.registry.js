"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", tx_1.MsgCreateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", tx_1.MsgUpdateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", tx_1.MsgDeleteBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", tx_1.MsgCreateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", tx_1.MsgUpdateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", tx_1.MsgDeleteSupplychain]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
                value: tx_1.MsgCreateBitcannaid.encode(value).finish()
            };
        },
        updateBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
                value: tx_1.MsgUpdateBitcannaid.encode(value).finish()
            };
        },
        deleteBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
                value: tx_1.MsgDeleteBitcannaid.encode(value).finish()
            };
        },
        createSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
                value: tx_1.MsgCreateSupplychain.encode(value).finish()
            };
        },
        updateSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
                value: tx_1.MsgUpdateSupplychain.encode(value).finish()
            };
        },
        deleteSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
                value: tx_1.MsgDeleteSupplychain.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
                value
            };
        },
        updateBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
                value
            };
        },
        deleteBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
                value
            };
        },
        createSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
                value
            };
        },
        updateSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
                value
            };
        },
        deleteSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
                value
            };
        }
    },
    fromPartial: {
        createBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
                value: tx_1.MsgCreateBitcannaid.fromPartial(value)
            };
        },
        updateBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
                value: tx_1.MsgUpdateBitcannaid.fromPartial(value)
            };
        },
        deleteBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
                value: tx_1.MsgDeleteBitcannaid.fromPartial(value)
            };
        },
        createSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
                value: tx_1.MsgCreateSupplychain.fromPartial(value)
            };
        },
        updateSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
                value: tx_1.MsgUpdateSupplychain.fromPartial(value)
            };
        },
        deleteSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
                value: tx_1.MsgDeleteSupplychain.fromPartial(value)
            };
        }
    }
};
