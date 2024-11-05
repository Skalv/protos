//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgCreateRequest() {
    return {
        from: "",
        pairId: BigInt(0),
        amountIn: "",
        amountOut: ""
    };
}
export const MsgCreateRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.pairId !== BigInt(0)) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.amountIn !== "") {
            writer.uint32(26).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(34).string(message.amountOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.amountIn = reader.string();
                    break;
                case 4:
                    message.amountOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateRequest();
        message.from = object.from ?? "";
        message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
        message.amountIn = object.amountIn ?? "";
        message.amountOut = object.amountOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.pair_id !== undefined && object.pair_id !== null) {
            message.pairId = BigInt(object.pair_id);
        }
        if (object.amount_in !== undefined && object.amount_in !== null) {
            message.amountIn = object.amount_in;
        }
        if (object.amount_out !== undefined && object.amount_out !== null) {
            message.amountOut = object.amount_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.pair_id = message.pairId !== BigInt(0) ? (message.pairId?.toString)() : undefined;
        obj.amount_in = message.amountIn === "" ? undefined : message.amountIn;
        obj.amount_out = message.amountOut === "" ? undefined : message.amountOut;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateRequest.decode(message.value);
    },
    toProto(message) {
        return MsgCreateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest",
            value: MsgCreateRequest.encode(message).finish()
        };
    }
};
function createBaseMsgCreateResponse() {
    return {};
}
export const MsgCreateResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResponse();
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
        const message = createBaseMsgCreateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse",
            value: MsgCreateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositRequest() {
    return {
        from: "",
        id: BigInt(0),
        amount: ""
    };
}
export const MsgDepositRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositRequest.decode(message.value);
    },
    toProto(message) {
        return MsgDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest",
            value: MsgDepositRequest.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawRequest() {
    return {
        from: "",
        id: BigInt(0),
        amount: ""
    };
}
export const MsgWithdrawRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawRequest.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest",
            value: MsgWithdrawRequest.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawResponse() {
    return {};
}
export const MsgWithdrawResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
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
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse",
            value: MsgWithdrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDrawRequest() {
    return {
        from: "",
        id: BigInt(0),
        amount: ""
    };
}
export const MsgDrawRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDrawRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDrawRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDrawRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDrawRequest.decode(message.value);
    },
    toProto(message) {
        return MsgDrawRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest",
            value: MsgDrawRequest.encode(message).finish()
        };
    }
};
function createBaseMsgDrawResponse() {
    return {};
}
export const MsgDrawResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawResponse();
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
        const message = createBaseMsgDrawResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDrawResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDrawResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse",
            value: MsgDrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRepayRequest() {
    return {
        from: "",
        id: BigInt(0),
        amount: ""
    };
}
export const MsgRepayRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRepayRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRepayRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRepayRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRepayRequest.decode(message.value);
    },
    toProto(message) {
        return MsgRepayRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest",
            value: MsgRepayRequest.encode(message).finish()
        };
    }
};
function createBaseMsgRepayResponse() {
    return {};
}
export const MsgRepayResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayResponse();
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
        const message = createBaseMsgRepayResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRepayResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRepayResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRepayResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRepayResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse",
            value: MsgRepayResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseRequest() {
    return {
        from: "",
        id: BigInt(0)
    };
}
export const MsgCloseRequest = {
    typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
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
        const message = createBaseMsgCloseRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseRequest.decode(message.value);
    },
    toProto(message) {
        return MsgCloseRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest",
            value: MsgCloseRequest.encode(message).finish()
        };
    }
};
function createBaseMsgCloseResponse() {
    return {};
}
export const MsgCloseResponse = {
    typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseResponse();
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
        const message = createBaseMsgCloseResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCloseResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse",
            value: MsgCloseResponse.encode(message).finish()
        };
    }
};
