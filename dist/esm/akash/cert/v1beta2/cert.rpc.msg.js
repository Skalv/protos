import { BinaryReader } from "../../../binary";
import { MsgCreateCertificate, MsgCreateCertificateResponse, MsgRevokeCertificate, MsgRevokeCertificateResponse } from "./cert";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createCertificate = this.createCertificate.bind(this);
        this.revokeCertificate = this.revokeCertificate.bind(this);
    }
    createCertificate(request) {
        const data = MsgCreateCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
        return promise.then(data => MsgCreateCertificateResponse.decode(new BinaryReader(data)));
    }
    revokeCertificate(request) {
        const data = MsgRevokeCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
        return promise.then(data => MsgRevokeCertificateResponse.decode(new BinaryReader(data)));
    }
}
