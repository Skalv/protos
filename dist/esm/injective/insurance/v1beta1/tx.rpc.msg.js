import { BinaryReader } from "../../../binary";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createInsuranceFund = this.createInsuranceFund.bind(this);
        this.underwrite = this.underwrite.bind(this);
        this.requestRedemption = this.requestRedemption.bind(this);
    }
    createInsuranceFund(request) {
        const data = MsgCreateInsuranceFund.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "CreateInsuranceFund", data);
        return promise.then(data => MsgCreateInsuranceFundResponse.decode(new BinaryReader(data)));
    }
    underwrite(request) {
        const data = MsgUnderwrite.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "Underwrite", data);
        return promise.then(data => MsgUnderwriteResponse.decode(new BinaryReader(data)));
    }
    requestRedemption(request) {
        const data = MsgRequestRedemption.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "RequestRedemption", data);
        return promise.then(data => MsgRequestRedemptionResponse.decode(new BinaryReader(data)));
    }
}
