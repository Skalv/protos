"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const cert_1 = require("./cert");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createCertificate = this.createCertificate.bind(this);
        this.revokeCertificate = this.revokeCertificate.bind(this);
    }
    createCertificate(request) {
        const data = cert_1.MsgCreateCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
        return promise.then(data => cert_1.MsgCreateCertificateResponse.decode(new binary_1.BinaryReader(data)));
    }
    revokeCertificate(request) {
        const data = cert_1.MsgRevokeCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
        return promise.then(data => cert_1.MsgRevokeCertificateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
