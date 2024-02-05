import React from "react";
import chek from "../../../../../src/assets/img/check.png"
import no from "../../../../../src/assets/img/noCheck.png"

const pricieDataFree = {
    text1:"Access to selected free courses.",
    text2:"Limited course materials and resources. ",
    text3:"Basic community support. ",
    text4:"No certification upon completion. ",
    text5:"Ad-supported platform. ",
    text6:"AcAccess to exclusive Pro Plan community forums.cess ",
    text7:"Early access to new courses and updates. ",
}

function PricingCard(props) {
  return (
    <div className="p-10 w-full text-center bg-background">
      <p className="font-500 text-[22px] rounded-6 bg-secondary2 w-full py-12" >FerrPlan</p>
      <p className="text-name20 font-500 py-50">
        <strong className="font-600 text-number80">0$</strong> /month
      </p>
      <ul className="p-30  bg-white rounded-6">
      <p className="font-500 text-[20px] ">Available Features</p>
        <li className="flex justify-start items-center pl-50 gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text1}</p>
        </li>
        <li className="flex justify-start items-center pl-50 gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text2}</p>
        </li>
        <li className="flex justify-start items-center pl-50  gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text3}</p>
        </li>
        <li className="flex justify-start items-center pl-50  gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text4}</p>
        </li>
        <li className="flex justify-start items-center pl-50 gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={no} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text5}</p>
        </li>
        <li className="flex justify-start items-center pl-50  gap-10 mt-16 border border-text rounded-6 py-10 ">
          {" "}
          <img src={no} alt="" /> <p className="font-400 text-text18 ">{pricieDataFree.text6}</p>
        </li>
       
      </ul>
      <p className="font-600 text-text18 bg-primary text-white rounded-6 py-20 mt-5 hover:shadow-xl">Get Started</p>
    </div>
  );
}

export default PricingCard;
