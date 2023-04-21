import React from "react";

export default function CompareBoxDesc({item}) {
  return (
    <table className=" w-[90%] border-2">
      <thead className="border-2">
        <tr className="h-10 text-gray-500">
          <th colSpan={2}>Նկարագրություն</th>
        </tr>
      </thead>
      <tbody className=" text-gray-500">
        <tr className="border-2 h-10">
          <td className="px-2">Բրենդ</td>
          <td className="px-2">{item?.brand}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Մոդել</td>
          <td className="px-2">{item?.title}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Կոդ</td>
          <td className="px-2">{item?.article}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Գույն</td>
          <td className="px-2">{item?.color_name}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Դիսփլեյ</td>
          <td className="px-2">{item?.display_technology}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Հիշողություն</td>
          <td className="px-2">{item?.storage}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Պրոցեսոր</td>
          <td className="px-2">{item?.processor}</td>
        </tr>
        <tr className="border-2 h-10">
          <td className="px-2">Պրոցեսորի միջուկների քանակը</td>
          <td className="px-2">{item?.processor_cores}</td>
        </tr>
      </tbody>
    </table>
  );
}
