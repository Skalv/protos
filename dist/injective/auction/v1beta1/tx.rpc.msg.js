"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.bid = this.bid.bind(this);
    }
    bid(request) {
        const data = tx_1.MsgBid.encode(request).finish();
        const promise = this.rpc.request("injective.auction.v1beta1.Msg", "Bid", data);
        return promise.then(data => tx_1.MsgBidResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
