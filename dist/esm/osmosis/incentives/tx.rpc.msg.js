import { BinaryReader } from "../../binary";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createGauge = this.createGauge.bind(this);
        this.addToGauge = this.addToGauge.bind(this);
    }
    createGauge(request) {
        const data = MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
        return promise.then(data => MsgCreateGaugeResponse.decode(new BinaryReader(data)));
    }
    addToGauge(request) {
        const data = MsgAddToGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
        return promise.then(data => MsgAddToGaugeResponse.decode(new BinaryReader(data)));
    }
}
