import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect } from "./tx";
export const registry = [["/regen.ecocredit.marketplace.v1.MsgSell", MsgSell], ["/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", MsgUpdateSellOrders], ["/regen.ecocredit.marketplace.v1.MsgCancelSellOrder", MsgCancelSellOrder], ["/regen.ecocredit.marketplace.v1.MsgBuyDirect", MsgBuyDirect]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value: MsgSell.encode(value).finish()
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: MsgUpdateSellOrders.encode(value).finish()
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: MsgCancelSellOrder.encode(value).finish()
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: MsgBuyDirect.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value
            };
        }
    },
    fromPartial: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value: MsgSell.fromPartial(value)
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: MsgUpdateSellOrders.fromPartial(value)
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: MsgCancelSellOrder.fromPartial(value)
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: MsgBuyDirect.fromPartial(value)
            };
        }
    }
};
