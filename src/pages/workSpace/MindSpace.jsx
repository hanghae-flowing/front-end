import React from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import ToolBox from '../../components/tools/ToolBox';
import { useSelector } from 'react-redux';

const MindSpace = () => {
  let nodeObject = useSelector(state => state.node.node);
  console.log(nodeObject);
  // let nodeObject = [
  //   {
  //     width: '100px',
  //     height: '50px',
  //     radius: '10px',
  //     color: '#e3e3e3',
  //     fontColor: '#222222',
  //     fontSize: '16px',
  //     text: '테스트1',
  //     xval: '500',
  //     yval: '300',
  //   },
  //   {
  //     width: '100px',
  //     height: '50px',
  //     radius: '10px',
  //     color: '#e3e3e3',
  //     fontColor: '#222222',
  //     fontSize: '16px',
  //     text: '테스트2',
  //     xval: '100',
  //     yval: '300',
  //   },
  // ];
  return (
    <SpaceWrap>
      <Frame>
        <Viewport>
          {nodeObject &&
            nodeObject.map((data, index) => (
              <Square
                key={index}
                width={data.width}
                height={data.height}
                radius={data.radius}
                color={data.color}
                fontColor={data.fontColor}
                fontSize={data.fontSize}
                text={data.text}
                xval={data.xval}
                yval={data.yval}
              />
            ))}
        </Viewport>
      </Frame>
      <ToolBox />
    </SpaceWrap>
  );
};

export default MindSpace;
