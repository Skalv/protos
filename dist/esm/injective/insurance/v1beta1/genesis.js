//@ts-nocheck
import { Params, InsuranceFund, RedemptionSchedule } from "./insurance";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        insuranceFunds: [],
        redemptionSchedule: [],
        nextShareDenomId: BigInt(0),
        nextRedemptionScheduleId: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/injective.insurance.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.insuranceFunds) {
            InsuranceFund.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.redemptionSchedule) {
            RedemptionSchedule.encode(v, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.insuranceFunds.push(InsuranceFund.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.redemptionSchedule.push(RedemptionSchedule.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.insuranceFunds = object.insuranceFunds?.map(e => InsuranceFund.fromPartial(e)) || [];
        message.redemptionSchedule = object.redemptionSchedule?.map(e => RedemptionSchedule.fromPartial(e)) || [];
        message.nextShareDenomId = object.nextShareDenomId !== undefined && object.nextShareDenomId !== null ? BigInt(object.nextShareDenomId.toString()) : BigInt(0);
        message.nextRedemptionScheduleId = object.nextRedemptionScheduleId !== undefined && object.nextRedemptionScheduleId !== null ? BigInt(object.nextRedemptionScheduleId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.insuranceFunds = object.insurance_funds?.map(e => InsuranceFund.fromAmino(e)) || [];
        message.redemptionSchedule = object.redemption_schedule?.map(e => RedemptionSchedule.fromAmino(e)) || [];
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
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.insuranceFunds) {
            obj.insurance_funds = message.insuranceFunds.map(e => e ? InsuranceFund.toAmino(e) : undefined);
        }
        else {
            obj.insurance_funds = message.insuranceFunds;
        }
        if (message.redemptionSchedule) {
            obj.redemption_schedule = message.redemptionSchedule.map(e => e ? RedemptionSchedule.toAmino(e) : undefined);
        }
        else {
            obj.redemption_schedule = message.redemptionSchedule;
        }
        obj.next_share_denom_id = message.nextShareDenomId !== BigInt(0) ? (message.nextShareDenomId?.toString)() : undefined;
        obj.next_redemption_schedule_id = message.nextRedemptionScheduleId !== BigInt(0) ? (message.nextRedemptionScheduleId?.toString)() : undefined;
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
            typeUrl: "/injective.insurance.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
