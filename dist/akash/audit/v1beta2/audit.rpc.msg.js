"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const audit_1 = require("./audit");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.signProviderAttributes = this.signProviderAttributes.bind(this);
        this.deleteProviderAttributes = this.deleteProviderAttributes.bind(this);
    }
    signProviderAttributes(request) {
        const data = audit_1.MsgSignProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Msg", "SignProviderAttributes", data);
        return promise.then(data => audit_1.MsgSignProviderAttributesResponse.decode(new binary_1.BinaryReader(data)));
    }
    deleteProviderAttributes(request) {
        const data = audit_1.MsgDeleteProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Msg", "DeleteProviderAttributes", data);
        return promise.then(data => audit_1.MsgDeleteProviderAttributesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
