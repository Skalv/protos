import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export declare const AminoConverter: {
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: (message: MsgSupply) => import("./tx").MsgSupplyAmino;
        fromAmino: (object: import("./tx").MsgSupplyAmino) => MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: (message: MsgCollateralize) => import("./tx").MsgCollateralizeAmino;
        fromAmino: (object: import("./tx").MsgCollateralizeAmino) => MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: (message: MsgDecollateralize) => import("./tx").MsgDecollateralizeAmino;
        fromAmino: (object: import("./tx").MsgDecollateralizeAmino) => MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: MsgBorrow) => import("./tx").MsgBorrowAmino;
        fromAmino: (object: import("./tx").MsgBorrowAmino) => MsgBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: (message: MsgRepay) => import("./tx").MsgRepayAmino;
        fromAmino: (object: import("./tx").MsgRepayAmino) => MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: MsgLiquidate) => import("./tx").MsgLiquidateAmino;
        fromAmino: (object: import("./tx").MsgLiquidateAmino) => MsgLiquidate;
    };
};
