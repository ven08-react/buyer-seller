'use client'
import { useStore } from "../store/useStore";
import Header from '../component/Header/index'
import Footer from '../component/Footer/index'
import { GreetingService } from "@/modules/greetings/GreetingService";
import styles from './styles.module.scss'
import { useState } from "react";
//import classNames from 'classnames'
export default function Home() {
  const [name, setname] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')
  const count = useStore((state) => state.count)
  //const increase = useStore((state) =>state.increase)
  const sample = new GreetingService();

  const handleClick = () =>{
    setGreeting(sample.getGreeting(name || 'world' ))
  }
  return (
    <>
    <Header/>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <h1 onClick={increase}>Hello World</h1>
      {count} */}
          <input type="text" onChange={(e) =>{setname(e.target.value)}} placeholder="add value"/>
    <button onClick={handleClick} style={{cursor: 'pointer'}}>Save</button>
    {greeting}
    </div>
    <Footer/>
    </>
  );
}
