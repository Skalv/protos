"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSpec = void 0;
//@ts-nocheck
const attribute_1 = require("../../base/v1beta2/attribute");
const resource_1 = require("./resource");
const binary_1 = require("../../../binary");
function createBaseGroupSpec() {
    return {
        name: "",
        requirements: attribute_1.PlacementRequirements.fromPartial({}),
        resources: []
    };
}
exports.GroupSpec = {
    typeUrl: "/akash.deployment.v1beta2.GroupSpec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            attribute_1.PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requirements = attribute_1.PlacementRequirements.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
        message.requirements = object.requirements !== undefined && object.requirements !== null ? attribute_1.PlacementRequirements.fromPartial(object.requirements) : undefined;
        message.resources = object.resources?.map(e => resource_1.Resource.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupSpec();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = attribute_1.PlacementRequirements.fromAmino(object.requirements);
        }
        message.resources = object.resources?.map(e => resource_1.Resource.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name ?? "";
        obj.requirements = message.requirements ? attribute_1.PlacementRequirements.toAmino(message.requirements) : attribute_1.PlacementRequirements.toAmino(attribute_1.PlacementRequirements.fromPartial({}));
        if (message.resources) {
            obj.resources = message.resources.map(e => e ? resource_1.Resource.toAmino(e) : undefined);
        }
        else {
            obj.resources = message.resources;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GroupSpec.decode(message.value);
    },
    toProto(message) {
        return exports.GroupSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GroupSpec",
            value: exports.GroupSpec.encode(message).finish()
        };
    }
};
