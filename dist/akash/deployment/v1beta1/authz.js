"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositDeploymentAuthorization = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseDepositDeploymentAuthorization() {
    return {
        $typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        spendLimit: coin_1.Coin.fromPartial({})
    };
}
exports.DepositDeploymentAuthorization = {
    typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spendLimit !== undefined) {
            coin_1.Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositDeploymentAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit = coin_1.Coin.decode(reader, reader.uint32());
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
        message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? coin_1.Coin.fromPartial(object.spendLimit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositDeploymentAuthorization();
        if (object.spend_limit !== undefined && object.spend_limit !== null) {
            message.spendLimit = coin_1.Coin.fromAmino(object.spend_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spend_limit = message.spendLimit ? coin_1.Coin.toAmino(message.spendLimit) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositDeploymentAuthorization.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DepositDeploymentAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.DepositDeploymentAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
            value: exports.DepositDeploymentAuthorization.encode(message).finish()
        };
    }
};
