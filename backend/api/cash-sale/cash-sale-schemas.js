export default `
type CashSale {
  _id       : String,
  amount 	  : String,
  created   : String,
  createdBy : User,
  discount  : String,
  notes     : [Note],
  postingId : String,
  quanity   : String,
  updated   : String,
  updatedBy : User
}
`;


export const cashSaleQueries = `
  cashSalesFind(_id: String, name: String): [CashSale]
  cashSaleFindById(_id: String, name: String): CashSale
  cashSaleFindOne(_id: String, name: String): CashSale
`;
