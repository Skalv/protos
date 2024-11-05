//@ts-nocheck
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseEthAccount() {
    return {
        $typeUrl: "/injective.types.v1beta1.EthAccount",
        baseAccount: undefined,
        codeHash: new Uint8Array()
    };
}
export const EthAccount = {
    typeUrl: "/injective.types.v1beta1.EthAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEthAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEthAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = BaseAccount.fromAmino(object.base_account);
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = bytesFromBase64(object.code_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EthAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EthAccount.decode(message.value);
    },
    toProto(message) {
        return EthAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.EthAccount",
            value: EthAccount.encode(message).finish()
        };
    }
};
