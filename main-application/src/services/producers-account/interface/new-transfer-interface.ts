export interface iNewTransferInterface {
  value: number;
  date_transfer_request: Date;
  date_transfer_accepted: Date;
  bar_code_to_transfer: string;
  bar_code_owner: string;
}
