"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/umee.leverage.v1.MsgSupply", tx_1.MsgSupply], ["/umee.leverage.v1.MsgWithdraw", tx_1.MsgWithdraw], ["/umee.leverage.v1.MsgCollateralize", tx_1.MsgCollateralize], ["/umee.leverage.v1.MsgDecollateralize", tx_1.MsgDecollateralize], ["/umee.leverage.v1.MsgBorrow", tx_1.MsgBorrow], ["/umee.leverage.v1.MsgRepay", tx_1.MsgRepay], ["/umee.leverage.v1.MsgLiquidate", tx_1.MsgLiquidate]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        supply(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgSupply",
                value: tx_1.MsgSupply.encode(value).finish()
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgWithdraw",
                value: tx_1.MsgWithdraw.encode(value).finish()
            };
        },
        collateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgCollateralize",
                value: tx_1.MsgCollateralize.encode(value).finish()
            };
        },
        decollateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgDecollateralize",
                value: tx_1.MsgDecollateralize.encode(value).finish()
            };
        },
        borrow(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgBorrow",
                value: tx_1.MsgBorrow.encode(value).finish()
            };
        },
        repay(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgRepay",
                value: tx_1.MsgRepay.encode(value).finish()
            };
        },
        liquidate(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgLiquidate",
                value: tx_1.MsgLiquidate.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        supply(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgSupply",
                value
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgWithdraw",
                value
            };
        },
        collateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgCollateralize",
                value
            };
        },
        decollateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgDecollateralize",
                value
            };
        },
        borrow(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgBorrow",
                value
            };
        },
        repay(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgRepay",
                value
            };
        },
        liquidate(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgLiquidate",
                value
            };
        }
    },
    fromPartial: {
        supply(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgSupply",
                value: tx_1.MsgSupply.fromPartial(value)
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgWithdraw",
                value: tx_1.MsgWithdraw.fromPartial(value)
            };
        },
        collateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgCollateralize",
                value: tx_1.MsgCollateralize.fromPartial(value)
            };
        },
        decollateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgDecollateralize",
                value: tx_1.MsgDecollateralize.fromPartial(value)
            };
        },
        borrow(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgBorrow",
                value: tx_1.MsgBorrow.fromPartial(value)
            };
        },
        repay(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgRepay",
                value: tx_1.MsgRepay.fromPartial(value)
            };
        },
        liquidate(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgLiquidate",
                value: tx_1.MsgLiquidate.fromPartial(value)
            };
        }
    }
};
