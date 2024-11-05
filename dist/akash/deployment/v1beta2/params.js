"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        deploymentMinDeposit: coin_1.Coin.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/akash.deployment.v1beta2.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deploymentMinDeposit !== undefined) {
            coin_1.Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
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
        message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? coin_1.Coin.fromPartial(object.deploymentMinDeposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.deployment_min_deposit !== undefined && object.deployment_min_deposit !== null) {
            message.deploymentMinDeposit = coin_1.Coin.fromAmino(object.deployment_min_deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment_min_deposit = message.deploymentMinDeposit ? coin_1.Coin.toAmino(message.deploymentMinDeposit) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
