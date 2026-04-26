import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  const { pathname, search, hash, state } = useLocation();

  const [sp, setSp] = useSearchParams();
  //sp.get("sort"); // ?sort=price&name=......

  return (
    <>
      <h3>
        This is the About Us Page UserID: {id} Path: {pathname} QP:
        {sp.get("country")}
      </h3>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        consectetur minima qui cum ex temporibus reiciendis omnis nesciunt
        explicabo accusantium molestiae veniam nisi assumenda, libero quos id
        earum nihil maiores!
      </div>
    </>
  );
}
