'use client';
import React, { useEffect } from 'react'

function handleClick() {
  var mainDashboard = document.getElementById("main-dashboard")!;
  var rightSideBar = document.getElementById("right-side-bar")!;
  if (rightSideBar.style.display === "none"){
    rightSideBar.style.display = "block";
    mainDashboard.style.display = "none";
  }else{
    rightSideBar.style.display = "none";
    mainDashboard.style.display = "block";
  }
}

function BarsIcon() {
  useEffect(() => {
    const onResize = () => {
      var mainDashboard = document.getElementById("main-dashboard")!;
      var rightSideBar = document.getElementById("right-side-bar")!;
      if(window.innerWidth > 900){
        rightSideBar.style.display = "block";
        mainDashboard.style.display = "block";
      }else{
        rightSideBar.style.display = "none";
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <svg className="min-[900px]:hidden" width='30' height='30' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={() => handleClick()}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
  )
}

export default BarsIcon