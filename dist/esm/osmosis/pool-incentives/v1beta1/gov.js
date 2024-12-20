//@ts-nocheck
import { DistrRecord } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseReplacePoolIncentivesProposal() {
    return {
        $typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
        title: "",
        description: "",
        records: []
    };
}
export const ReplacePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReplacePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseReplacePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseReplacePoolIncentivesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ReplacePoolIncentivesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/replace-pool-incentives-proposal",
            value: ReplacePoolIncentivesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ReplacePoolIncentivesProposal.decode(message.value);
    },
    toProto(message) {
        return ReplacePoolIncentivesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
            value: ReplacePoolIncentivesProposal.encode(message).finish()
        };
    }
};
function createBaseUpdatePoolIncentivesProposal() {
    return {
        $typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
        title: "",
        description: "",
        records: []
    };
}
export const UpdatePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdatePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdatePoolIncentivesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdatePoolIncentivesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/UpdatePoolIncentivesProposal",
            value: UpdatePoolIncentivesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpdatePoolIncentivesProposal.decode(message.value);
    },
    toProto(message) {
        return UpdatePoolIncentivesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
            value: UpdatePoolIncentivesProposal.encode(message).finish()
        };
    }
};
