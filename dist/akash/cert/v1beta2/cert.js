"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeCertificateResponse = exports.MsgRevokeCertificate = exports.MsgCreateCertificateResponse = exports.MsgCreateCertificate = exports.CertificateFilter = exports.Certificate = exports.CertificateID = exports.Certificate_StateAmino = exports.Certificate_StateSDKType = exports.Certificate_State = void 0;
exports.certificate_StateFromJSON = certificate_StateFromJSON;
exports.certificate_StateToJSON = certificate_StateToJSON;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** State is an enum which refers to state of deployment */
var Certificate_State;
(function (Certificate_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Certificate_State[Certificate_State["invalid"] = 0] = "invalid";
    /** valid - CertificateValid denotes state for deployment active */
    Certificate_State[Certificate_State["valid"] = 1] = "valid";
    /** revoked - CertificateRevoked denotes state for deployment closed */
    Certificate_State[Certificate_State["revoked"] = 2] = "revoked";
    Certificate_State[Certificate_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Certificate_State || (exports.Certificate_State = Certificate_State = {}));
exports.Certificate_StateSDKType = Certificate_State;
exports.Certificate_StateAmino = Certificate_State;
function certificate_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Certificate_State.invalid;
        case 1:
        case "valid":
            return Certificate_State.valid;
        case 2:
        case "revoked":
            return Certificate_State.revoked;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Certificate_State.UNRECOGNIZED;
    }
}
function certificate_StateToJSON(object) {
    switch (object) {
        case Certificate_State.invalid:
            return "invalid";
        case Certificate_State.valid:
            return "valid";
        case Certificate_State.revoked:
            return "revoked";
        case Certificate_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseCertificateID() {
    return {
        owner: "",
        serial: ""
    };
}
exports.CertificateID = {
    typeUrl: "/akash.cert.v1beta2.CertificateID",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCertificateID();
        message.owner = object.owner ?? "";
        message.serial = object.serial ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCertificateID();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.serial = message.serial ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CertificateID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CertificateID.decode(message.value);
    },
    toProto(message) {
        return exports.CertificateID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.CertificateID",
            value: exports.CertificateID.encode(message).finish()
        };
    }
};
function createBaseCertificate() {
    return {
        state: 0,
        cert: new Uint8Array(),
        pubkey: new Uint8Array()
    };
}
exports.Certificate = {
    typeUrl: "/akash.cert.v1beta2.Certificate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.cert.length !== 0) {
            writer.uint32(26).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(34).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.cert = reader.bytes();
                    break;
                case 4:
                    message.pubkey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCertificate();
        message.state = object.state ?? 0;
        message.cert = object.cert ?? new Uint8Array();
        message.pubkey = object.pubkey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCertificate();
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = (0, helpers_1.bytesFromBase64)(object.cert);
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = (0, helpers_1.bytesFromBase64)(object.pubkey);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ?? 0;
        obj.cert = message.cert ? (0, helpers_1.base64FromBytes)(message.cert) : "";
        obj.pubkey = message.pubkey ? (0, helpers_1.base64FromBytes)(message.pubkey) : "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Certificate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Certificate.decode(message.value);
    },
    toProto(message) {
        return exports.Certificate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.Certificate",
            value: exports.Certificate.encode(message).finish()
        };
    }
};
function createBaseCertificateFilter() {
    return {
        owner: "",
        serial: "",
        state: ""
    };
}
exports.CertificateFilter = {
    typeUrl: "/akash.cert.v1beta2.CertificateFilter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
                    break;
                case 3:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCertificateFilter();
        message.owner = object.owner ?? "";
        message.serial = object.serial ?? "";
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCertificateFilter();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.serial = message.serial ?? "";
        obj.state = message.state ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CertificateFilter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CertificateFilter.decode(message.value);
    },
    toProto(message) {
        return exports.CertificateFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.CertificateFilter",
            value: exports.CertificateFilter.encode(message).finish()
        };
    }
};
function createBaseMsgCreateCertificate() {
    return {
        owner: "",
        cert: new Uint8Array(),
        pubkey: new Uint8Array()
    };
}
exports.MsgCreateCertificate = {
    typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.cert.length !== 0) {
            writer.uint32(18).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(26).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.cert = reader.bytes();
                    break;
                case 3:
                    message.pubkey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCertificate();
        message.owner = object.owner ?? "";
        message.cert = object.cert ?? new Uint8Array();
        message.pubkey = object.pubkey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateCertificate();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = (0, helpers_1.bytesFromBase64)(object.cert);
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = (0, helpers_1.bytesFromBase64)(object.pubkey);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.cert = message.cert ? (0, helpers_1.base64FromBytes)(message.cert) : "";
        obj.pubkey = message.pubkey ? (0, helpers_1.base64FromBytes)(message.pubkey) : "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateCertificate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateCertificate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateCertificate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
            value: exports.MsgCreateCertificate.encode(message).finish()
        };
    }
};
function createBaseMsgCreateCertificateResponse() {
    return {};
}
exports.MsgCreateCertificateResponse = {
    typeUrl: "/akash.cert.v1beta2.MsgCreateCertificateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateCertificateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateCertificateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateCertificateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateCertificateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateCertificateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.MsgCreateCertificateResponse",
            value: exports.MsgCreateCertificateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeCertificate() {
    return {
        id: exports.CertificateID.fromPartial({})
    };
}
exports.MsgRevokeCertificate = {
    typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.CertificateID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeCertificate();
        message.id = object.id !== undefined && object.id !== null ? exports.CertificateID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRevokeCertificate();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.CertificateID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.CertificateID.toAmino(message.id) : exports.CertificateID.toAmino(exports.CertificateID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeCertificate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeCertificate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeCertificate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
            value: exports.MsgRevokeCertificate.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeCertificateResponse() {
    return {};
}
exports.MsgRevokeCertificateResponse = {
    typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRevokeCertificateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRevokeCertificateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeCertificateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeCertificateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeCertificateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificateResponse",
            value: exports.MsgRevokeCertificateResponse.encode(message).finish()
        };
    }
};
