"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.anchorData = this.anchorData.bind(this);
        this.signData = this.signData.bind(this);
        this.storeRawData = this.storeRawData.bind(this);
    }
    anchorData(request) {
        const data = tx_1.MsgAnchorData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "AnchorData", data);
        return promise.then(data => tx_1.MsgAnchorDataResponse.decode(new binary_1.BinaryReader(data)));
    }
    signData(request) {
        const data = tx_1.MsgSignData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "SignData", data);
        return promise.then(data => tx_1.MsgSignDataResponse.decode(new binary_1.BinaryReader(data)));
    }
    storeRawData(request) {
        const data = tx_1.MsgStoreRawData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "StoreRawData", data);
        return promise.then(data => tx_1.MsgStoreRawDataResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
