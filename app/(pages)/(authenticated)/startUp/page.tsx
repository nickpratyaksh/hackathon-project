import { StartUp } from "@/lib/shared/types";
import { useAuth } from "@/store/auth";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const { user } = useAuth();
  const [startUpDetails, setStartUpDetails] = useState<StartUp>();

  async function getStartUpDetails() {
    const res = await axios.get(`/api/startUp`);
    setStartUpDetails(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getStartUpDetails();
  }, []);

  return <div>page</div>;
}
