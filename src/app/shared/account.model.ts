export interface Account {
  id: string;
  isActive?: boolean;
  name: {
    first: string,
    last: string
  };
  email?: string;
  transactions: {
    id: string,
    amount: number,
    registered: string,
    company?: string
  }[];
}
