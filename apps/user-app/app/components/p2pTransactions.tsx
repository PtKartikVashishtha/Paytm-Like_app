enum Status {
    Success ,
    Processing ,
    Failed 
}

interface singleUnit {
    id: number ,
    SenderUserId: number,
    RecieverUserId: number,
    amount: number,
    status: Status,
    startTime: Date,
    sender : {
        name : string 
    } , 
    receiver : {
        name : string
    }
}
const statusMap: Record<Status, string> = {
  [Status.Success]: "Success",
  [Status.Processing]: "Processing",
  [Status.Failed]: "Failed"
};

interface TransactionType {
    transaction : singleUnit ,
    userId : number
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




export const P2pTransaction = (props : TransactionType) => {
    console.log(props.transaction);
    let text = "Recieved INR from";
    let fontColour = "text-green-500";
    let name = props.transaction.sender.name ;
    if(props.transaction.SenderUserId === props.userId){
        name = props.transaction.receiver.name ;
        text = "Sent INR to"
        fontColour = "text-red-500";
    }
    
    return <div className="pb-2 mb-2 border-b-1 border-gray-300">
        <div className="flex justify-between items-center">
            <div>
                <div className="flex items-center">
                    <div className="font-serif text-md">{text} : {name}</div>
                    {props.transaction.id ? <div className="ml-2 font-serif text-sm flex items-center">
                        (Transaction ID : {<div className="font-mono text-md ml-1">{props.transaction.id}</div>})
                    </div> : <div></div>}
                </div>
                <div className="font-sans text-sm pt-2 text-gray-700 flex items-center font-medium">
                    {formatDate(props.transaction.startTime)}
                    <div className={`ml-2 text-sm font-semibold font-serif ${fontColour}`}>({props.transaction.status})</div>
                </div>
            </div>
            <div className={`text-xl font-mono ${fontColour}`}>+ Rs {props.transaction.amount/100}</div>
        </div>
        
    </div>
}