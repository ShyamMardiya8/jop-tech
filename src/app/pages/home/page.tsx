"use client"
import { COMPANY_HIRE_DETAILS } from "@/app/features/reducer/Slice";
import { AppDispatch } from "@/app/lib/store/store";
import React, { useEffect, useState } from "react";
import Input from '@/app/component/Input'
import { useDispatch } from "react-redux";
import Phone from "@/app/component/Phone";
import FileInput from "@/app/component/FileInput";
import SkillInput from "@/app/component/SkillInput";

const page = () => {
  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch<AppDispatch>();
  const fetchData = async () => {
    const response = await dispatch(COMPANY_HIRE_DETAILS());
    console.log(response, 'res')
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
console.log(data, "data")
  return (
    <>
    <p>testing</p>
    <Phone />
    <FileInput />
    <SkillInput />
    </>
  )
};

export default page;
