//@ts-nocheck
import { MsgCreate, MsgPut, MsgTake } from "./tx";
export const AminoConverter = {
  "/regen.ecocredit.basket.v1.MsgCreate": {
    aminoType: "/regen.ecocredit.basket.v1.MsgCreate",
    toAmino: MsgCreate.toAmino,
    fromAmino: MsgCreate.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgPut": {
    aminoType: "/regen.ecocredit.basket.v1.MsgPut",
    toAmino: MsgPut.toAmino,
    fromAmino: MsgPut.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgTake": {
    aminoType: "/regen.ecocredit.basket.v1.MsgTake",
    toAmino: MsgTake.toAmino,
    fromAmino: MsgTake.fromAmino
  }
};