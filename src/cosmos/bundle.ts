//@ts-nocheck
import * as _81 from "./auth/v1beta1/auth";
import * as _82 from "./auth/v1beta1/genesis";
import * as _83 from "./auth/v1beta1/query";
import * as _84 from "./authz/v1beta1/authz";
import * as _85 from "./authz/v1beta1/event";
import * as _86 from "./authz/v1beta1/genesis";
import * as _87 from "./authz/v1beta1/query";
import * as _88 from "./authz/v1beta1/tx";
import * as _89 from "./bank/v1beta1/authz";
import * as _90 from "./bank/v1beta1/bank";
import * as _91 from "./bank/v1beta1/genesis";
import * as _92 from "./bank/v1beta1/query";
import * as _93 from "./bank/v1beta1/tx";
import * as _94 from "./base/abci/v1beta1/abci";
import * as _95 from "./base/query/v1beta1/pagination";
import * as _96 from "./base/reflection/v2alpha1/reflection";
import * as _97 from "./base/v1beta1/coin";
import * as _98 from "./crypto/ed25519/keys";
import * as _99 from "./crypto/hd/v1/hd";
import * as _100 from "./crypto/keyring/v1/record";
import * as _101 from "./crypto/multisig/keys";
import * as _102 from "./crypto/secp256k1/keys";
import * as _103 from "./crypto/secp256r1/keys";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./feegrant/v1beta1/feegrant";
import * as _109 from "./feegrant/v1beta1/genesis";
import * as _110 from "./feegrant/v1beta1/query";
import * as _111 from "./feegrant/v1beta1/tx";
import * as _112 from "./gov/v1/genesis";
import * as _113 from "./gov/v1/gov";
import * as _114 from "./gov/v1/query";
import * as _115 from "./gov/v1/tx";
import * as _116 from "./gov/v1beta1/genesis";
import * as _117 from "./gov/v1beta1/gov";
import * as _118 from "./gov/v1beta1/query";
import * as _119 from "./gov/v1beta1/tx";
import * as _120 from "./group/v1/events";
import * as _121 from "./group/v1/genesis";
import * as _122 from "./group/v1/query";
import * as _123 from "./group/v1/tx";
import * as _124 from "./group/v1/types";
import * as _125 from "./mint/v1beta1/genesis";
import * as _126 from "./mint/v1beta1/mint";
import * as _127 from "./mint/v1beta1/query";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _409 from "./authz/v1beta1/tx.amino";
import * as _410 from "./bank/v1beta1/tx.amino";
import * as _411 from "./distribution/v1beta1/tx.amino";
import * as _412 from "./feegrant/v1beta1/tx.amino";
import * as _413 from "./gov/v1/tx.amino";
import * as _414 from "./gov/v1beta1/tx.amino";
import * as _415 from "./group/v1/tx.amino";
import * as _416 from "./staking/v1beta1/tx.amino";
import * as _417 from "./upgrade/v1beta1/tx.amino";
import * as _418 from "./vesting/v1beta1/tx.amino";
import * as _419 from "./authz/v1beta1/tx.registry";
import * as _420 from "./bank/v1beta1/tx.registry";
import * as _421 from "./distribution/v1beta1/tx.registry";
import * as _422 from "./feegrant/v1beta1/tx.registry";
import * as _423 from "./gov/v1/tx.registry";
import * as _424 from "./gov/v1beta1/tx.registry";
import * as _425 from "./group/v1/tx.registry";
import * as _426 from "./staking/v1beta1/tx.registry";
import * as _427 from "./upgrade/v1beta1/tx.registry";
import * as _428 from "./vesting/v1beta1/tx.registry";
import * as _429 from "./auth/v1beta1/query.rpc.Query";
import * as _430 from "./authz/v1beta1/query.rpc.Query";
import * as _431 from "./bank/v1beta1/query.rpc.Query";
import * as _432 from "./distribution/v1beta1/query.rpc.Query";
import * as _433 from "./feegrant/v1beta1/query.rpc.Query";
import * as _434 from "./gov/v1/query.rpc.Query";
import * as _435 from "./gov/v1beta1/query.rpc.Query";
import * as _436 from "./group/v1/query.rpc.Query";
import * as _437 from "./mint/v1beta1/query.rpc.Query";
import * as _438 from "./params/v1beta1/query.rpc.Query";
import * as _439 from "./staking/v1beta1/query.rpc.Query";
import * as _440 from "./tx/v1beta1/service.rpc.Service";
import * as _441 from "./upgrade/v1beta1/query.rpc.Query";
import * as _442 from "./authz/v1beta1/tx.rpc.msg";
import * as _443 from "./bank/v1beta1/tx.rpc.msg";
import * as _444 from "./distribution/v1beta1/tx.rpc.msg";
import * as _445 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _446 from "./gov/v1/tx.rpc.msg";
import * as _447 from "./gov/v1beta1/tx.rpc.msg";
import * as _448 from "./group/v1/tx.rpc.msg";
import * as _449 from "./staking/v1beta1/tx.rpc.msg";
import * as _450 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _451 from "./vesting/v1beta1/tx.rpc.msg";
import * as _603 from "./rpc.query";
import * as _604 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._429
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._409,
      ..._419,
      ..._430,
      ..._442
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._410,
      ..._420,
      ..._431,
      ..._443
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._94
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._95
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._98
    };
    export namespace hd {
      export const v1 = {
        ..._99
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._100
      };
    }
    export const multisig = {
      ..._101
    };
    export const secp256k1 = {
      ..._102
    };
    export const secp256r1 = {
      ..._103
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._411,
      ..._421,
      ..._432,
      ..._444
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._412,
      ..._422,
      ..._433,
      ..._445
    };
  }
  export namespace gov {
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._413,
      ..._423,
      ..._434,
      ..._446
    };
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._414,
      ..._424,
      ..._435,
      ..._447
    };
  }
  export namespace group {
    export const v1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._415,
      ..._425,
      ..._436,
      ..._448
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._437
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._438
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._416,
      ..._426,
      ..._439,
      ..._449
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._440
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._417,
      ..._427,
      ..._441,
      ..._450
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._418,
      ..._428,
      ..._451
    };
  }
  export const ClientFactory = {
    ..._603,
    ..._604
  };
}