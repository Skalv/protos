//@ts-nocheck
import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export const AminoConverter = {
    "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        toAmino: MsgCreateBitcannaid.toAmino,
        fromAmino: MsgCreateBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        toAmino: MsgUpdateBitcannaid.toAmino,
        fromAmino: MsgUpdateBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        toAmino: MsgDeleteBitcannaid.toAmino,
        fromAmino: MsgDeleteBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        toAmino: MsgCreateSupplychain.toAmino,
        fromAmino: MsgCreateSupplychain.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        toAmino: MsgUpdateSupplychain.toAmino,
        fromAmino: MsgUpdateSupplychain.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        toAmino: MsgDeleteSupplychain.toAmino,
        fromAmino: MsgDeleteSupplychain.fromAmino
    }
};
