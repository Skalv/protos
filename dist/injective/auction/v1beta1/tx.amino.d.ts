import { MsgBid } from "./tx";
export declare const AminoConverter: {
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: (message: MsgBid) => import("./tx").MsgBidAmino;
        fromAmino: (object: import("./tx").MsgBidAmino) => MsgBid;
    };
};
