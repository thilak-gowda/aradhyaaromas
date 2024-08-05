"use client"

import Link from "next/link";
import jobCatContent from "../../data/job-catergories";
import { useDispatch , useSelector} from "react-redux";
import {LoginUserData,ProfileUserData,fetchBannerData} from "../../features/reducer/thunks"
import { useEffect } from "react";

const JobCategorie1 = () => {
  const dispatch = useDispatch();
  const { data, loading: bannerLoading, error: bannerError } = useSelector(
    (state) => state.data
  );
  console.log(data,"afreen")

  useEffect(()=>{  
    dispatch(fetchBannerData());
  
  },[])
  return (
    <>
          {data && data.Categorys && data.Categorys.map((item) => (
    <div className="category-block col-lg-4 col-md-6 col-sm-12" key={item._id}>
      <div className="inner-box">
        <div className="content">
          <span className={`icon ${item.description}`}></span>
          <h4>
            <Link href={`/shop/${item._id}`}>{item.name}</Link>
          </h4>
          <p>({item.jobNumber} open positions)</p>
        </div>
      </div>
    </div>
  ))}

    </>
  );
};

export default JobCategorie1;
