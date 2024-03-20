/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import classNames from "classnames"; // if condition ile class isimlerini değiştirmek için kullanılır.
import { MainMennu } from "../../../../utils/consts";
import Button from "../../../../Components/button";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {MainMennu.map((menu, index) => (
        <NavLink to={menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full transition-colors inline-flex items-center gap-5  group-hover:bg-[#eff3f41a]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {isActive && menu.icon.active}
                {!isActive && menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More></More>
      <New></New>
    </nav>
  );
}
