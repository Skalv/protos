"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCertificatesResponse = exports.QueryCertificatesRequest = exports.CertificateResponse = void 0;
//@ts-nocheck
const cert_1 = require("./cert");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
function createBaseCertificateResponse() {
    return {
        certificate: cert_1.Certificate.fromPartial({}),
        serial: ""
    };
}
exports.CertificateResponse = {
    typeUrl: "/akash.cert.v1beta2.CertificateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
        const message = createBaseCertificateResponse();
        message.certificate = object.certificate !== undefined && object.certificate !== null ? cert_1.Certificate.fromPartial(object.certificate) : undefined;
        message.serial = object.serial ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCertificateResponse();
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = cert_1.Certificate.fromAmino(object.certificate);
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.certificate = message.certificate ? cert_1.Certificate.toAmino(message.certificate) : cert_1.Certificate.toAmino(cert_1.Certificate.fromPartial({}));
        obj.serial = message.serial ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CertificateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CertificateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CertificateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.CertificateResponse",
            value: exports.CertificateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCertificatesRequest() {
    return {
        filter: cert_1.CertificateFilter.fromPartial({}),
        pagination: undefined
    };
}
exports.QueryCertificatesRequest = {
    typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filter !== undefined) {
            cert_1.CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = cert_1.CertificateFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCertificatesRequest();
        message.filter = object.filter !== undefined && object.filter !== null ? cert_1.CertificateFilter.fromPartial(object.filter) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCertificatesRequest();
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = cert_1.CertificateFilter.fromAmino(object.filter);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filter = message.filter ? cert_1.CertificateFilter.toAmino(message.filter) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCertificatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCertificatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCertificatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
            value: exports.QueryCertificatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCertificatesResponse() {
    return {
        certificates: [],
        pagination: undefined
    };
}
exports.QueryCertificatesResponse = {
    typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.certificates) {
            exports.CertificateResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(exports.CertificateResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCertificatesResponse();
        message.certificates = object.certificates?.map(e => exports.CertificateResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCertificatesResponse();
        message.certificates = object.certificates?.map(e => exports.CertificateResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map(e => e ? exports.CertificateResponse.toAmino(e) : undefined);
        }
        else {
            obj.certificates = message.certificates;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCertificatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCertificatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCertificatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
            value: exports.QueryCertificatesResponse.encode(message).finish()
        };
    }
};
