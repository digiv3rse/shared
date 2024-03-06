import { IPrimarySaleAdapter, PRIMARY_SALE_SOURCES } from "../../types";
declare const usePrimarySale: (source?: PRIMARY_SALE_SOURCES) => IPrimarySaleAdapter | undefined;
export default usePrimarySale;
