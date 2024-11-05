//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        deploymentMinDeposit: Coin.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/akash.deployment.v1beta2.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deploymentMinDeposit !== undefined) {
            Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.deployment_min_deposit !== undefined && object.deployment_min_deposit !== null) {
            message.deploymentMinDeposit = Coin.fromAmino(object.deployment_min_deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.Params",
            value: Params.encode(message).finish()
        };
    }
};
