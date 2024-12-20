//@ts-nocheck
import { ValidatorPreference } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseUserValidatorPreferencesRequest() {
    return {
        address: ""
    };
}
export const UserValidatorPreferencesRequest = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseUserValidatorPreferencesRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserValidatorPreferencesRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return UserValidatorPreferencesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/user-validator-preferences-request",
            value: UserValidatorPreferencesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UserValidatorPreferencesRequest.decode(message.value);
    },
    toProto(message) {
        return UserValidatorPreferencesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
            value: UserValidatorPreferencesRequest.encode(message).finish()
        };
    }
};
function createBaseUserValidatorPreferencesResponse() {
    return {
        preferences: []
    };
}
export const UserValidatorPreferencesResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.preferences) {
            ValidatorPreference.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserValidatorPreferencesResponse();
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserValidatorPreferencesResponse();
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UserValidatorPreferencesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/user-validator-preferences-response",
            value: UserValidatorPreferencesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UserValidatorPreferencesResponse.decode(message.value);
    },
    toProto(message) {
        return UserValidatorPreferencesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
            value: UserValidatorPreferencesResponse.encode(message).finish()
        };
    }
};
