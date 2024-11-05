//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        bidMinDeposit: Coin.fromPartial({}),
        orderMaxBids: 0
    };
}
export const Params = {
    typeUrl: "/akash.market.v1beta2.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidMinDeposit !== undefined) {
            Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderMaxBids !== 0) {
            writer.uint32(16).uint32(message.orderMaxBids);
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
                    message.bidMinDeposit = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderMaxBids = reader.uint32();
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
        message.bidMinDeposit = object.bidMinDeposit !== undefined && object.bidMinDeposit !== null ? Coin.fromPartial(object.bidMinDeposit) : undefined;
        message.orderMaxBids = object.orderMaxBids ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.bid_min_deposit !== undefined && object.bid_min_deposit !== null) {
            message.bidMinDeposit = Coin.fromAmino(object.bid_min_deposit);
        }
        if (object.order_max_bids !== undefined && object.order_max_bids !== null) {
            message.orderMaxBids = object.order_max_bids;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
        obj.order_max_bids = message.orderMaxBids ?? 0;
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
            typeUrl: "/akash.market.v1beta2.Params",
            value: Params.encode(message).finish()
        };
    }
};
