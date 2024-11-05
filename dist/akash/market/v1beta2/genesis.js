"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const order_1 = require("./order");
const lease_1 = require("./lease");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        orders: [],
        leases: [],
        params: params_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/akash.market.v1beta2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.leases) {
            lease_1.Lease.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.leases.push(lease_1.Lease.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.orders = object.orders?.map(e => order_1.Order.fromPartial(e)) || [];
        message.leases = object.leases?.map(e => lease_1.Lease.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.orders = object.orders?.map(e => order_1.Order.fromAmino(e)) || [];
        message.leases = object.leases?.map(e => lease_1.Lease.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? order_1.Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        if (message.leases) {
            obj.leases = message.leases.map(e => e ? lease_1.Lease.toAmino(e) : undefined);
        }
        else {
            obj.leases = message.leases;
        }
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.toAmino(params_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
