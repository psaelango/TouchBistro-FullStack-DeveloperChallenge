import NodeCache from "node-cache";

const AppCache = new NodeCache({ stdTTL: 120, checkperiod: 120 });

export default AppCache;