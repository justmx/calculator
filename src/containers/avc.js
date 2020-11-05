

const Calculator = ({addHistoryRecord, initHistory, removeAllHistory, histroyRecords }) => {
  let [count, setCount] = useState(0);
 
  const onClick = () => {
    count = count * 2;
    setCount(count);
  }
  
  return (
    <div>
      <h1>Number is {count}</h1>
      <button onClick={() => onClick()} >
        Click me!!
      </button>
    </div>
  );
}