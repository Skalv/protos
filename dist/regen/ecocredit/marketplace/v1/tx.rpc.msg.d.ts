import { Rpc } from "../../../../helpers";
import { MsgSell, MsgSellResponse, MsgUpdateSellOrders, MsgUpdateSellOrdersResponse, MsgCancelSellOrder, MsgCancelSellOrderResponse, MsgBuyDirect, MsgBuyDirectResponse } from "./tx";
/** Msg is the regen.ecocredit.marketplace.v1 Msg service. */
export interface Msg {
    /** Sell creates new sell orders. */
    sell(request: MsgSell): Promise<MsgSellResponse>;
    /** UpdateSellOrders updates existing sell orders. */
    updateSellOrders(request: MsgUpdateSellOrders): Promise<MsgUpdateSellOrdersResponse>;
    /** CancelSellOrder cancels a sell order and returns the funds from escrow. */
    cancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    /** BuyDirect purchases credits directly from the specified sell order. */
    buyDirect(request: MsgBuyDirect): Promise<MsgBuyDirectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    sell(request: MsgSell): Promise<MsgSellResponse>;
    updateSellOrders(request: MsgUpdateSellOrders): Promise<MsgUpdateSellOrdersResponse>;
    cancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    buyDirect(request: MsgBuyDirect): Promise<MsgBuyDirectResponse>;
}
