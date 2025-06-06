import { HeaderDashboard } from "../components/HeaderDashboard";
import { Tag } from "../components/Tag";

export function ViewExtract() {
  return (
    <div className="w-full">
      <HeaderDashboard />
      <div className="w-full max-h-[50rem] overflow-y-auto shadow-2xs">
        <table className="w-full shadow-lg border-collapse">
          <thead className="bg-gray-100 text-gray-500">
            <tr>
              <th className="text-center p-4 text-sm rounded-tl-lg">
                Documento
              </th>
              <th className="text-center p-4 text-sm">Tipo</th>
              <th className="text-center p-4 text-sm">Peso calculado</th>
              <th className="text-center p-4 text-sm rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody className="border-t-gray-100 bg-gray-500">
            <tr>
              <td className="text-center p-4 text-sm">BHE 00775892</td>
              <td className="text-center p-4 text-sm"><Tag>Não executado</Tag></td>
              <td className="text-center p-4 text-sm">0</td>
              <td className="text-center p-4 text-sm"><Tag>Extravio total</Tag></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
