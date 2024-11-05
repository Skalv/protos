"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const audit_1 = require("./audit");
exports.AminoConverter = {
    "/akash.audit.v1beta2.MsgSignProviderAttributes": {
        aminoType: "/akash.audit.v1beta2.MsgSignProviderAttributes",
        toAmino: audit_1.MsgSignProviderAttributes.toAmino,
        fromAmino: audit_1.MsgSignProviderAttributes.fromAmino
    },
    "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
        aminoType: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
        toAmino: audit_1.MsgDeleteProviderAttributes.toAmino,
        fromAmino: audit_1.MsgDeleteProviderAttributes.fromAmino
    }
};
