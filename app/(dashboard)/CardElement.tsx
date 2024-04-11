import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import Image from 'next/image';
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import SmoothLineGraph from "./SmoothLineGraph";

function CardElement() {
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-wrap">
          <div className="basis-96">
            <Card className="max-w-[400px] max-[600px]:max-w-[300px] max-[600px]:h-[240px] min-w-[200px] h-[275px]">
              <CardBody>
                <p>Collection</p>
                <div className='text-2xl font-semibold'>$19,249.81</div>
                <LineGraph />
              </CardBody>
            </Card>
          </div>
          <div style={{flexBasis: "310px"}}>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="basis-36 max-[600px]:w-[150px]">
                  <Card className="max-w-[150px] max-[600px]:w-[150px]" style={{backgroundColor: "green", color: "white"}}>
                    <CardBody>
                      <div className="text-right">Profit</div>
                      <div className='text-2xl font-semibold mt-2'>$29M</div>
                      <div>Yearly Turnover</div>
                    </CardBody>
                  </Card>
                </div>
                <div className="basis-36 max-[600px]:w-[150px]">
                  <Card className="max-w-[150px] max-[600px]:w-[150px]" style={{backgroundColor: "orange"}}>
                    <CardBody>
                      <div className="text-right">Loss</div>
                      <div className='text-2xl font-semibold mt-2'>$1.4M</div>
                      <div>Last</div>
                      <div>Month</div>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div>
                <Card className="max-w-[303px] mt-1">
                  <CardBody>
                    <div className='text-sm'>Canada</div>
                    <div className='text-lg font-semibold'>Top Saled Agent</div>
                      <div className="flex -space-x-2 rtl:space-x-reverse mt-2">
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-green-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">HK</a>
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-yellow-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">ST</a>
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-red-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">GF</a>
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-orange-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">PL</a>
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-blue-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">CP</a>
                        <a className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+9</a>
                      </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
          </div>
          <div className="basis-60 max-[600px]:w-[300px]">
            <div className="flex flex-col">
              <div>
                <Card className="max-[600px]:w-[300px] h-[88px]">
                  <CardBody>
                    <div className='text-base'>Today&apos;s Received</div>
                    <div className='text-xl font-semibold mt-1'>$2890</div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-[600px]:w-[300px] mt-1 h-[88px]">
                  <CardBody>
                  <div className='text-base'>Today&apos;s Received</div>
                    <div className='text-xl font-semibold mt-1'>$82,890</div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-[600px]:w-[300px] mt-1 h-[88px]">
                  <CardBody>
                  <div className='text-base'>Cash at Bank</div>
                    <div className='text-xl font-semibold mt-1'>$3M</div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap"> */}
          <div>
            <Card className="max-w-[300px] min-w-[200px] mt-1 h-[260px]">
              <CardBody>
                <div className="font-semibold">Data Analysis</div>
                <div className='text-xs'>July 01 - July 31</div>
                <SmoothLineGraph />
              </CardBody>
            </Card>
          </div>
          <div className="flex-auto">
            <Card className="flex-auto max-w-[670px] max-[600px]:w-[300px] min-w-[200px] mt-1  ml-1">
              <CardBody>
              <div>Monthly Invoices</div>
                <div className='text-3xl font-semibold'>$24,000</div>
                <BarGraph />
              </CardBody>
            </Card>
          </div>
          {/* </div> */}
        </div>
        
      </div>
    </div>
  )
}

export default CardElement