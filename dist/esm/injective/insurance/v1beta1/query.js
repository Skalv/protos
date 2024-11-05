//@ts-nocheck
import { Params, InsuranceFund } from "./insurance";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryInsuranceParamsRequest() {
    return {};
}
export const QueryInsuranceParamsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryInsuranceParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
            value: QueryInsuranceParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryInsuranceParamsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryInsuranceParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInsuranceParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
            value: QueryInsuranceParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundRequest() {
    return {
        marketId: ""
    };
}
export const QueryInsuranceFundRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryInsuranceFundRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceFundRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceFundRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
            value: QueryInsuranceFundRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundResponse() {
    return {
        fund: undefined
    };
}
export const QueryInsuranceFundResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fund !== undefined) {
            InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fund = InsuranceFund.decode(reader, reader.uint32());
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
        message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceFundResponse();
        if (object.fund !== undefined && object.fund !== null) {
            message.fund = InsuranceFund.fromAmino(object.fund);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInsuranceFundResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceFundResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceFundResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
            value: QueryInsuranceFundResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundsRequest() {
    return {};
}
export const QueryInsuranceFundsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryInsuranceFundsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceFundsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceFundsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
            value: QueryInsuranceFundsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInsuranceFundsResponse() {
    return {
        funds: []
    };
}
export const QueryInsuranceFundsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.funds) {
            InsuranceFund.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInsuranceFundsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funds.push(InsuranceFund.decode(reader, reader.uint32()));
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
        message.funds = object.funds?.map(e => InsuranceFund.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInsuranceFundsResponse();
        message.funds = object.funds?.map(e => InsuranceFund.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? InsuranceFund.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInsuranceFundsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInsuranceFundsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInsuranceFundsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
            value: QueryInsuranceFundsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEstimatedRedemptionsRequest() {
    return {
        marketId: "",
        address: ""
    };
}
export const QueryEstimatedRedemptionsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryEstimatedRedemptionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEstimatedRedemptionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEstimatedRedemptionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
            value: QueryEstimatedRedemptionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEstimatedRedemptionsResponse() {
    return {
        amount: []
    };
}
export const QueryEstimatedRedemptionsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEstimatedRedemptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEstimatedRedemptionsResponse();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEstimatedRedemptionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEstimatedRedemptionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEstimatedRedemptionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
            value: QueryEstimatedRedemptionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingRedemptionsRequest() {
    return {
        marketId: "",
        address: ""
    };
}
export const QueryPendingRedemptionsRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPendingRedemptionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingRedemptionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPendingRedemptionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
            value: QueryPendingRedemptionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPendingRedemptionsResponse() {
    return {
        amount: []
    };
}
export const QueryPendingRedemptionsResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingRedemptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingRedemptionsResponse();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPendingRedemptionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingRedemptionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPendingRedemptionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
            value: QueryPendingRedemptionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
            value: QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
export const QueryModuleStateResponse = {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
