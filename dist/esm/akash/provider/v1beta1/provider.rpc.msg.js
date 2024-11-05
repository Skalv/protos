import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderResponse, MsgUpdateProvider, MsgUpdateProviderResponse, MsgDeleteProvider, MsgDeleteProviderResponse } from "./provider";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createProvider = this.createProvider.bind(this);
        this.updateProvider = this.updateProvider.bind(this);
        this.deleteProvider = this.deleteProvider.bind(this);
    }
    createProvider(request) {
        const data = MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "CreateProvider", data);
        return promise.then(data => MsgCreateProviderResponse.decode(new BinaryReader(data)));
    }
    updateProvider(request) {
        const data = MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "UpdateProvider", data);
        return promise.then(data => MsgUpdateProviderResponse.decode(new BinaryReader(data)));
    }
    deleteProvider(request) {
        const data = MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "DeleteProvider", data);
        return promise.then(data => MsgDeleteProviderResponse.decode(new BinaryReader(data)));
    }
}
