import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
// import User from "../../../assets/user.svg";

import Logo from "../Logo/Logo";
import useSignIn from "../../pages/SignIn/hooks/useSignIn";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

type LayoutProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  childrenClassName,
}) => {
  const { logOut } = useActions();
  const { isAuth } = useTypedSelector((state) => state.auth);

  // const [isAuth, setIsAuth] = useState<boolean>(isAuth);

  return (
    <div className="flex">

      <div className="flex w-full">
        <div className="flex md:flex-row md:fixed justify-center items-center w-full shadow-lg shadow-gray-100 py-4 px-8 bg-blue-400 z-30">
          <div className="flex items-center justify-around w-full gap-4">
            <div className="text-2xl font-bold w-2/12">Розклад</div>

            <Logo />
            
            <div className={`w-2/12 ${isAuth ? "hidden" : "flex"}`}>
              <Button to={`/sign-in`}>Увійти</Button>
            </div>
            <div className={`w-2/12 ${isAuth ? "flex" : "hidden"}`}>
              <Button onClick={logOut} to={`/sign-in`}>Вийти</Button>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col w-full h-full pt-56 px-14 gap-4 mb-28 ${childrenClassName}`}
        >
          {children}
        </div>
      </div>

    </div>
  );
};

export default Layout;
