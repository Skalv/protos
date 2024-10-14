//@ts-nocheck
import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export const AminoConverter = {
  "/umee.leverage.v1.MsgSupply": {
    aminoType: "/umee.leverage.v1.MsgSupply",
    toAmino: MsgSupply.toAmino,
    fromAmino: MsgSupply.fromAmino
  },
  "/umee.leverage.v1.MsgWithdraw": {
    aminoType: "/umee.leverage.v1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/umee.leverage.v1.MsgCollateralize": {
    aminoType: "/umee.leverage.v1.MsgCollateralize",
    toAmino: MsgCollateralize.toAmino,
    fromAmino: MsgCollateralize.fromAmino
  },
  "/umee.leverage.v1.MsgDecollateralize": {
    aminoType: "/umee.leverage.v1.MsgDecollateralize",
    toAmino: MsgDecollateralize.toAmino,
    fromAmino: MsgDecollateralize.fromAmino
  },
  "/umee.leverage.v1.MsgBorrow": {
    aminoType: "/umee.leverage.v1.MsgBorrow",
    toAmino: MsgBorrow.toAmino,
    fromAmino: MsgBorrow.fromAmino
  },
  "/umee.leverage.v1.MsgRepay": {
    aminoType: "/umee.leverage.v1.MsgRepay",
    toAmino: MsgRepay.toAmino,
    fromAmino: MsgRepay.fromAmino
  },
  "/umee.leverage.v1.MsgLiquidate": {
    aminoType: "/umee.leverage.v1.MsgLiquidate",
    toAmino: MsgLiquidate.toAmino,
    fromAmino: MsgLiquidate.fromAmino
  }
};