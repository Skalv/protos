import { MsgCreate, MsgPut, MsgTake } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: (message: MsgCreate) => import("./tx").MsgCreateAmino;
        fromAmino: (object: import("./tx").MsgCreateAmino) => MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: (message: MsgPut) => import("./tx").MsgPutAmino;
        fromAmino: (object: import("./tx").MsgPutAmino) => MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: (message: MsgTake) => import("./tx").MsgTakeAmino;
        fromAmino: (object: import("./tx").MsgTakeAmino) => MsgTake;
    };
};
