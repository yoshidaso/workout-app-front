'use client'

import {useRouter} from "next/navigation";

export default function Detail() {
  const today = new Date();
  const router = useRouter()

  const handleAddMenu = () => {
    router.push('/menuList')
  }
  return (
    <>
      <h2>{today.toLocaleDateString()}</h2>
      <button>
        履歴から選択
      </button>
      <button onClick={handleAddMenu}>
        メニューから選択
      </button>
    </>
  )
}
