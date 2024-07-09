"use client";
import React, { useState } from "react";
import { TabsDemo } from "./_components/TabsDemo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { userDate } from "@/utils/schema";
import moment from "moment";
import { eq, sql } from "drizzle-orm";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    uid: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await db.insert(userDate).values({
      name: formData.name,
      email: formData.email,
      uid: formData.uid,
      createdAt: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    setLoading(false);
  };

  const handelGetUser = async () => {
    const result = await db.select().from(userDate); //it will default select all users field
    console.log(result);
  };

  const handelGetUserPartial = async () => {
    const result = await db
      .select({
        field1: userDate.name,
        field2: userDate.email,
      })
      .from(userDate);
    const { field1, field2 } = result[0];
    console.log(field1);
  };

  const handelGetUserFilter = async () => {
    const result = await db.select().from(userDate).where(eq(userDate.id, 6));
    console.log(result.map((data) => data.name));
  };

  const handelGetUserAggregation = async () => {
    const result = await db
      .select({
        age: userDate.id,
        count: sql `cast(count(${userDate.id}) as int)`,
      })
      .from(userDate)
      .groupBy(userDate.id);
      console.log(result)
  };

  const handelUpdate = async ()=>{
    await db.update(userDate).set({email:'jaypatil1111@gmail.com'}).where(eq(userDate.name, 'jay patil'))
    console.log("user updated successfully")
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-40 ">
      {/* <TabsDemo/> */}
      <div className="bg-slate-200 p-5 flex items-center flex-col gap-5 rounded-xl">
        <p>Enter your Name</p>
        <Input name="name" value={formData.name} onChange={handleChange} />
        <p>Enter your Email</p>
        <Input name="email" value={formData.email} onChange={handleChange} />
        <p>Enter your UID</p>
        <Input name="uid" value={formData.uid} onChange={handleChange} />
        <Button onClick={handleSubmit} disable={loading}>
          {loading ? "Inserting Data" : "Insert Data"}
        </Button>
        <Button onClick={handelGetUser}>Get User Details</Button>
        <Button onClick={handelGetUserPartial}>Partial User Details</Button>
        <Button onClick={handelGetUserFilter}>Filter User Details</Button>
        <Button onClick={handelGetUserAggregation}>
          Aggregate User Details
        </Button>
        <Button onClick={handelUpdate}>Update User</Button>
      </div>
    </div>
  );
}

export default Home;
