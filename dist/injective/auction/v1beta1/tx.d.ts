import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
    sender: string;
    /** amount of the bid in INJ tokens */
    bidAmount: Coin;
    /** the current auction round being bid on */
    round: bigint;
}
export interface MsgBidProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgBid";
    value: Uint8Array;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidAmino {
    sender?: string;
    /** amount of the bid in INJ tokens */
    bid_amount?: CoinAmino;
    /** the current auction round being bid on */
    round?: string;
}
export interface MsgBidAminoMsg {
    type: "/injective.auction.v1beta1.MsgBid";
    value: MsgBidAmino;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
    sender: string;
    bid_amount: CoinSDKType;
    round: bigint;
}
export interface MsgBidResponse {
}
export interface MsgBidResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.MsgBidResponse";
    value: Uint8Array;
}
export interface MsgBidResponseAmino {
}
export interface MsgBidResponseAminoMsg {
    type: "/injective.auction.v1beta1.MsgBidResponse";
    value: MsgBidResponseAmino;
}
export interface MsgBidResponseSDKType {
}
export declare const MsgBid: {
    typeUrl: string;
    encode(message: MsgBid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBid;
    fromPartial(object: Partial<MsgBid>): MsgBid;
    fromAmino(object: MsgBidAmino): MsgBid;
    toAmino(message: MsgBid): MsgBidAmino;
    fromAminoMsg(object: MsgBidAminoMsg): MsgBid;
    fromProtoMsg(message: MsgBidProtoMsg): MsgBid;
    toProto(message: MsgBid): Uint8Array;
    toProtoMsg(message: MsgBid): MsgBidProtoMsg;
};
export declare const MsgBidResponse: {
    typeUrl: string;
    encode(_: MsgBidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBidResponse;
    fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse;
    fromAmino(_: MsgBidResponseAmino): MsgBidResponse;
    toAmino(_: MsgBidResponse): MsgBidResponseAmino;
    fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse;
    fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse;
    toProto(message: MsgBidResponse): Uint8Array;
    toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg;
};
