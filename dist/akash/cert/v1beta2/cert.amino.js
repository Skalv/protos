"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const cert_1 = require("./cert");
exports.AminoConverter = {
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: "/akash.cert.v1beta2.MsgCreateCertificate",
        toAmino: cert_1.MsgCreateCertificate.toAmino,
        fromAmino: cert_1.MsgCreateCertificate.fromAmino
    },
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: "/akash.cert.v1beta2.MsgRevokeCertificate",
        toAmino: cert_1.MsgRevokeCertificate.toAmino,
        fromAmino: cert_1.MsgRevokeCertificate.fromAmino
    }
};
