import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export const registry = [["/akash.cert.v1beta2.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
                value: MsgCreateCertificate.encode(value).finish()
            };
        },
        revokeCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value: MsgRevokeCertificate.encode(value).finish()
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
                value: MsgCreateCertificate.fromPartial(value)
            };
        },
        revokeCertificate(value) {
            return {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value: MsgRevokeCertificate.fromPartial(value)
            };
        }
    }
};
