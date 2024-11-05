import { BinaryReader } from "../../../binary";
import { MsgSignProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesResponse } from "./audit";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.signProviderAttributes = this.signProviderAttributes.bind(this);
        this.deleteProviderAttributes = this.deleteProviderAttributes.bind(this);
    }
    signProviderAttributes(request) {
        const data = MsgSignProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Msg", "SignProviderAttributes", data);
        return promise.then(data => MsgSignProviderAttributesResponse.decode(new BinaryReader(data)));
    }
    deleteProviderAttributes(request) {
        const data = MsgDeleteProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Msg", "DeleteProviderAttributes", data);
        return promise.then(data => MsgDeleteProviderAttributesResponse.decode(new BinaryReader(data)));
    }
}
