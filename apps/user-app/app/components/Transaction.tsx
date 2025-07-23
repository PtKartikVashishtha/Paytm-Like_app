enum Status {
    Success ,
    Processing ,
    Failed 
}

interface singleUnit {
    dateTime : Date ,
    amount : number ,
    status : Status ,
    token? : string
}
const statusMap: Record<Status, string> = {
  [Status.Success]: "Success",
  [Status.Processing]: "Processing",
  [Status.Failed]: "Failed"
};

interface TransactionType {
    transaction : singleUnit
}

function formatDate(date?: Date | string | null): string {
  if (!date) return "Invalid Date";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "Invalid Date";

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formatted = d.toLocaleString("en-US", options);
  return formatted.replace(/,/g, "");
}




export const Transaction = (props : TransactionType) => {
    const statusValue = typeof props.transaction.status === "string"
    ? Status[props.transaction.status as keyof typeof Status]
    : props.transaction.status;

    let fontColour = "text-green-500";
    if (statusValue === Status.Failed) fontColour = "text-red-700";
    else if (statusValue === Status.Processing) fontColour = "text-orange-500";
    return <div className="pb-2 mb-2 border-b-1 border-gray-300">
        <div className="flex justify-between items-center">
            <div>
                <div className="font-serif text-md">Recived INR</div>
                <div className="font-sans text-sm pt-2 text-gray-700 flex items-center font-medium">
                    {formatDate(props.transaction.dateTime)}
                    <div className={`ml-2 text-sm font-semibold font-serif ${fontColour}`}>({props.transaction.status})</div>
                </div>
            </div>
            <div className={`text-xl font-mono ${fontColour}`}>+ Rs {props.transaction.amount}</div>
        </div>
        
    </div>
}