"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const binary_1 = require("../../../binary");
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        subdenom: ""
    };
}
exports.MsgCreateDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/create-denom",
            value: exports.MsgCreateDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
            value: exports.MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: ""
    };
}
exports.MsgCreateDenomResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.newTokenDenom !== "") {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/create-denom-response",
            value: exports.MsgCreateDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
            value: exports.MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMint() {
    return {
        sender: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgMint = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMint();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/mint",
            value: exports.MsgMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMint.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
            value: exports.MsgMint.encode(message).finish()
        };
    }
};
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgMintResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/mint-response",
            value: exports.MsgMintResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
            value: exports.MsgMintResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgBurn = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBurn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/burn",
            value: exports.MsgBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBurn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
            value: exports.MsgBurn.encode(message).finish()
        };
    }
};
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBurnResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/burn-response",
            value: exports.MsgBurnResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
            value: exports.MsgBurnResponse.encode(message).finish()
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
exports.MsgChangeAdmin = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChangeAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/change-admin",
            value: exports.MsgChangeAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
            value: exports.MsgChangeAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
exports.MsgChangeAdminResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChangeAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/change-admin-response",
            value: exports.MsgChangeAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
            value: exports.MsgChangeAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        sender: "",
        metadata: bank_1.Metadata.fromPartial({})
    };
}
exports.MsgSetDenomMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
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
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomMetadata();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bank_1.Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.metadata = message.metadata ? bank_1.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/set-denom-metadata",
            value: exports.MsgSetDenomMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
            value: exports.MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/set-denom-metadata-response",
            value: exports.MsgSetDenomMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
            value: exports.MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
