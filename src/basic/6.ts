interface UserInter {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: UserInter = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: UserInter = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
