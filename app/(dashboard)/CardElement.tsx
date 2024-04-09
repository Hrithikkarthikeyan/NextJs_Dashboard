import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import Image from 'next/image';

function CardElement() {
  return (
    <div className="flex flex-wrap">
      <div className="basis-96">
        <Card className="max-w-[400px] min-w-[200px] mt-5">
          <CardBody>
            <p>Collection</p>
            <div className='text-xl font-semibold'>$19,249.81</div>
            <Image
              alt="some graph"
              height={200}
              src="/some_graph.png"
              width={400}
            />
          </CardBody>
        </Card>
      </div>
      <div style={{flexBasis: "310px"}}>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <div className="basis-36">
              <Card className="max-w-[150px] mt-5" style={{backgroundColor: "green", color: "white"}}>
                <CardBody>
                  <p>Collection</p>
                  <div className='text-xl font-semibold'>$19,249.81</div>
                  <div>Yearly Turnover</div>
                </CardBody>
              </Card>
            </div>
            <div className="basis-36">
              <Card className="max-w-[150px] mt-5" style={{backgroundColor: "orange"}}>
                <CardBody>
                  <p>Collection</p>
                  <div className='text-xl font-semibold'>$19,249.81</div>
                  <div>Last</div>
                  <div>Month</div>
                </CardBody>
              </Card>
            </div>
          </div>
          <div>
            <Card className="max-w-[300px] mt-1">
              <CardBody>
                <p>Collection</p>
                <div className='text-xl font-semibold'>$19,249.81</div>
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
      <div className="basis-80">
        <div className="flex flex-col">
          <div>
            <Card className="max-w-[250px] mt-5">
              <CardBody>
                <p>Collection</p>
                <div className='text-xl font-semibold'>$19,249.81</div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="max-w-[250px] mt-1">
              <CardBody>
                <p>Collection</p>
                <div className='text-xl font-semibold'>$19,249.81</div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="max-w-[250px] mt-1">
              <CardBody>
                <p>Collection</p>
                <div className='text-xl font-semibold'>$19,249.81</div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardElement