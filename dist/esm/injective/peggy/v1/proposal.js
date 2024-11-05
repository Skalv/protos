//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseBlacklistEthereumAddressesProposal() {
    return {
        title: "",
        description: "",
        blacklistAddresses: []
    };
}
export const BlacklistEthereumAddressesProposal = {
    typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.blacklistAddresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlacklistEthereumAddressesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.blacklistAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlacklistEthereumAddressesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlacklistEthereumAddressesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.blacklistAddresses) {
            obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
        }
        else {
            obj.blacklist_addresses = message.blacklistAddresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BlacklistEthereumAddressesProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlacklistEthereumAddressesProposal.decode(message.value);
    },
    toProto(message) {
        return BlacklistEthereumAddressesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
            value: BlacklistEthereumAddressesProposal.encode(message).finish()
        };
    }
};
function createBaseRevokeEthereumBlacklistProposal() {
    return {
        title: "",
        description: "",
        blacklistAddresses: []
    };
}
export const RevokeEthereumBlacklistProposal = {
    typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.blacklistAddresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeEthereumBlacklistProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.blacklistAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRevokeEthereumBlacklistProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRevokeEthereumBlacklistProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.blacklistAddresses) {
            obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
        }
        else {
            obj.blacklist_addresses = message.blacklistAddresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RevokeEthereumBlacklistProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RevokeEthereumBlacklistProposal.decode(message.value);
    },
    toProto(message) {
        return RevokeEthereumBlacklistProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
            value: RevokeEthereumBlacklistProposal.encode(message).finish()
        };
    }
};
