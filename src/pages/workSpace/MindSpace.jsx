import React, { useEffect } from 'react';
import SpaceWrap from '../../components/container/SpaceWrap';
import Frame from '../../components/container/Frame';
import Viewport from '../../components/container/Viewport';
import Square from '../../components/modules/Square';
import ToolBox from '../../components/tools/ToolBox';
import { useDispatch, useSelector } from 'react-redux';
import { getNode } from '../../redux/slice/spaceSlice';

const MindSpace = () => {
  const dispatch = useDispatch();
  const projectId = useSelector(state => state.space.projectId);
  useEffect(() => {
    dispatch(getNode(projectId)).then(res => console.log(res));
  }, []);

  let nodeObject = useSelector(state => state.space.node);
  console.log(nodeObject);
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
                nodeId={data.nodeId}
                projectId={data.projectId}
              />
            ))}
        </Viewport>
      </Frame>
      <ToolBox projectId={projectId} />
    </SpaceWrap>
  );
};

export default MindSpace;
