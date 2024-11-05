"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setHotRoutes = this.setHotRoutes.bind(this);
        this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
    }
    setHotRoutes(request) {
        const data = tx_1.MsgSetHotRoutes.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
        return promise.then(data => tx_1.MsgSetHotRoutesResponse.decode(new binary_1.BinaryReader(data)));
    }
    setDeveloperAccount(request) {
        const data = tx_1.MsgSetDeveloperAccount.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
        return promise.then(data => tx_1.MsgSetDeveloperAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
