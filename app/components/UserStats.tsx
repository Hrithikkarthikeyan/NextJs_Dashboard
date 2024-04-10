import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function UserStats() {
  return (
    <Card className="py-4 bg-teal-700 text-white">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Hrithik Karthikeyan</h4>
        <small className=" mt-3">Software Developer</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Card className="py-4 mt-4 bg-teal-900 text-white">
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
        </Card>
      </CardBody>
    </Card>
  )
}

export default UserStats