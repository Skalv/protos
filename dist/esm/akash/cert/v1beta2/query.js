//@ts-nocheck
import { CertificateFilter, Certificate } from "./cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCertificateResponse() {
    return {
        certificate: Certificate.fromPartial({}),
        serial: ""
    };
}
export const CertificateResponse = {
    typeUrl: "/akash.cert.v1beta2.CertificateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.certificate !== undefined) {
            Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificate = Certificate.decode(reader, reader.uint32());
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
        message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
        message.serial = object.serial ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCertificateResponse();
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = Certificate.fromAmino(object.certificate);
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
        obj.serial = message.serial ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return CertificateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CertificateResponse.decode(message.value);
    },
    toProto(message) {
        return CertificateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.CertificateResponse",
            value: CertificateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCertificatesRequest() {
    return {
        filter: CertificateFilter.fromPartial({}),
        pagination: undefined
    };
}
export const QueryCertificatesRequest = {
    typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filter !== undefined) {
            CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = CertificateFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.filter = object.filter !== undefined && object.filter !== null ? CertificateFilter.fromPartial(object.filter) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCertificatesRequest();
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = CertificateFilter.fromAmino(object.filter);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filter = message.filter ? CertificateFilter.toAmino(message.filter) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCertificatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCertificatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCertificatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.QueryCertificatesRequest",
            value: QueryCertificatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCertificatesResponse() {
    return {
        certificates: [],
        pagination: undefined
    };
}
export const QueryCertificatesResponse = {
    typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.certificates) {
            CertificateResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(CertificateResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.certificates = object.certificates?.map(e => CertificateResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCertificatesResponse();
        message.certificates = object.certificates?.map(e => CertificateResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map(e => e ? CertificateResponse.toAmino(e) : undefined);
        }
        else {
            obj.certificates = message.certificates;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCertificatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCertificatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCertificatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.cert.v1beta2.QueryCertificatesResponse",
            value: QueryCertificatesResponse.encode(message).finish()
        };
    }
};
