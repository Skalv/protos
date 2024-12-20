"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAndInstantiateContractProposal = exports.UpdateInstantiateConfigProposal = exports.AccessConfigUpdate = exports.UnpinCodesProposal = exports.PinCodesProposal = exports.ClearAdminProposal = exports.UpdateAdminProposal = exports.ExecuteContractProposal = exports.SudoContractProposal = exports.MigrateContractProposal = exports.InstantiateContract2Proposal = exports.InstantiateContractProposal = exports.StoreCodeProposal = void 0;
//@ts-nocheck
const types_1 = require("./types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const encoding_1 = require("@cosmjs/encoding");
const helpers_1 = require("../../../helpers");
function createBaseStoreCodeProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
exports.StoreCodeProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(64).bool(message.unpinCode);
        }
        if (message.source !== "") {
            writer.uint32(74).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(82).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(90).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreCodeProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 7:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unpinCode = reader.bool();
                    break;
                case 9:
                    message.source = reader.string();
                    break;
                case 10:
                    message.builder = reader.string();
                    break;
                case 11:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreCodeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreCodeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = (0, encoding_1.fromBase64)(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = types_1.AccessConfig.fromAmino(object.instantiate_permission);
        }
        if (object.unpin_code !== undefined && object.unpin_code !== null) {
            message.unpinCode = object.unpin_code;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        if (object.builder !== undefined && object.builder !== null) {
            message.builder = object.builder;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = (0, helpers_1.bytesFromBase64)(object.code_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.run_as = message.runAs === "" ? undefined : message.runAs;
        obj.wasm_byte_code = message.wasmByteCode ? (0, encoding_1.toBase64)(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        obj.unpin_code = message.unpinCode === false ? undefined : message.unpinCode;
        obj.source = message.source === "" ? undefined : message.source;
        obj.builder = message.builder === "" ? undefined : message.builder;
        obj.code_hash = message.codeHash ? (0, helpers_1.base64FromBytes)(message.codeHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreCodeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/StoreCodeProposal",
            value: exports.StoreCodeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreCodeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.StoreCodeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
            value: exports.StoreCodeProposal.encode(message).finish()
        };
    }
};
function createBaseInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.InstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
                    break;
                case 8:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInstantiateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.run_as = message.runAs === "" ? undefined : message.runAs;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.label = message.label === "" ? undefined : message.label;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InstantiateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/InstantiateContractProposal",
            value: exports.InstantiateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.InstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
            value: exports.InstantiateContractProposal.encode(message).finish()
        };
    }
};
function createBaseInstantiateContract2Proposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false
    };
}
exports.InstantiateContract2Proposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(74).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(80).bool(message.fixMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContract2Proposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
                    break;
                case 8:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.salt = reader.bytes();
                    break;
                case 10:
                    message.fixMsg = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInstantiateContract2Proposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.salt = object.salt ?? new Uint8Array();
        message.fixMsg = object.fixMsg ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseInstantiateContract2Proposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = (0, helpers_1.bytesFromBase64)(object.salt);
        }
        if (object.fix_msg !== undefined && object.fix_msg !== null) {
            message.fixMsg = object.fix_msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.run_as = message.runAs === "" ? undefined : message.runAs;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.label = message.label === "" ? undefined : message.label;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        obj.salt = message.salt ? (0, helpers_1.base64FromBytes)(message.salt) : undefined;
        obj.fix_msg = message.fixMsg === false ? undefined : message.fixMsg;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InstantiateContract2Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/InstantiateContract2Proposal",
            value: exports.InstantiateContract2Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InstantiateContract2Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.InstantiateContract2Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
            value: exports.InstantiateContract2Proposal.encode(message).finish()
        };
    }
};
function createBaseMigrateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        title: "",
        description: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
exports.MigrateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMigrateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MigrateContractProposal",
            value: exports.MigrateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
            value: exports.MigrateContractProposal.encode(message).finish()
        };
    }
};
function createBaseSudoContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        title: "",
        description: "",
        contract: "",
        msg: new Uint8Array()
    };
}
exports.SudoContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSudoContractProposal();
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
                    message.contract = reader.string();
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSudoContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSudoContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SudoContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/SudoContractProposal",
            value: exports.SudoContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SudoContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SudoContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
            value: exports.SudoContractProposal.encode(message).finish()
        };
    }
};
function createBaseExecuteContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        title: "",
        description: "",
        runAs: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.ExecuteContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecuteContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExecuteContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExecuteContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.run_as = message.runAs === "" ? undefined : message.runAs;
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExecuteContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ExecuteContractProposal",
            value: exports.ExecuteContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ExecuteContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ExecuteContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
            value: exports.ExecuteContractProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        title: "",
        description: "",
        newAdmin: "",
        contract: ""
    };
}
exports.UpdateAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
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
                    message.newAdmin = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        obj.contract = message.contract === "" ? undefined : message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UpdateAdminProposal",
            value: exports.UpdateAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateAdminProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
            value: exports.UpdateAdminProposal.encode(message).finish()
        };
    }
};
function createBaseClearAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        title: "",
        description: "",
        contract: ""
    };
}
exports.ClearAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearAdminProposal();
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
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClearAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClearAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.contract = message.contract === "" ? undefined : message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClearAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ClearAdminProposal",
            value: exports.ClearAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClearAdminProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ClearAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
            value: exports.ClearAdminProposal.encode(message).finish()
        };
    }
};
function createBasePinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
exports.PinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePinCodesProposal();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
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
        const message = createBasePinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = message.codeIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/PinCodesProposal",
            value: exports.PinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.PinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
            value: exports.PinCodesProposal.encode(message).finish()
        };
    }
};
function createBaseUnpinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
exports.UnpinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpinCodesProposal();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
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
        const message = createBaseUnpinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnpinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = message.codeIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnpinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UnpinCodesProposal",
            value: exports.UnpinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnpinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UnpinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
            value: exports.UnpinCodesProposal.encode(message).finish()
        };
    }
};
function createBaseAccessConfigUpdate() {
    return {
        codeId: BigInt(0),
        instantiatePermission: types_1.AccessConfig.fromPartial({})
    };
}
exports.AccessConfigUpdate = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfigUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessConfigUpdate();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessConfigUpdate();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = types_1.AccessConfig.fromAmino(object.instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessConfigUpdate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessConfigUpdate",
            value: exports.AccessConfigUpdate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccessConfigUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.AccessConfigUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
            value: exports.AccessConfigUpdate.encode(message).finish()
        };
    }
};
function createBaseUpdateInstantiateConfigProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        title: "",
        description: "",
        accessConfigUpdates: []
    };
}
exports.UpdateInstantiateConfigProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.accessConfigUpdates) {
            exports.AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateInstantiateConfigProposal();
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
                    message.accessConfigUpdates.push(exports.AccessConfigUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateInstantiateConfigProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.accessConfigUpdates = object.accessConfigUpdates?.map(e => exports.AccessConfigUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateInstantiateConfigProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.accessConfigUpdates = object.access_config_updates?.map(e => exports.AccessConfigUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.accessConfigUpdates) {
            obj.access_config_updates = message.accessConfigUpdates.map(e => e ? exports.AccessConfigUpdate.toAmino(e) : undefined);
        }
        else {
            obj.access_config_updates = message.accessConfigUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateInstantiateConfigProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UpdateInstantiateConfigProposal",
            value: exports.UpdateInstantiateConfigProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateInstantiateConfigProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateInstantiateConfigProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
            value: exports.UpdateInstantiateConfigProposal.encode(message).finish()
        };
    }
};
function createBaseStoreAndInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        admin: "",
        label: "",
        msg: new Uint8Array(),
        funds: [],
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
exports.StoreAndInstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(48).bool(message.unpinCode);
        }
        if (message.admin !== "") {
            writer.uint32(58).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(66).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(74).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.source !== "") {
            writer.uint32(90).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(98).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(106).bytes(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreAndInstantiateContractProposal();
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
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.unpinCode = reader.bool();
                    break;
                case 7:
                    message.admin = reader.string();
                    break;
                case 8:
                    message.label = reader.string();
                    break;
                case 9:
                    message.msg = reader.bytes();
                    break;
                case 10:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.source = reader.string();
                    break;
                case 12:
                    message.builder = reader.string();
                    break;
                case 13:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreAndInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreAndInstantiateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = (0, encoding_1.fromBase64)(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = types_1.AccessConfig.fromAmino(object.instantiate_permission);
        }
        if (object.unpin_code !== undefined && object.unpin_code !== null) {
            message.unpinCode = object.unpin_code;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        if (object.builder !== undefined && object.builder !== null) {
            message.builder = object.builder;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = (0, helpers_1.bytesFromBase64)(object.code_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.run_as = message.runAs === "" ? undefined : message.runAs;
        obj.wasm_byte_code = message.wasmByteCode ? (0, encoding_1.toBase64)(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        obj.unpin_code = message.unpinCode === false ? undefined : message.unpinCode;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.label = message.label === "" ? undefined : message.label;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = message.funds;
        }
        obj.source = message.source === "" ? undefined : message.source;
        obj.builder = message.builder === "" ? undefined : message.builder;
        obj.code_hash = message.codeHash ? (0, helpers_1.base64FromBytes)(message.codeHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreAndInstantiateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/StoreAndInstantiateContractProposal",
            value: exports.StoreAndInstantiateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreAndInstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.StoreAndInstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
            value: exports.StoreAndInstantiateContractProposal.encode(message).finish()
        };
    }
};
