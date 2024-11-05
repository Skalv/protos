"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const provider_1 = require("./provider");
exports.AminoConverter = {
    "/akash.provider.v1beta1.MsgCreateProvider": {
        aminoType: "/akash.provider.v1beta1.MsgCreateProvider",
        toAmino: provider_1.MsgCreateProvider.toAmino,
        fromAmino: provider_1.MsgCreateProvider.fromAmino
    },
    "/akash.provider.v1beta1.MsgUpdateProvider": {
        aminoType: "/akash.provider.v1beta1.MsgUpdateProvider",
        toAmino: provider_1.MsgUpdateProvider.toAmino,
        fromAmino: provider_1.MsgUpdateProvider.fromAmino
    },
    "/akash.provider.v1beta1.MsgDeleteProvider": {
        aminoType: "/akash.provider.v1beta1.MsgDeleteProvider",
        toAmino: provider_1.MsgDeleteProvider.toAmino,
        fromAmino: provider_1.MsgDeleteProvider.fromAmino
    }
};
