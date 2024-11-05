"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: "/regen.ecocredit.marketplace.v1.MsgSell",
        toAmino: tx_1.MsgSell.toAmino,
        fromAmino: tx_1.MsgSell.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        toAmino: tx_1.MsgUpdateSellOrders.toAmino,
        fromAmino: tx_1.MsgUpdateSellOrders.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        toAmino: tx_1.MsgCancelSellOrder.toAmino,
        fromAmino: tx_1.MsgCancelSellOrder.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        toAmino: tx_1.MsgBuyDirect.toAmino,
        fromAmino: tx_1.MsgBuyDirect.fromAmino
    }
};
