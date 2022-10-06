import {DiemDi} from "./diemDi";
import {DiemDen} from "./diemDen";

export interface Benxe {
  id?:number,
  bienSoXe?:string,
  loaiXe?:string,
  tenNhaXe?:string,
  diemDi?:DiemDi,
  diemDen?:DiemDen,
  sdt?:string,
  email?:string,
  gioDi?:string,
  gioDen?:string,
}
