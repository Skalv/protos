//@ts-nocheck
import * as _54 from "../bcna/bitcannaid";
import * as _55 from "../bcna/genesis";
import * as _56 from "../bcna/params";
import * as _57 from "../bcna/query";
import * as _58 from "../bcna/supplychain";
import * as _59 from "../bcna/tx";
import * as _405 from "../bcna/tx.amino";
import * as _406 from "../bcna/tx.registry";
import * as _407 from "../bcna/query.rpc.Query";
import * as _408 from "../bcna/tx.rpc.msg";
import * as _601 from "./rpc.query";
import * as _602 from "./rpc.tx";
export namespace BitCannaGlobal {
  export namespace bcna {
    export const bcna = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._405,
      ..._406,
      ..._407,
      ..._408
    };
  }
  export const ClientFactory = {
    ..._601,
    ..._602
  };
}