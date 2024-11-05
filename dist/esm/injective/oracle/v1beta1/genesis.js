//@ts-nocheck
import { Params, BandPriceState, PriceFeedState, CoinbasePriceState, BandOracleRequest, BandIBCParams, ChainlinkPriceState, PriceRecords, ProviderState } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        bandRelayers: [],
        bandPriceStates: [],
        priceFeedPriceStates: [],
        coinbasePriceStates: [],
        bandIbcPriceStates: [],
        bandIbcOracleRequests: [],
        bandIbcParams: BandIBCParams.fromPartial({}),
        bandIbcLatestClientId: BigInt(0),
        calldataRecords: [],
        bandIbcLatestRequestId: BigInt(0),
        chainlinkPriceStates: [],
        historicalPriceRecords: [],
        providerStates: []
    };
}
export const GenesisState = {
    typeUrl: "/injective.oracle.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bandRelayers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.bandPriceStates) {
            BandPriceState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.priceFeedPriceStates) {
            PriceFeedState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coinbasePriceStates) {
            CoinbasePriceState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.bandIbcPriceStates) {
            BandPriceState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.bandIbcOracleRequests) {
            BandOracleRequest.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.bandIbcParams !== undefined) {
            BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
        }
        if (message.bandIbcLatestClientId !== BigInt(0)) {
            writer.uint32(72).uint64(message.bandIbcLatestClientId);
        }
        for (const v of message.calldataRecords) {
            CalldataRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.bandIbcLatestRequestId !== BigInt(0)) {
            writer.uint32(88).uint64(message.bandIbcLatestRequestId);
        }
        for (const v of message.chainlinkPriceStates) {
            ChainlinkPriceState.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.historicalPriceRecords) {
            PriceRecords.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.providerStates) {
            ProviderState.encode(v, writer.uint32(114).fork()).ldelim();
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
                    message.bandRelayers.push(reader.string());
                    break;
                case 3:
                    message.bandPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.priceFeedPriceStates.push(PriceFeedState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coinbasePriceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.bandIbcPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.bandIbcOracleRequests.push(BandOracleRequest.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bandIbcLatestClientId = reader.uint64();
                    break;
                case 10:
                    message.calldataRecords.push(CalldataRecord.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.bandIbcLatestRequestId = reader.uint64();
                    break;
                case 12:
                    message.chainlinkPriceStates.push(ChainlinkPriceState.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.historicalPriceRecords.push(PriceRecords.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.providerStates.push(ProviderState.decode(reader, reader.uint32()));
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
        message.bandRelayers = object.bandRelayers?.map(e => e) || [];
        message.bandPriceStates = object.bandPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
        message.priceFeedPriceStates = object.priceFeedPriceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
        message.coinbasePriceStates = object.coinbasePriceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
        message.bandIbcPriceStates = object.bandIbcPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
        message.bandIbcOracleRequests = object.bandIbcOracleRequests?.map(e => BandOracleRequest.fromPartial(e)) || [];
        message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
        message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? BigInt(object.bandIbcLatestClientId.toString()) : BigInt(0);
        message.calldataRecords = object.calldataRecords?.map(e => CalldataRecord.fromPartial(e)) || [];
        message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? BigInt(object.bandIbcLatestRequestId.toString()) : BigInt(0);
        message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => ChainlinkPriceState.fromPartial(e)) || [];
        message.historicalPriceRecords = object.historicalPriceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
        message.providerStates = object.providerStates?.map(e => ProviderState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.bandRelayers = object.band_relayers?.map(e => e) || [];
        message.bandPriceStates = object.band_price_states?.map(e => BandPriceState.fromAmino(e)) || [];
        message.priceFeedPriceStates = object.price_feed_price_states?.map(e => PriceFeedState.fromAmino(e)) || [];
        message.coinbasePriceStates = object.coinbase_price_states?.map(e => CoinbasePriceState.fromAmino(e)) || [];
        message.bandIbcPriceStates = object.band_ibc_price_states?.map(e => BandPriceState.fromAmino(e)) || [];
        message.bandIbcOracleRequests = object.band_ibc_oracle_requests?.map(e => BandOracleRequest.fromAmino(e)) || [];
        if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
            message.bandIbcParams = BandIBCParams.fromAmino(object.band_ibc_params);
        }
        if (object.band_ibc_latest_client_id !== undefined && object.band_ibc_latest_client_id !== null) {
            message.bandIbcLatestClientId = BigInt(object.band_ibc_latest_client_id);
        }
        message.calldataRecords = object.calldata_records?.map(e => CalldataRecord.fromAmino(e)) || [];
        if (object.band_ibc_latest_request_id !== undefined && object.band_ibc_latest_request_id !== null) {
            message.bandIbcLatestRequestId = BigInt(object.band_ibc_latest_request_id);
        }
        message.chainlinkPriceStates = object.chainlink_price_states?.map(e => ChainlinkPriceState.fromAmino(e)) || [];
        message.historicalPriceRecords = object.historical_price_records?.map(e => PriceRecords.fromAmino(e)) || [];
        message.providerStates = object.provider_states?.map(e => ProviderState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.bandRelayers) {
            obj.band_relayers = message.bandRelayers.map(e => e);
        }
        else {
            obj.band_relayers = message.bandRelayers;
        }
        if (message.bandPriceStates) {
            obj.band_price_states = message.bandPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.band_price_states = message.bandPriceStates;
        }
        if (message.priceFeedPriceStates) {
            obj.price_feed_price_states = message.priceFeedPriceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
        }
        else {
            obj.price_feed_price_states = message.priceFeedPriceStates;
        }
        if (message.coinbasePriceStates) {
            obj.coinbase_price_states = message.coinbasePriceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
        }
        else {
            obj.coinbase_price_states = message.coinbasePriceStates;
        }
        if (message.bandIbcPriceStates) {
            obj.band_ibc_price_states = message.bandIbcPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.band_ibc_price_states = message.bandIbcPriceStates;
        }
        if (message.bandIbcOracleRequests) {
            obj.band_ibc_oracle_requests = message.bandIbcOracleRequests.map(e => e ? BandOracleRequest.toAmino(e) : undefined);
        }
        else {
            obj.band_ibc_oracle_requests = message.bandIbcOracleRequests;
        }
        obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
        obj.band_ibc_latest_client_id = message.bandIbcLatestClientId !== BigInt(0) ? (message.bandIbcLatestClientId?.toString)() : undefined;
        if (message.calldataRecords) {
            obj.calldata_records = message.calldataRecords.map(e => e ? CalldataRecord.toAmino(e) : undefined);
        }
        else {
            obj.calldata_records = message.calldataRecords;
        }
        obj.band_ibc_latest_request_id = message.bandIbcLatestRequestId !== BigInt(0) ? (message.bandIbcLatestRequestId?.toString)() : undefined;
        if (message.chainlinkPriceStates) {
            obj.chainlink_price_states = message.chainlinkPriceStates.map(e => e ? ChainlinkPriceState.toAmino(e) : undefined);
        }
        else {
            obj.chainlink_price_states = message.chainlinkPriceStates;
        }
        if (message.historicalPriceRecords) {
            obj.historical_price_records = message.historicalPriceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
        }
        else {
            obj.historical_price_records = message.historicalPriceRecords;
        }
        if (message.providerStates) {
            obj.provider_states = message.providerStates.map(e => e ? ProviderState.toAmino(e) : undefined);
        }
        else {
            obj.provider_states = message.providerStates;
        }
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
            typeUrl: "/injective.oracle.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseCalldataRecord() {
    return {
        clientId: BigInt(0),
        calldata: new Uint8Array()
    };
}
export const CalldataRecord = {
    typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== BigInt(0)) {
            writer.uint32(8).uint64(message.clientId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.calldata = bytesFromBase64(object.calldata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CalldataRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CalldataRecord.decode(message.value);
    },
    toProto(message) {
        return CalldataRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
            value: CalldataRecord.encode(message).finish()
        };
    }
};
