import { useEffect } from "react";

import { supabase } from "../../db/supabase";

export const Test = () => {
  const fetchUser = async () => {
    const { data: users, error } = await supabase.from("users").select("*");
    console.log(users);
  };

  const insertUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name: "신지환",
          phone: "010-3218-8447",
          address: "서울시 금천구 금하로 23라길 31 현대아파트 111호",
          remark: "test",
        },
      ])
      .select();

    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <button onClick={insertUser}>testInsertUser</button>
    </>
  );
};
