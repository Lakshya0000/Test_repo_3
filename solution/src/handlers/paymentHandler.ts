// Payment handler

interface UpiPayment {
  payment_mode: 'UPI'
  upi_id: string
}

interface CreditCardPayment {
  payment_mode: 'CREDIT_CARD'
  card_number: string
  expiry: string
  cvv: string
}

interface WalletPayment {
  payment_mode: 'WALLET'
  wallet_id: string
}

export type Payment = UpiPayment | CreditCardPayment | WalletPayment

export function processPayment(payment: Payment): boolean {
  // Simulate random payment failure (30% chance)
  if (Math.random() < 0.3) {
    return false
  }

  switch (payment.payment_mode) {
    case 'UPI':
      return !!payment.upi_id
    case 'CREDIT_CARD':
      return !!payment.card_number && !!payment.expiry && !!payment.cvv
    case 'WALLET':
      return !!payment.wallet_id
    default:
      return false
  }
}
