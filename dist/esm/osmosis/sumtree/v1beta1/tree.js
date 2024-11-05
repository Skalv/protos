//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseNode() {
    return {
        children: []
    };
}
export const Node = {
    typeUrl: "/osmosis.store.v1beta1.Node",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.children) {
            Child.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.children.push(Child.decode(reader, reader.uint32()));
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
        message.children = object.children?.map(e => Child.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseNode();
        message.children = object.children?.map(e => Child.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map(e => e ? Child.toAmino(e) : undefined);
        }
        else {
            obj.children = message.children;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Node.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/node",
            value: Node.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Node.decode(message.value);
    },
    toProto(message) {
        return Node.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Node",
            value: Node.encode(message).finish()
        };
    }
};
function createBaseChild() {
    return {
        index: new Uint8Array(),
        accumulation: ""
    };
}
export const Child = {
    typeUrl: "/osmosis.store.v1beta1.Child",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.accumulation !== "") {
            writer.uint32(18).string(message.accumulation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.index = bytesFromBase64(object.index);
        }
        if (object.accumulation !== undefined && object.accumulation !== null) {
            message.accumulation = object.accumulation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? base64FromBytes(message.index) : undefined;
        obj.accumulation = message.accumulation === "" ? undefined : message.accumulation;
        return obj;
    },
    fromAminoMsg(object) {
        return Child.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/child",
            value: Child.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Child.decode(message.value);
    },
    toProto(message) {
        return Child.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Child",
            value: Child.encode(message).finish()
        };
    }
};
function createBaseLeaf() {
    return {
        leaf: undefined
    };
}
export const Leaf = {
    typeUrl: "/osmosis.store.v1beta1.Leaf",
    encode(message, writer = BinaryWriter.create()) {
        if (message.leaf !== undefined) {
            Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf = Child.decode(reader, reader.uint32());
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
        message.leaf = object.leaf !== undefined && object.leaf !== null ? Child.fromPartial(object.leaf) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLeaf();
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = Child.fromAmino(object.leaf);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.leaf = message.leaf ? Child.toAmino(message.leaf) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Leaf.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/leaf",
            value: Leaf.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Leaf.decode(message.value);
    },
    toProto(message) {
        return Leaf.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Leaf",
            value: Leaf.encode(message).finish()
        };
    }
};
