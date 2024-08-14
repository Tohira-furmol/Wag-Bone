import React from 'react'

import Card from '../../components/Card';


const About = () => {
  return (
    <main>
      <section className='bg-rose-200 flex justify-around pt-[50px] dark:bg-slate-700'>
        <div className="left ">
          <h1 className='text-[35px] text-[#0b0b45] w-[280px] font-mono font-bold dark:text-[#fff]'>Tasty food for hungry hounds</h1>
          <button className='bg-[#0b0b45] text-[#fff] px-[30px] py-[10px] rounded-md mt-[15px]'>Shop the food</button>
        </div>
        <div className="right">
          <img className='w-[300px]' src="src/img/images-dog(1).png" alt="" />
        </div>
      </section>

      <section className='bg-[#0b0b45] text-[#fff] text-center p-[50px] dark:bg-slate-800 dark:text-[#fff]'>
        <div className='flex justify-center leading-[1.2]'>
          <h1 className='text-[30px] font-mono font-bold w-[500px]'>FIND THE PERFECT FOOD TO FEED YOUR HUNGRY HOUND</h1>
        </div>
        <div className='flex gap-4 text-[#0b0b45] justify-center py-[20px] '>
          <select className='outline-0 bg-[#0b0b45] text-white border-[1px] rounded-sm p-[2px] border-gray-300 w-[250px] dark:bg-slate-800 dark:text-[#fff]' name="" id="">
            <option className='' value="Spicy food">Spicy food</option>
            <option className='' value="Spicy food">foods</option>
            <option className='' value="Spicy food">food only for dog</option>
          </select>
          <select className='outline-0 bg-[#0b0b45] text-white border-[1px] rounded-sm p-[2px] border-gray-300 w-[250px] dark:bg-slate-800 dark:text-[#fff]' name="" id="">
            <option className='' value="Country">Countrys</option>
            <option className='' value="Country">Tajikistan</option>
            <option className='' value="Country">Tashkent</option>
            <option className='' value="Country">Russia</option>
          </select>
        </div>
        <button className='bg-[#fff] text-[#0b0b45] font-mono font-bold px-[15px]'>NEXT</button>
      </section>

      <section className='bg-[#58a2c2b8] flex p-[80px] dark:bg-slate-700 dark:text-[#fff]'>
        <div className="left">
          <img src="src/img/food.png" alt="" />
        </div>
        <div className="right flex flex-col gap-3 justify-center">
          <h1 className='text-[40px] tracking-[10px] text-end font-bold text-[#0b0b45]'>DRY FOOD</h1>
          <p className='text-[13px] text-end font-sans w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, distinctio. Delectus excepturi, modi expedita temporibus officia voluptatibus? Deserunt dolores enim ex quae accusamus temporibus dolorum dignissimos!</p>
          <p className='text-[13px] text-end font-sans w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. elit. Provident, distinctio. Delectus excepturi,</p>
          <div className='flex justify-end pt-4'>
            <button className='bg-[#0b0b45] text-[#fff] px-[45px] py-[8px] rounded-[5px]'>DRY FOOD</button>
          </div>
        </div>
      </section>

      <section className='bg-indigo-400 flex p-[50px] dark:bg-slate-800 dark:text-[#fff]'>
        <div className="left flex flex-col gap-4 w-[500px]">
          <h1 className='text-[40px] leading-10'>WHY YOU'LL LOVE US...</h1>
          <p className='text-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos obcaecati provident dolor sequi neque.</p>
        </div>
        <div className='flex'>
          <div>
            <img className='w-[80%]' src="src/img/circle(3).png" alt="" />
          </div>
          <div>
            <img className='w-[80%]' src="src/img/circle(3).png" alt="" />
          </div>
          <div>
            <img className='w-[80%]' src="src/img/circle(3).png" alt="" />
          </div>
        </div>
      </section>

      <section className='bg-pink-200 flex dark:bg-slate-700 dark:text-[#fff] py-[50px]'>
        <div className="left w-[50%] m-auto p-[80px] flex flex-col gap-3">
          <h1 className='text-[30px] font-sans text-[#0b0b45] font-bold'>Scrummy Salmon</h1>
          <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, beatae? Quo, pariatur. Ad iure provident vero ullam! Adipisci deleniti quas sint voluptatum, aspernatur voluptas, incidunt provident iure, ipsa aliquid exercitationem!</p>
          <p className='text-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sint, saepe amet, eum minima!</p>
          <div className='pt-[10px] flex gap-3'>
            <button className='border-[1px] bg-[#0b0b45] text-[#fff] px-[15px] py-[5px] text-[13px] rounded-[5px]'>SALMON</button>
            <button className='border-[1px] bg-[#0b0b45] text-[#fff] px-[15px] py-[5px] text-[13px] rounded-[5px]'>ABOUT</button>
          </div>
        </div>
        <div className="right w-[50%] flex justify-center">
          <img src="src/img/img.png" alt="" />
        </div>
      </section>

      <section className='px-[50px] py-[100px] bg-[#f7e1f7] dark:bg-slate-800 dark:text-[#fff]'>
        <h1 className='text-[40px] text-center font-bold text-[#0b0b45] dark:text-[gray]'>ON THE BLOG</h1>
        <div className='flex text-center pt-[30px]'>
          <Card img={"src/img/images.jpg"} p={"I love my paet"} h1={"Lorem ipsum dolor sit amet"} button={"know more"}></Card>
          <Card img={"src/img/images.jpg"} p={"I love my paet"} h1={"Lorem ipsum dolor sit amet"} button={"know more"}></Card>
          <Card img={"src/img/images.jpg"} p={"I love my paet"} h1={"Lorem ipsum dolor sit amet"} button={"know more"}></Card>
        </div>

      </section>

    </main>
  );
}

export default About