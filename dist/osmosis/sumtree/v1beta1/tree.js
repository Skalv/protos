"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Child = exports.Node = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseNode() {
    return {
        children: []
    };
}
exports.Node = {
    typeUrl: "/osmosis.store.v1beta1.Node",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.children) {
            exports.Child.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.children.push(exports.Child.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNode();
        message.children = object.children?.map(e => exports.Child.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseNode();
        message.children = object.children?.map(e => exports.Child.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map(e => e ? exports.Child.toAmino(e) : undefined);
        }
        else {
            obj.children = message.children;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Node.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/node",
            value: exports.Node.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Node.decode(message.value);
    },
    toProto(message) {
        return exports.Node.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Node",
            value: exports.Node.encode(message).finish()
        };
    }
};
function createBaseChild() {
    return {
        index: new Uint8Array(),
        accumulation: ""
    };
}
exports.Child = {
    typeUrl: "/osmosis.store.v1beta1.Child",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.accumulation !== "") {
            writer.uint32(18).string(message.accumulation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChild();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.bytes();
                    break;
                case 2:
                    message.accumulation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseChild();
        message.index = object.index ?? new Uint8Array();
        message.accumulation = object.accumulation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChild();
        if (object.index !== undefined && object.index !== null) {
            message.index = (0, helpers_1.bytesFromBase64)(object.index);
        }
        if (object.accumulation !== undefined && object.accumulation !== null) {
            message.accumulation = object.accumulation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? (0, helpers_1.base64FromBytes)(message.index) : undefined;
        obj.accumulation = message.accumulation === "" ? undefined : message.accumulation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Child.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/child",
            value: exports.Child.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Child.decode(message.value);
    },
    toProto(message) {
        return exports.Child.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Child",
            value: exports.Child.encode(message).finish()
        };
    }
};
function createBaseLeaf() {
    return {
        leaf: undefined
    };
}
exports.Leaf = {
    typeUrl: "/osmosis.store.v1beta1.Leaf",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaf !== undefined) {
            exports.Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf = exports.Child.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLeaf();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.Child.fromPartial(object.leaf) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLeaf();
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = exports.Child.fromAmino(object.leaf);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.leaf = message.leaf ? exports.Child.toAmino(message.leaf) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Leaf.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/leaf",
            value: exports.Leaf.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Leaf.decode(message.value);
    },
    toProto(message) {
        return exports.Leaf.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Leaf",
            value: exports.Leaf.encode(message).finish()
        };
    }
};
