import { BinaryReader } from "../../../binary";
import { MsgAnchorData, MsgAnchorDataResponse, MsgSignData, MsgSignDataResponse, MsgStoreRawData, MsgStoreRawDataResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.anchorData = this.anchorData.bind(this);
        this.signData = this.signData.bind(this);
        this.storeRawData = this.storeRawData.bind(this);
    }
    anchorData(request) {
        const data = MsgAnchorData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "AnchorData", data);
        return promise.then(data => MsgAnchorDataResponse.decode(new BinaryReader(data)));
    }
    signData(request) {
        const data = MsgSignData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "SignData", data);
        return promise.then(data => MsgSignDataResponse.decode(new BinaryReader(data)));
    }
    storeRawData(request) {
        const data = MsgStoreRawData.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Msg", "StoreRawData", data);
        return promise.then(data => MsgStoreRawDataResponse.decode(new BinaryReader(data)));
    }
}
