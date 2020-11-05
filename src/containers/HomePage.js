import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Calculator from "../components/Calculator";
import {
	removeAllHistory,
	addHistoryRecord,
  initHistory
} from '../actions/init';

const HomePage = () => {
  const histroyRecords = useSelector(({ init }) => init.histroyRecords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initHistory())
  }, [dispatch])

  return (
    <div className="home">
      <Calculator 
        removeHistory={() => dispatch(removeAllHistory())}
        addRecord={(item) => dispatch(addHistoryRecord(item))}
        records={histroyRecords}
      />
    </div>
  )
}

export default HomePage;