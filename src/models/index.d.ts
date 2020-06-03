import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Asset {
  readonly id: string;
  readonly symbol: string;
  readonly holdings?: number;
  readonly price?: number;
  readonly value?: number;
  constructor(init: ModelInit<Asset>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}