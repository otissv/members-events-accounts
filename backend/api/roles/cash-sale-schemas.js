export default `
type CashSale {
  _id       : String,
  amount 	  : Int,
  client 		: User,
  created   : String,
  createdBy : User,
  discount  : Int,
  notes     : [Note],
  posting   : Posting,
  quanity   : Int,
  updated   : String,
  updatedBy : User
}
`;


export const cashSaleQueries = `
  cashSalesFind(_id: String, name: String): [CashSale]
  cashSaleFindById(_id: String, name: String): CashSale
  cashSaleFindOne(_id: String, name: String): CashSale
`;
