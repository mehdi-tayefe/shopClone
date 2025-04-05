
function Orders() {
  return (
    <div className="w-full h-max px-10 flex justify-start items-start">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="p-2 text-left w-1/5">ORDER NUMBER</th>
            <th className="p-2 text-left w-1/5">Date</th>
            <th className="p-2 text-left w-1/5">Status</th>
            <th className="p-2 text-left w-1/5">Total</th>
            <th className="p-2 text-left w-1/5">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-400">
            <td className="p-2">7643980998990</td>
            <td className="p-2"> October 8,2021</td>
            <td className="p-2"> Delivered</td>
            <td className="p-2"> $ 105</td>
            <td className="p-2"> View Order  |  Download</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="p-2">943980998990</td>
            <td className="p-2">October 8,2021</td>
            <td className="p-2">Processing</td>
            <td className="p-2">$ 100</td>
            <td className="p-2">View Order  |  Download</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="p-2">879980998990</td>
            <td className="p-2">October 8,2020</td>
            <td className="p-2">Delivered</td>
            <td className="p-2"> $ 65</td>
            <td className="p-2">View Order  |  Download</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Orders
