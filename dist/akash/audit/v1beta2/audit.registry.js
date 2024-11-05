"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const audit_1 = require("./audit");
exports.registry = [["/akash.audit.v1beta2.MsgSignProviderAttributes", audit_1.MsgSignProviderAttributes], ["/akash.audit.v1beta2.MsgDeleteProviderAttributes", audit_1.MsgDeleteProviderAttributes]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
                value: audit_1.MsgSignProviderAttributes.encode(value).finish()
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
                value: audit_1.MsgDeleteProviderAttributes.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
                value
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
                value
            };
        }
    },
    fromPartial: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
                value: audit_1.MsgSignProviderAttributes.fromPartial(value)
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
                value: audit_1.MsgDeleteProviderAttributes.fromPartial(value)
            };
        }
    }
};
