//@ts-nocheck
import { PlacementRequirements } from "../../base/v1beta2/attribute";
import { Resource } from "./resource";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGroupSpec() {
    return {
        name: "",
        requirements: PlacementRequirements.fromPartial({}),
        resources: []
    };
}
export const GroupSpec = {
    typeUrl: "/akash.deployment.v1beta2.GroupSpec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requirements = PlacementRequirements.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources.push(Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupSpec();
        message.name = object.name ?? "";
        message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
        message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupSpec();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = PlacementRequirements.fromAmino(object.requirements);
        }
        message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name ?? "";
        obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : PlacementRequirements.toAmino(PlacementRequirements.fromPartial({}));
        if (message.resources) {
            obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
        }
        else {
            obj.resources = message.resources;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GroupSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GroupSpec.decode(message.value);
    },
    toProto(message) {
        return GroupSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GroupSpec",
            value: GroupSpec.encode(message).finish()
        };
    }
};
