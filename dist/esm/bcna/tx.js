//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
function createBaseMsgCreateBitcannaid() {
    return {
        creator: "",
        bcnaid: "",
        address: ""
    };
}
export const MsgCreateBitcannaid = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.bcnaid !== "") {
            writer.uint32(18).string(message.bcnaid);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBitcannaid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.bcnaid = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBitcannaid();
        message.creator = object.creator ?? "";
        message.bcnaid = object.bcnaid ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBitcannaid();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = object.bcnaid;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.bcnaid = message.bcnaid === "" ? undefined : message.bcnaid;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBitcannaid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBitcannaid.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBitcannaid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
            value: MsgCreateBitcannaid.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBitcannaidResponse() {
    return {
        id: BigInt(0)
    };
}
export const MsgCreateBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBitcannaidResponse();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBitcannaidResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse",
            value: MsgCreateBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBitcannaid() {
    return {
        creator: "",
        id: BigInt(0),
        bcnaid: "",
        address: ""
    };
}
export const MsgUpdateBitcannaid = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.bcnaid !== "") {
            writer.uint32(26).string(message.bcnaid);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBitcannaid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.bcnaid = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateBitcannaid();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.bcnaid = object.bcnaid ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateBitcannaid();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = object.bcnaid;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.bcnaid = message.bcnaid === "" ? undefined : message.bcnaid;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateBitcannaid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateBitcannaid.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBitcannaid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
            value: MsgUpdateBitcannaid.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBitcannaidResponse() {
    return {};
}
export const MsgUpdateBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateBitcannaidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateBitcannaidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse",
            value: MsgUpdateBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteBitcannaid() {
    return {
        creator: "",
        id: BigInt(0)
    };
}
export const MsgDeleteBitcannaid = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteBitcannaid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteBitcannaid();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeleteBitcannaid();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteBitcannaid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteBitcannaid.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteBitcannaid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
            value: MsgDeleteBitcannaid.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteBitcannaidResponse() {
    return {};
}
export const MsgDeleteBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteBitcannaidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeleteBitcannaidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse",
            value: MsgDeleteBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSupplychain() {
    return {
        creator: "",
        product: "",
        info: "",
        supplyinfo: ""
    };
}
export const MsgCreateSupplychain = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.product !== "") {
            writer.uint32(18).string(message.product);
        }
        if (message.info !== "") {
            writer.uint32(26).string(message.info);
        }
        if (message.supplyinfo !== "") {
            writer.uint32(34).string(message.supplyinfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSupplychain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.product = reader.string();
                    break;
                case 3:
                    message.info = reader.string();
                    break;
                case 4:
                    message.supplyinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSupplychain();
        message.creator = object.creator ?? "";
        message.product = object.product ?? "";
        message.info = object.info ?? "";
        message.supplyinfo = object.supplyinfo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSupplychain();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.product !== undefined && object.product !== null) {
            message.product = object.product;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
            message.supplyinfo = object.supplyinfo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.product = message.product === "" ? undefined : message.product;
        obj.info = message.info === "" ? undefined : message.info;
        obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSupplychain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSupplychain.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSupplychain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
            value: MsgCreateSupplychain.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSupplychainResponse() {
    return {
        id: BigInt(0)
    };
}
export const MsgCreateSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSupplychainResponse();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSupplychainResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse",
            value: MsgCreateSupplychainResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSupplychain() {
    return {
        creator: "",
        id: BigInt(0),
        product: "",
        info: "",
        supplyinfo: ""
    };
}
export const MsgUpdateSupplychain = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.product !== "") {
            writer.uint32(26).string(message.product);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.supplyinfo !== "") {
            writer.uint32(42).string(message.supplyinfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSupplychain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.product = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.supplyinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateSupplychain();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.product = object.product ?? "";
        message.info = object.info ?? "";
        message.supplyinfo = object.supplyinfo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateSupplychain();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.product !== undefined && object.product !== null) {
            message.product = object.product;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
            message.supplyinfo = object.supplyinfo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.product = message.product === "" ? undefined : message.product;
        obj.info = message.info === "" ? undefined : message.info;
        obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateSupplychain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateSupplychain.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateSupplychain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
            value: MsgUpdateSupplychain.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSupplychainResponse() {
    return {};
}
export const MsgUpdateSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateSupplychainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateSupplychainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse",
            value: MsgUpdateSupplychainResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteSupplychain() {
    return {
        creator: "",
        id: BigInt(0)
    };
}
export const MsgDeleteSupplychain = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteSupplychain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteSupplychain();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeleteSupplychain();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteSupplychain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteSupplychain.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteSupplychain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
            value: MsgDeleteSupplychain.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteSupplychainResponse() {
    return {};
}
export const MsgDeleteSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteSupplychainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeleteSupplychainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse",
            value: MsgDeleteSupplychainResponse.encode(message).finish()
        };
    }
};
