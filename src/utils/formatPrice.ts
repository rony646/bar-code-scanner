function formatPrice(price: number | string): string {
  return Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

export default formatPrice
