import React from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import ToolBox from '../../components/tools/ToolBox';
import { useSelector } from 'react-redux';

const MindSpace = () => {
  let nodeObject = useSelector(state => state.node.projectId);
  // let nodeObject = [
  //   {
  //     node_id: 1,
  //     width: '100px',
  //     height: '50px',
  //     radius: '10px',
  //     color: '#e3e3e3',
  //     fontColor: '#222222',
  //     fontSize: '16px',
  //     text: '테스트1',
  //     x_val: '500',
  //     y_val: '300',
  //   },
  //   {
  //     node_id: 2,
  //     width: '100px',
  //     height: '50px',
  //     radius: '10px',
  //     color: '#e3e3e3',
  //     fontColor: '#222222',
  //     fontSize: '16px',
  //     text: '테스트2',
  //     x_val: '100',
  //     y_val: '300',
  //   },
  // ];
  console.log(nodeObject);
  return (
    <SpaceWrap>
      <Frame>
        <Viewport>
          {nodeObject &&
            nodeObject.map((data, index) => (
              <Square
                key={index}
                node_id={data.node_id}
                width={data.width}
                height={data.height}
                radius={data.radius}
                color={data.color}
                fontColor={data.fontColor}
                fontSize={data.fontSize}
                text={data.text}
                x_val={data.x_val}
                y_val={data.y_val}
              />
            ))}
        </Viewport>
      </Frame>
      <ToolBox />
    </SpaceWrap>
  );
};

export default MindSpace;
