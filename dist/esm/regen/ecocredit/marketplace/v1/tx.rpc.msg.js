import { BinaryReader } from "../../../../binary";
import { MsgSell, MsgSellResponse, MsgUpdateSellOrders, MsgUpdateSellOrdersResponse, MsgCancelSellOrder, MsgCancelSellOrderResponse, MsgBuyDirect, MsgBuyDirectResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.sell = this.sell.bind(this);
        this.updateSellOrders = this.updateSellOrders.bind(this);
        this.cancelSellOrder = this.cancelSellOrder.bind(this);
        this.buyDirect = this.buyDirect.bind(this);
    }
    sell(request) {
        const data = MsgSell.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "Sell", data);
        return promise.then(data => MsgSellResponse.decode(new BinaryReader(data)));
    }
    updateSellOrders(request) {
        const data = MsgUpdateSellOrders.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "UpdateSellOrders", data);
        return promise.then(data => MsgUpdateSellOrdersResponse.decode(new BinaryReader(data)));
    }
    cancelSellOrder(request) {
        const data = MsgCancelSellOrder.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "CancelSellOrder", data);
        return promise.then(data => MsgCancelSellOrderResponse.decode(new BinaryReader(data)));
    }
    buyDirect(request) {
        const data = MsgBuyDirect.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "BuyDirect", data);
        return promise.then(data => MsgBuyDirectResponse.decode(new BinaryReader(data)));
    }
}
