//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseDepositDeploymentAuthorization() {
    return {
        $typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        spendLimit: Coin.fromPartial({})
    };
}
export const DepositDeploymentAuthorization = {
    typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.spendLimit !== undefined) {
            Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositDeploymentAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositDeploymentAuthorization();
        message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositDeploymentAuthorization();
        if (object.spend_limit !== undefined && object.spend_limit !== null) {
            message.spendLimit = Coin.fromAmino(object.spend_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return DepositDeploymentAuthorization.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DepositDeploymentAuthorization.decode(message.value);
    },
    toProto(message) {
        return DepositDeploymentAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
            value: DepositDeploymentAuthorization.encode(message).finish()
        };
    }
};
