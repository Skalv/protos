"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createGauge = this.createGauge.bind(this);
        this.addToGauge = this.addToGauge.bind(this);
    }
    createGauge(request) {
        const data = tx_1.MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
        return promise.then(data => tx_1.MsgCreateGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
    addToGauge(request) {
        const data = tx_1.MsgAddToGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
        return promise.then(data => tx_1.MsgAddToGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
