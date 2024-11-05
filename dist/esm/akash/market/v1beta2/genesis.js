//@ts-nocheck
import { Order } from "./order";
import { Lease } from "./lease";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        orders: [],
        leases: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/akash.market.v1beta2.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.leases) {
            Lease.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.leases.push(Lease.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
        message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
        message.leases = object.leases?.map(e => Lease.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        if (message.leases) {
            obj.leases = message.leases.map(e => e ? Lease.toAmino(e) : undefined);
        }
        else {
            obj.leases = message.leases;
        }
        obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
