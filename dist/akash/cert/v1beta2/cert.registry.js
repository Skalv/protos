"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const cert_1 = require("./cert");
exports.registry = [["/akash.cert.v1beta2.MsgCreateCertificate", cert_1.MsgCreateCertificate], ["/akash.cert.v1beta2.MsgRevokeCertificate", cert_1.MsgRevokeCertificate]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
                value: cert_1.MsgCreateCertificate.encode(value).finish()
            };
        },
        revokeCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value: cert_1.MsgRevokeCertificate.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
                value
            };
        },
        revokeCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value
            };
        }
    },
    fromPartial: {
        createCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
                value: cert_1.MsgCreateCertificate.fromPartial(value)
            };
        },
        revokeCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value: cert_1.MsgRevokeCertificate.fromPartial(value)
            };
        }
    }
};
