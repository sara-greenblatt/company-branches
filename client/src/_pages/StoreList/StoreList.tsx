import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../../_services/_actions";
import './StoreList.scss';
import { RootState } from "../../_services/_reducers";
import { ListOptions, FilteredList } from "../../_components";

function StoreList() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state?.list);

  useEffect(() => {
    // Call API on the load to fetch external data
    dispatch(listActions.getBranchesList());
  }, [dispatch]);

  return (
    <div className="container">
      {!list.loading ?
        (<>
          <ListOptions stores={list.stores || []} />
          <FilteredList stores={list.stores || []} />
        </>
        )
        : <h5>Loading...</h5>}
    </div>
  );
}

export { StoreList };
