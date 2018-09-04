export interface StreamItem {
  item: Item;
}
export interface Item {
  publishers?: (string)[] | null;
  keys?: (string)[] | null;
  offchain: boolean;
  available: boolean;
  data: string;
  confirmations: number;
  blocktime: number;
  txid: string;
}
