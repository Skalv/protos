"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const provider_1 = require("./provider");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createProvider = this.createProvider.bind(this);
        this.updateProvider = this.updateProvider.bind(this);
        this.deleteProvider = this.deleteProvider.bind(this);
    }
    createProvider(request) {
        const data = provider_1.MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "CreateProvider", data);
        return promise.then(data => provider_1.MsgCreateProviderResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateProvider(request) {
        const data = provider_1.MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "UpdateProvider", data);
        return promise.then(data => provider_1.MsgUpdateProviderResponse.decode(new binary_1.BinaryReader(data)));
    }
    deleteProvider(request) {
        const data = provider_1.MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "DeleteProvider", data);
        return promise.then(data => provider_1.MsgDeleteProviderResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
