import { fetchData } from "../../lib/axiosData";
import { useState, useEffect } from "react";
import { addHeaderData } from "./header-slice";
import NavBar from "./NavBar.component";
import { useSelector, useDispatch } from "react-redux";

const NavBarContainer = () => {
  const data = useSelector((state)=>state.header);
  const dispatch = useDispatch();
  //const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page_items,setPage_items] = useState([]);
  useEffect(() => {
    fetchData("MitchAPI/header-api.php").then((resp) => {
      //setData(resp);
      //console.log(resp);
      setIsLoading(false);
      dispatch(addHeaderData(resp.data))
    });
  }, [dispatch]);
  //const data = useSelector((state) => state.header);
  console.log(data ? data.headerData : "s");
  return (
    <>
      {/* <ul>{data?.data.map(item=><li>
            {item.title}
    </li>)}</ul> */}
      {isLoading && (
        <div>
          <h2>Loading brdo....</h2>
        </div>
      )}
      {!isLoading && data!==undefined && <>
      <img src={data.headerData.main_level_item[0].mega_group.image} width="100" height="100"></img>
      <NavBar nav_items={data.headerData.main_level_item} />
      </>}
    </>
  );
};
export default NavBarContainer;