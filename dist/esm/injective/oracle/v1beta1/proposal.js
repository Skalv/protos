//@ts-nocheck
import { BandOracleRequest, BandIBCParams } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGrantBandOraclePrivilegeProposal() {
    return {
        title: "",
        description: "",
        relayers: []
    };
}
export const GrantBandOraclePrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GrantBandOraclePrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GrantBandOraclePrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return GrantBandOraclePrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
            value: GrantBandOraclePrivilegeProposal.encode(message).finish()
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
export const RevokeBandOraclePrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return RevokeBandOraclePrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RevokeBandOraclePrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return RevokeBandOraclePrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
            value: RevokeBandOraclePrivilegeProposal.encode(message).finish()
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
export const GrantPriceFeederPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GrantPriceFeederPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GrantPriceFeederPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return GrantPriceFeederPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
            value: GrantPriceFeederPrivilegeProposal.encode(message).finish()
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
export const GrantProviderPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GrantProviderPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GrantProviderPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return GrantProviderPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
            value: GrantProviderPrivilegeProposal.encode(message).finish()
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
export const RevokeProviderPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return RevokeProviderPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RevokeProviderPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return RevokeProviderPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
            value: RevokeProviderPrivilegeProposal.encode(message).finish()
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
export const RevokePriceFeederPrivilegeProposal = {
    typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return RevokePriceFeederPrivilegeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RevokePriceFeederPrivilegeProposal.decode(message.value);
    },
    toProto(message) {
        return RevokePriceFeederPrivilegeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
            value: RevokePriceFeederPrivilegeProposal.encode(message).finish()
        };
    }
};
function createBaseAuthorizeBandOracleRequestProposal() {
    return {
        title: "",
        description: "",
        request: BandOracleRequest.fromPartial({})
    };
}
export const AuthorizeBandOracleRequestProposal = {
    typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.request !== undefined) {
            BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.request = BandOracleRequest.decode(reader, reader.uint32());
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
        message.request = object.request !== undefined && object.request !== null ? BandOracleRequest.fromPartial(object.request) : undefined;
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
            message.request = BandOracleRequest.fromAmino(object.request);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.request = message.request ? BandOracleRequest.toAmino(message.request) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AuthorizeBandOracleRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AuthorizeBandOracleRequestProposal.decode(message.value);
    },
    toProto(message) {
        return AuthorizeBandOracleRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
            value: AuthorizeBandOracleRequestProposal.encode(message).finish()
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
export const UpdateBandOracleRequestProposal = {
    typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
    encode(message, writer = BinaryWriter.create()) {
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
            BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.updateOracleRequest = BandOracleRequest.decode(reader, reader.uint32());
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
        message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
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
            message.updateOracleRequest = BandOracleRequest.fromAmino(object.update_oracle_request);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.delete_request_id = message.deleteRequestId !== BigInt(0) ? (message.deleteRequestId?.toString)() : undefined;
        obj.update_oracle_request = message.updateOracleRequest ? BandOracleRequest.toAmino(message.updateOracleRequest) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateBandOracleRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateBandOracleRequestProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateBandOracleRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
            value: UpdateBandOracleRequestProposal.encode(message).finish()
        };
    }
};
function createBaseEnableBandIBCProposal() {
    return {
        title: "",
        description: "",
        bandIbcParams: BandIBCParams.fromPartial({})
    };
}
export const EnableBandIBCProposal = {
    typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.bandIbcParams !== undefined) {
            BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
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
        message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
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
            message.bandIbcParams = BandIBCParams.fromAmino(object.band_ibc_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EnableBandIBCProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EnableBandIBCProposal.decode(message.value);
    },
    toProto(message) {
        return EnableBandIBCProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
            value: EnableBandIBCProposal.encode(message).finish()
        };
    }
};
