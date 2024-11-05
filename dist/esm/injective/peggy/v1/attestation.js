//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export var ClaimType;
(function (ClaimType) {
    ClaimType[ClaimType["CLAIM_TYPE_UNKNOWN"] = 0] = "CLAIM_TYPE_UNKNOWN";
    ClaimType[ClaimType["CLAIM_TYPE_DEPOSIT"] = 1] = "CLAIM_TYPE_DEPOSIT";
    ClaimType[ClaimType["CLAIM_TYPE_WITHDRAW"] = 2] = "CLAIM_TYPE_WITHDRAW";
    ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
    ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 4] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (ClaimType = {}));
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNKNOWN":
            return ClaimType.CLAIM_TYPE_UNKNOWN;
        case 1:
        case "CLAIM_TYPE_DEPOSIT":
            return ClaimType.CLAIM_TYPE_DEPOSIT;
        case 2:
        case "CLAIM_TYPE_WITHDRAW":
            return ClaimType.CLAIM_TYPE_WITHDRAW;
        case 3:
        case "CLAIM_TYPE_ERC20_DEPLOYED":
            return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
        case 4:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
export function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNKNOWN:
            return "CLAIM_TYPE_UNKNOWN";
        case ClaimType.CLAIM_TYPE_DEPOSIT:
            return "CLAIM_TYPE_DEPOSIT";
        case ClaimType.CLAIM_TYPE_WITHDRAW:
            return "CLAIM_TYPE_WITHDRAW";
        case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
            return "CLAIM_TYPE_ERC20_DEPLOYED";
        case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
            return "CLAIM_TYPE_VALSET_UPDATED";
        case ClaimType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAttestation() {
    return {
        observed: false,
        votes: [],
        height: BigInt(0),
        claim: undefined
    };
}
export const Attestation = {
    typeUrl: "/injective.peggy.v1.Attestation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes) {
            writer.uint32(18).string(v);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.observed = reader.bool();
                    break;
                case 2:
                    message.votes.push(reader.string());
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.claim = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttestation();
        message.observed = object.observed ?? false;
        message.votes = object.votes?.map(e => e) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.claim = object.claim !== undefined && object.claim !== null ? Any.fromPartial(object.claim) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttestation();
        if (object.observed !== undefined && object.observed !== null) {
            message.observed = object.observed;
        }
        message.votes = object.votes?.map(e => e) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.claim !== undefined && object.claim !== null) {
            message.claim = Any.fromAmino(object.claim);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.observed = message.observed === false ? undefined : message.observed;
        if (message.votes) {
            obj.votes = message.votes.map(e => e);
        }
        else {
            obj.votes = message.votes;
        }
        obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
        obj.claim = message.claim ? Any.toAmino(message.claim) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Attestation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Attestation.decode(message.value);
    },
    toProto(message) {
        return Attestation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.Attestation",
            value: Attestation.encode(message).finish()
        };
    }
};
function createBaseERC20Token() {
    return {
        contract: "",
        amount: ""
    };
}
export const ERC20Token = {
    typeUrl: "/injective.peggy.v1.ERC20Token",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Token();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseERC20Token();
        message.contract = object.contract ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20Token();
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20Token.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20Token.decode(message.value);
    },
    toProto(message) {
        return ERC20Token.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.ERC20Token",
            value: ERC20Token.encode(message).finish()
        };
    }
};
