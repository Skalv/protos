"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisCertificate = void 0;
//@ts-nocheck
const cert_1 = require("./cert");
const binary_1 = require("../../../binary");
function createBaseGenesisCertificate() {
    return {
        owner: "",
        certificate: cert_1.Certificate.fromPartial({})
    };
}
exports.GenesisCertificate = {
    typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisCertificate();
        message.owner = object.owner ?? "";
        message.certificate = object.certificate !== undefined && object.certificate !== null ? cert_1.Certificate.fromPartial(object.certificate) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisCertificate();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = cert_1.Certificate.fromAmino(object.certificate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.certificate = message.certificate ? cert_1.Certificate.toAmino(message.certificate) : cert_1.Certificate.toAmino(cert_1.Certificate.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisCertificate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisCertificate.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisCertificate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
            value: exports.GenesisCertificate.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        certificates: []
    };
}
exports.GenesisState = {
    typeUrl: "/akash.cert.v1beta2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.certificates) {
            exports.GenesisCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(exports.GenesisCertificate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.certificates = object.certificates?.map(e => exports.GenesisCertificate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.certificates = object.certificates?.map(e => exports.GenesisCertificate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map(e => e ? exports.GenesisCertificate.toAmino(e) : undefined);
        }
        else {
            obj.certificates = message.certificates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
