//@ts-nocheck
import { Certificate } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisCertificate() {
    return {
        owner: "",
        certificate: Certificate.fromPartial({})
    };
}
export const GenesisCertificate = {
    typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.certificate !== undefined) {
            Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.certificate = Certificate.decode(reader, reader.uint32());
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
        message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisCertificate();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = Certificate.fromAmino(object.certificate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisCertificate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisCertificate.decode(message.value);
    },
    toProto(message) {
        return GenesisCertificate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
            value: GenesisCertificate.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        certificates: []
    };
}
export const GenesisState = {
    typeUrl: "/akash.cert.v1beta2.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.certificates) {
            GenesisCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(GenesisCertificate.decode(reader, reader.uint32()));
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
        message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.certificates = object.certificates?.map(e => GenesisCertificate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toAmino(e) : undefined);
        }
        else {
            obj.certificates = message.certificates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
