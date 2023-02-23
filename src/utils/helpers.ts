import { ClientData} from "../types/types";

export const BigTextCutter = (text: String, count: number) => {
  let sliced = text.slice(0,count);
  if (sliced.length < text.length) {
    sliced += '...';
  }
  return sliced
}
export const deleteFromTable = (tableData:Array<ClientData>, row: ClientData) => {
  const newTableData = tableData.filter(i => i.id !== row.id)
  return newTableData
}