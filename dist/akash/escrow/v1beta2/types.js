"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractionalPayment = exports.Account = exports.AccountID = exports.FractionalPayment_StateAmino = exports.FractionalPayment_StateSDKType = exports.FractionalPayment_State = exports.Account_StateAmino = exports.Account_StateSDKType = exports.Account_State = void 0;
exports.account_StateFromJSON = account_StateFromJSON;
exports.account_StateToJSON = account_StateToJSON;
exports.fractionalPayment_StateFromJSON = fractionalPayment_StateFromJSON;
exports.fractionalPayment_StateToJSON = fractionalPayment_StateToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
/** State stores state for an escrow account */
var Account_State;
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
})(Account_State || (exports.Account_State = Account_State = {}));
exports.Account_StateSDKType = Account_State;
exports.Account_StateAmino = Account_State;
function account_StateFromJSON(object) {
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
function account_StateToJSON(object) {
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
var FractionalPayment_State;
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
})(FractionalPayment_State || (exports.FractionalPayment_State = FractionalPayment_State = {}));
exports.FractionalPayment_StateSDKType = FractionalPayment_State;
exports.FractionalPayment_StateAmino = FractionalPayment_State;
function fractionalPayment_StateFromJSON(object) {
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
function fractionalPayment_StateToJSON(object) {
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
exports.AccountID = {
    typeUrl: "/akash.escrow.v1beta2.AccountID",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.AccountID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AccountID.decode(message.value);
    },
    toProto(message) {
        return exports.AccountID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.AccountID",
            value: exports.AccountID.encode(message).finish()
        };
    }
};
function createBaseAccount() {
    return {
        id: exports.AccountID.fromPartial({}),
        owner: "",
        state: 0,
        balance: coin_1.DecCoin.fromPartial({}),
        transferred: coin_1.DecCoin.fromPartial({}),
        settledAt: BigInt(0),
        depositor: "",
        funds: coin_1.DecCoin.fromPartial({})
    };
}
exports.Account = {
    typeUrl: "/akash.escrow.v1beta2.Account",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            coin_1.DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            coin_1.DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
        }
        if (message.settledAt !== BigInt(0)) {
            writer.uint32(48).int64(message.settledAt);
        }
        if (message.depositor !== "") {
            writer.uint32(58).string(message.depositor);
        }
        if (message.funds !== undefined) {
            coin_1.DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.balance = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transferred = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.settledAt = reader.int64();
                    break;
                case 7:
                    message.depositor = reader.string();
                    break;
                case 8:
                    message.funds = coin_1.DecCoin.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? exports.AccountID.fromPartial(object.id) : undefined;
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.DecCoin.fromPartial(object.balance) : undefined;
        message.transferred = object.transferred !== undefined && object.transferred !== null ? coin_1.DecCoin.fromPartial(object.transferred) : undefined;
        message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? BigInt(object.settledAt.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.funds = object.funds !== undefined && object.funds !== null ? coin_1.DecCoin.fromPartial(object.funds) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccount();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.AccountID.fromAmino(object.id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.DecCoin.fromAmino(object.balance);
        }
        if (object.transferred !== undefined && object.transferred !== null) {
            message.transferred = coin_1.DecCoin.fromAmino(object.transferred);
        }
        if (object.settled_at !== undefined && object.settled_at !== null) {
            message.settledAt = BigInt(object.settled_at);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        if (object.funds !== undefined && object.funds !== null) {
            message.funds = coin_1.DecCoin.fromAmino(object.funds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.AccountID.toAmino(message.id) : exports.AccountID.toAmino(exports.AccountID.fromPartial({}));
        obj.owner = message.owner ?? "";
        obj.state = message.state ?? 0;
        obj.balance = message.balance ? coin_1.DecCoin.toAmino(message.balance) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        obj.transferred = message.transferred ? coin_1.DecCoin.toAmino(message.transferred) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        obj.settled_at = message.settledAt ? (message.settledAt?.toString)() : "0";
        obj.depositor = message.depositor ?? "";
        obj.funds = message.funds ? coin_1.DecCoin.toAmino(message.funds) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Account.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Account.decode(message.value);
    },
    toProto(message) {
        return exports.Account.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.Account",
            value: exports.Account.encode(message).finish()
        };
    }
};
function createBaseFractionalPayment() {
    return {
        accountId: exports.AccountID.fromPartial({}),
        paymentId: "",
        owner: "",
        state: 0,
        rate: coin_1.DecCoin.fromPartial({}),
        balance: coin_1.DecCoin.fromPartial({}),
        withdrawn: coin_1.Coin.fromPartial({})
    };
}
exports.FractionalPayment = {
    typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountId !== undefined) {
            exports.AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
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
            coin_1.DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            coin_1.Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFractionalPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = exports.AccountID.decode(reader, reader.uint32());
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
                    message.rate = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.balance = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.withdrawn = coin_1.Coin.decode(reader, reader.uint32());
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
        message.accountId = object.accountId !== undefined && object.accountId !== null ? exports.AccountID.fromPartial(object.accountId) : undefined;
        message.paymentId = object.paymentId ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.rate = object.rate !== undefined && object.rate !== null ? coin_1.DecCoin.fromPartial(object.rate) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.DecCoin.fromPartial(object.balance) : undefined;
        message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? coin_1.Coin.fromPartial(object.withdrawn) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFractionalPayment();
        if (object.account_id !== undefined && object.account_id !== null) {
            message.accountId = exports.AccountID.fromAmino(object.account_id);
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
            message.rate = coin_1.DecCoin.fromAmino(object.rate);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.DecCoin.fromAmino(object.balance);
        }
        if (object.withdrawn !== undefined && object.withdrawn !== null) {
            message.withdrawn = coin_1.Coin.fromAmino(object.withdrawn);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_id = message.accountId ? exports.AccountID.toAmino(message.accountId) : exports.AccountID.toAmino(exports.AccountID.fromPartial({}));
        obj.payment_id = message.paymentId ?? "";
        obj.owner = message.owner ?? "";
        obj.state = message.state ?? 0;
        obj.rate = message.rate ? coin_1.DecCoin.toAmino(message.rate) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        obj.balance = message.balance ? coin_1.DecCoin.toAmino(message.balance) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        obj.withdrawn = message.withdrawn ? coin_1.Coin.toAmino(message.withdrawn) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FractionalPayment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FractionalPayment.decode(message.value);
    },
    toProto(message) {
        return exports.FractionalPayment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
            value: exports.FractionalPayment.encode(message).finish()
        };
    }
};
