import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";

type Props = {};

const DataCard = (props: Props) => {
  return (
    <div>
      <Card className="mx-auto max-w-lg">
        <Flex alignItems="start">
          <div>
            <Text>Sales</Text>
            <Metric>$ 12,699</Metric>
          </div>
          <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">68% ($ 149,940)</Text>
          <Text>$ 220,500</Text>
        </Flex>
        <ProgressBar value={15.9} className="mt-2" />
      </Card>
    </div>
  );
};

export default DataCard;
