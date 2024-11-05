//@ts-nocheck
import { TokenPairArbRoutes } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSetHotRoutes() {
    return {
        admin: "",
        hotRoutes: []
    };
}
export const MsgSetHotRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hotRoutes) {
            TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetHotRoutes();
        message.admin = object.admin ?? "";
        message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetHotRoutes();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.hotRoutes = object.hot_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.hotRoutes) {
            obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.hot_routes = message.hotRoutes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetHotRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetHotRoutes",
            value: MsgSetHotRoutes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutes.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
            value: MsgSetHotRoutes.encode(message).finish()
        };
    }
};
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
export const MsgSetHotRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutesResponse();
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
        const message = createBaseMsgSetHotRoutesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetHotRoutesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetHotRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-hot-routes-response",
            value: MsgSetHotRoutesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
            value: MsgSetHotRoutesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: "",
        developerAccount: ""
    };
}
export const MsgSetDeveloperAccount = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.developerAccount !== "") {
            writer.uint32(18).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.developerAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDeveloperAccount();
        message.admin = object.admin ?? "";
        message.developerAccount = object.developerAccount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDeveloperAccount();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.developer_account !== undefined && object.developer_account !== null) {
            message.developerAccount = object.developer_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.developer_account = message.developerAccount === "" ? undefined : message.developerAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDeveloperAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetDeveloperAccount",
            value: MsgSetDeveloperAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccount.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
            value: MsgSetDeveloperAccount.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
export const MsgSetDeveloperAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccountResponse();
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
        const message = createBaseMsgSetDeveloperAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetDeveloperAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-developer-account-response",
            value: MsgSetDeveloperAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
            value: MsgSetDeveloperAccountResponse.encode(message).finish()
        };
    }
};
