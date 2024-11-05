//@ts-nocheck
import { SuperfluidAsset } from "../superfluid";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseSetSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        title: "",
        description: "",
        assets: []
    };
}
export const SetSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            SuperfluidAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
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
        message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
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
        message.assets = object.assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SetSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/set-superfluid-assets-proposal",
            value: SetSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SetSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return SetSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
            value: SetSuperfluidAssetsProposal.encode(message).finish()
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
export const RemoveSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return RemoveSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/del-superfluid-assets-proposal",
            value: RemoveSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RemoveSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return RemoveSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
            value: RemoveSuperfluidAssetsProposal.encode(message).finish()
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
export const UpdateUnpoolWhiteListProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return UpdateUnpoolWhiteListProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/update-unpool-whitelist",
            value: UpdateUnpoolWhiteListProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpdateUnpoolWhiteListProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateUnpoolWhiteListProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
            value: UpdateUnpoolWhiteListProposal.encode(message).finish()
        };
    }
};
