"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        superfluidAssets: [],
        osmoEquivalentMultipliers: [],
        intermediaryAccounts: [],
        intemediaryAccountConnections: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.superfluid.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluidAssets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmoEquivalentMultipliers) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediaryAccounts) {
            superfluid_1.SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediaryAccountConnections) {
            superfluid_1.LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.superfluidAssets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmoEquivalentMultipliers.push(superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediaryAccounts.push(superfluid_1.SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediaryAccountConnections.push(superfluid_1.LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.superfluidAssets = object.superfluidAssets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediaryAccounts = object.intermediaryAccounts?.map(e => superfluid_1.SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => superfluid_1.LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.superfluidAssets = object.superfluid_assets?.map(e => superfluid_1.SuperfluidAsset.fromAmino(e)) || [];
        message.osmoEquivalentMultipliers = object.osmo_equivalent_multipliers?.map(e => superfluid_1.OsmoEquivalentMultiplierRecord.fromAmino(e)) || [];
        message.intermediaryAccounts = object.intermediary_accounts?.map(e => superfluid_1.SuperfluidIntermediaryAccount.fromAmino(e)) || [];
        message.intemediaryAccountConnections = object.intemediary_account_connections?.map(e => superfluid_1.LockIdIntermediaryAccountConnection.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.superfluidAssets) {
            obj.superfluid_assets = message.superfluidAssets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_assets = message.superfluidAssets;
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers;
        }
        if (message.intermediaryAccounts) {
            obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toAmino(e) : undefined);
        }
        else {
            obj.intermediary_accounts = message.intermediaryAccounts;
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = message.intemediaryAccountConnections;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
