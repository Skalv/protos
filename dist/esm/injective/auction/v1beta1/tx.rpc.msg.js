import { BinaryReader } from "../../../binary";
import { MsgBid, MsgBidResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.bid = this.bid.bind(this);
    }
    bid(request) {
        const data = MsgBid.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Msg", "Bid", data);
        return promise.then(data => MsgBidResponse.decode(new BinaryReader(data)));
    }
}
