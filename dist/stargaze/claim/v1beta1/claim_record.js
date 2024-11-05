"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimRecord = exports.ActionAmino = exports.ActionSDKType = exports.Action = void 0;
exports.actionFromJSON = actionFromJSON;
exports.actionToJSON = actionToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
var Action;
(function (Action) {
    Action[Action["ActionInitialClaim"] = 0] = "ActionInitialClaim";
    Action[Action["ActionBidNFT"] = 1] = "ActionBidNFT";
    Action[Action["ActionMintNFT"] = 2] = "ActionMintNFT";
    Action[Action["ActionVote"] = 3] = "ActionVote";
    Action[Action["ActionDelegateStake"] = 4] = "ActionDelegateStake";
    Action[Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action || (exports.Action = Action = {}));
exports.ActionSDKType = Action;
exports.ActionAmino = Action;
function actionFromJSON(object) {
    switch (object) {
        case 0:
        case "ActionInitialClaim":
            return Action.ActionInitialClaim;
        case 1:
        case "ActionBidNFT":
            return Action.ActionBidNFT;
        case 2:
        case "ActionMintNFT":
            return Action.ActionMintNFT;
        case 3:
        case "ActionVote":
            return Action.ActionVote;
        case 4:
        case "ActionDelegateStake":
            return Action.ActionDelegateStake;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action.UNRECOGNIZED;
    }
}
function actionToJSON(object) {
    switch (object) {
        case Action.ActionInitialClaim:
            return "ActionInitialClaim";
        case Action.ActionBidNFT:
            return "ActionBidNFT";
        case Action.ActionMintNFT:
            return "ActionMintNFT";
        case Action.ActionVote:
            return "ActionVote";
        case Action.ActionDelegateStake:
            return "ActionDelegateStake";
        case Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClaimRecord() {
    return {
        address: "",
        initialClaimableAmount: [],
        actionCompleted: []
    };
}
exports.ClaimRecord = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.initialClaimableAmount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.actionCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.initialClaimableAmount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }
                    }
                    else {
                        message.actionCompleted.push(reader.bool());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.address = object.address ?? "";
        message.initialClaimableAmount = object.initialClaimableAmount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.actionCompleted = object.actionCompleted?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimRecord();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.initialClaimableAmount = object.initial_claimable_amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.actionCompleted = object.action_completed?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.initialClaimableAmount) {
            obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_claimable_amount = message.initialClaimableAmount;
        }
        if (message.actionCompleted) {
            obj.action_completed = message.actionCompleted.map(e => e);
        }
        else {
            obj.action_completed = message.actionCompleted;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClaimRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
            value: exports.ClaimRecord.encode(message).finish()
        };
    }
};