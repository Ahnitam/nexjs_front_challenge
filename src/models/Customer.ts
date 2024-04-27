export interface Customer {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: string;
  address: {
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    country: string;
  };
}
