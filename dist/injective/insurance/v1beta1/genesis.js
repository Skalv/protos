"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const insurance_1 = require("./insurance");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: insurance_1.Params.fromPartial({}),
        insuranceFunds: [],
        redemptionSchedule: [],
        nextShareDenomId: BigInt(0),
        nextRedemptionScheduleId: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/injective.insurance.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            insurance_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.insuranceFunds) {
            insurance_1.InsuranceFund.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.redemptionSchedule) {
            insurance_1.RedemptionSchedule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextShareDenomId !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextShareDenomId);
        }
        if (message.nextRedemptionScheduleId !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextRedemptionScheduleId);
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
                    message.params = insurance_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.insuranceFunds.push(insurance_1.InsuranceFund.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.redemptionSchedule.push(insurance_1.RedemptionSchedule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.nextShareDenomId = reader.uint64();
                    break;
                case 5:
                    message.nextRedemptionScheduleId = reader.uint64();
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
        message.params = object.params !== undefined && object.params !== null ? insurance_1.Params.fromPartial(object.params) : undefined;
        message.insuranceFunds = object.insuranceFunds?.map(e => insurance_1.InsuranceFund.fromPartial(e)) || [];
        message.redemptionSchedule = object.redemptionSchedule?.map(e => insurance_1.RedemptionSchedule.fromPartial(e)) || [];
        message.nextShareDenomId = object.nextShareDenomId !== undefined && object.nextShareDenomId !== null ? BigInt(object.nextShareDenomId.toString()) : BigInt(0);
        message.nextRedemptionScheduleId = object.nextRedemptionScheduleId !== undefined && object.nextRedemptionScheduleId !== null ? BigInt(object.nextRedemptionScheduleId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = insurance_1.Params.fromAmino(object.params);
        }
        message.insuranceFunds = object.insurance_funds?.map(e => insurance_1.InsuranceFund.fromAmino(e)) || [];
        message.redemptionSchedule = object.redemption_schedule?.map(e => insurance_1.RedemptionSchedule.fromAmino(e)) || [];
        if (object.next_share_denom_id !== undefined && object.next_share_denom_id !== null) {
            message.nextShareDenomId = BigInt(object.next_share_denom_id);
        }
        if (object.next_redemption_schedule_id !== undefined && object.next_redemption_schedule_id !== null) {
            message.nextRedemptionScheduleId = BigInt(object.next_redemption_schedule_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? insurance_1.Params.toAmino(message.params) : undefined;
        if (message.insuranceFunds) {
            obj.insurance_funds = message.insuranceFunds.map(e => e ? insurance_1.InsuranceFund.toAmino(e) : undefined);
        }
        else {
            obj.insurance_funds = message.insuranceFunds;
        }
        if (message.redemptionSchedule) {
            obj.redemption_schedule = message.redemptionSchedule.map(e => e ? insurance_1.RedemptionSchedule.toAmino(e) : undefined);
        }
        else {
            obj.redemption_schedule = message.redemptionSchedule;
        }
        obj.next_share_denom_id = message.nextShareDenomId !== BigInt(0) ? (message.nextShareDenomId?.toString)() : undefined;
        obj.next_redemption_schedule_id = message.nextRedemptionScheduleId !== BigInt(0) ? (message.nextRedemptionScheduleId?.toString)() : undefined;
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
            typeUrl: "/injective.insurance.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
