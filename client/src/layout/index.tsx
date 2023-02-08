// import node_modules
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// import styles
import { LayoutComponentStyle } from "./index.style";

// store & redux
import { GetMe } from "../redux/slices/user.slice";

interface Props {
  children: React.ReactNode
}

const LayoutComponent: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      GetMe({
        next: () => navigate("/dashboard"),
      })
    );
  }, [dispatch, navigate])

  return (
    <LayoutComponentStyle>
      {props.children}
    </LayoutComponentStyle>
  );
};

export default LayoutComponent;
