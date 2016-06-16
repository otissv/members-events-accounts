export default `
type CashSale {
	_id      : String,
	amount 	 : String,
  discount : String,
  notesIds : String,
  postingId: String,
  quanity  : String
}
`;


export const cashSaleQueries = `
	cashSalesFind(_id: String, name: String): [CashSale]
	cashSaleFindOne(_id: String, name: String): CashSale
`;