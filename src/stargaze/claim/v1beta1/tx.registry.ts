//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInitialClaim, MsgClaimFor } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim", MsgInitialClaim], ["/publicawesome.stargaze.claim.v1beta1.MsgClaimFor", MsgClaimFor]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    initialClaim(value: MsgInitialClaim) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
        value: MsgInitialClaim.encode(value).finish()
      };
    },
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
        value: MsgClaimFor.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    initialClaim(value: MsgInitialClaim) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
        value
      };
    },
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
        value
      };
    }
  },
  fromPartial: {
    initialClaim(value: MsgInitialClaim) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
        value: MsgInitialClaim.fromPartial(value)
      };
    },
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
        value: MsgClaimFor.fromPartial(value)
      };
    }
  }
};