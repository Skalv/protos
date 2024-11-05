"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createInsuranceFund = this.createInsuranceFund.bind(this);
        this.underwrite = this.underwrite.bind(this);
        this.requestRedemption = this.requestRedemption.bind(this);
    }
    createInsuranceFund(request) {
        const data = tx_1.MsgCreateInsuranceFund.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "CreateInsuranceFund", data);
        return promise.then(data => tx_1.MsgCreateInsuranceFundResponse.decode(new binary_1.BinaryReader(data)));
    }
    underwrite(request) {
        const data = tx_1.MsgUnderwrite.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "Underwrite", data);
        return promise.then(data => tx_1.MsgUnderwriteResponse.decode(new binary_1.BinaryReader(data)));
    }
    requestRedemption(request) {
        const data = tx_1.MsgRequestRedemption.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "RequestRedemption", data);
        return promise.then(data => tx_1.MsgRequestRedemptionResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
