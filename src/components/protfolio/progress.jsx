import React from 'react';
import { Progress, Row, Col } from 'antd'; // Import Row and Col for layout from antd

// Progress component
const ProgressComponent = () => {
  return (
    <div>
      <h1>Progress Demo</h1>
      <Row gutter={16}> {/* Row with gutter for spacing between items */}
        <Col span={24}> {/* Full width for the progress bars */}
          <Progress percent={30} size="small" />
        </Col>
        <Col span={24}>
          <Progress percent={50} size="small" status="active" />
        </Col>
        <Col span={24}>
          <Progress percent={70} size="small" status="exception" />
        </Col>
        <Col span={24}>
          <Progress percent={100} size="small" />
        </Col>
      </Row>
    </div>
  );
};

export default ProgressComponent;
