
export const priceRu = (price: string): string => price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')