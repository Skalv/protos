"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryPendingRedemptionsResponse = exports.QueryPendingRedemptionsRequest = exports.QueryEstimatedRedemptionsResponse = exports.QueryEstimatedRedemptionsRequest = exports.QueryInsuranceFundsResponse = exports.QueryInsuranceFundsRequest = exports.QueryInsuranceFundResponse = exports.QueryInsuranceFundRequest = exports.QueryInsuranceParamsResponse = exports.QueryInsuranceParamsRequest = void 0;
//@ts-nocheck
const insurance_1 = require("./insurance");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
function createBaseQueryInsuranceParamsRequest() {
    return {};
}
exports.QueryInsuranceParamsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryInsuranceParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryInsuranceParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
            value: exports.QueryInsuranceParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceParamsResponse() {
    return {
        params: insurance_1.Params.fromPartial({})
    };
}
exports.QueryInsuranceParamsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            insurance_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = insurance_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInsuranceParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? insurance_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = insurance_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? insurance_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
            value: exports.QueryInsuranceParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundRequest() {
    return {
        marketId: ""
    };
}
exports.QueryInsuranceFundRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInsuranceFundRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceFundRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceFundRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceFundRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceFundRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
            value: exports.QueryInsuranceFundRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundResponse() {
    return {
        fund: undefined
    };
}
exports.QueryInsuranceFundResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fund !== undefined) {
            insurance_1.InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fund = insurance_1.InsuranceFund.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInsuranceFundResponse();
        message.fund = object.fund !== undefined && object.fund !== null ? insurance_1.InsuranceFund.fromPartial(object.fund) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceFundResponse();
        if (object.fund !== undefined && object.fund !== null) {
            message.fund = insurance_1.InsuranceFund.fromAmino(object.fund);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fund = message.fund ? insurance_1.InsuranceFund.toAmino(message.fund) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceFundResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceFundResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceFundResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
            value: exports.QueryInsuranceFundResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundsRequest() {
    return {};
}
exports.QueryInsuranceFundsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryInsuranceFundsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryInsuranceFundsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceFundsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceFundsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceFundsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
            value: exports.QueryInsuranceFundsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundsResponse() {
    return {
        funds: []
    };
}
exports.QueryInsuranceFundsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.funds) {
            insurance_1.InsuranceFund.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funds.push(insurance_1.InsuranceFund.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInsuranceFundsResponse();
        message.funds = object.funds?.map(e => insurance_1.InsuranceFund.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceFundsResponse();
        message.funds = object.funds?.map(e => insurance_1.InsuranceFund.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? insurance_1.InsuranceFund.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInsuranceFundsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryInsuranceFundsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInsuranceFundsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
            value: exports.QueryInsuranceFundsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEstimatedRedemptionsRequest() {
    return {
        marketId: "",
        address: ""
    };
}
exports.QueryEstimatedRedemptionsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEstimatedRedemptionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEstimatedRedemptionsRequest();
        message.marketId = object.marketId ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEstimatedRedemptionsRequest();
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.marketId = message.marketId === "" ? undefined : message.marketId;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEstimatedRedemptionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEstimatedRedemptionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEstimatedRedemptionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
            value: exports.QueryEstimatedRedemptionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEstimatedRedemptionsResponse() {
    return {
        amount: []
    };
}
exports.QueryEstimatedRedemptionsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEstimatedRedemptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEstimatedRedemptionsResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEstimatedRedemptionsResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEstimatedRedemptionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEstimatedRedemptionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEstimatedRedemptionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
            value: exports.QueryEstimatedRedemptionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingRedemptionsRequest() {
    return {
        marketId: "",
        address: ""
    };
}
exports.QueryPendingRedemptionsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingRedemptionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingRedemptionsRequest();
        message.marketId = object.marketId ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingRedemptionsRequest();
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.marketId = message.marketId === "" ? undefined : message.marketId;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingRedemptionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingRedemptionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingRedemptionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
            value: exports.QueryPendingRedemptionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPendingRedemptionsResponse() {
    return {
        amount: []
    };
}
exports.QueryPendingRedemptionsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingRedemptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingRedemptionsResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingRedemptionsResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingRedemptionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingRedemptionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingRedemptionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
            value: exports.QueryPendingRedemptionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
