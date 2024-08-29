'use client'

import {useRouter} from "next/navigation";
import {trainingBtn} from "@/app/styles/trainingButton.css";

const TrainingButton = () => {
  const router = useRouter();

  const handleNewMenuClick = () => {
    router.push('/detail');
  }

  return (
    <button className={trainingBtn} onClick={handleNewMenuClick}>
      <h2>トレーニングを追加</h2>
    </button>
  )
}

export default TrainingButton;
