import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: (message: MsgSell) => import("./tx").MsgSellAmino;
        fromAmino: (object: import("./tx").MsgSellAmino) => MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: (message: MsgUpdateSellOrders) => import("./tx").MsgUpdateSellOrdersAmino;
        fromAmino: (object: import("./tx").MsgUpdateSellOrdersAmino) => MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelSellOrder) => import("./tx").MsgCancelSellOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelSellOrderAmino) => MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: (message: MsgBuyDirect) => import("./tx").MsgBuyDirectAmino;
        fromAmino: (object: import("./tx").MsgBuyDirectAmino) => MsgBuyDirect;
    };
};
