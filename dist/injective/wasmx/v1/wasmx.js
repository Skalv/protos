"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRegistrationRequest = exports.BatchContractRegistrationRequestProposal = exports.ContractRegistrationRequestProposal = exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        isExecutionEnabled: false,
        registryContract: "",
        maxBeginBlockTotalGas: BigInt(0),
        maxContractGasLimit: BigInt(0),
        minGasPrice: ""
    };
}
exports.Params = {
    typeUrl: "/injective.wasmx.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isExecutionEnabled === true) {
            writer.uint32(8).bool(message.isExecutionEnabled);
        }
        if (message.registryContract !== "") {
            writer.uint32(18).string(message.registryContract);
        }
        if (message.maxBeginBlockTotalGas !== BigInt(0)) {
            writer.uint32(24).uint64(message.maxBeginBlockTotalGas);
        }
        if (message.maxContractGasLimit !== BigInt(0)) {
            writer.uint32(32).uint64(message.maxContractGasLimit);
        }
        if (message.minGasPrice !== "") {
            writer.uint32(42).string(message.minGasPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isExecutionEnabled = reader.bool();
                    break;
                case 2:
                    message.registryContract = reader.string();
                    break;
                case 3:
                    message.maxBeginBlockTotalGas = reader.uint64();
                    break;
                case 4:
                    message.maxContractGasLimit = reader.uint64();
                    break;
                case 5:
                    message.minGasPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.isExecutionEnabled = object.isExecutionEnabled ?? false;
        message.registryContract = object.registryContract ?? "";
        message.maxBeginBlockTotalGas = object.maxBeginBlockTotalGas !== undefined && object.maxBeginBlockTotalGas !== null ? BigInt(object.maxBeginBlockTotalGas.toString()) : BigInt(0);
        message.maxContractGasLimit = object.maxContractGasLimit !== undefined && object.maxContractGasLimit !== null ? BigInt(object.maxContractGasLimit.toString()) : BigInt(0);
        message.minGasPrice = object.minGasPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.is_execution_enabled !== undefined && object.is_execution_enabled !== null) {
            message.isExecutionEnabled = object.is_execution_enabled;
        }
        if (object.registry_contract !== undefined && object.registry_contract !== null) {
            message.registryContract = object.registry_contract;
        }
        if (object.max_begin_block_total_gas !== undefined && object.max_begin_block_total_gas !== null) {
            message.maxBeginBlockTotalGas = BigInt(object.max_begin_block_total_gas);
        }
        if (object.max_contract_gas_limit !== undefined && object.max_contract_gas_limit !== null) {
            message.maxContractGasLimit = BigInt(object.max_contract_gas_limit);
        }
        if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
            message.minGasPrice = object.min_gas_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_execution_enabled = message.isExecutionEnabled === false ? undefined : message.isExecutionEnabled;
        obj.registry_contract = message.registryContract === "" ? undefined : message.registryContract;
        obj.max_begin_block_total_gas = message.maxBeginBlockTotalGas !== BigInt(0) ? (message.maxBeginBlockTotalGas?.toString)() : undefined;
        obj.max_contract_gas_limit = message.maxContractGasLimit !== BigInt(0) ? (message.maxContractGasLimit?.toString)() : undefined;
        obj.min_gas_price = message.minGasPrice === "" ? undefined : message.minGasPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseContractRegistrationRequestProposal() {
    return {
        title: "",
        description: "",
        contractRegistrationRequest: exports.ContractRegistrationRequest.fromPartial({})
    };
}
exports.ContractRegistrationRequestProposal = {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contractRegistrationRequest !== undefined) {
            exports.ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractRegistrationRequestProposal();
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
                    message.contractRegistrationRequest = exports.ContractRegistrationRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractRegistrationRequestProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? exports.ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractRegistrationRequestProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract_registration_request !== undefined && object.contract_registration_request !== null) {
            message.contractRegistrationRequest = exports.ContractRegistrationRequest.fromAmino(object.contract_registration_request);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.contract_registration_request = message.contractRegistrationRequest ? exports.ContractRegistrationRequest.toAmino(message.contractRegistrationRequest) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractRegistrationRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContractRegistrationRequestProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ContractRegistrationRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
            value: exports.ContractRegistrationRequestProposal.encode(message).finish()
        };
    }
};
function createBaseBatchContractRegistrationRequestProposal() {
    return {
        title: "",
        description: "",
        contractRegistrationRequests: []
    };
}
exports.BatchContractRegistrationRequestProposal = {
    typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.contractRegistrationRequests) {
            exports.ContractRegistrationRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchContractRegistrationRequestProposal();
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
                    message.contractRegistrationRequests.push(exports.ContractRegistrationRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchContractRegistrationRequestProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contractRegistrationRequests = object.contractRegistrationRequests?.map(e => exports.ContractRegistrationRequest.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchContractRegistrationRequestProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.contractRegistrationRequests = object.contract_registration_requests?.map(e => exports.ContractRegistrationRequest.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.contractRegistrationRequests) {
            obj.contract_registration_requests = message.contractRegistrationRequests.map(e => e ? exports.ContractRegistrationRequest.toAmino(e) : undefined);
        }
        else {
            obj.contract_registration_requests = message.contractRegistrationRequests;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchContractRegistrationRequestProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchContractRegistrationRequestProposal.decode(message.value);
    },
    toProto(message) {
        return exports.BatchContractRegistrationRequestProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
            value: exports.BatchContractRegistrationRequestProposal.encode(message).finish()
        };
    }
};
function createBaseContractRegistrationRequest() {
    return {
        contractAddress: "",
        gasLimit: BigInt(0),
        gasPrice: "",
        pinContract: false
    };
}
exports.ContractRegistrationRequest = {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.gasPrice !== "") {
            writer.uint32(26).string(message.gasPrice);
        }
        if (message.pinContract === true) {
            writer.uint32(32).bool(message.pinContract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.gasPrice = reader.string();
                    break;
                case 4:
                    message.pinContract = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractRegistrationRequest();
        message.contractAddress = object.contractAddress ?? "";
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.gasPrice = object.gasPrice ?? "";
        message.pinContract = object.pinContract ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractRegistrationRequest();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.gas_limit !== undefined && object.gas_limit !== null) {
            message.gasLimit = BigInt(object.gas_limit);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gasPrice = object.gas_price;
        }
        if (object.pin_contract !== undefined && object.pin_contract !== null) {
            message.pinContract = object.pin_contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.gas_limit = message.gasLimit !== BigInt(0) ? (message.gasLimit?.toString)() : undefined;
        obj.gas_price = message.gasPrice === "" ? undefined : message.gasPrice;
        obj.pin_contract = message.pinContract === false ? undefined : message.pinContract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractRegistrationRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContractRegistrationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ContractRegistrationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest",
            value: exports.ContractRegistrationRequest.encode(message).finish()
        };
    }
};
