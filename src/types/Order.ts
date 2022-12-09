export interface Order {
  id: number,
  userid: number,
  useremail: string,
  orderList: string[],
  total: number,
  note: string | null,
  createdAt: Date,
}
