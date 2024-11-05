//@ts-nocheck
import { ERC20Token } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: BigInt(0),
        batchTimeout: BigInt(0),
        transactions: [],
        tokenContract: "",
        block: BigInt(0)
    };
}
export const OutgoingTxBatch = {
    typeUrl: "/injective.peggy.v1.OutgoingTxBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== BigInt(0)) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(40).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTxBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNonce = reader.uint64();
                    break;
                case 2:
                    message.batchTimeout = reader.uint64();
                    break;
                case 3:
                    message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutgoingTxBatch();
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
        message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
        message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        message.tokenContract = object.tokenContract ?? "";
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseOutgoingTxBatch();
        if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
            message.batchNonce = BigInt(object.batch_nonce);
        }
        if (object.batch_timeout !== undefined && object.batch_timeout !== null) {
            message.batchTimeout = BigInt(object.batch_timeout);
        }
        message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_nonce = message.batchNonce !== BigInt(0) ? (message.batchNonce?.toString)() : undefined;
        obj.batch_timeout = message.batchTimeout !== BigInt(0) ? (message.batchTimeout?.toString)() : undefined;
        if (message.transactions) {
            obj.transactions = message.transactions.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transactions = message.transactions;
        }
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OutgoingTxBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OutgoingTxBatch.decode(message.value);
    },
    toProto(message) {
        return OutgoingTxBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.OutgoingTxBatch",
            value: OutgoingTxBatch.encode(message).finish()
        };
    }
};
function createBaseOutgoingTransferTx() {
    return {
        id: BigInt(0),
        sender: "",
        destAddress: "",
        erc20Token: undefined,
        erc20Fee: undefined
    };
}
export const OutgoingTransferTx = {
    typeUrl: "/injective.peggy.v1.OutgoingTransferTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTransferTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                case 4:
                    message.erc20Token = ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutgoingTransferTx();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.sender = object.sender ?? "";
        message.destAddress = object.destAddress ?? "";
        message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
        message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOutgoingTransferTx();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.dest_address !== undefined && object.dest_address !== null) {
            message.destAddress = object.dest_address;
        }
        if (object.erc20_token !== undefined && object.erc20_token !== null) {
            message.erc20Token = ERC20Token.fromAmino(object.erc20_token);
        }
        if (object.erc20_fee !== undefined && object.erc20_fee !== null) {
            message.erc20Fee = ERC20Token.fromAmino(object.erc20_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.dest_address = message.destAddress === "" ? undefined : message.destAddress;
        obj.erc20_token = message.erc20Token ? ERC20Token.toAmino(message.erc20Token) : undefined;
        obj.erc20_fee = message.erc20Fee ? ERC20Token.toAmino(message.erc20Fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OutgoingTransferTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OutgoingTransferTx.decode(message.value);
    },
    toProto(message) {
        return OutgoingTransferTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.OutgoingTransferTx",
            value: OutgoingTransferTx.encode(message).finish()
        };
    }
};
