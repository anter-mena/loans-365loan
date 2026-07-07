export function calcMonthlyPayment(principal: number, aprPercent: number, months: number): number {
  const r = aprPercent / 100 / 12;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

export interface RepaymentRow {
  term: string;
  apr: string;
  monthly: string;
  total: string;
}

const REPRESENTATIVE_APR = 29.9;

export function buildRepaymentExamples(principal: number, terms: [number, number]): RepaymentRow[] {
  return terms.map((months) => {
    const monthly = Math.round(calcMonthlyPayment(principal, REPRESENTATIVE_APR, months));
    const total = monthly * months;
    return {
      term: `${months} months`,
      apr: `${REPRESENTATIVE_APR}%`,
      monthly: `$${monthly}`,
      total: `$${total}`,
    };
  });
}

export interface AmountRepaymentRow {
  amount: string;
  apr: string;
  monthly: string;
  total: string;
}

export function buildRepaymentByAmount(amounts: number[], months: number): AmountRepaymentRow[] {
  return amounts.map((principal) => {
    const monthly = Math.round(calcMonthlyPayment(principal, REPRESENTATIVE_APR, months));
    const total = monthly * months;
    return {
      amount: `$${principal.toLocaleString("en-CA")}`,
      apr: `${REPRESENTATIVE_APR}%`,
      monthly: `$${monthly}`,
      total: `$${total}`,
    };
  });
}
