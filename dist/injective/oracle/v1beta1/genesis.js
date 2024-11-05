"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalldataRecord = exports.GenesisState = void 0;
//@ts-nocheck
const oracle_1 = require("./oracle");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: oracle_1.Params.fromPartial({}),
        bandRelayers: [],
        bandPriceStates: [],
        priceFeedPriceStates: [],
        coinbasePriceStates: [],
        bandIbcPriceStates: [],
        bandIbcOracleRequests: [],
        bandIbcParams: oracle_1.BandIBCParams.fromPartial({}),
        bandIbcLatestClientId: BigInt(0),
        calldataRecords: [],
        bandIbcLatestRequestId: BigInt(0),
        chainlinkPriceStates: [],
        historicalPriceRecords: [],
        providerStates: []
    };
}
exports.GenesisState = {
    typeUrl: "/injective.oracle.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bandRelayers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.bandPriceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.priceFeedPriceStates) {
            oracle_1.PriceFeedState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coinbasePriceStates) {
            oracle_1.CoinbasePriceState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.bandIbcPriceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.bandIbcOracleRequests) {
            oracle_1.BandOracleRequest.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.bandIbcParams !== undefined) {
            oracle_1.BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
        }
        if (message.bandIbcLatestClientId !== BigInt(0)) {
            writer.uint32(72).uint64(message.bandIbcLatestClientId);
        }
        for (const v of message.calldataRecords) {
            exports.CalldataRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.bandIbcLatestRequestId !== BigInt(0)) {
            writer.uint32(88).uint64(message.bandIbcLatestRequestId);
        }
        for (const v of message.chainlinkPriceStates) {
            oracle_1.ChainlinkPriceState.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.historicalPriceRecords) {
            oracle_1.PriceRecords.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.providerStates) {
            oracle_1.ProviderState.encode(v, writer.uint32(114).fork()).ldelim();
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
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bandRelayers.push(reader.string());
                    break;
                case 3:
                    message.bandPriceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.priceFeedPriceStates.push(oracle_1.PriceFeedState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coinbasePriceStates.push(oracle_1.CoinbasePriceState.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.bandIbcPriceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.bandIbcOracleRequests.push(oracle_1.BandOracleRequest.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.bandIbcParams = oracle_1.BandIBCParams.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bandIbcLatestClientId = reader.uint64();
                    break;
                case 10:
                    message.calldataRecords.push(exports.CalldataRecord.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.bandIbcLatestRequestId = reader.uint64();
                    break;
                case 12:
                    message.chainlinkPriceStates.push(oracle_1.ChainlinkPriceState.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.historicalPriceRecords.push(oracle_1.PriceRecords.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.providerStates.push(oracle_1.ProviderState.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? oracle_1.Params.fromPartial(object.params) : undefined;
        message.bandRelayers = object.bandRelayers?.map(e => e) || [];
        message.bandPriceStates = object.bandPriceStates?.map(e => oracle_1.BandPriceState.fromPartial(e)) || [];
        message.priceFeedPriceStates = object.priceFeedPriceStates?.map(e => oracle_1.PriceFeedState.fromPartial(e)) || [];
        message.coinbasePriceStates = object.coinbasePriceStates?.map(e => oracle_1.CoinbasePriceState.fromPartial(e)) || [];
        message.bandIbcPriceStates = object.bandIbcPriceStates?.map(e => oracle_1.BandPriceState.fromPartial(e)) || [];
        message.bandIbcOracleRequests = object.bandIbcOracleRequests?.map(e => oracle_1.BandOracleRequest.fromPartial(e)) || [];
        message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? oracle_1.BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
        message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? BigInt(object.bandIbcLatestClientId.toString()) : BigInt(0);
        message.calldataRecords = object.calldataRecords?.map(e => exports.CalldataRecord.fromPartial(e)) || [];
        message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? BigInt(object.bandIbcLatestRequestId.toString()) : BigInt(0);
        message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => oracle_1.ChainlinkPriceState.fromPartial(e)) || [];
        message.historicalPriceRecords = object.historicalPriceRecords?.map(e => oracle_1.PriceRecords.fromPartial(e)) || [];
        message.providerStates = object.providerStates?.map(e => oracle_1.ProviderState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromAmino(object.params);
        }
        message.bandRelayers = object.band_relayers?.map(e => e) || [];
        message.bandPriceStates = object.band_price_states?.map(e => oracle_1.BandPriceState.fromAmino(e)) || [];
        message.priceFeedPriceStates = object.price_feed_price_states?.map(e => oracle_1.PriceFeedState.fromAmino(e)) || [];
        message.coinbasePriceStates = object.coinbase_price_states?.map(e => oracle_1.CoinbasePriceState.fromAmino(e)) || [];
        message.bandIbcPriceStates = object.band_ibc_price_states?.map(e => oracle_1.BandPriceState.fromAmino(e)) || [];
        message.bandIbcOracleRequests = object.band_ibc_oracle_requests?.map(e => oracle_1.BandOracleRequest.fromAmino(e)) || [];
        if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
            message.bandIbcParams = oracle_1.BandIBCParams.fromAmino(object.band_ibc_params);
        }
        if (object.band_ibc_latest_client_id !== undefined && object.band_ibc_latest_client_id !== null) {
            message.bandIbcLatestClientId = BigInt(object.band_ibc_latest_client_id);
        }
        message.calldataRecords = object.calldata_records?.map(e => exports.CalldataRecord.fromAmino(e)) || [];
        if (object.band_ibc_latest_request_id !== undefined && object.band_ibc_latest_request_id !== null) {
            message.bandIbcLatestRequestId = BigInt(object.band_ibc_latest_request_id);
        }
        message.chainlinkPriceStates = object.chainlink_price_states?.map(e => oracle_1.ChainlinkPriceState.fromAmino(e)) || [];
        message.historicalPriceRecords = object.historical_price_records?.map(e => oracle_1.PriceRecords.fromAmino(e)) || [];
        message.providerStates = object.provider_states?.map(e => oracle_1.ProviderState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? oracle_1.Params.toAmino(message.params) : undefined;
        if (message.bandRelayers) {
            obj.band_relayers = message.bandRelayers.map(e => e);
        }
        else {
            obj.band_relayers = message.bandRelayers;
        }
        if (message.bandPriceStates) {
            obj.band_price_states = message.bandPriceStates.map(e => e ? oracle_1.BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.band_price_states = message.bandPriceStates;
        }
        if (message.priceFeedPriceStates) {
            obj.price_feed_price_states = message.priceFeedPriceStates.map(e => e ? oracle_1.PriceFeedState.toAmino(e) : undefined);
        }
        else {
            obj.price_feed_price_states = message.priceFeedPriceStates;
        }
        if (message.coinbasePriceStates) {
            obj.coinbase_price_states = message.coinbasePriceStates.map(e => e ? oracle_1.CoinbasePriceState.toAmino(e) : undefined);
        }
        else {
            obj.coinbase_price_states = message.coinbasePriceStates;
        }
        if (message.bandIbcPriceStates) {
            obj.band_ibc_price_states = message.bandIbcPriceStates.map(e => e ? oracle_1.BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.band_ibc_price_states = message.bandIbcPriceStates;
        }
        if (message.bandIbcOracleRequests) {
            obj.band_ibc_oracle_requests = message.bandIbcOracleRequests.map(e => e ? oracle_1.BandOracleRequest.toAmino(e) : undefined);
        }
        else {
            obj.band_ibc_oracle_requests = message.bandIbcOracleRequests;
        }
        obj.band_ibc_params = message.bandIbcParams ? oracle_1.BandIBCParams.toAmino(message.bandIbcParams) : undefined;
        obj.band_ibc_latest_client_id = message.bandIbcLatestClientId !== BigInt(0) ? (message.bandIbcLatestClientId?.toString)() : undefined;
        if (message.calldataRecords) {
            obj.calldata_records = message.calldataRecords.map(e => e ? exports.CalldataRecord.toAmino(e) : undefined);
        }
        else {
            obj.calldata_records = message.calldataRecords;
        }
        obj.band_ibc_latest_request_id = message.bandIbcLatestRequestId !== BigInt(0) ? (message.bandIbcLatestRequestId?.toString)() : undefined;
        if (message.chainlinkPriceStates) {
            obj.chainlink_price_states = message.chainlinkPriceStates.map(e => e ? oracle_1.ChainlinkPriceState.toAmino(e) : undefined);
        }
        else {
            obj.chainlink_price_states = message.chainlinkPriceStates;
        }
        if (message.historicalPriceRecords) {
            obj.historical_price_records = message.historicalPriceRecords.map(e => e ? oracle_1.PriceRecords.toAmino(e) : undefined);
        }
        else {
            obj.historical_price_records = message.historicalPriceRecords;
        }
        if (message.providerStates) {
            obj.provider_states = message.providerStates.map(e => e ? oracle_1.ProviderState.toAmino(e) : undefined);
        }
        else {
            obj.provider_states = message.providerStates;
        }
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
            typeUrl: "/injective.oracle.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseCalldataRecord() {
    return {
        clientId: BigInt(0),
        calldata: new Uint8Array()
    };
}
exports.CalldataRecord = {
    typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== BigInt(0)) {
            writer.uint32(8).uint64(message.clientId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalldataRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.uint64();
                    break;
                case 2:
                    message.calldata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalldataRecord();
        message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
        message.calldata = object.calldata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalldataRecord();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = BigInt(object.client_id);
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = (0, helpers_1.bytesFromBase64)(object.calldata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        obj.calldata = message.calldata ? (0, helpers_1.base64FromBytes)(message.calldata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalldataRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CalldataRecord.decode(message.value);
    },
    toProto(message) {
        return exports.CalldataRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
            value: exports.CalldataRecord.encode(message).finish()
        };
    }
};
