import { Product } from './lib/definitions';

export default function Home() {
  const products: Array<Product> = [
    {
      id: 'be6da86f-dc91-4b28-b166-c7bb9e4bfbaa',
      amount: 15795,
      price: 20,
      code: '001',
      name: 'Pepsi',
    },
    {
      id: 'b37763f1-27ba-4965-8e38-2163e10a1cf3',
      amount: 20,
      price: 10,
      code: '002',
      name: 'Coca-cola',
    },
  ];

  return (
    <div>
      <table>
        {products.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.amount}</td>
            </tr>
          );
        })}
      </table>

      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
}
