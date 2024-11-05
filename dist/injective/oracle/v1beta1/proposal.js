"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableBandIBCProposal = exports.UpdateBandOracleRequestProposal = exports.AuthorizeBandOracleRequestProposal = exports.RevokePriceFeederPrivilegeProposal = exports.RevokeProviderPrivilegeProposal = exports.GrantProviderPrivilegeProposal = exports.GrantPriceFeederPrivilegeProposal = exports.RevokeBandOraclePrivilegeProposal = exports.GrantBandOraclePrivilegeProposal = void 0;
//@ts-nocheck
const oracle_1 = require("./oracle");
const binary_1 = require("../../../binary");
function createBaseGrantBandOraclePrivilegeProposal() {
    return {
        title: "",
        description: "",
        relayers: []
    };
}
exports.GrantBandOraclePrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.relayers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantBandOraclePrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantBandOraclePrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantBandOraclePrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantBandOraclePrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GrantBandOraclePrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.GrantBandOraclePrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
            value: exports.GrantBandOraclePrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseRevokeBandOraclePrivilegeProposal() {
    return {
        title: "",
        description: "",
        relayers: []
    };
}
exports.RevokeBandOraclePrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.relayers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeBandOraclePrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRevokeBandOraclePrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRevokeBandOraclePrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RevokeBandOraclePrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RevokeBandOraclePrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RevokeBandOraclePrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
            value: exports.RevokeBandOraclePrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseGrantPriceFeederPrivilegeProposal() {
    return {
        title: "",
        description: "",
        base: "",
        quote: "",
        relayers: []
    };
}
exports.GrantPriceFeederPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(34).string(message.quote);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantPriceFeederPrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.quote = reader.string();
                    break;
                case 5:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantPriceFeederPrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantPriceFeederPrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.quote !== undefined && object.quote !== null) {
            message.quote = object.quote;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.base = message.base === "" ? undefined : message.base;
        obj.quote = message.quote === "" ? undefined : message.quote;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantPriceFeederPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GrantPriceFeederPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.GrantPriceFeederPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
            value: exports.GrantPriceFeederPrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseGrantProviderPrivilegeProposal() {
    return {
        title: "",
        description: "",
        provider: "",
        relayers: []
    };
}
exports.GrantProviderPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.provider !== "") {
            writer.uint32(26).string(message.provider);
        }
        for (const v of message.relayers) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantProviderPrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.provider = reader.string();
                    break;
                case 4:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantProviderPrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.provider = object.provider ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantProviderPrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.provider = message.provider === "" ? undefined : message.provider;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantProviderPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GrantProviderPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.GrantProviderPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
            value: exports.GrantProviderPrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseRevokeProviderPrivilegeProposal() {
    return {
        title: "",
        description: "",
        provider: "",
        relayers: []
    };
}
exports.RevokeProviderPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.provider !== "") {
            writer.uint32(26).string(message.provider);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeProviderPrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.provider = reader.string();
                    break;
                case 5:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRevokeProviderPrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.provider = object.provider ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRevokeProviderPrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.provider = message.provider === "" ? undefined : message.provider;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RevokeProviderPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RevokeProviderPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RevokeProviderPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
            value: exports.RevokeProviderPrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseRevokePriceFeederPrivilegeProposal() {
    return {
        title: "",
        description: "",
        base: "",
        quote: "",
        relayers: []
    };
}
exports.RevokePriceFeederPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(34).string(message.quote);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokePriceFeederPrivilegeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.quote = reader.string();
                    break;
                case 5:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRevokePriceFeederPrivilegeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRevokePriceFeederPrivilegeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.quote !== undefined && object.quote !== null) {
            message.quote = object.quote;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.base = message.base === "" ? undefined : message.base;
        obj.quote = message.quote === "" ? undefined : message.quote;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RevokePriceFeederPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RevokePriceFeederPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RevokePriceFeederPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
            value: exports.RevokePriceFeederPrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseAuthorizeBandOracleRequestProposal() {
    return {
        title: "",
        description: "",
        request: oracle_1.BandOracleRequest.fromPartial({})
    };
}
exports.AuthorizeBandOracleRequestProposal = {
    typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.request !== undefined) {
            oracle_1.BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthorizeBandOracleRequestProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.request = oracle_1.BandOracleRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuthorizeBandOracleRequestProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.request = object.request !== undefined && object.request !== null ? oracle_1.BandOracleRequest.fromPartial(object.request) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuthorizeBandOracleRequestProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.request !== undefined && object.request !== null) {
            message.request = oracle_1.BandOracleRequest.fromAmino(object.request);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.request = message.request ? oracle_1.BandOracleRequest.toAmino(message.request) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthorizeBandOracleRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AuthorizeBandOracleRequestProposal.decode(message.value);
    },
    toProto(message) {
        return exports.AuthorizeBandOracleRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
            value: exports.AuthorizeBandOracleRequestProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateBandOracleRequestProposal() {
    return {
        title: "",
        description: "",
        deleteRequestId: BigInt(0),
        updateOracleRequest: undefined
    };
}
exports.UpdateBandOracleRequestProposal = {
    typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.deleteRequestId !== BigInt(0)) {
            writer.uint32(24).uint64(message.deleteRequestId);
        }
        if (message.updateOracleRequest !== undefined) {
            oracle_1.BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateBandOracleRequestProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.deleteRequestId = reader.uint64();
                    break;
                case 4:
                    message.updateOracleRequest = oracle_1.BandOracleRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateBandOracleRequestProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.deleteRequestId = object.deleteRequestId !== undefined && object.deleteRequestId !== null ? BigInt(object.deleteRequestId.toString()) : BigInt(0);
        message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? oracle_1.BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateBandOracleRequestProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.delete_request_id !== undefined && object.delete_request_id !== null) {
            message.deleteRequestId = BigInt(object.delete_request_id);
        }
        if (object.update_oracle_request !== undefined && object.update_oracle_request !== null) {
            message.updateOracleRequest = oracle_1.BandOracleRequest.fromAmino(object.update_oracle_request);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.delete_request_id = message.deleteRequestId !== BigInt(0) ? (message.deleteRequestId?.toString)() : undefined;
        obj.update_oracle_request = message.updateOracleRequest ? oracle_1.BandOracleRequest.toAmino(message.updateOracleRequest) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateBandOracleRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateBandOracleRequestProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateBandOracleRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
            value: exports.UpdateBandOracleRequestProposal.encode(message).finish()
        };
    }
};
function createBaseEnableBandIBCProposal() {
    return {
        title: "",
        description: "",
        bandIbcParams: oracle_1.BandIBCParams.fromPartial({})
    };
}
exports.EnableBandIBCProposal = {
    typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.bandIbcParams !== undefined) {
            oracle_1.BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnableBandIBCProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.bandIbcParams = oracle_1.BandIBCParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnableBandIBCProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? oracle_1.BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnableBandIBCProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
            message.bandIbcParams = oracle_1.BandIBCParams.fromAmino(object.band_ibc_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.band_ibc_params = message.bandIbcParams ? oracle_1.BandIBCParams.toAmino(message.bandIbcParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnableBandIBCProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnableBandIBCProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EnableBandIBCProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
            value: exports.EnableBandIBCProposal.encode(message).finish()
        };
    }
};
