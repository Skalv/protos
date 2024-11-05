import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export const registry = [["/umee.leverage.v1.MsgSupply", MsgSupply], ["/umee.leverage.v1.MsgWithdraw", MsgWithdraw], ["/umee.leverage.v1.MsgCollateralize", MsgCollateralize], ["/umee.leverage.v1.MsgDecollateralize", MsgDecollateralize], ["/umee.leverage.v1.MsgBorrow", MsgBorrow], ["/umee.leverage.v1.MsgRepay", MsgRepay], ["/umee.leverage.v1.MsgLiquidate", MsgLiquidate]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        supply(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgSupply",
                value: MsgSupply.encode(value).finish()
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgWithdraw",
                value: MsgWithdraw.encode(value).finish()
            };
        },
        collateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgCollateralize",
                value: MsgCollateralize.encode(value).finish()
            };
        },
        decollateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgDecollateralize",
                value: MsgDecollateralize.encode(value).finish()
            };
        },
        borrow(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgBorrow",
                value: MsgBorrow.encode(value).finish()
            };
        },
        repay(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgRepay",
                value: MsgRepay.encode(value).finish()
            };
        },
        liquidate(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgLiquidate",
                value: MsgLiquidate.encode(value).finish()
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
                value: MsgSupply.fromPartial(value)
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgWithdraw",
                value: MsgWithdraw.fromPartial(value)
            };
        },
        collateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgCollateralize",
                value: MsgCollateralize.fromPartial(value)
            };
        },
        decollateralize(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgDecollateralize",
                value: MsgDecollateralize.fromPartial(value)
            };
        },
        borrow(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgBorrow",
                value: MsgBorrow.fromPartial(value)
            };
        },
        repay(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgRepay",
                value: MsgRepay.fromPartial(value)
            };
        },
        liquidate(value) {
            return {
                typeUrl: "/umee.leverage.v1.MsgLiquidate",
                value: MsgLiquidate.fromPartial(value)
            };
        }
    }
};
