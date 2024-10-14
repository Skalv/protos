//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsent {
  /** Operator bech32 address who delegates his feed consent */
  operator: string;
  /** Delegate bech32 address */
  delegate: string;
}
export interface EventDelegateFeedConsentProtoMsg {
  typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent";
  value: Uint8Array;
}
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsentAmino {
  /** Operator bech32 address who delegates his feed consent */
  operator?: string;
  /** Delegate bech32 address */
  delegate?: string;
}
export interface EventDelegateFeedConsentAminoMsg {
  type: "/umee.oracle.v1.EventDelegateFeedConsent";
  value: EventDelegateFeedConsentAmino;
}
/** EventDelegateFeedConsent is emitted on Msg/DelegateFeedConsent */
export interface EventDelegateFeedConsentSDKType {
  operator: string;
  delegate: string;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRate {
  /** uToken denom */
  denom: string;
  /** Exchange rate (based to USD) */
  rate: string;
}
export interface EventSetFxRateProtoMsg {
  typeUrl: "/umee.oracle.v1.EventSetFxRate";
  value: Uint8Array;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRateAmino {
  /** uToken denom */
  denom?: string;
  /** Exchange rate (based to USD) */
  rate?: string;
}
export interface EventSetFxRateAminoMsg {
  type: "/umee.oracle.v1.EventSetFxRate";
  value: EventSetFxRateAmino;
}
/** EventSetFxRate is emitted on exchange rate update */
export interface EventSetFxRateSDKType {
  denom: string;
  rate: string;
}
function createBaseEventDelegateFeedConsent(): EventDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const EventDelegateFeedConsent = {
  typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
  encode(message: EventDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDelegateFeedConsent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDelegateFeedConsent>): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
  fromAmino(object: EventDelegateFeedConsentAmino): EventDelegateFeedConsent {
    const message = createBaseEventDelegateFeedConsent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    }
    return message;
  },
  toAmino(message: EventDelegateFeedConsent): EventDelegateFeedConsentAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.delegate = message.delegate === "" ? undefined : message.delegate;
    return obj;
  },
  fromAminoMsg(object: EventDelegateFeedConsentAminoMsg): EventDelegateFeedConsent {
    return EventDelegateFeedConsent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDelegateFeedConsentProtoMsg): EventDelegateFeedConsent {
    return EventDelegateFeedConsent.decode(message.value);
  },
  toProto(message: EventDelegateFeedConsent): Uint8Array {
    return EventDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: EventDelegateFeedConsent): EventDelegateFeedConsentProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
      value: EventDelegateFeedConsent.encode(message).finish()
    };
  }
};
function createBaseEventSetFxRate(): EventSetFxRate {
  return {
    denom: "",
    rate: ""
  };
}
export const EventSetFxRate = {
  typeUrl: "/umee.oracle.v1.EventSetFxRate",
  encode(message: EventSetFxRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetFxRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetFxRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSetFxRate>): EventSetFxRate {
    const message = createBaseEventSetFxRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: EventSetFxRateAmino): EventSetFxRate {
    const message = createBaseEventSetFxRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: EventSetFxRate): EventSetFxRateAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: EventSetFxRateAminoMsg): EventSetFxRate {
    return EventSetFxRate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetFxRateProtoMsg): EventSetFxRate {
    return EventSetFxRate.decode(message.value);
  },
  toProto(message: EventSetFxRate): Uint8Array {
    return EventSetFxRate.encode(message).finish();
  },
  toProtoMsg(message: EventSetFxRate): EventSetFxRateProtoMsg {
    return {
      typeUrl: "/umee.oracle.v1.EventSetFxRate",
      value: EventSetFxRate.encode(message).finish()
    };
  }
};