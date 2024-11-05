import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export const registry = [["/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", MsgCreateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", MsgUpdateBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", MsgDeleteBitcannaid], ["/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", MsgCreateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", MsgUpdateSupplychain], ["/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", MsgDeleteSupplychain]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
                value: MsgCreateBitcannaid.encode(value).finish()
            };
        },
        updateBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
                value: MsgUpdateBitcannaid.encode(value).finish()
            };
        },
        deleteBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
                value: MsgDeleteBitcannaid.encode(value).finish()
            };
        },
        createSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
                value: MsgCreateSupplychain.encode(value).finish()
            };
        },
        updateSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
                value: MsgUpdateSupplychain.encode(value).finish()
            };
        },
        deleteSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
                value: MsgDeleteSupplychain.encode(value).finish()
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
                value: MsgCreateBitcannaid.fromPartial(value)
            };
        },
        updateBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
                value: MsgUpdateBitcannaid.fromPartial(value)
            };
        },
        deleteBitcannaid(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
                value: MsgDeleteBitcannaid.fromPartial(value)
            };
        },
        createSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
                value: MsgCreateSupplychain.fromPartial(value)
            };
        },
        updateSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
                value: MsgUpdateSupplychain.fromPartial(value)
            };
        },
        deleteSupplychain(value) {
            return {
                typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
                value: MsgDeleteSupplychain.fromPartial(value)
            };
        }
    }
};
