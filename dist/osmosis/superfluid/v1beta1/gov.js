"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnpoolWhiteListProposal = exports.RemoveSuperfluidAssetsProposal = exports.SetSuperfluidAssetsProposal = void 0;
//@ts-nocheck
const superfluid_1 = require("../superfluid");
const binary_1 = require("../../../binary");
function createBaseSetSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        title: "",
        description: "",
        assets: []
    };
}
exports.SetSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSuperfluidAssetsProposal();
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
                    message.assets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetSuperfluidAssetsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SetSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/set-superfluid-assets-proposal",
            value: exports.SetSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SetSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
            value: exports.SetSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
function createBaseRemoveSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        title: "",
        description: "",
        superfluidAssetDenoms: []
    };
}
exports.RemoveSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.superfluidAssetDenoms) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveSuperfluidAssetsProposal();
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
                    message.superfluidAssetDenoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRemoveSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.superfluidAssetDenoms = object.superfluidAssetDenoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRemoveSuperfluidAssetsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.superfluidAssetDenoms = object.superfluid_asset_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.superfluidAssetDenoms) {
            obj.superfluid_asset_denoms = message.superfluidAssetDenoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = message.superfluidAssetDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RemoveSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/del-superfluid-assets-proposal",
            value: exports.RemoveSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RemoveSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RemoveSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
            value: exports.RemoveSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateUnpoolWhiteListProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        title: "",
        description: "",
        ids: [],
        isOverwrite: false
    };
}
exports.UpdateUnpoolWhiteListProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.isOverwrite === true) {
            writer.uint32(32).bool(message.isOverwrite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUnpoolWhiteListProposal();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.isOverwrite = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateUnpoolWhiteListProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        message.isOverwrite = object.isOverwrite ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateUnpoolWhiteListProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        if (object.is_overwrite !== undefined && object.is_overwrite !== null) {
            message.isOverwrite = object.is_overwrite;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = message.ids;
        }
        obj.is_overwrite = message.isOverwrite === false ? undefined : message.isOverwrite;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateUnpoolWhiteListProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/update-unpool-whitelist",
            value: exports.UpdateUnpoolWhiteListProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateUnpoolWhiteListProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateUnpoolWhiteListProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
            value: exports.UpdateUnpoolWhiteListProposal.encode(message).finish()
        };
    }
};
