import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export declare const AminoConverter: {
    "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
        aminoType: string;
        toAmino: (message: MsgCreateBitcannaid) => import("./tx").MsgCreateBitcannaidAmino;
        fromAmino: (object: import("./tx").MsgCreateBitcannaidAmino) => MsgCreateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
        aminoType: string;
        toAmino: (message: MsgUpdateBitcannaid) => import("./tx").MsgUpdateBitcannaidAmino;
        fromAmino: (object: import("./tx").MsgUpdateBitcannaidAmino) => MsgUpdateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
        aminoType: string;
        toAmino: (message: MsgDeleteBitcannaid) => import("./tx").MsgDeleteBitcannaidAmino;
        fromAmino: (object: import("./tx").MsgDeleteBitcannaidAmino) => MsgDeleteBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
        aminoType: string;
        toAmino: (message: MsgCreateSupplychain) => import("./tx").MsgCreateSupplychainAmino;
        fromAmino: (object: import("./tx").MsgCreateSupplychainAmino) => MsgCreateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
        aminoType: string;
        toAmino: (message: MsgUpdateSupplychain) => import("./tx").MsgUpdateSupplychainAmino;
        fromAmino: (object: import("./tx").MsgUpdateSupplychainAmino) => MsgUpdateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
        aminoType: string;
        toAmino: (message: MsgDeleteSupplychain) => import("./tx").MsgDeleteSupplychainAmino;
        fromAmino: (object: import("./tx").MsgDeleteSupplychainAmino) => MsgDeleteSupplychain;
    };
};
