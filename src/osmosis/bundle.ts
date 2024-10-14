//@ts-nocheck
import * as _231 from "./downtime-detector/v1beta1/downtime_duration";
import * as _232 from "./downtime-detector/v1beta1/genesis";
import * as _233 from "./downtime-detector/v1beta1/query";
import * as _234 from "./epochs/genesis";
import * as _235 from "./epochs/query";
import * as _236 from "./gamm/pool-models/balancer/balancerPool";
import * as _237 from "./gamm/v1beta1/genesis";
import * as _238 from "./gamm/v1beta1/query";
import * as _239 from "./gamm/v1beta1/tx";
import * as _240 from "./gamm/pool-models/balancer/tx/tx";
import * as _241 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _242 from "./gamm/pool-models/stableswap/tx";
import * as _243 from "./gamm/v2/query";
import * as _244 from "./ibc-rate-limit/v1beta1/params";
import * as _245 from "./ibc-rate-limit/v1beta1/query";
import * as _246 from "./incentives/gauge";
import * as _247 from "./incentives/genesis";
import * as _248 from "./incentives/params";
import * as _249 from "./incentives/query";
import * as _250 from "./incentives/tx";
import * as _251 from "./lockup/genesis";
import * as _252 from "./lockup/lock";
import * as _253 from "./lockup/params";
import * as _254 from "./lockup/query";
import * as _255 from "./lockup/tx";
import * as _256 from "./mint/v1beta1/genesis";
import * as _257 from "./mint/v1beta1/mint";
import * as _258 from "./mint/v1beta1/query";
import * as _259 from "./pool-incentives/v1beta1/genesis";
import * as _260 from "./pool-incentives/v1beta1/gov";
import * as _261 from "./pool-incentives/v1beta1/incentives";
import * as _262 from "./pool-incentives/v1beta1/query";
import * as _263 from "./protorev/v1beta1/genesis";
import * as _264 from "./protorev/v1beta1/gov";
import * as _265 from "./protorev/v1beta1/params";
import * as _266 from "./protorev/v1beta1/protorev";
import * as _267 from "./protorev/v1beta1/query";
import * as _268 from "./protorev/v1beta1/tx";
import * as _269 from "./sumtree/v1beta1/tree";
import * as _270 from "./superfluid/genesis";
import * as _271 from "./superfluid/params";
import * as _272 from "./superfluid/query";
import * as _273 from "./superfluid/superfluid";
import * as _274 from "./superfluid/tx";
import * as _275 from "./swaprouter/v1beta1/genesis";
import * as _276 from "./swaprouter/v1beta1/module_route";
import * as _277 from "./swaprouter/v1beta1/query";
import * as _278 from "./swaprouter/v1beta1/swap_route";
import * as _279 from "./swaprouter/v1beta1/tx";
import * as _280 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _281 from "./tokenfactory/v1beta1/genesis";
import * as _282 from "./tokenfactory/v1beta1/params";
import * as _283 from "./tokenfactory/v1beta1/query";
import * as _284 from "./tokenfactory/v1beta1/tx";
import * as _285 from "./twap/v1beta1/genesis";
import * as _286 from "./twap/v1beta1/query";
import * as _287 from "./twap/v1beta1/twap_record";
import * as _288 from "./txfees/v1beta1/feetoken";
import * as _289 from "./txfees/v1beta1/genesis";
import * as _290 from "./txfees/v1beta1/gov";
import * as _291 from "./txfees/v1beta1/query";
import * as _292 from "./valset-pref/v1beta1/query";
import * as _293 from "./valset-pref/v1beta1/state";
import * as _294 from "./valset-pref/v1beta1/tx";
import * as _503 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _504 from "./gamm/pool-models/stableswap/tx.amino";
import * as _505 from "./gamm/v1beta1/tx.amino";
import * as _506 from "./incentives/tx.amino";
import * as _507 from "./lockup/tx.amino";
import * as _508 from "./protorev/v1beta1/tx.amino";
import * as _509 from "./superfluid/tx.amino";
import * as _510 from "./swaprouter/v1beta1/tx.amino";
import * as _511 from "./tokenfactory/v1beta1/tx.amino";
import * as _512 from "./valset-pref/v1beta1/tx.amino";
import * as _513 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _514 from "./gamm/pool-models/stableswap/tx.registry";
import * as _515 from "./gamm/v1beta1/tx.registry";
import * as _516 from "./incentives/tx.registry";
import * as _517 from "./lockup/tx.registry";
import * as _518 from "./protorev/v1beta1/tx.registry";
import * as _519 from "./superfluid/tx.registry";
import * as _520 from "./swaprouter/v1beta1/tx.registry";
import * as _521 from "./tokenfactory/v1beta1/tx.registry";
import * as _522 from "./valset-pref/v1beta1/tx.registry";
import * as _523 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _524 from "./epochs/query.rpc.Query";
import * as _525 from "./gamm/v1beta1/query.rpc.Query";
import * as _526 from "./gamm/v2/query.rpc.Query";
import * as _527 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _528 from "./incentives/query.rpc.Query";
import * as _529 from "./lockup/query.rpc.Query";
import * as _530 from "./mint/v1beta1/query.rpc.Query";
import * as _531 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _532 from "./protorev/v1beta1/query.rpc.Query";
import * as _533 from "./superfluid/query.rpc.Query";
import * as _534 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _535 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _536 from "./twap/v1beta1/query.rpc.Query";
import * as _537 from "./txfees/v1beta1/query.rpc.Query";
import * as _538 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _539 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _540 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _541 from "./gamm/v1beta1/tx.rpc.msg";
import * as _542 from "./incentives/tx.rpc.msg";
import * as _543 from "./lockup/tx.rpc.msg";
import * as _544 from "./protorev/v1beta1/tx.rpc.msg";
import * as _545 from "./superfluid/tx.rpc.msg";
import * as _546 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _547 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _548 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _616 from "./rpc.query";
import * as _617 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._523
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._234,
      ..._235,
      ..._524
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._505,
      ..._515,
      ..._525,
      ..._541
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._240,
          ..._503,
          ..._513,
          ..._539
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._241,
          ..._242,
          ..._504,
          ..._514,
          ..._540
        };
      }
    }
    export const v2 = {
      ..._243,
      ..._526
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._244,
      ..._245,
      ..._527
    };
  }
  export const incentives = {
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._506,
    ..._516,
    ..._528,
    ..._542
  };
  export const lockup = {
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._507,
    ..._517,
    ..._529,
    ..._543
  };
  export namespace mint {
    export const v1beta1 = {
      ..._256,
      ..._257,
      ..._258,
      ..._530
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._531
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._508,
      ..._518,
      ..._532,
      ..._544
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._269
    };
  }
  export const superfluid = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._509,
    ..._519,
    ..._533,
    ..._545
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._510,
      ..._520,
      ..._534,
      ..._546
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._511,
      ..._521,
      ..._535,
      ..._547
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._285,
      ..._286,
      ..._287,
      ..._536
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._537
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._292,
      ..._293,
      ..._294,
      ..._512,
      ..._522,
      ..._538,
      ..._548
    };
  }
  export const ClientFactory = {
    ..._616,
    ..._617
  };
}