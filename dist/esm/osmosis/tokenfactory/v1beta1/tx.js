//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        subdenom: ""
    };
}
export const MsgCreateDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.sender = object.sender ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDenom();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subdenom !== undefined && object.subdenom !== null) {
            message.subdenom = object.subdenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subdenom = message.subdenom === "" ? undefined : message.subdenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/create-denom",
            value: MsgCreateDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
            value: MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: ""
    };
}
export const MsgCreateDenomResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.newTokenDenom !== "") {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newTokenDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenomResponse();
        message.newTokenDenom = object.newTokenDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDenomResponse();
        if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
            message.newTokenDenom = object.new_token_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_token_denom = message.newTokenDenom === "" ? undefined : message.newTokenDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/create-denom-response",
            value: MsgCreateDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
            value: MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMint() {
    return {
        sender: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgMint = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMint();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/mint",
            value: MsgMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMint.decode(message.value);
    },
    toProto(message) {
        return MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
            value: MsgMint.encode(message).finish()
        };
    }
};
function createBaseMsgMintResponse() {
    return {};
}
export const MsgMintResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const message = createBaseMsgMintResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMintResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/mint-response",
            value: MsgMintResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
            value: MsgMintResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBurn = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBurn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/burn",
            value: MsgBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBurn.decode(message.value);
    },
    toProto(message) {
        return MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
            value: MsgBurn.encode(message).finish()
        };
    }
};
function createBaseMsgBurnResponse() {
    return {};
}
export const MsgBurnResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const message = createBaseMsgBurnResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBurnResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/burn-response",
            value: MsgBurnResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
            value: MsgBurnResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdmin() {
    return {
        sender: "",
        denom: "",
        newAdmin: ""
    };
}
export const MsgChangeAdmin = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAdmin();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChangeAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChangeAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/change-admin",
            value: MsgChangeAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
            value: MsgChangeAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
export const MsgChangeAdminResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdminResponse();
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
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChangeAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/change-admin-response",
            value: MsgChangeAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
            value: MsgChangeAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        sender: "",
        metadata: Metadata.fromPartial({})
    };
}
export const MsgSetDenomMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.sender = object.sender ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomMetadata();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDenomMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/set-denom-metadata",
            value: MsgSetDenomMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
            value: MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
export const MsgSetDenomMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadataResponse();
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
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/set-denom-metadata-response",
            value: MsgSetDenomMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
            value: MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
