import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Appstate{
    count: number
    increase: () => void
}


export const useStore = create<Appstate>()(
    persist(
        (set) => 
        
        ({
            count: 1,
            increase: () => set((state) => ({count: state.count + 1}))
        }),
        {
            name: "redux"
        }
    )
)

