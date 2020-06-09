import * as React from "react";
import {
  View,
  Input,
  Button,
  Text,
  ScrollView,
  removeStorage,
  reLaunch,
} from "remax/wechat";
import { usePageEvent } from "remax/macro";
import { loginOut } from "../../api/login";
import { useNativeEffect } from "remax";
import { Event, EventTarget, EventCurrentTarget, TouchEvent } from "remax/one";
import ToBeReveived from "./ToBeReceived/ToBeReceived";
import PendingQuotaion from "./PendingQuotation/PendingQuotation";
import InProduction from "./InProduction/InProduction";
import Shipped from "./Shipped/Shippend";
import Completed from "./Completed/Completed";

import "./index.css";
// ts 高级属性 https://segmentfault.com/a/1190000019449565?utm_source=tag-newest
type InputEvent = Pick<TouchEvent, "currentTarget" | "target" | "type">;
export const TodoContext = React.createContext({});

export default () => {
  const [navBar, setNavBar] = React.useState<Array<string>>([
    "全部",
    "待接收",
    "待报价",
    "生产中",
    "已发货",
    "已完成",
  ]);
  const [TabCur, setTabCur] = React.useState<number | string>(0);
  const [scrollLeft, setScrollLeft] = React.useState<number>(0);
  const [userType, setUsertype] = React.useState<string>("");

  const handleMove = (e: any) => {
    console.log(e);

    setTabCur(e.currentTarget.dataset.id);
    setScrollLeft((e.currentTarget.dataset.id - 1) * 60);
  };
  const searchIcon = (e: any) => {};

  return (
    <TodoContext.Provider value={{ userType: userType }}>
      <View className="cu-bar bg-white search fixed">
        <View className="search-form round">
          <Text className="cuIcon-search"></Text>
          <Input
            type="text"
            placeholder="搜索icon"
            confirm-type="search"
            onInput={(e) => searchIcon(e)}
          />
        </View>
      </View>

      <ScrollView
        scrollX
        scrollLeft={scrollLeft}
        className="bg-white nav margin-top-nav"
      >
        <View className="flex text-center">
          {navBar.map((item, index) => (
            <View
              className={`cu-item flex-sub ${
                index == TabCur ? "text-orange cur" : ""
              }`}
              key={index}
              data-id={index}
              onClick={(e) => handleMove(e)}
            >
              {item}
            </View>
          ))}
        </View>
      </ScrollView>

      <View className=" padding bg-white margin-top">
        {TabCur == 0 && <View>AAA</View>}
        {TabCur == 1 && <ToBeReveived />}
        {TabCur == 2 && <PendingQuotaion />}
        {TabCur == 3 && <InProduction />}
        {TabCur == 4 && <Shipped />}
        {TabCur == 5 && <Completed />}
      </View>
    </TodoContext.Provider>
  );
};
