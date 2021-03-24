import { format, lastDayOfDecade } from "date-fns";

function formatDate(data) {
    const funcdata = format(data, "DD/MM/YYYY");
    return data;
}

export { formatDate };