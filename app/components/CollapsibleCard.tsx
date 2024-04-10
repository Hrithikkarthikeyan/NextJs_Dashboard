'use client';
import React, { useState } from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import arrowIcon from './ui/arrowIcon';
import ImageIcon from '@/app/(dashboard)/ImageIcon';

function CollapsibleCard() {
  const defaultContent = 
  <div className="flex flex-row">
    <div className="basis-1/3 text-center">
      <small>Dealers</small>
      <div>2M</div>
    </div>
    <div className="basis-1/3 text-center">
      <small>Property</small>
      <div>485</div>
    </div>
    <div className="basis-1/3 text-center">
      <small>Brokers</small>
      <div>729</div>
    </div>
  </div>
  return (
    <Accordion variant="splitted" defaultExpandedKeys={["accordion2"]}>
      <AccordionItem className="!bg-teal-700" key="accordion1" indicator={arrowIcon} title={<div className="flex flex-row"><div><ImageIcon /></div><div className="ml-3"><div className="text-xs text-white">Open Cases</div> <div className='text-lg text-white'>342</div></div></div>}>
        {defaultContent}
      </AccordionItem>
      <AccordionItem className="!bg-yellow-400" key="accordion2" indicator={arrowIcon} title={<div className="flex flex-row"><div><ImageIcon /></div><div className="ml-3"><div className="text-xs">Open Cases</div> <div className='text-lg'>342</div></div></div>}>
        {defaultContent}
      </AccordionItem>
      <AccordionItem className="!bg-teal-700" key="accordion3" indicator={arrowIcon} title={<div className="flex flex-row"><div><ImageIcon /></div><div className="ml-3"><div className="text-xs text-white">Open Cases</div> <div className='text-lg text-white'>342</div></div></div>}>
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

export default CollapsibleCard