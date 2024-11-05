//@ts-nocheck
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** State stores state for an escrow account */
export var Account_State;
(function (Account_State) {
    /** invalid - AccountStateInvalid is an invalid state */
    Account_State[Account_State["invalid"] = 0] = "invalid";
    /** open - AccountOpen is the state when an account is open */
    Account_State[Account_State["open"] = 1] = "open";
    /** closed - AccountClosed is the state when an account is closed */
    Account_State[Account_State["closed"] = 2] = "closed";
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    Account_State[Account_State["overdrawn"] = 3] = "overdrawn";
    Account_State[Account_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Account_State || (Account_State = {}));
export const Account_StateSDKType = Account_State;
export const Account_StateAmino = Account_State;
export function account_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Account_State.invalid;
        case 1:
        case "open":
            return Account_State.open;
        case 2:
        case "closed":
            return Account_State.closed;
        case 3:
        case "overdrawn":
            return Account_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Account_State.UNRECOGNIZED;
    }
}
export function account_StateToJSON(object) {
    switch (object) {
        case Account_State.invalid:
            return "invalid";
        case Account_State.open:
            return "open";
        case Account_State.closed:
            return "closed";
        case Account_State.overdrawn:
            return "overdrawn";
        case Account_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Payment State */
export var FractionalPayment_State;
(function (FractionalPayment_State) {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    FractionalPayment_State[FractionalPayment_State["invalid"] = 0] = "invalid";
    /** open - PaymentStateOpen is the state when the payment is open */
    FractionalPayment_State[FractionalPayment_State["open"] = 1] = "open";
    /** closed - PaymentStateClosed is the state when the payment is closed */
    FractionalPayment_State[FractionalPayment_State["closed"] = 2] = "closed";
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    FractionalPayment_State[FractionalPayment_State["overdrawn"] = 3] = "overdrawn";
    FractionalPayment_State[FractionalPayment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FractionalPayment_State || (FractionalPayment_State = {}));
export const FractionalPayment_StateSDKType = FractionalPayment_State;
export const FractionalPayment_StateAmino = FractionalPayment_State;
export function fractionalPayment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return FractionalPayment_State.invalid;
        case 1:
        case "open":
            return FractionalPayment_State.open;
        case 2:
        case "closed":
            return FractionalPayment_State.closed;
        case 3:
        case "overdrawn":
            return FractionalPayment_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FractionalPayment_State.UNRECOGNIZED;
    }
}
export function fractionalPayment_StateToJSON(object) {
    switch (object) {
        case FractionalPayment_State.invalid:
            return "invalid";
        case FractionalPayment_State.open:
            return "open";
        case FractionalPayment_State.closed:
            return "closed";
        case FractionalPayment_State.overdrawn:
            return "overdrawn";
        case FractionalPayment_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAccountID() {
    return {
        scope: "",
        xid: ""
    };
}
export const AccountID = {
    typeUrl: "/akash.escrow.v1beta2.AccountID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountID();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountID();
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = object.scope;
        }
        if (object.xid !== undefined && object.xid !== null) {
            message.xid = object.xid;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.scope = message.scope ?? "";
        obj.xid = message.xid ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return AccountID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AccountID.decode(message.value);
    },
    toProto(message) {
        return AccountID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.AccountID",
            value: AccountID.encode(message).finish()
        };
    }
};
function createBaseAccount() {
    return {
        id: AccountID.fromPartial({}),
        owner: "",
        state: 0,
        balance: DecCoin.fromPartial({}),
        transferred: DecCoin.fromPartial({}),
        settledAt: BigInt(0),
        depositor: "",
        funds: DecCoin.fromPartial({})
    };
}
export const Account = {
    typeUrl: "/akash.escrow.v1beta2.Account",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
        }
        if (message.settledAt !== BigInt(0)) {
            writer.uint32(48).int64(message.settledAt);
        }
        if (message.depositor !== "") {
            writer.uint32(58).string(message.depositor);
        }
        if (message.funds !== undefined) {
            DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.balance = DecCoin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transferred = DecCoin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.settledAt = reader.int64();
                    break;
                case 7:
                    message.depositor = reader.string();
                    break;
                case 8:
                    message.funds = DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccount();
        message.id = object.id !== undefined && object.id !== null ? AccountID.fromPartial(object.id) : undefined;
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
        message.transferred = object.transferred !== undefined && object.transferred !== null ? DecCoin.fromPartial(object.transferred) : undefined;
        message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? BigInt(object.settledAt.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.funds = object.funds !== undefined && object.funds !== null ? DecCoin.fromPartial(object.funds) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccount();
        if (object.id !== undefined && object.id !== null) {
            message.id = AccountID.fromAmino(object.id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = DecCoin.fromAmino(object.balance);
        }
        if (object.transferred !== undefined && object.transferred !== null) {
            message.transferred = DecCoin.fromAmino(object.transferred);
        }
        if (object.settled_at !== undefined && object.settled_at !== null) {
            message.settledAt = BigInt(object.settled_at);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        if (object.funds !== undefined && object.funds !== null) {
            message.funds = DecCoin.fromAmino(object.funds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? AccountID.toAmino(message.id) : AccountID.toAmino(AccountID.fromPartial({}));
        obj.owner = message.owner ?? "";
        obj.state = message.state ?? 0;
        obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.transferred = message.transferred ? DecCoin.toAmino(message.transferred) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.settled_at = message.settledAt ? (message.settledAt?.toString)() : "0";
        obj.depositor = message.depositor ?? "";
        obj.funds = message.funds ? DecCoin.toAmino(message.funds) : DecCoin.toAmino(DecCoin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return Account.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Account.decode(message.value);
    },
    toProto(message) {
        return Account.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.Account",
            value: Account.encode(message).finish()
        };
    }
};
function createBaseFractionalPayment() {
    return {
        accountId: AccountID.fromPartial({}),
        paymentId: "",
        owner: "",
        state: 0,
        rate: DecCoin.fromPartial({}),
        balance: DecCoin.fromPartial({}),
        withdrawn: Coin.fromPartial({})
    };
}
export const FractionalPayment = {
    typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.accountId !== undefined) {
            AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentId !== "") {
            writer.uint32(18).string(message.paymentId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.rate !== undefined) {
            DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFractionalPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.paymentId = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.rate = DecCoin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.balance = DecCoin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.withdrawn = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFractionalPayment();
        message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountID.fromPartial(object.accountId) : undefined;
        message.paymentId = object.paymentId ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.rate = object.rate !== undefined && object.rate !== null ? DecCoin.fromPartial(object.rate) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
        message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFractionalPayment();
        if (object.account_id !== undefined && object.account_id !== null) {
            message.accountId = AccountID.fromAmino(object.account_id);
        }
        if (object.payment_id !== undefined && object.payment_id !== null) {
            message.paymentId = object.payment_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = DecCoin.fromAmino(object.rate);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = DecCoin.fromAmino(object.balance);
        }
        if (object.withdrawn !== undefined && object.withdrawn !== null) {
            message.withdrawn = Coin.fromAmino(object.withdrawn);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_id = message.accountId ? AccountID.toAmino(message.accountId) : AccountID.toAmino(AccountID.fromPartial({}));
        obj.payment_id = message.paymentId ?? "";
        obj.owner = message.owner ?? "";
        obj.state = message.state ?? 0;
        obj.rate = message.rate ? DecCoin.toAmino(message.rate) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.withdrawn = message.withdrawn ? Coin.toAmino(message.withdrawn) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return FractionalPayment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FractionalPayment.decode(message.value);
    },
    toProto(message) {
        return FractionalPayment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
            value: FractionalPayment.encode(message).finish()
        };
    }
};
